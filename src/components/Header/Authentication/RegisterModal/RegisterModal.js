import React, { Component } from "react";
import { Modal, Form, Input, Button } from "antd";
import { FolderOpenOutlined, LockOutlined } from "@ant-design/icons";
import "./RegisterModal.css";

class RegisterModal extends Component {
  render() {
    const { visible, handleCancel, showModal } = this.props;
    return (
      <Modal
        title={<h3>Register</h3>}
        width={350}
        visible={visible}
        footer={null}
        onCancel={handleCancel}
      >
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={showModal}
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
          <Form.Item
            name="passwordAgain"
            rules={[
              { required: true, message: "Please input your Password again!" },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password again"
            />
          </Form.Item>
          <Form.Item>
            <Button
              block
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
            <div className="registerText">Already have an account?</div>
            <Button onClick={showModal}> Login Now!</Button>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default RegisterModal;
