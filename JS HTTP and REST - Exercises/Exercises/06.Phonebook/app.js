function attachEvents() {
  const phonebookContainer = document.getElementById("phonebook");
  const personInput = document.getElementById("person");
  const phoneInput = document.getElementById("phone");
  const loadBtn = document.getElementById("btnLoad");
  const BASE_URL = "http://localhost:3030/jsonstore/phonebook/";
  const createBtn = document.getElementById("btnCreate");

  loadBtn.addEventListener("click", loadPhonebookHandler);
  createBtn.addEventListener("click", createPhonebookHandler);

  async function loadPhonebookHandler() {
    phonebookContainer.innerHTML = "";
    try {
      const phonebookRes = await fetch(BASE_URL);
      let phonebookData = await phonebookRes.json();
      phonebookData = Object.values(phonebookData);
      for (const { phone, person, _id } of phonebookData) {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.id = _id;
        button.addEventListener("click", deletePhonebookHandler);
        button.textContent = "Delete";
        li.innerHTML = `${person}: ${phone}`;
        li.appendChild(button);
        phonebookContainer.appendChild(li);
      }
    } catch (err) {
      console.log(err);
    }
  }

  function createPhonebookHandler() {
    const person = personInput.value;
    const phone = phoneInput.value;
    const httpHeaders = {
      method: "POST",
      body: JSON.stringify({ person, phone }),
    };

    fetch(BASE_URL, httpHeaders)
      .then((res) => res.json())
      .then(() => {
        loadPhonebookHandler();
        personInput.value = "";
        phoneInput.value = "";
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async function deletePhonebookHandler() {
    const id = this.id;
    const httpHeaders = {
      method: "DELETE",
    };

    fetch(`${BASE_URL}${id}`, httpHeaders)
      .then((res) => res.json())
      .then(loadPhonebookHandler)
      .catch((err) => console.error(err));
  }
}

attachEvents();
