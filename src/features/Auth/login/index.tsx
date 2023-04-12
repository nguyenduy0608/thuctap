import React, { useState } from "react";
import {
  ContainerStyled,
  LoginLeftStyled,
  LoginRightFormStyled,
  LoginRightStyled,
  WrapperStyled,
} from "../style";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Cookie from "js-cookie";
import { io } from "socket.io-client";
import { Button, Checkbox, Form, Input, message, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SESSION_ID, getUserInfoAction, setToken } from "./AuthSlice";
import LocalStorage from "../../../apis/LocalStorage";
import { Notification, wait } from "../../../utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
interface ILogin {
  email: string;
  password: string;
  remember: boolean;
}
const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const dispatch: any = useDispatch();

  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      const resLogin = await axios.post(
        "https://dev.httapi.winds.vn/api/v1/admin/session",
        {
          password: values.password,
          phone_number: values.phone_number,
        }
      );
      const token = resLogin.data.token;
      localStorage.setItem("token", token);
      Cookie.set(SESSION_ID, resLogin.data.token, {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      });

      const res = await axios.get(
        "https://dev.httapi.winds.vn/api/v1/admin/session/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res?.data;
      console.log(data);
      if (resLogin.data.shop_id == null) {
        console.log(resLogin.data.shop_id);
        navigate("/");
      }
      //  else {
      //   history.replace("/dash-board");
      // }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const onLogin = () => {
    try {
      const socket = io("http://127.0.0.1:5173/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ContainerStyled>
      <WrapperStyled>
        <LoginLeftStyled></LoginLeftStyled>
        <LoginRightStyled>
          <LoginRightFormStyled>
            <h2>Đăng nhập với tài khoản của bạn</h2>
            <p>Để sử dụng dịch vụ của chúng tôi</p>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={(values: any) => {
                onFinish(values);
              }}
              autoComplete="off"
              layout="vertical"
            >
              <Form.Item
                style={{ marginBottom: "10px" }}
                label="Số điện thoại"
                name="phone_number"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input size="large" placeholder="Nhập địa chỉ email" />
              </Form.Item>

              <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[
                  { required: true, message: "Vui lòng nhập mật khẩu!" },
                  {
                    min: 6,
                    message: "Nhập ít nhất 6 ký tự!",
                  },
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="Nhập mật khẩu của bạn"
                />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Checkbox>Nhớ mật khẩu</Checkbox>
                  <a>Quên mật khẩu?</a>
                </div>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  Đăng nhập
                </Button>
              </Form.Item>
            </Form>
          </LoginRightFormStyled>
          <div>
            Nếu bạn chưa có tài khoản? <Link to="/">Đăng ký ngay </Link>
          </div>
        </LoginRightStyled>
      </WrapperStyled>
    </ContainerStyled>
  );
};
export default LoginPage;
