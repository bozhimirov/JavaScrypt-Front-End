function parseEmployees(input) {
  Object.entries(
    input.reduce((data, employee) => {
      data[employee] = employee.length;
      return data;
    }, {})
  ).forEach(([employee, length]) => {
    console.log(`Name: ${employee} -- Personal Number: ${length}`);
  });
}

// function parseEmployees(input) {
//   let employees = input.reduce((data, employee) => {
//     data[employee] = employee.length;
//     return data;
//   }, {});

//   for (const key in employees) {
//     console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
//   }
// }

parseEmployees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
