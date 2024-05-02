"use client";
// import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button } from "antd";

const CreateMembers = () => {
  const onFinish = async (values) => {
    const data = await axios.post(
      "http://localhost:8000/api/v1/members/create-members",
      values
    );
    // unfinished - show notification
    if (data) console.log("member created successfully");
    console.log("Success member create:", data);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="flex flex-col gap-10 min-h-[100vh] justify-center items-center">
      <h2 className="text-[2rem] font-bold">Create member</h2>
      <div className="w-[60rem] mx-auto">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Member Name"
            name="memberName"
            rules={[
              {
                required: true,
                message: "Please input member name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Eamil"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CreateMembers;
