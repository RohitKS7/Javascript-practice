/* "Callback hell" refers to a situation in JavaScript where you have multiple nested callbacks, making the code difficult to read, maintain, and debug. 
The code resembles a pyramid shape, which is why it’s sometimes called "pyramid of doom." */

function getUserData(userId, callback) {
  setTimeout(() => {
    console.log("User data fetched for userId:", userId);
    callback({ userId, name: "John" });
  }, 1000);
}

function getPostsByUser(user, callback) {
  setTimeout(() => {
    console.log("Posts fetched for user:", user.name);
    callback([
      { postId: 1, title: "Post 1" },
      { postId: 2, title: "Post 2" },
    ]);
  }, 1000);
}

function getCommentsByPost(postId, callback) {
  setTimeout(() => {
    console.log("Comments fetched for postId:", postId);
    callback([{ commentId: 1, text: "Great post!" }]);
  }, 1000);
}

// Now, the callback hell
getUserData(1, (user) => {
  getPostsByUser(user, (posts) => {
    getCommentsByPost(posts[0].postId, (comments) => {
      console.log("Comments for post:", comments);
    });
  });
});
