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
const CustomerFormPage = ({
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
      title="Thêm khách hàng"
      open={open}
      onCancel={handleCancel}
      footer={null}
      width="36%"
    >
      <Form name="basic" labelCol={{ span: 6 }} autoComplete="off">
        <Form.Item
          label="Họ và tên"
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập họ và tên" }]}
        >
          <InputAccount placeholder="Nhập họ và tên" size="large" />
        </Form.Item>
        <Form.Item
          label="Mã khách hàng"
          name="id"
          rules={[{ required: true, message: "Vui lòng nhập mã khách hàng" }]}
        >
          <InputAccount placeholder="Nhập mã khách hàng" size="large" />
        </Form.Item>
        <Form.Item
          label="Số điện thoại"
          name="number"
          rules={[
            {
              validator(_: Rule, value: number) {
                if (!value?.toString()?.trim()) return Promise.resolve();
                if (
                  (!value?.toString()?.match(SEVEN) &&
                    !value?.toString()?.match(MOBI) &&
                    !value?.toString()?.match(VIETTEL) &&
                    !value?.toString()?.match(VINA) &&
                    !value?.toString()?.match(FIVE)) ||
                  isNaN(Number(value))
                ) {
                  return Promise.reject(
                    new Error("Vui lòng nhập đúng định dạng số điện thoại!")
                  );
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <Input
            size="large"
            style={{ width: "100%", borderRadius: "10px" }}
            placeholder="Nhập số điện thoại"
          />
        </Form.Item>

        <Form.Item
          label="Địa chỉ"
          name="address"
          rules={[
            { required: true, message: "Vui lòng nhập địa chỉ khách hàng" },
          ]}
        >
          <InputAccount placeholder="Nhập địa chỉ" size="large" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 16, span: 16 }}>
          <Button
            type="dashed"
            size="large"
            onClick={onCancel}
            style={{
              marginRight: "1rem",
              borderRadius: "10px",
            }}
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

export default CustomerFormPage;

const InputAccount = styled(Input)`
  border-radius: 10px;
`;
