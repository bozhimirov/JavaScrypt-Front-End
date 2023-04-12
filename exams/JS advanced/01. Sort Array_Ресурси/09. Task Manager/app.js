function solve() {
  const inputDOMSelectors = {
    task: document.getElementById("task"),
    description: document.getElementById("description"),
    date: document.getElementById("date"),
  };

  const otherDOMSelectors = {
    addBtn: document.getElementById("add"),
    openSection: document.querySelector(
      "body > main > div > section:nth-child(2) > div:nth-child(2)"
    ),

    InProgressSection: document.getElementById("in-progress"),
    completeSection: document.querySelector(
      "body > main > div > section:nth-child(4) > div:nth-child(2)"
    ),
  };

  otherDOMSelectors.addBtn.addEventListener("click", addTaskHandler);

  function addTaskHandler(event) {
    if (event) {
      event.preventDefault();
    }

    const allFieldsHaveValue = Object.values(inputDOMSelectors).every(
      (input) => input.value !== ""
    );

    if (!allFieldsHaveValue) {
      console.log("EMPTY FIELD");
      return;
    }

    const { task, description, date } = inputDOMSelectors;
    const article = createElement("article", otherDOMSelectors.openSection);
    createElement("h3", article, task.value);
    createElement("p", article, `Description: ${description.value}`);
    createElement("p", article, `Due Date: ${date.value}`, null, null, null);

    const div = createElement("div", article, null, ["flex"]);
    const startBtn = createElement("button", div, "Start", ["green"]);
    const delBtn = createElement("button", div, "Delete", ["red"]);
    startBtn.addEventListener("click", moveTaskHandler);
    delBtn.addEventListener("click", deleteTaskHandler);
    clearAllInputs();
  }

  function moveTaskHandler() {
    const taskReference = this.parentElement.parentElement;
    otherDOMSelectors.InProgressSection.appendChild(taskReference);
    const startBtnToRemove = document.querySelector(
      "#in-progress > article > div > button.green"
    );
    const btnParentContainer = startBtnToRemove.parentElement;
    startBtnToRemove.remove();
    const finishBtn = createElement("button", btnParentContainer, "Finish", [
      "orange",
    ]);
    finishBtn.addEventListener("click", finishTaskHandler);
  }
  function finishTaskHandler() {
    const buttonsContainer = this.parentElement;
    const taskReference = this.parentElement.parentElement;
    otherDOMSelectors.completeSection.appendChild(taskReference);
    buttonsContainer.remove();
  }
  function deleteTaskHandler() {
    const parentEl = this.parentElement.parentElement;
    parentEl.remove();
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
