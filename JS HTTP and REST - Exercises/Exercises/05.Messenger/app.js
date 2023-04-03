function attachEvents() {
  const messagesField = document.getElementById("messages");
  const nameInput = document.getElementsByTagName("input")[0];
  const messageInput = document.getElementsByTagName("input")[1];
  const BASE_URL = "http://localhost:3030/jsonstore/messenger";
  const sendBtn = document.getElementById("submit");
  const refreshBtn = document.getElementById("refresh");
  sendBtn.addEventListener("click", sendMsgHandler);
  refreshBtn.addEventListener("click", loadMessageHandler);
  function sendMsgHandler() {
    const author = nameInput.value;
    console.log(author);
    const content = messageInput.value;
    console.log(content);
    const httpHeaders = {
      method: "POST",
      body: JSON.stringify({ author, content }),
    };
    fetch(BASE_URL, httpHeaders)
      .then((res) => res.json())
      .then(() => {
        loadMessageHandler();
        nameInput.value = "";
        messageInput.value = "";
      })
      .catch((err) => {
        console.error(err);
      });
  }
  async function loadMessageHandler() {
    try {
      const messageRes = await fetch(BASE_URL);
      let messageData = await messageRes.json();
      let messageArray = [];
      Object.values(messageData).forEach((messageData) => {
        messageArray.push(`${messageData.author}: ${messageData.content}`);
      });
      messagesField.textContent = messageArray.join("\n");
    } catch (err) {
      console.log(err);
    }
  }
}
attachEvents();
