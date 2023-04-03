import React from "react";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: React.Key;
  name: string;
  status?: boolean | string;
  product_id?: string;
  total?: number;
  created_at?: string;
  quantity?: number;
}
export const OrderColumns: ColumnsType<DataType> = [
  {
    title: "STT",
    dataIndex: "id",
    align: "center",
    render: (row, record, index: number) => index++,
  },
  { title: "Tên khách hàng", dataIndex: "name", key: "name" },
  {
    title: "Mã sản phẩm",
    dataIndex: "product_id",
    key: "product_id",
    align: "center",
  },
  {
    title: "Số sản phẩm",
    dataIndex: "quantity",
    key: "quantity",
    align: "center",
  },
  { title: "Tổng tiền", dataIndex: "total", key: "total" },
  { title: "Trạng thái đơn hàng", dataIndex: "status", key: "status" },
  {
    title: "Ngày tạo",
    dataIndex: "created_at",
    key: "created_at",
    align: "center",
  },
];
export const Orderdata: DataType[] = [
  {
    key: 1,
    name: "John Brown",
    product_id: "SP01",
    quantity: 1,
    total: 10000,
    status: "Đã hoàn thành",
    created_at: "08/12/2023",
  },
  {
    key: 2,
    name: "John Brown",
    product_id: "SP02",
    quantity: 5,
    total: 150000,
    status: "Đã hoàn thành",
    created_at: "08/12/2023",
  },

  {
    key: 3,
    name: "Nam",
    product_id: "SP03",
    quantity: 10,
    total: 80000,
    status: "Đã hoàn thành",
    created_at: "08/12/2023",
  },
];
