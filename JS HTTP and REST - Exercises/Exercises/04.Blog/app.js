function attachEvents() {
  const loadBtn = document.getElementById("btnLoadPosts");
  const postField = document.getElementById("posts");
  const viewBtn = document.getElementById("btnViewPost");
  const postBody = document.getElementById("post-body");
  const postTitle = document.getElementById("post-title");
  const commentPlacement = document.getElementById("post-comments");
  const BASE_URL = "http://localhost:3030/jsonstore/blog/";
  meta_data = [];

  loadBtn.addEventListener("click", getPostsHandler);

  function getPostsHandler() {
    postField.innerHTML = "";
    fetch(`${BASE_URL}posts`)
      .then((response) => response.json())
      .then((data) => getInfo(Object.values(data)))
      .catch(() => {
        console.error();
      });
  }
  function getInfo(data) {
    meta_data = [];
    data.forEach((post) => createOption(post));
    data.forEach((post) => meta_data.push(post));
    viewPostHandler();
  }

  function createOption(post) {
    postField.innerHTML += `
      <option value = '${post.id}'>${post.title}</option>
    `;
  }

  viewBtn.addEventListener("click", viewPostHandler);

  function viewPostHandler() {
    const currentId = postField.options[postField.selectedIndex].value;
    for (const el in meta_data) {
      if (meta_data[el].id === currentId) {
        postTitle.textContent = meta_data[el].title;
        postBody.textContent = meta_data[el].body;
      }
    }

    fetch(`${BASE_URL}comments`)
      .then((response) => response.json())
      .then((data) => {
        const dataComments = Object.values(data);
        commentPlacement.innerHTML = "";
        for (const comment of dataComments) {
          if (comment.postId === currentId) {
            const li = document.createElement("li");
            li.id = comment.id;
            li.textContent = comment.text;
            commentPlacement.appendChild(li);
          }
        }
      })

      .catch(() => {
        console.error();
      });
  }
}

attachEvents();
