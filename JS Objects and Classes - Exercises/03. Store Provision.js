function storeProvision(stock, orderedProducts) {
  let combined = [...stock, ...orderedProducts];
  let store = combined.reduce((data, currentValue, index) => {
    if (index % 2 === 0) {
      if (!data.hasOwnProperty(currentValue)) {
        data[currentValue] = 0;
      }
    } else {
      let value = Number(currentValue);
      let prevProp = combined[index - 1];
      data[prevProp] += value;
    }
    return data;
  }, {});
  for (const key in store) {
    console.log(`${key} -> ${store[key]}`);
  }
}

// function storeProvision(stock, orderedProducts) {
//   let combined = [...stock, ...orderedProducts];
//   let store = {};

//   for (let i = 0; i < combined.length - 1; i += 2) {
//     if (!store.hasOwnProperty(combined[i])) {
//       store[combined[i]] = Number(combined[i + 1]);
//     } else {
//       store[combined[i]] += Number(combined[i + 1]);
//     }
//   }
//   for (const key in store) {
//     console.log(`${key} -> ${store[key]}`);
//   }
// }

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
