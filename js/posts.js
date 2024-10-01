function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}

function displayPosts(posts) {
  const postContainer = document.getElementById("posts-container");
  for (const post of posts) {
    const postDiv = document.createElement("div");
    postContainer.appendChild(postDiv);
    postDiv.classList.add('post')
    postDiv.innerHTML = `
            <h4>User-${post.userId}</h4>
            <h5>Post: ${post.title}</h5>
            <p>Post Description: ${post.body}</p>
        `;
    console.log(post);
  }
}
loadPosts();
