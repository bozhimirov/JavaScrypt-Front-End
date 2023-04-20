window.addEventListener("load", solve);

function solve() {
  const inputDOMSelectors = {
    title: document.getElementById("task-title"),
    category: document.getElementById("task-category"),
    content: document.getElementById("task-content"),
  };
  let taskStorage = {};

  const otherDOMSelectors = {
    form: document.querySelector("#newPost > .newPostContent"),
    publishBtn: document.getElementById("publish-btn"),
    reviewUl: document.getElementById("review-list"),
    publishUl: document.getElementById("published-list"),
  };

  let idNum = 0;
  otherDOMSelectors.publishBtn.addEventListener("click", publishHandler);

  function publishHandler() {
    const allFieldsHaveValue = Object.values(inputDOMSelectors).every(
      (input) => input.value !== ""
    );

    if (!allFieldsHaveValue) {
      console.log("EMPTY FIELD");
      return;
    }
    const { title, category, content } = inputDOMSelectors;
    idNum++;
    taskStorage[idNum] = {
      title: title.value,
      category: category.value,
      content: content.value,
    };
    const li = createElement(
      "li",
      otherDOMSelectors.reviewUl,
      null,
      ["rpost"],
      idNum
    );
    const article = createElement("article", li);
    createElement("h4", article, title.value);
    createElement("p", article, `Category: ${category.value}`);
    createElement("p", article, `Content: ${content.value}`);
    const editBtn = createElement("button", li, "Edit", ["action-btn", "edit"]);
    editBtn.removeAttribute("value");
    const postBtn = createElement("button", li, "Post", ["action-btn", "post"]);
    postBtn.removeAttribute("value");
    editBtn.addEventListener("click", editHandler);
    postBtn.addEventListener("click", postHandler);

    clearAllInputs();
  }
  function postHandler() {
    const reference = this.parentNode;
    otherDOMSelectors.publishUl.appendChild(reference);
    document.querySelector("#published-list .edit").remove();
    document.querySelector("#published-list .post").remove();
  }

  function editHandler() {
    let thisID = this.parentNode.id;
    thisEl = this.parentNode;
    inputDOMSelectors.title.value = taskStorage[thisID].title;
    inputDOMSelectors.category.value = taskStorage[thisID].category;
    inputDOMSelectors.content.value = taskStorage[thisID].content;
    thisEl.remove();
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
