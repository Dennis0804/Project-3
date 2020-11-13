import React, { Component } from "react";
import { Modal, Form, Input, Button, Checkbox } from "antd";
import { FolderOpenOutlined, LockOutlined } from "@ant-design/icons";
import "./LoginModal.css";

class LoginModal extends Component {
  render() {
    const { visible, handleCancel, login, register } = this.props;
    return (
      <Modal
        title={<h3>Login</h3>}
        width={350}
        visible={visible}
        footer={null}
        onCancel={handleCancel}
      >
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={login}
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your Email!" },
              { type: "email" },
            ]}
          >
            <Input
              prefix={<FolderOpenOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="/">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              block
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            <div className="loginText">Do not have an account?</div>
            <Button onClick={register}>Register now!</Button>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default LoginModal;
