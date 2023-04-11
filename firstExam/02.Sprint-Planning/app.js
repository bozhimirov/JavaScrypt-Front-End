window.addEventListener("load", solve);

function solve() {
  const inputDOMSelectors = {
    title: document.getElementById("title"),
    description: document.getElementById("description"),
    label: document.getElementById("label"),
    points: document.getElementById("points"),
    assignee: document.getElementById("assignee"),
  };

  const otherDOMSelectors = {
    form: document.getElementById("create-task-form"),
    createTaskBtn: document.getElementById("create-task-btn"),
    deleteTaskBtn: document.getElementById("delete-task-btn"),

    totalPointsField: document.getElementById("total-sprint-points"),
    completeSection: document.getElementById("tasks-section"),
  };
  const idNum = 0;
  createTaskBtn.addEventListener("click", createTaskHandler);

  function createTaskHandler() {
    const { title, description, label, points, assignee } = inputDOMSelectors;
    const article = createElement(
      "article",
      otherDOMSelectors.completeSection,
      null,
      "task-card",
      `task-${idNum}`
    );
    idNum++;
    createElement("div", article, title.value);
    createElement("p", article, `Description: ${description.value}`);
    createElement("p", article, `Due Date: ${date.value}`, null, null, null);

    const div = createElement("div", article, null, ["flex"]);
    const startBtn = createElement("button", div, "Start", ["green"]);
    const delBtn = createElement("button", div, "Delete", ["red"]);
    startBtn.addEventListener("click", moveTaskHandler);
    delBtn.addEventListener("click", deleteTaskHandler);
    clearAllInputs();
  }

  function clearAllInputs() {
    Object.values(inputDOMSelectors).forEach((input) => {
      input.value = "";
    });
  }

  function createElement(
    type,
    parentNode,
    content,
    classes,
    id,
    attributes,
    useInnerHTML
  ) {
    const htmlElement = document.createElement(type);

    if (content && useInnerHTML) {
      htmlElement.innerHTML = content;
    } else {
      if (content && type !== "input") {
        htmlElement.textContent = content;
      }

      if (content && type !== "input") {
        htmlElement.value = content;
      }
    }

    if (classes && classes.length > 0) {
      htmlElement.classList.add(...classes);
    }

    if (id) {
      htmlElement.id = id;
    }

    // {src: 'link', href: 'http' }
    if (attributes) {
      for (const key in attributes) {
        htmlElement[key] = attributes[key];
      }
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    return htmlElement;
  }
}
