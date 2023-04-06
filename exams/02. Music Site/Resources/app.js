window.addEventListener("load", solve);

function solve() {
  const songState = {
    genre: null,
    name: null,
    author: null,
    date: null,
  };

  const inputDOMSelectors = {
    genre: document.getElementById("genre"),
    name: document.getElementById("name"),
    author: document.getElementById("author"),
    date: document.getElementById("date"),
  };

  const otherDOMSelectors = {
    addBtn: document.getElementById("add-btn"),
    collectionSongs: document.getElementsByClassName("all-hits-container")[0],
    savedSongs: document.getElementsByClassName("saved-container")[0],
    likes: document.querySelector(".likes > p"),
  };

  otherDOMSelectors.addBtn.addEventListener("click", addSongHandler);

  function addSongHandler(event) {
    event.preventDefault();
    const allFieldsHaveValue = Object.values(inputDOMSelectors).every(
      (input) => input.value !== ""
    );

    if (!allFieldsHaveValue) {
      console.log("EMPTY FIELD");
      return;
    }

    const { genre, name, author, date } = inputDOMSelectors;

    const div = createElement("div", otherDOMSelectors.collectionSongs, null, [
      "hits-info",
    ]);
    createElement("img", div, null, null, null, {
      src: "./static/img/img.png",
    });
    createElement("h2", div, `Genre: ${genre.value}`);
    createElement("h2", div, `Name: ${name.value}`);
    createElement("h2", div, `Author: ${author.value}`);
    createElement("h3", div, `Date: ${date.value}`);
    const saveBtn = createElement("button", div, "Save song", ["save-btn"]);
    saveBtn.removeAttribute("value");
    const likeBtn = createElement("button", div, "Like song", ["like-btn"]);
    likeBtn.removeAttribute("value");
    const delBtn = createElement("button", div, "Delete", ["delete-btn"]);
    delBtn.removeAttribute("value");
    clearAllInputs();

    likeBtn.addEventListener("click", likeHandler);
    delBtn.addEventListener("click", delHandler);
    saveBtn.addEventListener("click", saveHandler);
  }

  function saveHandler() {
    const songReference = this.parentNode;
    otherDOMSelectors.savedSongs.appendChild(songReference);
    document.querySelector("#saved-hits .save-btn").remove();
    document.querySelector("#saved-hits .like-btn").remove();
  }
  function delHandler() {
    this.parentNode.remove();
  }

  function likeHandler() {
    // event.currentTarget = this
    this.setAttribute("disabled", true);
    let likeContainer = otherDOMSelectors.likes.textContent.split(":");

    console.log(likeContainer);
    let number = Number(likeContainer[1]);

    console.log(number);
    let newNumber = number + 1;

    console.log(newNumber);
    let newLikeContainer = `${likeContainer[0]}: ${newNumber}`;
    console.log(newLikeContainer);

    otherDOMSelectors.likes.textContent = `${newLikeContainer}`;
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
