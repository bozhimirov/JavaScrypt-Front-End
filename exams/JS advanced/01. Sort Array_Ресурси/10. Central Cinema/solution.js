function solve() {
  const inputDOMSelectors = {
    name: document.querySelector("#container > input[type=text]:nth-child(1)"),
    hall: document.querySelector("#container > input[type=text]:nth-child(2)"),
    ticketPrice: document.querySelector(
      "#container > input[type=text]:nth-child(3)"
    ),
  };

  const otherDOMSelectors = {
    onScreenBtn: document.querySelector("#container > button"),
    clearBtn: document.querySelector("#archive > button"),
    moviesSection: document.querySelector("#movies > ul"),
    archiveSection: document.querySelector("#archive > ul"),
  };
  otherDOMSelectors.onScreenBtn.addEventListener("click", OnScreenHandler);
  otherDOMSelectors.clearBtn.addEventListener("click", clearAllArchive);
  let num = 0;

  function clearAllArchive() {
    this.parentElement.innerHTML = "";
  }
  function OnScreenHandler(event) {
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

    const { name, hall, ticketPrice } = inputDOMSelectors;
    const li = createElement("li", otherDOMSelectors.moviesSection);
    createElement("span", li, name.value);
    createElement("strong", li, `Hall: ${hall.value}`);
    let id = num + 1;
    const div = createElement("div", li, null);
    const price = Number(ticketPrice.value);
    createElement("strong", div, `${price.toFixed(2)}`);

    const inputEl = createElement("input", div, null, id);
    num += 1;
    inputEl.placeholder = "Tickets Sold";
    const archiveBtn = createElement("button", div, "Archive", id);
    archiveBtn.removeAttribute("value");
    archiveBtn.addEventListener("click", archiveMovie);
    clearAllInputs();
  }
  function archiveMovie() {
    const thisPE = this.parentNode;
    const priceTicket = Number(thisPE.childNodes[0].innerHTML);
    const priceTicketStr = thisPE.childNodes[0];
    const inputField = thisPE.childNodes[1];
    const inputData = Number(inputField.value);
    const ticketNumbers = Number(inputField.value);
    if (typeof inputData !== "number") {
      console.log("Not a number");
      return;
    }

    const totalSum = priceTicket * ticketNumbers;
    const nameMovie = thisPE.parentNode.childNodes[0];
    const li = createElement("li", otherDOMSelectors.archiveSection);
    createElement("span", li, nameMovie.innerHTML);
    createElement("strong", li, `Total amount: ${totalSum.toFixed(2)}`);
    const deleteBtn = createElement("button", li, "Delete");
    thisPE.parentNode.remove();
    deleteBtn.addEventListener("click", deleteFromArchiveOneElement);
  }

  function deleteFromArchiveOneElement() {
    const parentElement = this.parentNode;
    parentElement.remove();
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
