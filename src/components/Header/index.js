import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Modal, Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./header.less";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      isLogin: localStorage.getItem("isLogin"),
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  login = () => {
    this.setState({
      visible: false,
      isLogin: true,
    });
    localStorage.setItem("isLogin", true);
  };

  logout = () => {
    this.setState({
      isLogin: false,
    });
    localStorage.setItem("isLogin", "");
  };

  render() {
    return (
      <header>
        <nav>
          <NavLink exact to="/">
            My PTE
          </NavLink>
          {this.state.isLogin ? (
            <span>
              <NavLink to="/personal">Profile</NavLink>
              <span onClick={this.logout} className="login">
                Logout
              </span>
            </span>
          ) : (
            <span onClick={this.showModal} className="login">
              Login
            </span>
          )}
        </nav>
        <Modal
          title={<h3>Login</h3>}
          width={350}
          visible={this.state.visible}
          onOk={this.handleOk}
          footer={null}
          onCancel={this.handleCancel}
        >
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
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
                onClick={this.login}
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              or <a href="/">Sign up now!</a>
            </Form.Item>
          </Form>
        </Modal>
      </header>
    );
  }
}

export default Header;
