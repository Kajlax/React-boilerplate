import React from "react";
import Layout from "../Layout";
import { Header } from "semantic-ui-react";

class Sivu extends React.PureComponent {
  render() {
    return (
      <Layout {...this.props}>
        <Header as="h2" content="Sivu" />
      </Layout>
    );
  }
}

export default Sivu;
