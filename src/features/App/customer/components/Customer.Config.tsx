import React from "react";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: React.Key;
  lastName: string;
  studentId?: number | string;
  firstName?: number | string;
  location: string;
  status?: boolean;
}
export const CustomerColumns: ColumnsType<DataType> = [
  {
    title: "STT",
    dataIndex: "id",
    align: "center",
    render: (row, record, index: number) => index++,
  },
  { title: "Mã khách hàng", dataIndex: "date" },

  { title: "Tên khách hàng", dataIndex: "name", key: "name" },
  { title: "Số điện thoại", dataIndex: "phoneNumber", key: "phoneNumber" },
  { title: "Địa chỉ", dataIndex: "address", key: "address" },
];
