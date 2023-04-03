import React from "react";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key?: React.Key;
  name: string;
  content: string;
  status?: boolean;
  createAt?: any;
}
export const NotificationColumns: ColumnsType<DataType> = [
  {
    title: "STT",
    dataIndex: "id",
    align: "center",
    render: (row, record, index: number) => index++,
  },
  { title: "Tên thông báo", dataIndex: "name", key: "name" },
  { title: "Nội dung", dataIndex: "content", key: "age" },
  { title: "Ngày tạo", dataIndex: "createAt", key: "address" },
];
export const Notificationdata: DataType[] = [
  {
    key: 1,
    name: "Khuyến mãi",
    content: "New York No. 1 Lake Park",
    status: true,
    createAt: "18/08/2023",
  },
  {
    key: 2,
    name: "Bảo trì hệ thống",
    content: "London No. 1 Lake Park",
    createAt: "18/08/2023",
    status: false,
  },

  {
    key: 4,
    name: "Chuẩn bị sale",
    content: "Sydney No. 1 Lake Park",
    createAt: "18/08/2023",
    status: false,
  },
];
