function getUserData(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User data fetched for userId:", userId);
      resolve({ userId: userId, name: "John" });
    }, 1000);
  });
}

function getPostsByUser(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Posts fetched for user:", user.name);
      resolve([
        { postId: 1, title: "Post 1" },
        { postId: 2, title: "Post 2" },
      ]);
    }, 1000);
  });
}

function getCommentsByPost(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Comments fetched for postId:", postId);
      resolve([{ commentId: 1, text: "Great post!" }]);
    }, 1000);
  });
}

// Chaining promises to avoid callback hell
getUserData(1)
  .then((user) => getPostsByUser(user))
  .then((posts) => getCommentsByPost(posts[0].postId))
  .then((comments) => console.log("Comments for post:", comments))
  .catch((error) => console.error(error));
