import { Button, Space, DatePicker, Card, Layout } from "antd";
import { CiCircleFilled } from "@ant-design/icons";

export default function AntdPage() {
  const onChange = () => {};

  const { Sider, Footer, Content, Header } = Layout;

  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Sider style={{ backgroundColor: "gainsboro" }}>Sider</Sider>
        <Layout>
          <Header style={{ backgroundColor: "blueviolet" }}>Header</Header>
          <Content>
            <div style={{ padding: 30 }}>
              <Space direction="vertical">
                <Button type="primary">Primary Button</Button>
                <Button type="ghost">Ghost Button</Button>
                <DatePicker onChange={onChange} />
                <CiCircleFilled />
              </Space>
            </div>
          </Content>
          <Footer style={{ backgroundColor: "brown" }}>Footer</Footer>
        </Layout>
      </Layout>
    </>
  );
}
