"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Form, Input, notification } from "antd";
const Login = () => {
  const router = useRouter();
  const [api, contextHolder] = notification.useNotification();
  const onFinish = (values) => {
    if (values) {
      api.open({
        message: "Success",
      });
      setTimeout(() => {
        router.push("/overview");
      }, 1000);
    }
  };
  const onFinishFailed = (errorInfo) => {
    if (errorInfo) {
      api.open({
        message: "Invalid Credentials",
      });
    }
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {contextHolder}
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        className="w-[50rem] shadow-2xl rounded-lg flex flex-col justify-center items-center h-[30rem]"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input placeholder="syeam45@gmail.com" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="12345678" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
