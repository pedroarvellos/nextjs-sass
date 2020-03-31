import React from "react";
import Layout from "../components/layout/Layout";
import fetch from "isomorphic-unfetch";

About.getInitialProps = async ctx => {
  const res = await fetch("https://api.github.com/users/pedroarvellos");
  const json = await res.json();
  console.log(json);
  return { user: json };
};

function About({ user }) {
  return (
    <Layout title="About">
      <h2>{user.name}</h2>
      <a href={user.url} target="_blank" rel="noopener noreferrer">
        GitHub Account
      </a>
      <div>
        <img src={user.avatar_url} alt="My photo" height="200px" />
      </div>
    </Layout>
  );
}

export default About;
