import React from "react";
import { Layout } from "antd";
import MyMenu from "./Menu";

const { Header } = Layout;

const MyHeader = () => {
  return (
    <Header>
      <div className="logo" />
      <MyMenu />
    </Header>
  );
};

export default MyHeader;
