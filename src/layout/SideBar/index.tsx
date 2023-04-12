import { Drawer, Layout } from "antd";
import React from "react";
import { TAB_SIZE } from "../../config/theme";
import useWindowSize from "../../hooks/useWindowSize";
import SidebarContent from "./SidebarContent";

const SideBar = ({
  collapsedMobile,
  handleCallbackCollapseMobile,
}: {
  collapsedMobile: boolean;
  handleCallbackCollapseMobile: () => void;
}) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const { width } = useWindowSize();

  const handleCallbackCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout.Sider
      style={{
        minHeight: "740px",
      }}
      trigger={null}
      collapsed={width < TAB_SIZE ? false : collapsed}
      collapsible
    >
      <SidebarContent
        handleCallbackCollapsed={handleCallbackCollapsed}
        collapsed={collapsed}
      />
    </Layout.Sider>
  );
};

export default React.memo(SideBar);
