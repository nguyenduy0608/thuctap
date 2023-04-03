import { EditOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
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
import { useNavigate } from "react-router-dom";
import SelectComponent from "../../../../components/SelectComponent";
import TopBar from "../../../../components/TopBar";
import { RADIUS } from "../../../../config/theme";
import {
  AccountColumns,
  Accountdata,
} from "../../account/components/Account.Config";
import { OrderColumns, Orderdata } from "../components/Order.Config";
import OrderFormPage from "./form";
import CustomerFormPage from "./form";

const OrderPage = () => {
  const navigate = useNavigate();
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
      <TopBar title="Đơn hàng " />
      <Card
        title={
          <Space>
            <Search
              size="large"
              placeholder="Nhập tên khách hàng hoặc mã sản phẩm"
              onSearch={onSearch}
              style={{ width: 400 }}
            />
            <Select size="large" placeholder="chọn" />
          </Space>
        }
      >
        <p>Kết quả lọc {Orderdata?.length}</p>
      </Card>
      <Table
        columns={[
          ...OrderColumns,
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
        ]}
        onRow={(record) => {
          return {
            onClick: () => navigate("/orderdetail"), // click row
          };
        }}
        bordered={true}
        dataSource={Orderdata}
      />
      <OrderFormPage
        ShowModal={showModal}
        handleCancel={handleCancel}
        handleOk={handleOk}
        open={isModalOpen}
      />
    </>
  );
};
export default OrderPage;
