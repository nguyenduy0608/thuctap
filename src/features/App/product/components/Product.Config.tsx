import React from "react";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: React.Key;
  name: string;
  id_product: number;
  price?: number;
  amount?: number;
  status?: boolean;
}
export const ProductColumns: ColumnsType<DataType> = [
  {
    title: "STT",
    dataIndex: "id",
    align: "center",
    render: (row, record, index: number) => index++,
  },
  { title: "Mã sản phẩm", dataIndex: "id_product" },
  { title: "Tên sản phẩm", dataIndex: "name", key: "name" },
  { title: "Giá bán", dataIndex: "price", key: "price", align: "center" },
  { title: "Số lượng", dataIndex: "amount", key: "amount", align: "center" },
];
export const ProductData: DataType[] = [
  {
    key: 1,
    name: "Hoa hồng đỏ",
    id_product: 32,
    status: true,
    price: 100000,
    amount: 100,
  },
  {
    key: 2,
    name: "Hoa hồng có gai",
    id_product: 42,
    status: false,
    price: 100000,
    amount: 20,
  },

  {
    key: 4,
    name: "Hoa hồng đen",
    id_product: 32,
    status: false,
    price: 100000,
    amount: 20,
  },
];
