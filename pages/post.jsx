import React from "react";
import Layout from "../components/layout/Layout";

Post.getInitialProps = (props) => {
  return { query: props.query };
};

function Post({ query }) {
  return (
    <Layout title={query.title}>
      <p>{query.content}</p>
    </Layout>
  );
}

export default Post;
