function solve(input) {
  let products = input.shift().split("!");

  for (let i = 0; i < input.length; i++) {
    let [cmd, items, newItem] = input[i].split(" ");
    if (cmd === "Urgent") {
      if (!products.includes(items)) {
        products.unshift(items);
      }
    } else if (cmd === "Unnecessary") {
      if (products.includes(items)) {
        products.splice(products.indexOf(items), 1);
      }
    } else if (cmd === "Rearrange") {
      if (products.includes(items)) {
        products.splice(products.indexOf(items), 1);
        products.push(items);
      }
    } else if (cmd === "Correct") {
      if (products.includes(items)) {
        products.splice(products.indexOf(items), 1, newItem);
      }
    } else if (cmd === "Go") {
      break;
    }
  }

  console.log(products.join(", "));
}

input = [
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
];

solve(input);
