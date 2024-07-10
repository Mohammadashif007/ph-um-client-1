import { Layout, Menu } from "antd";

import { NavLink, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

export const sidebarItems = [
    {
        key: "Dashboard",
        label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
    },
    {
        key: "User Management",
        label: "User Management",
        children: [
            {
                key: "Admin Dashboard",
                label: <NavLink to="/admin/dashboard">Admin Dashboard</NavLink>,
            },
            {
                key: "Create Faculty",
                label: <NavLink to="/admin/createFaculty">Create Faculty</NavLink>,
            },
            {
                key: "Create Student",
                label: <NavLink to="/admin/createStudent">Create Student</NavLink>,
            },
        ],
    },
];

const MainLayout = () => {
    return (
        <Layout style={{height: "100vh"}}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["4"]}
                    items={sidebarItems}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0 }} />
                <Content style={{ margin: "24px 16px 0" }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <Outlet></Outlet>
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
