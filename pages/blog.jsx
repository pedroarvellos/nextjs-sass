import React from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";

const PostLink = ({ title, content }) => (
  <li>
    <Link href={`/post?title=${title}&content=${content}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Blog = () => (
  <Layout title="Blog">
    <ul>
      <PostLink
        title="React"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra venenatis gravida. In in placerat turpis. Donec sagittis mattis bibendum."
      />
      <PostLink
        title="Angular"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra venenatis gravida. In in placerat turpis. Donec sagittis mattis bibendum."
      />
      <PostLink
        title="Node"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra venenatis gravida. In in placerat turpis. Donec sagittis mattis bibendum."
      />
    </ul>
  </Layout>
);

export default Blog;
