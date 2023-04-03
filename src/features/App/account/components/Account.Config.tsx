import React from "react";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: React.Key;
  name: string;
  number?: number | string;
  email?: any;
  description?: string;
  status?: boolean;
  role?: any;
}
export const AccountColumns: ColumnsType<DataType> = [
  {
    title: "STT",
    dataIndex: "id",
    align: "center",
    render: (row, record, index: number) => index++,
  },
  { title: "Họ và tên", dataIndex: "name", key: "name" },
  { title: "Số điện thoại", dataIndex: "number", key: "age" },
  { title: "Email", dataIndex: "email", key: "address" },
  { title: "Loại tài khoản", dataIndex: "role", key: "role" },
];
export const Accountdata: DataType[] = [
  {
    key: 1,
    name: "John Brown",
    status: true,
    number: "0909090909",
    email: "duyz@gmail.com",
    role: "admin",
  },
  {
    key: 2,
    name: "Jim Green",
    status: false,
    role: "admin",

    number: "0909090909",
    email: "duyz@gmail.com",
  },

  {
    key: 4,
    name: "Joe Black",
    status: false,
    role: "admin",
    number: "0909090909",
    email: "duyz@gmail.com",
  },
];
