import { Button, Space, DatePicker, Layout, Typography } from "antd";
import { CiCircleFilled } from "@ant-design/icons";

export default function AntdPage() {
  const onChange = () => {};

  const { Sider, Footer, Content, Header } = Layout;
  const { Title } = Typography;

  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Sider style={{ backgroundColor: royalblue}}>Sider</Sider>
        <Layout>
          <Header>
            <Title type="secondary">Header</Title>
          </Header>
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
