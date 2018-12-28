import React from "react";
import { Layout } from "antd";

import MyHeader from "../components/Header";

const { Content } = Layout;

const Dashboard = ({ children }) => {
  return (
    <Layout className="main">
      <MyHeader />
      <Content style={{ padding: "0 50px" }}>
        <div className="content">{children}</div>
      </Content>
    </Layout>
  );
};

export default Dashboard;
