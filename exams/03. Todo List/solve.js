function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/tasks/";
  const inputField = document.getElementById("title");
  const addBtn = document.getElementById("add-button");
  const loadBtn = document.getElementById("load-button");

  const ul = document.getElementById("todo-list");

  loadBtn.addEventListener("click", loadItemsHandler);

  addBtn.addEventListener("click", addTaskHandler);

  function addTaskHandler(event) {
    event.preventDefault();
    const name = inputField.value;
    const httpHeaders = {
      method: "POST",
      body: JSON.stringify({ name }),
    };

    ul.innerHTML = "";
    fetch(BASE_URL, httpHeaders)
      .then((res) => res.json())
      .then(() => {
        loadItemsHandler(event);
        inputField.value = "";
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function loadItemsHandler(event) {
    event.preventDefault();
    fetch(`${BASE_URL}`)
      .then((response) => response.json())
      .then((data) => {
        const dataItems = Object.values(data);
        ul.innerHTML = "";
        for (const item of dataItems) {
          const li = document.createElement("li");
          const span = document.createElement("span");
          span.textContent = item.name;
          li.setAttribute("id", item._id);
          li.appendChild(span);
          attachButtons(li, "Edit");
          ul.appendChild(li);
        }
      })

      .catch(() => {
        console.error();
      });
  }

  function removeTaskHandler(event) {
    const parent = this.parentElement;
    const id = parent.id;
    const httpHeaders = {
      method: "DELETE",
    };
    fetch(`${BASE_URL}${id}`, httpHeaders)
      .then((res) => res.json())
      .then(() => {
        loadItemsHandler(event);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function editTaskHandler(event) {
    const parent = this.parentElement;
    const id = parent.id;
    const textTask = parent.firstChild.textContent;
    parent.removeChild(parent.firstChild);
    parent.removeChild(parent.firstChild);
    parent.removeChild(parent.firstChild);
    const inputEditField = document.createElement("input");
    inputEditField.value = textTask;
    parent.appendChild(inputEditField);
    attachButtons(parent, "Submit");
  }

  function submitTaskHandler(event) {
    const parent = this.parentElement;
    const id = parent.id;
    const name = document.getElementsByTagName("input")[1].value;
    // console.log(inputName.value);
    const httpHeaders = {
      method: "PATCH",
      body: JSON.stringify({ name }),
    };
    fetch(`${BASE_URL}${id}`, httpHeaders)
      .then((res) => res.json())
      .then(() => {
        loadItemsHandler(event);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function attachButtons(parent, text) {
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", removeTaskHandler);
    if (text === "Edit") {
      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.addEventListener("click", editTaskHandler);
      parent.appendChild(removeBtn);
      parent.appendChild(editBtn);
    } else {
      const submitBtn = document.createElement("button");
      submitBtn.textContent = "Submit";
      submitBtn.addEventListener("click", submitTaskHandler);
      parent.appendChild(removeBtn);
      parent.appendChild(submitBtn);
    }
  }
}

attachEvents();
