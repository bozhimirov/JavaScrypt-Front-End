function create(words) {
  const content = document.getElementById("content");

  for (const word of words) {
    const newDiv = document.createElement("div");
    const newP = document.createElement("p");
    newP.textContent = word;
    newP.style.display = "none";

    newDiv.addEventListener("click", () => {
      newP.style.display = "block";
    });

    newDiv.appendChild(newP);
    content.appendChild(newDiv);
  }

  // function clickEventHandler(event) {
  //    const div = event.currentTarget;
  //    const p = div.children[0];
  //    p.style.display = 'block';
  // }
}
