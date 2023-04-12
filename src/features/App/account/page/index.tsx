import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
  Alert,
  Button,
  Card,
  DatePicker,
  Descriptions,
  Form,
  Input,
  message,
  Popconfirm,
  Select,
  Space,
  Spin,
  Table,
  Tag,
  Typography,
} from "antd";

import React, { useEffect, useState } from "react";
import TopBar from "../../../../components/TopBar";
import { RADIUS } from "../../../../config/theme";
import {
  AccountColumns,
  DataType,
  IAccountPayload,
} from "../components/Account.Config";
import axios, { Axios } from "axios";
import AccountFormPage from "./form";
import {
  StyledDescriptions,
  TitleAccount,
} from "../../../../config/global.style";
import styled from "styled-components";
import useDebounce from "../../../../hooks/useDebounce";
import { useSelector } from "react-redux";
const { RangePicker } = DatePicker;
const { Text } = Typography;
const AccountPage = () => {
  const heightWeb = 700;
  const { Search } = Input;
  const { Option } = Select;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [spin, setSpin] = useState(Boolean);
  const [params, setParams] = useState<IAccountPayload>({
    page: "",
    search: "",
    limit: 12,
  });
  const [page, setPage] = useState(1);
  const [dataAccount, setDataAccount] = useState([]);
  const [total, setTotal] = useState(0);
  const [values, setValues] = useState<DataType | null>();
  const [callBack, setCallBack] = useState(false);
  const initialValue = {
    full_name: "",
    email: "",
    avatar: "",
    phone_number: "",
    password: "",
  };
  const [form] = Form.useForm();
  const handleCallBack = () => {
    setCallBack(!callBack);
  };
  const debounced = useDebounce([callBack, params], 300);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const formReset = () => {
    form.setFieldsValue(initialValue);
  };
  const handleCancel = () => {
    setValues(null);
    setIsModalOpen(false);
    formReset();
  };
  const handleLoading = () => {
    setSpin(true);
    console.log(spin);
  };
  const handleUnLoading = () => {
    setSpin(false);
    console.log(spin);
  };
  const confirm = async (e: any) => {
    setSpin(true);
    try {
      await axios.delete(`https://dev.httapi.winds.vn/api/v1/admin/admin/${e}`);
      handleCallBack();
      message.success("Đã xóa tài khoản thành công");
      setSpin(false);
    } catch (error) {
      console.log(error);
    } finally {
      setSpin(false);
    }
  };
  const cancel = (e: any) => {};
  const onSearch = (search: string) => {
    setParams({
      ...params,
      search: search,
    });
  };
  const onSelectChange = (newSelectedRowKeys: any) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  useEffect(() => {
    getDataAdmin();
  }, debounced);
  const getDataAdmin = async () => {
    const res = await axios.get(
      "https://dev.httapi.winds.vn/api/v1/admin/admin",
      {
        params,
      }
    );
    setPage(res?.data?.paging?.page);
    setTotal(res?.data?.paging?.totalItemCount);
    setDataAccount(res?.data?.data);
  };
  return (
    <>
      <TopBar title={<h1 style={{ fontWeight: "600" }}>Tài khoản </h1>} />
      <Card
        title={
          <Space>
            <Search
              size="large"
              placeholder="Nhập tên hoặc số điện thoại tài khoản"
              onChange={(e: any) => {
                onSearch(e?.target?.value);
              }}
              style={{ width: 400 }}
            />
            <Select
              size="large"
              placeholder="Loại tài khoản"
              style={{ minWidth: "160px" }}
              onChange={(value: any) => {
                setParams({
                  ...params,
                  is_root: value,
                });
              }}
              allowClear
            >
              <Option value={null}>Tất cả</Option>
              <Option value={true}>Admin</Option>
              <Option value={false}>Admin kế toán</Option>
            </Select>
            <Select
              size="large"
              placeholder="Trạng thái hoạt động"
              style={{ minWidth: "160px" }}
              onChange={(value: any) => {
                setParams({
                  ...params,
                  status: value,
                });
              }}
              allowClear
            >
              <Option value={null}>Tất cả</Option>
              <Option value={1}>Đang hoạt động</Option>
              <Option value={0}>Ngừng hoạt động</Option>
            </Select>
          </Space>
        }
        extra={
          <Space>
            <Button
              size="large"
              type="primary"
              onClick={() => setIsModalOpen(true)}
              style={{ fontSize: "1.8rem", borderRadius: "10px" }}
            >
              Thêm mới
            </Button>
          </Space>
        }
      >
        <p>Kết quả lọc :{<text style={{ fontWeight: "600" }}>{total}</text>}</p>
      </Card>
      <Table
        columns={[
          ...AccountColumns(page),
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
          {
            title: <TitleAccount>Thao tác</TitleAccount>,
            width: "10%",
            dataIndex: "",
            align: "center",
            key: "x",
            render: (record: DataType) => (
              <>
                <EditOutlined
                  style={{
                    color: "#1890ff",
                    marginRight: "1rem",
                    fontSize: "1.6rem",
                  }}
                  onClick={() => {
                    setIsModalOpen(true), setValues(record);
                  }}
                />
                <Popconfirm
                  placement="topRight"
                  title="Bạn có chắc chắn muốn xóa khách hàng này?"
                  onConfirm={() => {
                    confirm(record?.id);
                  }}
                  onCancel={cancel}
                  okText="Ok"
                  cancelText="Hủy"
                >
                  <a
                    style={{
                      fontSize: "1.6rem",
                    }}
                    href=""
                  >
                    <DeleteOutlined />
                  </a>
                </Popconfirm>
              </>
            ),
          },
        ]}
        scroll={
          dataAccount?.length > 1
            ? {
                x: 800,
                scrollToFirstRowOnChange: true,
                y: `calc(${heightWeb}px - 330px)`,
              }
            : {}
        }
        rowKey={(record: DataType) => record?.id}
        loading={spin}
        expandable={{
          expandedRowRender: (record: DataType) => (
            <Card title={<TitleAccount>Thông tin tài khoản</TitleAccount>}>
              <StyledDescriptions column={2}>
                <Descriptions.Item label="Tên người dùng">
                  {record?.full_name || "---"}
                </Descriptions.Item>
                <Descriptions.Item label="Số điện thoại">
                  {record?.phone_number || "---"}
                </Descriptions.Item>
                <Descriptions.Item label="Email">
                  {record?.email || "---"}
                </Descriptions.Item>
                <Descriptions.Item label="Số lượng KH quản lý">
                  {"0"}
                </Descriptions.Item>
                <Descriptions.Item label="Ngày tạo">
                  {convertTimeStampToString(record?.createdAt) || "---"}
                </Descriptions.Item>
                <Descriptions.Item label="Vai trò">
                  {record.is_root ? (
                    <text>Admin</text>
                  ) : (
                    <text>Admin gian hàng</text> || "---"
                  )}
                </Descriptions.Item>
              </StyledDescriptions>
            </Card>
          ),
        }}
        pagination={{
          pageSize: 12,
          total: total,
          onChange: (page) => {
            setParams({ ...params, page: page.toString() });
          },
        }}
        bordered={true}
        dataSource={dataAccount || []}
      />

      <AccountFormPage
        handleLoading={handleLoading}
        handleUnLoading={handleUnLoading}
        handleCallBack={handleCallBack}
        values={values}
        handleCancel={handleCancel}
        handleOk={handleOk}
        open={isModalOpen}
      />
    </>
  );
};
export default AccountPage;
export function convertTimeStampToString(
  timeStamp: string | number | Date | undefined
): string {
  if (!timeStamp) {
    return "";
  }

  var MyDate = new Date(timeStamp);
  return (
    ("0" + MyDate.getDate()).slice(-2) +
    "/" +
    ("0" + (MyDate.getMonth() + 1)).slice(-2) +
    "/" +
    MyDate.getFullYear()
  );
}
