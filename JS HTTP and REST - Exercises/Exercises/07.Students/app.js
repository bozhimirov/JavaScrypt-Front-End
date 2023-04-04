function attachEvents() {
  const tableBody = document.querySelector("#results > tbody");
  const inputs = document.querySelectorAll(".inputs input");
  const submitBtn = document.getElementById("submit");
  const BASE_URL = "http://localhost:3030/jsonstore/collections/students";

  submitBtn.addEventListener("click", formHandler);

  tableBody.innerHTML = "";
  fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => {
      Object.values(data).forEach((student) => {
        const { firstName, lastName, facultyNumber, grade } = student;
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${facultyNumber}</td>
        <td>${grade}</td>`;
        tableBody.appendChild(tableRow);
      });
    })
    .catch((err) => {
      alert(err);
    });

  async function formHandler(e) {
    e.preventDefault();
    const firstName = inputs[0].value;
    const lastName = inputs[1].value;
    const facultyNumber = inputs[2].value;
    const grade = inputs[3].value;
    const httpHeaders = {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, facultyNumber, grade }),
    };

    await fetch(BASE_URL, httpHeaders);
    firstName.value = "";
    lastName.value = "";
    facultyNumber.value = "";
    grade.value = "";
    attachEvents();
  }
}

attachEvents();
