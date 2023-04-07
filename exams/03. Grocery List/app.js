function solve() {
  const BASE_URL = "http://localhost:3030/jsonstore/grocery/";
  const productInput = document.getElementById("product");
  const countInput = document.getElementById("count");
  const priceInput = document.getElementById("price");
  const addBtn = document.getElementById("add-product");
  const updateBtn = document.getElementById("update-product");
  const loadBtn = document.getElementById("load-product");
  const tableBody = document.getElementById("tbody");

  let dataItems = [];
  let currentItem = [];

  loadBtn.addEventListener("click", loadHandler);
  addBtn.addEventListener("click", addHandler);
  updateBtn.addEventListener("click", updatePostHandler);

  function addHandler(e) {
    e.preventDefault();
    const newProduct = productInput.value;
    const newCount = countInput.value;
    const newPrice = priceInput.value;
    const httpHeaders = {
      method: "POST",
      body: JSON.stringify({
        product: newProduct,
        count: newCount,
        price: newPrice,
      }),
    };

    fetch(BASE_URL, httpHeaders)
      .then((res) => res.json())
      .then(() => {
        loadHandler(e);
        productInput.value = "";
        countInput.value = "";
        priceInput.value = "";
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function loadHandler(e) {
    e.preventDefault();
    fetch(`${BASE_URL}`)
      .then((response) => response.json())
      .then((data) => {
        dataItems = Object.values(data);

        tableBody.innerHTML = "";

        for (const item of dataItems) {
          const itemId = item._id;
          let tr = document.createElement("tr");

          tr.setAttribute("id", item._id);
          let td1 = document.createElement("td");
          td1.setAttribute("class", "name");
          td1.innerText = item.product;
          let td2 = document.createElement("td");
          td2.setAttribute("class", "count-product");
          td2.innerText = item.count;
          let td3 = document.createElement("td");
          td3.setAttribute("class", "product-price");
          td3.innerText = item.price;
          let td4 = document.createElement("td");
          td4.setAttribute("class", "btn");
          td4.setAttribute("id", item._id);
          let tableUpdateBtn = document.createElement("button");
          tableUpdateBtn.setAttribute("class", "update");
          tableUpdateBtn.textContent = "Update";
          tableUpdateBtn.addEventListener("click", updateHandler);
          let tableDeleteBtn = document.createElement("button");
          tableDeleteBtn.setAttribute("class", "delete");
          tableDeleteBtn.textContent = "Delete";
          tableDeleteBtn.addEventListener("click", deleteHandler);
          td4.appendChild(tableUpdateBtn);
          td4.appendChild(tableDeleteBtn);
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
          tableBody.appendChild(tr);
        }
      })

      .catch(() => {
        console.error();
      });
  }

  function deleteHandler(e) {
    const parent = this.parentElement.parentElement;
    const id = parent.id;
    const httpHeaders = {
      method: "DELETE",
    };
    fetch(`${BASE_URL}${id}`, httpHeaders)
      .then((res) => res.json())
      .then(() => {
        loadHandler(e);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function updateHandler() {
    const parentId = this.parentElement.id;
    currentItem = dataItems.find((item) => item._id === parentId);

    productInput.value = currentItem.product;
    countInput.value = currentItem.count;
    priceInput.value = currentItem.price;
    addBtn.setAttribute("disabled", true);
    updateBtn.removeAttribute("disabled");
  }

  function updatePostHandler(e) {
    e.preventDefault();
    const id = currentItem._id;
    const product = productInput.value;
    const count = countInput.value;
    const price = priceInput.value;
    const httpHeaders = {
      method: "PATCH",
      body: JSON.stringify({ product, count, price }),
    };

    fetch(`${BASE_URL}${id}`, httpHeaders)
      .then(() => {
        loadHandler(e);
        addBtn.removeAttribute("disabled");
        updateBtn.setAttribute("disabled", true);
        productInput.value = "";
        countInput.value = "";
        priceInput.value = "";
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

solve();
