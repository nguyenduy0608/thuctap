import { Button, Card, Input, Modal, Space, Switch, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../../../../components/TopBar";
import {
  DataProductType,
  IProductPayload,
  ProductColumns,
  ProductData,
} from "../components/Product.Config";
import ProductFormPage from "./form";
import { TitleAccount } from "../../../../config/global.style";
import axios from "axios";
import useDebounce from "../../../../hooks/useDebounce";
const ProductPage = () => {
  const [params, setParams] = useState<IProductPayload>({
    page: "",
    search: "",
    limit: 12,
  });
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [values, setValues] = useState<DataProductType | null>();
  const [callBack, setCallBack] = useState(false);
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Navige = useNavigate();

  const debounced = useDebounce([params, callBack], 300);
  useEffect(() => {
    getDataProduct();
  }, debounced);
  const getDataProduct = async () => {
    try {
      const res = await axios.get(
        "https://dev.httapi.winds.vn/api/v1/admin/product",
        {
          params,
        }
      );
      setValues(res?.data?.data);
      console.log("values:", values);
      setPage(res?.data?.paging?.page);
      setTotal(res?.data?.paging?.totalItemCount);
    } catch (err) {
      console.log(err);
    }
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
        extra={<Space></Space>}
      >
        Kết quả lọc:{total}
      </Card>
      <Table
        bordered={true}
        columns={[
          ...ProductColumns,
          {
            title: <TitleAccount>Trạng thái hoạt động</TitleAccount>,
            width: "20%",
            dataIndex: "status",
            align: "center",
            render: (value: any) => (
              <div>
                {value === 1 ? (
                  <Tag color="#87d068">Đang hoạt động</Tag>
                ) : (
                  <Tag color="red"> Ngừng hoạt động</Tag>
                )}
              </div>
            ),
          },
        ]}
        onRow={(record) => {
          return {
            onClick: () => Navige("/productdetail"), // click row
          };
        }}
        dataSource={ProductData}
      />
      {/* <ProductFormPage
        ShowModal={showModal}
        handleCancel={handleCancel}
        handleOk={handleOk}
        open={isModalOpen}
      /> */}
    </>
  );
};
export default ProductPage;
