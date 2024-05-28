import { Layout } from "antd";

export function Header() {
  return (
    <Layout.Header
      style={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Cabeçalho</h1>
    </Layout.Header>
  );
}
