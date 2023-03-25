function lockedProfile() {
  const buttons = Array.from(document.getElementsByTagName("button"));
  buttons.forEach((button) => {
    button.addEventListener("click", toggleInfo);
  });

  function toggleInfo(e) {
    const btn = e.currentTarget;
    let currentProfile = btn.parentElement;
    let children = Array.from(currentProfile.children);
    debugger;
    const additionalInfoDiv = children[9];
    const lockedProp = children[4];
    if (lockedProp.checked) {
      if (btn.textContent === "Show more") {
        additionalInfoDiv.style.display = "block";
        btn.textContent = "Hide it";
      } else {
        additionalInfoDiv.style.display = "none";
        btn.textContent = "Show more";
      }
    }
  }
}
