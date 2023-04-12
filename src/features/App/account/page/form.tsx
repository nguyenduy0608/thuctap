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
  message,
} from "antd";
import styled from "styled-components";
import { Rule } from "antd/lib/form";
import { useForm } from "antd/lib/form/Form";
import { DataType } from "../components/Account.Config";
import axios from "axios";
const REG_PHONE = /((^(\+84|84|0|0084){1})(3|5|7|8|9))+([0-9]{8})$/;
const MOBI = /((^(\+84|84|0|0084){1})(3)(2|3|4|5|6|7|8|9))+([0-9]{7})$/;
const VINA = /((^(\+84|84|0|0084){1})(8)(2|3|4|5|6|8|9))+([0-9]{7})$/;
const VIETTEL = /((^(\+84|84|0|0084){1})(9)(3|4|1|6|7|8|9|0))+([0-9]{7})$/;
const SEVEN = /((^(\+84|84|0|0084){1})(7)(0|6|7|8|9))+([0-9]{7})$/;
const FIVE = /((^(\+84|84|0|0084){1})(5)(9))+([0-9]{7})$/;

const Option = Select;
const initialValue = {
  full_name: "",
  email: "",
  avatar: "",
  phone_number: "",
  password: "",
  is_root: null,
  status: "",
  password_confirmation: "",
};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const AccountFormPage = ({
  handleLoading,
  handleUnLoading,
  handleCancel,
  handleOk,
  open,
  values,
  handleCallBack,
}: {
  handleLoading: any;
  handleUnLoading: any;
  handleCallBack: any;
  handleCancel: any;
  handleOk: any;
  open: any;
  values: DataType | any;
}) => {
  const [form] = Form.useForm();

  React.useEffect(() => {
    if (values) {
      form.setFieldsValue({ ...values });
    }
  }, [values]);
  const formReset = () => {
    form.setFieldsValue(initialValue);
  };
  const onSubmit = async (data: DataType) => {
    if (values) {
      handleLoading();
      try {
        const res = await axios.patch(
          `https://dev.httapi.winds.vn/api/v1/admin/admin/${values?.id}`,
          {
            kiotviet_id: 0,
            status: data?.status === 1 ? true : false,
            is_root: data?.is_root,
            email: data?.email.trim() || "",
            full_name: data?.full_name?.trim(),
          }
        );
        onCancel();
        handleCallBack();
        handleUnLoading();
        message.success("Cập nhật tài khoản thành công");
      } catch (error) {
        console.error(error);
      }
    } else {
      handleLoading();

      try {
        const res = await axios.post(
          "https://dev.httapi.winds.vn/api/v1/admin/admin",
          {
            kiotviet_id: 0,
            status: true,
            is_root: data?.is_root,
            password_confirmation: data?.password_confirmation,
            password: data?.password,
            email: data?.email?.trim(),
            phone_number: data?.phone_number,
            full_name: data?.full_name?.trim(),
          }
        );
        onCancel();
        handleCallBack();
        handleUnLoading();
        message.success("Thêm mới tài khoản thành công");
      } catch (error) {
        console.log(error);
      }
    }
  };
  const onCancel = () => {
    handleCancel();
    formReset();
  };
  return (
    <Modal
      title={values ? "Sửa tài khoản" : "Thêm tài khoản"}
      open={open}
      onCancel={handleCancel}
      footer={null}
      width="36%"
    >
      <Form
        {...formItemLayout}
        name="basic"
        labelCol={{ span: 6 }}
        autoComplete="off"
        form={form}
        onFinish={(value: DataType) => {
          onSubmit(value);
        }}
      >
        <Form.Item
          label="Họ và tên"
          name="full_name"
          rules={[{ required: true, message: "Vui lòng nhập họ và tên" }]}
        >
          <InputAccount placeholder="Nhập họ và tên" size="large" />
        </Form.Item>

        <Form.Item
          label="Số điện thoại"
          name="phone_number"
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
            disabled={values}
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
        {values ? (
          <></>
        ) : (
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
        )}
        {values ? (
          <></>
        ) : (
          <Form.Item
            label="Nhập lại mật khẩu"
            name="password_confirmation"
            rules={[
              { required: true, message: "Vui lòng nhập lại mật khẩu" },
              // {
              //   validator(_: Rule, value: string) {
              //     if (!value) return Promise.resolve();
              //     if (!value) {
              //       return Promise.resolve();
              //     }
              //     return Promise.reject(
              //       new Error("Mật khẩu nhập lại chưa trùng khớp!")
              //     );
              //   },
              // },
            ]}
          >
            <InputAccount.Password
              placeholder="Nhập lại mật khẩu"
              size="large"
              style={{ borderRadius: "10px" }}
            />
          </Form.Item>
        )}

        <Form.Item
          label="Loại tài khoản"
          name="is_root"
          rules={[{ required: true, message: "Vui lòng chọn loại tài khoản" }]}
        >
          <StyledSelect
            style={{ borderRadius: "10px" }}
            size="large"
            placeholder="Chọn loại tài khoản"
            disabled={values}
            allowClear
          >
            <Option value={true}>Admin</Option>
            <Option value={false}>Admin kế toán</Option>
          </StyledSelect>
        </Form.Item>

        {values ? (
          <Form.Item
            label="Trạng thái"
            name="status"
            rules={[
              { required: true, message: "Vui lòng chọn trạng thái hoạt động" },
            ]}
          >
            <StyledSelect
              style={{ borderRadius: "10px" }}
              size="large"
              placeholder="Chọn trạng thái hoạt động"
              allowClear
            >
              <Option value={1}>Đang hoạt động</Option>
              <Option value={0}>Ngừng hoạt động</Option>
            </StyledSelect>
          </Form.Item>
        ) : (
          <></>
        )}

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
const StyledSelect = styled(Select)`
  border-radius: 10px;
`;
