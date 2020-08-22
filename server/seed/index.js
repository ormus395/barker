import User from "../src/models/user";
import Post from "../src/models/post";

const createUserWithPost = () => {
  const user1 = new User({
    name: "Frank Frankerson",
    email: "frank@mail.com",
    password: "12345",
    avatarUrl: `/images/2020-08-18T04-34-39.263Z-arthur.jpg`,
  });

  let tempUser;

  return user1
    .save()
    .then((user) => {
      tempUser = user;
      const post1 = new Post({
        body: "YAY im a post from Frank",
        author: user1._id,
      });

      return post1.save();
    })
    .then((post) => {
      return post.save().then((post) => {
        tempUser.posts.push(post);

        return tempUser.save();
      });
    });
};

export default createUserWithPost;
