import Layout from "../components/layout/Layout";

export default ({ statusCode }) => (
  <Layout>
    {statusCode ? "Could not fetch data " + statusCode : "Error."}
  </Layout>
);
