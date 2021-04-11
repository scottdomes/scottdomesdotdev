import { posts } from "utils/getAllPosts";

const slugs = [
  "/bootcamp-to-senior",
  "/great-react",
  "/react-lifecycle",
  "/tiny-components",
  "/service-objects",
];

export const bestPosts = posts.filter((post) => {
  console.log(post);
  return slugs.indexOf(post.link) !== -1;
});
