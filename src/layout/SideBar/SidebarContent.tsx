import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Menu, Row } from "antd";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomScrollbars from "../../components/CustomScrollbars";
import UserInfo from "../../components/UserInfo";
import { items } from "./Sidebar.Menu";

const SidebarContent = ({
  collapsed,
  handleCallbackCollapsed,
}: {
  collapsed?: boolean;
  handleCallbackCollapsed?: () => void;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedKeys = location.pathname.substr(1) || "/";
  const defaultOpenKeys = selectedKeys.split("/")[1] || "/";

  return (
    <>
      <Row
        align="middle"
        style={{
          backgroundColor: "white",
        }}
      >
        {!collapsed && (
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              width: "100%",
            }}
            to="/"
          >
            <img
              height="60px"
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Vp5XXTpDyO47l3q8c9qdbNQazl6PN-R6ow&usqp=CAU"
            />
            <div
              style={{
                fontSize: "24px",
                color: "red",
              }}
            >
              ROSE
            </div>
          </Link>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <UserInfo />
        </div>
      </Row>
      <div>
        <div>
          <MenuStyled
            defaultOpenKeys={items.map((item: { key: string }) => item.key)}
            selectedKeys={[selectedKeys]}
            mode="inline"
            items={items}
            theme="dark"
            onClick={(e) => navigate(e.key === "/" ? e.key : "/" + e.key)}
          />
        </div>
      </div>
    </>
  );
};

const MenuStyled = styled(Menu)`
  * {
    font-weight: 600;
  }
`;

export default React.memo(SidebarContent);
