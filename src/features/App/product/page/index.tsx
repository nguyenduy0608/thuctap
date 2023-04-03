import { Button, Card, Input, Modal, Space, Switch, Table } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../../../../components/TopBar";
import { ProductColumns, ProductData } from "../components/Product.Config";
import ProductFormPage from "./form";
const ProductPage = () => {
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Navige = useNavigate();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <TopBar title="Sản phẩm"></TopBar>
      <Card
        title={
          <Space>
            <Search
              size="large"
              placeholder="Nhập tên hoặc mã sản phẩm"
              onSearch={onSearch}
              style={{ width: 400 }}
            />
          </Space>
        }
        extra={
          <Space>
            <Button
              onClick={() => {
                setIsModalOpen(true);
              }}
              size="large"
              type="primary"
              style={{ fontSize: "1.8rem", borderRadius: "10px" }}
            >
              Thêm mới
            </Button>
          </Space>
        }
      >
        Kết quả lọc:{ProductData.length}
      </Card>
      <Table
        columns={[
          ...ProductColumns,
          // {
          //   title: "Trạng thái hoạt động",
          //   dataIndex: "status",
          //   align: "center",
          //   render: (value: any) => (
          //     <div>
          //       <Switch
          //         onChange={() => {
          //           !value;
          //         }}
          //         checked={value}
          //       ></Switch>
          //     </div>
          //   ),
          // },
          {
            title: "Thao tác",
            align: "center",
            dataIndex: "",
            key: "x",
            render: () => <a>Delete</a>,
          },
        ]}
        onRow={(record) => {
          return {
            onClick: () => Navige("/productdetail"), // click row
          };
        }}
        dataSource={ProductData}
      />
      <ProductFormPage
        ShowModal={showModal}
        handleCancel={handleCancel}
        handleOk={handleOk}
        open={isModalOpen}
      />
    </>
  );
};
export default ProductPage;
