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
const AccountFormPage = ({
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
      title="Thêm tài khoản"
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
          label="Số điện thoại"
          name="number"
          rules={[
            { required: true, message: "Vui lòng nhập số điện thoại" },
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
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập đúng định dạng email" },
          ]}
        >
          <InputAccount size="large" placeholder="Nhập email" />
        </Form.Item>
        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[
            { required: true, message: "Vui lòng nhập mật khẩu" },
            {
              min: 6,
              message: "Vui lòng nhập từ 6 ký tự!",
            },
          ]}
        >
          <InputAccount size="large" placeholder="Nhập mật khẩu" />
        </Form.Item>
        <Form.Item
          label="Nhập lại mật khẩu"
          name="passwordConfirm"
          rules={[
            { required: true, message: "Vui lòng nhập lại mật khẩu" },
            {
              validator(_: Rule, value: string) {
                if (!value) return Promise.resolve();
                if (!value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Mật khẩu nhập lại chưa trùng khớp!")
                );
              },
            },
          ]}
        >
          <InputAccount.Password
            placeholder="Nhập lại mật khẩu"
            size="large"
            style={{ borderRadius: "10px" }}
          />
        </Form.Item>
        <Form.Item
          label="Loại tài khoản"
          name="role"
          rules={[{ required: true, message: "Vui lòng chọn loại tài khoản" }]}
        >
          <Select
            style={{ borderRadius: "10px" }}
            size="large"
            placeholder="Chọn loại tài khoản"
          >
            <Option value="admin">Admin</Option>
            <Option value="admin2">Admin kế toán</Option>
          </Select>
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

export default AccountFormPage;

const InputAccount = styled(Input)`
  border-radius: 10px;
`;
