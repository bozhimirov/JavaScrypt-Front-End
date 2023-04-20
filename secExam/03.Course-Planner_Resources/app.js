function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/tasks/";
  const loadBtn = document.getElementById("load-course");
  const addBtn = document.getElementById("add-course");
  const editBtn = document.getElementById("edit-course");
  const divContainer = document.getElementById("list");

  const inputDOMSelectors = {
    title: document.getElementById("course-name"),
    description: document.getElementById("description"),
    type: document.getElementById("course-type"),
    teacher: document.getElementById("teacher-name"),
  };

  loadBtn.addEventListener("click", loadItemsHandler);
  addBtn.addEventListener("click", addItems);
  editBtn.addEventListener("click", editBtnEdit);

  function clearAllInputs() {
    Object.values(inputDOMSelectors).forEach((input) => {
      input.value = "";
    });
  }

  function editBtnEdit(event) {
    if (event) {
      event.preventDefault();
    }
    const headers = {
      method: "PUT",
      body: JSON.stringify({
        title: inputDOMSelectors.title.value,
        description: inputDOMSelectors.description.value,
        type: inputDOMSelectors.type.value,
        teacher: inputDOMSelectors.teacher.value,
        _id: editBtn.className,
      }),
    };
    elId = this.className;
    fetch(`${BASE_URL}${elId}`, headers).then(() => loadItemsHandler(event));
    editBtn.setAttribute("disabled", true);
    addBtn.removeAttribute("disabled");
    clearAllInputs();
  }

  function addItems(event) {
    if (event) {
      event.preventDefault();
    }
    if (
      inputDOMSelectors.type.value === "Long" ||
      inputDOMSelectors.type.value === "Medium" ||
      inputDOMSelectors.type.value === "Short"
    ) {
      const headers = {
        method: "POST",
        body: JSON.stringify({
          title: inputDOMSelectors.title.value,
          description: inputDOMSelectors.description.value,
          type: inputDOMSelectors.type.value,
          teacher: inputDOMSelectors.teacher.value,
        }),
      };
      fetch(BASE_URL, headers).then(() => loadItemsHandler(event));
      clearAllInputs();
    } else {
      inputDOMSelectors.type.value = "";
    }
  }

  function loadItemsHandler(event) {
    if (event) {
      event.preventDefault();
    }
    divContainer.innerHTML = "";
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        let dataValues = Object.values(data);
        for (const item of dataValues) {
          let idemId = item._id;
          let div = createElements("div", null, divContainer, idemId, [
            "container",
          ]);

          createElements("h2", item.title, div);
          createElements("h3", item.teacher, div);
          createElements("h3", item.type, div);
          createElements("h4", item.description, div);
          let editButtonCourse = createElements(
            "button",
            "Edit Course",
            div,
            null,
            ["edit-btn"]
          );
          let finishButtonCourse = createElements(
            "button",
            "Finish Course",
            div,
            null,
            ["finish-btn"]
          );
          finishButtonCourse.addEventListener("click", finishHandler);
          editButtonCourse.addEventListener("click", editHandler);
        }
      })

      .catch((error) => {
        console.error(error);
      });
  }

  function editHandler() {
    const elId = this.parentNode.id;
    const elParent = this.parentNode;
    const children = Array.from(elParent.children);
    elParent.remove();
    inputDOMSelectors.title.value = children[0].textContent;
    inputDOMSelectors.type.value = children[2].textContent;
    inputDOMSelectors.description.value = children[3].textContent;
    inputDOMSelectors.teacher.value = children[1].textContent;
    addBtn.setAttribute("disabled", true);
    editBtn.removeAttribute("disabled");
    editBtn.className = elId;
  }

  function finishHandler() {
    elId = this.parentNode.id;
    const httpHeaders = {
      method: "DELETE",
    };
    fetch(`${BASE_URL}${elId}`, httpHeaders).then(() => loadItemsHandler());
  }

  function createElements(type, content, parentNode, id, classes, attributes) {
    const htmlElement = document.createElement(type);
    if (content && type !== "input") {
      htmlElement.textContent = content;
    }
    if (content && type === "input") {
      htmlElement.value = content;
    }
    if (id) {
      htmlElement.id = id;
    }
    // ['list', 'item',...]
    if (classes) {
      htmlElement.classList.add(...classes);
    }
    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }
    //{ src: 'link to image', href: 'link to site', type: 'checkbox'}
    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }
    return htmlElement;
  }
}

attachEvents();
