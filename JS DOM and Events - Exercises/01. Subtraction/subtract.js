function subtract() {
  const firstNum = Number(document.getElementById("firstNumber").value);
  const secondNum = Number(document.getElementById("secondNumber").value);
  const result = document.getElementById("result");
  result.textContent = firstNum - secondNum;
}
