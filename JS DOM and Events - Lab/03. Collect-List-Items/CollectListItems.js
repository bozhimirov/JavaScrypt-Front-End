function extractText() {
  const liElements = Array.from(document.querySelectorAll("#items > li"));
  const result = document.getElementById("result");
  liElements.forEach((li) => {
    result.textContent += li.textContent + "\n";
  });
}
