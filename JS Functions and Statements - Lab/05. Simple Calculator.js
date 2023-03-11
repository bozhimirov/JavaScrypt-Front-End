function simpleCalculator(first, second, declaration) {
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const divide = (a, b) => a / b;
    const multiply = (a, b) => a * b;
    const operationMap = {
        add,
        subtract,
        divide,
        multiply
    }

    return operationMap[declaration](first, second);
}