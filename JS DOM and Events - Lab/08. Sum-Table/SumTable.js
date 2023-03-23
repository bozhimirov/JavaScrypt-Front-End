function sumTable() {
  const allPrices = Array.from(
    document.querySelectorAll("tbody tr:not(:last-child) td:nth-child(2)")
  );
  console.log(allPrices);
  const sumTable = document.getElementById("sum");
  let result = 0;
  allPrices.forEach((el) => {
    newEl = Number(el.innerText);
    result += newEl;
  });
  sumTable.innerHTML = result.toFixed(2);
}
