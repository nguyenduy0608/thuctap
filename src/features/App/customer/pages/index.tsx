import { EditOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  DatePicker,
  Descriptions,
  Input,
  message,
  Popconfirm,
  Select,
  Space,
  Switch,
  Table,
} from "antd";
import React, { useEffect, useState } from "react";
import SelectComponent from "../../../../components/SelectComponent";
import TopBar from "../../../../components/TopBar";
import { CustomerColumns } from "../components/Customer.Config";
import CustomerFormPage from "./form";

const CustomerPage = () => {
  const { Search } = Input;
  const { Option } = Select;
  const { RangePicker } = DatePicker;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSearch = (value: string) => console.log(value);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataCustomer, setDataCustomer] = useState([]);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const confirm = (e: any) => {
    message.success("Đã xóa khách hàng thành công");
  };
  const cancel = (e: any) => {};
  const onSelectChange = (newSelectedRowKeys: any) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/okokok", {});
      const jsonData = await response.json();

      setDataCustomer(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <TopBar title="Khách hàng" />
      <Card
        title={
          <Space>
            <Search
              size="large"
              placeholder="Nhập tên hoặc số điện thoại khách hàng"
              onSearch={onSearch}
              style={{ width: 400 }}
            />
            <Select
              size="large"
              placeholder="Trạng thái hoạt động"
              style={{ width: "200px" }}
            >
              <Option value="1" key={1}>
                Đang hoạt động
              </Option>
              <Option value="2" key={2}>
                Ngừng hoạt động
              </Option>
            </Select>
            <RangePicker size="large" />
          </Space>
        }
        extra={
          <Space style={{ minHeight: "5rem" }}>
            <Button
              size="large"
              type="primary"
              onClick={showModal}
              style={{ fontSize: "1.8rem", borderRadius: "10px" }}
            >
              Thêm mới
            </Button>
          </Space>
        }
      >
        {/* <p>Kết quả lọc {Customerdata?.length}</p> */}
      </Card>

      <Table
        columns={[
          ...CustomerColumns,
          {
            title: "Trạng thái hoạt động",
            dataIndex: "status",
            align: "center",
            render: (value: any) => (
              <div>
                <Switch
                  onChange={() => {
                    !value;
                  }}
                  checked={value}
                ></Switch>
              </div>
            ),
          },
          {
            title: "Thao tác",
            dataIndex: "",
            align: "center",
            key: "x",
            render: () => (
              <>
                <EditOutlined
                  style={{ color: "blue", marginRight: "1rem" }}
                  onClick={showModal}
                />
                <Popconfirm
                  placement="topRight"
                  title="Bạn có chắc chắn muốn xóa khách hàng này?"
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="Ok"
                  cancelText="Hủy"
                >
                  <a href="">Xóa</a>
                </Popconfirm>
              </>
            ),
          },
        ]}
        bordered={true}
        expandable={{
          expandedRowRender: (record) => (
            <p>
              <Descriptions title="Thông tin khách hàng" column={2}>
                <Descriptions.Item label="Tên khách hàng">
                  {record?.location}
                </Descriptions.Item>
                <Descriptions.Item label="Số điện thoại">
                  1810000000
                </Descriptions.Item>
                <Descriptions.Item label="Live">
                  Hangzhou, Zhejiang
                </Descriptions.Item>
                <Descriptions.Item label="Remark">empty</Descriptions.Item>
                <Descriptions.Item label="Address">
                  No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                </Descriptions.Item>
              </Descriptions>
            </p>
          ),
        }}
        rowSelection={rowSelection}
        dataSource={dataCustomer}
      />
      <CustomerFormPage
        ShowModal={showModal}
        handleCancel={handleCancel}
        handleOk={handleOk}
        open={isModalOpen}
      />
    </>
  );
};
export default CustomerPage;
