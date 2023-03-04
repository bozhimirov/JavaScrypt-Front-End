function fruitPrice(fruits, weightGrams, pricePerKilo){
    let weight = weightGrams / 1000
    let price = pricePerKilo * weight
    console.log(`I need $${price.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruits}.`)
}

fruitPrice('orange', 2500, 1.80)