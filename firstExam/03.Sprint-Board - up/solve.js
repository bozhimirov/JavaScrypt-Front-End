function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/tasks/";
  const loadBtn = document.getElementById("load-board-btn");
  const titleInput = document.getElementById("title");
  const textInput = document.getElementById("description");
  const createBtn = document.getElementById("create-task-btn");

  const todoUl = document.querySelector("#todo-section .task-list");
  const inProgressUl = document.querySelector(
    "#in-progress-section .task-list"
  );
  const codeReviewUl = document.querySelector(
    "#code-review-section .task-list"
  );
  const doneUl = document.querySelector("#done-section .task-list");

  loadBtn.addEventListener("click", loadItemsHandler);
  createBtn.addEventListener("click", addItems);

  function loadItemsHandler(event) {
    if (event) {
      event.preventDefault();
    }
    todoUl.innerHTML = "";
    inProgressUl.innerHTML = "";
    codeReviewUl.innerHTML = "";
    doneUl.innerHTML = "";
    let itemColumn = {
      ToDo: todoUl,
      InProgress: inProgressUl,
      CodeReview: codeReviewUl,
      Done: doneUl,
    };
    let btnContent = {
      ToDo: "Move to In Progress",
      InProgress: "Move to Code Review",
      CodeReview: "Move to Done",
      Done: "Close",
    };
    let btnAction = {
      ToDo: "InProgress",
      InProgress: "CodeReview",
      CodeReview: "Done",
      Done: "remove",
    };
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        let apiDataValues = Object.values(data);
        for (let item in apiDataValues) {
          const itemId = apiDataValues[item]._id;
          const itemTitle = apiDataValues[item].title;
          const itemDesc = apiDataValues[item].description;
          const itemStatus = apiDataValues[item].status.split(" ").join("");
          const li = document.createElement("li");
          const h3 = document.createElement("h3");
          const p = document.createElement("p");
          const btn = document.createElement("button");
          btn.setAttribute("id", btnAction[itemStatus]);
          btn.innerHTML = btnContent[itemStatus];
          h3.textContent = itemTitle;

          p.textContent = itemDesc;

          li.setAttribute("id", itemId);
          li.setAttribute("class", "task");
          h3.appendChild(p);
          h3.appendChild(btn);
          li.appendChild(h3);
          if (itemStatus !== "remove") {
            itemColumn[itemStatus].appendChild(li);
          }
          btn.addEventListener("click", btnActionHandler);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function btnActionHandler() {
    const thisElId = this.id;
    const taskReference = this.parentElement.parentElement;
    const parentElId = taskReference.id;
    console.log(thisElId);
    if (thisElId === "InProgress") {
      const headers = {
        method: "PATCH",
        body: JSON.stringify({ status: "In Progress" }),
      };
      fetch(`${BASE_URL}${parentElId}`, headers)
        .then((res) => res.json())
        .then(() => {
          loadItemsHandler();
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (thisElId === "CodeReview") {
      const headers = {
        method: "PATCH",
        body: JSON.stringify({ status: "Code Review" }),
      };
      fetch(`${BASE_URL}${parentElId}`, headers)
        .then((res) => res.json())
        .then(() => {
          loadItemsHandler();
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (thisElId === "Done") {
      const headers = {
        method: "PATCH",
        body: JSON.stringify({ status: thisElId }),
      };
      fetch(`${BASE_URL}${parentElId}`, headers)
        .then((res) => res.json())
        .then(() => {
          loadItemsHandler();
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      const httpHeaders = {
        method: "DELETE",
      };
      fetch(`${BASE_URL}${parentElId}`, httpHeaders)
        .then((res) => res.json())
        .then(() => {
          loadItemsHandler();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  function addItems(event) {
    if (event) {
      event.preventDefault();
    }
    const headers = {
      method: "POST",
      body: JSON.stringify({
        title: titleInput.value,
        description: textInput.value,
        status: "ToDo",
      }),
    };

    fetch(BASE_URL, headers).then(() => loadItemsHandler(event));
    titleInput.value = "";
    textInput.value = "";
  }
}

attachEvents();
