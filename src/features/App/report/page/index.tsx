import { EditOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  DatePicker,
  Input,
  message,
  Modal,
  Popconfirm,
  Select,
  Space,
  Switch,
  Table,
} from "antd";
import React, { useState } from "react";
import TopBar from "../../../../components/TopBar";
import { RADIUS } from "../../../../config/theme";
import { ReportColumns, ReportData } from "../component/Report.Config";

const ReportPage = () => {
  const { Search } = Input;
  const { Option } = Select;
  const { RangePicker } = DatePicker;
  const onSearch = (value: string) => console.log(value);

  return (
    <>
      <TopBar title="Báo cáo" />

      <Card
        title={
          <Space>
            <Search
              size="large"
              placeholder="Nhập tên hoặc mã sản phẩm"
              onSearch={onSearch}
              style={{ width: 400 }}
            />
            {/* <Select size="large" placeholder="Trạng thái hoạt động">
              <Option value="1" key="1">
                Đang hoạt động
              </Option>
              <Option value="2" key="2">
                Ngừng hoạt động
              </Option>
            </Select> */}
            <RangePicker size="large" />
          </Space>
        }
        extra={<Space></Space>}
      >
        <p>Kết quả lọc {ReportData?.length}</p>
      </Card>
      <Table
        columns={[...ReportColumns]}
        bordered={true}
        dataSource={ReportData}
      />
    </>
  );
};
export default ReportPage;
