function focused() {
  const inputs = Array.from(document.getElementsByTagName("input"));
  console.log(inputs);

  inputs.forEach((el) => {
    el.addEventListener("focus", focusEvent);
    el.addEventListener("blur", blurEvent);
  });

  function focusEvent(event) {
    const currentElement = event.target;
    const parentDiv = currentElement.parentElement;
    parentDiv.classList.add("focused");
  }
  function blurEvent(event) {
    const currentElement = event.target;
    const parentDiv = currentElement.parentElement;
    if (parentDiv.classList.contains("focused")) {
      parentDiv.classList.remove("focused");
    }
  }
}
