function calculatePrice(item, quantity) {
    let price
    const coffee = quantity => quantity * 1.50;
    const water = quantity => quantity * 1.00;
    const coke = quantity => quantity * 1.40;
    const snacks = quantity => quantity * 2.00;
    const mapper = {
        coffee,
        water, 
        coke, 
        snacks
    }

    return mapper[item](quantity).toFixed(2)
}

console.log(
    calculatePrice("water", 5)
);
console.log(calculatePrice("coffee", 2)
);