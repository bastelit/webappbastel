import React from "react";
import { ConfigProvider, Layout } from "antd";
import AppHeader from "./components/AppHeader";

const App: React.FC = () => {
  const layoutStyle = {
    borderRadius: 8,
    overflow: "hidden",
    width: "auto",
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
          borderRadius: 4,
        },
      }}
    >
      <Layout style={layoutStyle}>
        <AppHeader />
      </Layout>
    </ConfigProvider>
  );
};

export default App;
