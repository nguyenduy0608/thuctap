import React from "react";
import {
  ContainerStyled,
  LoginLeftStyled,
  LoginRightFormStyled,
  LoginRightStyled,
  WrapperStyled,
} from "../style";
import { Button, Checkbox, Form, Input, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
interface ILogin {
  email: string;
  password: string;
  remember: boolean;
}
const LoginPage = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    if (values.email === "admin@gmail.com" && values.password === "123456") {
      return navigate("/");
    }
    notification["error"]({
      message: "MERN STACK",
      description: "Tài khoản hoặc mật khẩu không chính xác!",
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
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
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout="vertical"
            >
              <Form.Item
                style={{ marginBottom: "10px" }}
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  {
                    type: "email",
                    message: "Vui lòng nhập đúng định dạng email",
                  },
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
