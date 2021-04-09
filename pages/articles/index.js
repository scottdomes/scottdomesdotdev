import Layout from "components/layout/Layout";
import { posts } from "utils/getAllPosts";

const Article = ({ post }) => {
  const { meta } = post.module;
  return (
    <div>
      <h2>{meta.title}</h2>
      <p>{meta.description}</p>
    </div>
  );
};

export default function IndexPage() {
  return (
    <Layout>
      {posts.map((post) => {
        return <Article post={post} />;
      })}
    </Layout>
  );
}
