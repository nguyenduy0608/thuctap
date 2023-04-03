import React from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Spin,
} from "antd";
import styled from "styled-components";
import { Rule } from "antd/lib/form";
import { useForm } from "antd/lib/form/Form";
import TextArea from "antd/lib/input/TextArea";
import { RADIUS } from "../../../../config/theme";
const REG_PHONE = /((^(\+84|84|0|0084){1})(3|5|7|8|9))+([0-9]{8})$/;
const MOBI = /((^(\+84|84|0|0084){1})(3)(2|3|4|5|6|7|8|9))+([0-9]{7})$/;
const VINA = /((^(\+84|84|0|0084){1})(8)(2|3|4|5|6|8|9))+([0-9]{7})$/;
const VIETTEL = /((^(\+84|84|0|0084){1})(9)(3|4|1|6|7|8|9|0))+([0-9]{7})$/;
const SEVEN = /((^(\+84|84|0|0084){1})(7)(0|6|7|8|9))+([0-9]{7})$/;
const FIVE = /((^(\+84|84|0|0084){1})(5)(9))+([0-9]{7})$/;
// const [form] = Form.useForm();
const onFinish = (values: any) => {
  console.log("Success:", values);
};
const Option = Select;
const initialValue = {
  name: "",
  email: "",
  avatar: "",
  number: "",
  createdAt: "",
  updatedAt: "",
  password: "",
  role: "",
  passwordConfirm: "",
};
const ProductFormPage = ({
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
  const formReset = () => {
    // form.setFieldsValue(initialValue);
  };
  const onSubmit = () => {
    handleCancel();
    formReset();
  };
  const onCancel = () => {
    handleCancel();
    formReset();
  };
  return (
    <Modal
      title="Thêm sản phẩm"
      open={open}
      onCancel={handleCancel}
      footer={null}
      width="36%"
    >
      <Form name="basic" labelCol={{ span: 6 }} autoComplete="off">
        <Form.Item
          label="Mã sản phẩm"
          name="id"
          rules={[{ required: true, message: "Vui lòng nhập mã sản phẩm" }]}
        >
          <InputAccount placeholder="Nhập mã sản phẩm" size="large" />
        </Form.Item>
        <Form.Item
          label="Tên sản phẩm"
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm" }]}
        >
          <InputAccount placeholder="Nhập tên sản phẩm" size="large" />
        </Form.Item>

        <Form.Item
          label="Giá"
          name="price"
          rules={[{ required: true, message: "Vui lòng nhập giá bán" }]}
        >
          <InputAccount size="large" placeholder="Nhập giá bán" />
        </Form.Item>
        <Form.Item
          label="Số lượng"
          name="amount"
          rules={[{ required: true, message: "Vui lòng nhập số lượng" }]}
        >
          <InputAccount size="large" placeholder="Nhập số lượng" />
        </Form.Item>
        <Form.Item
          label="Mô tả"
          name="address"
          rules={[{ required: true, message: "Vui lòng nhập mô tả" }]}
        >
          <TextArea
            rows={6}
            maxLength={10}
            style={{ borderRadius: RADIUS }}
            placeholder="Nhập mô tả"
            size="large"
          />
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

export default ProductFormPage;

const InputAccount = styled(Input)`
  border-radius: 10px;
`;
