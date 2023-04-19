function lockedProfile() {
  const BASE_URL = "http://localhost:3030/jsonstore/advanced/profiles";
  const mainContainer = document.getElementById("main");
  mainContainer.innerHTML = "";
  fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => {
      let num = 1;
      Object.values(data).forEach((user) => {
        const profile = document.createElement("div");
        profile.classList.add("profile");
        const { username, email, age } = user;
        profile.innerHTML = `
                    <img src="./iconProfile2.png" class="userIcon" />
                    <label>Lock</label>
                    <input type="radio" name="user${num}Locked" value="lock" checked>
                    <label>Unlock</label>
                    <input type="radio" name="user${num}Locked" value="unlock"><br>
                    <hr>
                    <label>Username</label>
                    <input type="text" name="user1Username" value="${username}" disabled readonly />
                    <div class="user1Username hiddenInfo">
                        <hr>
                        <label>Email:</label>
                        <input type="email" name="user1Email" value="${email}" disabled readonly />
                        <label>Age:</label>
                        <input type="text" name="user1Age" value="${age}" disabled readonly />
                    </div>
                    <button>Show more</button>`;

        mainContainer.appendChild(profile);
        num++;
      });
      const buttons = Array.from(document.getElementsByTagName("button"));
      buttons.forEach((btn) => {
        btn.addEventListener("click", toogleAction);
      });
    })
    .catch((err) => {
      console.error(err);
    });

  function toogleAction() {
    const currentProfile = this.parentElement;
    const unlockRadioBtn = currentProfile.children[4];

    let hiddenInputs = Array.from(
      currentProfile.querySelectorAll(".hiddenInfo > input")
    );
    let hiddenLabels = Array.from(
      currentProfile.querySelectorAll(".hiddenInfo > label")
    );

    if (unlockRadioBtn.checked) {
      if (this.textContent === "Show more") {
        hiddenInputs.forEach((element) => (element.style.display = "block"));
        hiddenLabels.forEach((element) => (element.style.display = "block"));
        this.textContent = "Hide it";
      } else {
        hiddenInputs.forEach((element) => (element.style.display = "none"));
        hiddenLabels.forEach((element) => (element.style.display = "none"));
        this.textContent = "Show more";
      }
    }
  }
}
