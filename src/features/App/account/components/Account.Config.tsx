import React from "react";
import type { ColumnsType } from "antd/es/table";
import styled from "styled-components";
import { TitleAccount } from "../../../../config/global.style";

export interface DataType {
  kiotviet_id?: number;
  id?: any;
  key: React.Key;
  full_name?: string;
  phone_number?: number | string;
  email?: any;
  status?: boolean | number;
  is_root?: any;
  password?: string;
  password_confirmation?: string;
  createdAt?: string;
}
export interface IAccountPayload {
  search?: string;
  page?: string;
  limit?: string | number;
  is_root?: boolean;
  status?: string;
}
export const AccountColumns = (page: number): ColumnsType<DataType> => [
  {
    title: <TitleAccount> STT </TitleAccount>,

    width: "6%",
    dataIndex: "id",
    align: "center",
    render: (row, record, index) =>
      page === 1 ? ++index : (page - 1) * 12 + ++index,
  },
  {
    title: <TitleAccount>Họ và tên</TitleAccount>,
    dataIndex: "full_name",
    key: "full_name",
  },
  {
    title: <TitleAccount>Số điện thoại</TitleAccount>,
    dataIndex: "phone_number",
    key: "phone_number",
  },
  {
    title: <TitleAccount>Email</TitleAccount>,
    dataIndex: "email",
    key: "email",
  },
  {
    title: <TitleAccount>Loại tài khoản</TitleAccount>,
    dataIndex: "is_root",
    key: "is_root",
    render: (value: any) =>
      value ? <text> Admin</text> : <text>Admin gian hàng</text>,
  },
];
