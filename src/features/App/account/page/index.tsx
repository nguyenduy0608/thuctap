import { EditOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  DatePicker,
  Descriptions,
  Input,
  message,
  Popconfirm,
  Row,
  Select,
  Space,
  Switch,
  Table,
} from "antd";
import React, { useState } from "react";
import SelectComponent from "../../../../components/SelectComponent";
import TopBar from "../../../../components/TopBar";
import { RADIUS } from "../../../../config/theme";
import { AccountColumns, Accountdata } from "../components/Account.Config";
import CustomerFormPage from "./form";
const { RangePicker } = DatePicker;
const AccountPage = () => {
  const { Search } = Input;
  const { Option } = Select;
  const onSearch = (value: string) => console.log(value);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
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

  const onSelectChange = (newSelectedRowKeys: any) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <>
      <TopBar title="Tài khoản" />
      <Card
        title={
          <Space>
            <Search
              size="large"
              placeholder="Nhập tên hoặc số điện thoại tài khoản"
              onSearch={onSearch}
              style={{ width: 400 }}
            />
            <Select
              size="large"
              placeholder="Loại tài khoản"
              style={{ minWidth: "160px" }}
            >
              <Option value="admin" key="1">
                Admin
              </Option>
              <Option value="accountant" key="2">
                Admin kế toán
              </Option>
            </Select>
            <RangePicker size="large" />
          </Space>
        }
        extra={
          <Space>
            <Button
              size="large"
              type="primary"
              onClick={showModal}
              style={{ fontSize: "1.8rem", borderRadius: "10px" }}
            >
              Thêm mới
            </Button>
          </Space>
        }
      >
        <p>Kết quả lọc {Accountdata?.length}</p>
      </Card>
      <Table
        columns={[
          ...AccountColumns,
          {
            title: "Trạng thái hoạt động",
            dataIndex: "status",
            align: "center",
            render: (value: any) => (
              <div>
                <Switch
                  onChange={() => {
                    !value;
                  }}
                  checked={value}
                ></Switch>
              </div>
            ),
          },
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
        expandable={{
          expandedRowRender: (record) => (
            <Card title="Thông tin tài khoản">
              <Descriptions column={2}>
                <Descriptions.Item label="Tên người dùng">
                  {record.name}
                </Descriptions.Item>
                <Descriptions.Item label="Số điện thoại">
                  {record.number}
                </Descriptions.Item>
                <Descriptions.Item label="Email">
                  {record.email}
                </Descriptions.Item>

                <Descriptions.Item label="Vai trò">
                  {record.role}
                </Descriptions.Item>
              </Descriptions>
            </Card>
          ),
        }}
        rowSelection={rowSelection}
        dataSource={Accountdata}
      />
      <CustomerFormPage
        ShowModal={showModal}
        handleCancel={handleCancel}
        handleOk={handleOk}
        open={isModalOpen}
      />
    </>
  );
};
export default AccountPage;
