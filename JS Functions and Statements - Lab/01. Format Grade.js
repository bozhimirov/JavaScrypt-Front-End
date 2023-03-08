function formatGrades(grade) {
    if (grade >= 5.50) {
        return `Excellent (${formatDecimal(grade)})`;
    } else if (grade < 5.50 && grade >= 4.5) {
        return `Very good (${formatDecimal(grade)})`; 
    } else if (grade < 4.50 && grade >= 3.5) {
        return`Good (${formatDecimal(grade)})`;
    } else if (grade , 3.50 && grade >= 3) {
        return `Poor (${formatDecimal(grade)})`;
    }

    return `Fail (2)`

    function formatDecimal(grade) {
        return grade.toFixed(2);
    }
}

console.log(
    formatGrades(2.99)
);

console.log(
    formatGrades(4.5)
)