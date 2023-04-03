import React from "react";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import styled from "styled-components";
import { RADIUS } from "../../../../config/theme";

const onFinish = (values: any) => {
  console.log("Success:", values);
};
const { TextArea } = Input;
const NotificationFormPage = ({
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
      title="Thêm thông báo"
      open={open}
      onCancel={handleCancel}
      footer={null}
      width="40%"
    >
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Tiêu đề"
          name="product_name"
          rules={[{ required: true, message: "Vui lòng nhập tiêu đề" }]}
        >
          <Input style={{ borderRadius: RADIUS }} />
        </Form.Item>

        <Form.Item
          label="Nội dung"
          name="address"
          rules={[{ required: true, message: "Vui lòng nhập nội dung" }]}
        >
          <TextArea rows={6} maxLength={10} style={{ borderRadius: RADIUS }} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 16, span: 16 }}>
          <Button
            size="large"
            type="dashed"
            onClick={onCancel}
            style={{ marginRight: "1rem", borderRadius: RADIUS }}
          >
            Hủy
          </Button>
          <Button
            size="large"
            style={{ borderRadius: RADIUS }}
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

export default NotificationFormPage;
