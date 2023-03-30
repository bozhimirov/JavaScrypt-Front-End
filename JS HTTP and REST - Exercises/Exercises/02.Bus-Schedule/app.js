function solve() {
  const textField = document.querySelector(".info");
  const departBtn = document.getElementById("depart");
  const arriveBtn = document.getElementById("arrive");
  const BASE_URL = "http://localhost:3030/jsonstore/bus/schedule/";
  let stopName;
  let nextStop = "depot";
  departBtn.addEventListener("click", depart);
  arriveBtn.addEventListener("click", arrive);

  function depart() {
    fetch(`${BASE_URL}${nextStop}`)
      .then((response) => response.json())
      .then((busInfo) => {
        const { name, next } = busInfo;
        stopName = name;
        nextStop = next;
        textField.textContent = `Next stop ${stopName}`;

        departBtn.disabled = true;
        arriveBtn.disabled = false;
      })
      .catch(() => {
        textField.textContent = "Error";
        departBtn.disabled = true;
        arriveBtn.disabled = true;
      });
  }

  async function arrive() {
    textField.textContent = `Arriving at ${stopName}`;

    departBtn.disabled = false;
    arriveBtn.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
