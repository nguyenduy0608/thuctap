import { EditOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  DatePicker,
  Descriptions,
  Input,
  message,
  Popconfirm,
  Select,
  Space,
  Switch,
  Table,
} from "antd";
import React, { useState } from "react";
import SelectComponent from "../../../../components/SelectComponent";
import TopBar from "../../../../components/TopBar";

import {
  NotificationColumns,
  Notificationdata,
} from "../components/Notification.Config";
import NotificationFormPage from "./form";

const { RangePicker } = DatePicker;
const NotificationPage = () => {
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const confirm = (e: any) => {
    message.success("Đã xóa khách hàng thành công");
  };
  const cancel = (e: any) => {};
  return (
    <>
      <TopBar title="Thông báo" />
      <Card
        title={
          <Space>
            <Search
              size="large"
              placeholder="Nhập tên hoặc nội dung thông báo"
              onSearch={onSearch}
              style={{ width: 400 }}
            />
            <RangePicker size="large" />
          </Space>
        }
        extra={
          <Space>
            <Button
              style={{ fontSize: "1.8rem", borderRadius: "10px" }}
              size="large"
              type="primary"
              onClick={showModal}
            >
              Thêm mới
            </Button>
          </Space>
        }
      >
        <p>Kết quả lọc {Notificationdata?.length}</p>
      </Card>
      <Table
        columns={[
          ...NotificationColumns,

          {
            title: "Thao tác",
            dataIndex: "",
            align: "center",
            key: "x",
            render: () => (
              <>
                <EditOutlined
                  style={{ color: "blue", marginRight: "1rem" }}
                  onClick={showModal}
                />
                <Popconfirm
                  placement="topRight"
                  title="Bạn có chắc chắn muốn xóa khách hàng này?"
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="Ok"
                  cancelText="Hủy"
                >
                  <a href="">Xóa</a>
                </Popconfirm>
              </>
            ),
          },
        ]}
        dataSource={Notificationdata}
        bordered={true}
      />
      <NotificationFormPage
        ShowModal={showModal}
        handleCancel={handleCancel}
        handleOk={handleOk}
        open={isModalOpen}
      />
    </>
  );
};
export default NotificationPage;
