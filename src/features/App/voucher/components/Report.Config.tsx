import React from "react";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: React.Key;
  voucher_name?: string;
  id_voucher?: number | string;
  quantity?: number;
  created_at?: string;
  created_to?: string;
  status?: boolean;
}
export const VoucherColumns: ColumnsType<DataType> = [
  {
    title: "STT",
    dataIndex: "id",
    align: "center",
    render: (row, record, index: number) => index++,
  },
  { title: "Mã voucher", dataIndex: "id_voucher" },
  { title: "Tên voucher", dataIndex: "voucher_name", key: "name" },
  {
    title: "Số lượng",
    dataIndex: "quantity",
    key: "quantity",
    align: "center",
  },
  {
    title: "Ngày tạo",
    dataIndex: "created_at",
    key: "created_at",
    align: "center",
  },
  {
    title: "Ngày kết thúc",
    dataIndex: "created_to",
    key: "created_to",
    align: "center",
  },
];
export const VoucherData: DataType[] = [
  {
    key: 1,
    voucher_name: "Giảm giá 10%",
    id_voucher: "VH1",
    status: true,
    quantity: 10,
    created_at: "10/10/2023",
    created_to: "10/11/2023",
  },
  {
    key: 2,
    voucher_name: "Miễn phí ship",
    id_voucher: "VC12",
    status: true,
    quantity: 10,
    created_at: "10/10/2023",
    created_to: "10/11/2023",
  },
  {
    key: 3,
    voucher_name: "John Brown",
    id_voucher: 32,
    status: true,
    quantity: 10,
    created_at: "10/10/2023",
    created_to: "10/11/2023",
  },
  {
    key: 4,
    voucher_name: "hoàn xu 505",
    id_voucher: 32,
    status: true,
    quantity: 10,
    created_at: "10/10/2023",
    created_to: "10/11/2023",
  },
];
