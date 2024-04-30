import React from "react";
import { Form, Input, DatePicker, Radio, Select, Switch } from "antd";
const ProjectModalForm = ({ onFormChange }) => {
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      onValuesChange={onFormChange}
      style={{
        width: 650,
      }}
    >
      <Form.Item
        label="Project Name"
        name="taskName"
        rules={[
          {
            required: true,
            message: "Please input project name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Task Description"
        name="taskDescription"
        rules={[
          {
            required: true,
            message: "Please input Task Description!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Deadline"
        name="deadline"
        rules={[
          {
            required: true,
            message: "Please input deadline!",
          },
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Due Date"
        name="dueDate"
        rules={[
          {
            required: true,
            message: "Please input Due Date!",
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
    </Form>
  );
};

export default ProjectModalForm;
