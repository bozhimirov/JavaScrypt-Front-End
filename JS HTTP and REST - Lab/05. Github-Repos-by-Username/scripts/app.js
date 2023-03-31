function loadRepos() {
  const BASE_URL = "https://api.github.com/users/";
  const username = document.getElementById("username");
  const usernameVal = username.value;
  const repos = document.getElementById("repos");

  repos.innerHTML = "";
  fetch(`${BASE_URL}${usernameVal}/repos`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((repo) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        li.textContent = repo.full_name;
        a.href = repo.owner.html_url;

        li.appendChild(a);
        repos.appendChild(li);
      });
    })
    .catch((err) => {
      //   const errorMessage = "Not Found";
      const errorMessage = `Error: ${err.status} (Not Found)`;
      const li = document.createElement("li");
      const a = document.createElement("a");
      li.textContent = errorMessage;
      a.href = "";

      li.appendChild(a);
      repos.appendChild(li);
    });
}
