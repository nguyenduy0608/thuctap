import { Layout, Row } from "antd";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import React from "react";
import styled from "styled-components";
import { TAB_SIZE } from "../config/theme";
import useWindowSize from "../hooks/useWindowSize";
import Topbar from "./Content/Topbar";
import SideBar from "./SideBar";
const { Content, Footer } = Layout;
const PageLayout = (PageComponent: React.JSXElementConstructor<any>) => {
  return function WithPage({ ...props }) {
    const [isLogin, setIsLogin] = React.useState(false);

    const { width } = useWindowSize();

    const [collapsedMobile, setCollapsedMobile] = React.useState(false);

    const handleCallbackCollapseMobile = React.useCallback(() => {
      setCollapsedMobile(!collapsedMobile);
    }, [collapsedMobile]);

    React.useLayoutEffect(() => {
      if (localStorage.getItem("token")) {
        setIsLogin(true);
      }
    }, []);

    return isLogin ? (
      <Layout className="gx-app-layout">
        {/* sidebar */}
        <SideBar
          collapsedMobile={collapsedMobile}
          handleCallbackCollapseMobile={handleCallbackCollapseMobile}
        />
        <Layout>
          <ErrorBoundary>
            <Content className="gx-layout-content">
              <div
                className="gx-main-content-wrapper"
                style={{ overflow: "hidden" }}
              >
                <PageComponent {...props} />
              </div>
              {/* footer content */}
            </Content>
          </ErrorBoundary>
        </Layout>
      </Layout>
    ) : (
      <Layout className="gx-app-layout">
        <ContainerAuthStyled justify="center" align="middle">
          <PageComponent {...props} />
        </ContainerAuthStyled>
      </Layout>
    );
  };
};

const ContainerAuthStyled = styled(Row)`
  min-height: 100vh;
`;

export default PageLayout;
