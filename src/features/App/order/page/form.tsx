import React from "react";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import styled from "styled-components";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const OrderFormPage = ({
  ShowModal,
  handleCancel,
  handleOk,
  open,
}: {
  ShowModal: any;
  handleCancel: any;
  handleOk: any;
  open: any;
}) => {
  const onSubmit = () => {
    handleCancel();
  };
  const onCancel = () => {
    handleCancel();
  };
  return (
    <Modal
      title="Thêm tài khoản"
      open={open}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Họ và tên"
          name="product_name"
          rules={[{ required: true, message: "Vui lòng nhập họ và tên" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Địa chỉ"
          name="address"
          rules={[{ required: true, message: "Vui lòng nhập địa chỉ" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 16, span: 16 }}>
          <Button
            size="large"
            type="dashed"
            onClick={onCancel}
            style={{ marginRight: "1rem", borderRadius: "10px" }}
          >
            Hủy
          </Button>
          <Button
            size="large"
            style={{ borderRadius: "10px" }}
            type="primary"
            htmlType="submit"
            onClick={onSubmit}
          >
            Lưu
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default OrderFormPage;
