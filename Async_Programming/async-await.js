// Async-Await returns a promise object. and it was introduced in ES8(ECMAScript 2017) to more simplify the promising. It resembles synchronous code for simplicity.

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

const fetchUserData = async () => {
  try {
    const user = await getUserData(1);
    const posts = await getPostsByUser(user);
    const comments = await getCommentsByPost(posts[0].postId);
    console.log("Comments of post:", comments);
  } catch (error) {
    console.error(error);
  }
};

fetchUserData();
