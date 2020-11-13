import React, { Component } from "react";
import { Modal, Form, Input, InputNumber } from "antd";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

class SetInfoModal extends Component {
  render() {
    let { visible, handleCancel, handleOk } = this.props;
    return (
      <Modal
        title={<h3></h3>}
        width={350}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          {...layout}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[{ type: "email" }, { required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "age"]}
            label="Age"
            rules={[{ type: "number", min: 0, max: 99 }, { required: true }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name={["user", "website"]} label="Website">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default SetInfoModal;
