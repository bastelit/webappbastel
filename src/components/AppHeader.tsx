import React from "react";
import { Layout } from "antd";
import { SketchCircleFilled } from "@ant-design/icons";
const { Header } = Layout;

// Define a TypeScript functional component
const AppHeader: React.FC = () => {
  const headerStyle: React.CSSProperties = {
    textAlign: "left",
    paddingInline: 48,
    backgroundColor: "#F8F8FF",
    height: "100px",
    alignContent: "center",
  };

  return (
    <Header style={headerStyle}>
      <h1>
        <SketchCircleFilled style={{ color: "#4169E1" }} /> Bastelit
      </h1>
    </Header>
  );
};

export default AppHeader;
