function deleteByEmail() {
  const result = document.getElementById("result");
  const input = document.querySelector('input[name="email"]');
  const evenTds = Array.from(document.querySelectorAll("td:nth-child(2)"));
  let emailValue = input.value;
  let foundElement = evenTds.find((td) => td.textContent === emailValue);
  if (foundElement) {
    foundElement.parentElement.remove();
    result.textContent = "Deleted.";
    input.value = "";
  } else {
    result.textContent = "Not found.";
  }
}
