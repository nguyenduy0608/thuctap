import { Avatar, Popover, Row } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React from "react";
// import useCallContext from "../../hooks/useCallContext";

const UserInfo = () => {
  //   const { state, dispatch }: any = useCallContext();

  const userMenuOptions = (
    <ul className="gx-user-popover">
      <li className="gx-font-weight-medium">Tài khoản</li>
      <li
        className="gx-font-weight-medium"
        onClick={() => {
          localStorage.removeToken();
          window.location.reload();
        }}
      >
        Đăng xuất
      </li>
    </ul>
  );
  return (
    <Row wrap={false} justify="center" className="gx-avatar-row gx-m-0">
      <Popover
        placement="bottomRight"
        content={userMenuOptions}
        trigger="click"
      >
        {/* <Avatar/>
          src={images.logo}
          className="gx-size-40 gx-pointer gx-mr-3"
          alt=""
        /> */}
        <span className="gx-avatar-name">
          {/* {state?.info?.fullName} */}
          Nguyễn Đức Duy
          <DownOutlined className="gx-fs-sm gx-ml-4" />
        </span>
      </Popover>
    </Row>
  );
};

export default UserInfo;
