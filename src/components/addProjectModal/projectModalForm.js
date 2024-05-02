"use client";
import React, { useEffect, useState } from "react";

import { Form, Input, DatePicker, Radio, Select, Switch } from "antd";
import axios from "axios";
const ProjectModalForm = ({ onFormChange, targetItemEdit }) => {
  const [dataTask] = targetItemEdit;
  console.log("dataTask", dataTask);
  const [options, setOptions] = useState([]);
  // getting members
  useEffect(() => {
    async function getMembers() {
      const {
        data: { members },
      } = await axios.get(
        "https://task-management-backend-4s7p.onrender.com/api/v1/members/create-members"
      );
      // console.log("members", members);
      const memArr = [];
      members.map((member) => {
        memArr.push({ label: member.name, value: member.email });
      });
      setOptions(memArr);
    }
    getMembers();
  }, []);
  const handleMemberChange = (value) => {
    // api/v1/overview/create-overview
    console.log(`select option : ${value}`);
  };
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
        initialValue={dataTask?.projectName}
        label="Project Name"
        name="projectName"
        rules={[
          {
            required: true,
            message: "Please input task name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        initialValue={dataTask?.taskName}
        label="Task Name"
        name="taskName"
        rules={[
          {
            required: true,
            message: "Please input task name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        initialValue={dataTask?.taskDescription}
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
        // initialValue={format(dataTask.deadline, "MM/dd/yyyy")}

        label="Deadline"
        name="deadline"
        rules={[
          {
            required: true,
            message: "Please input deadline!",
          },
        ]}
      >
        <Input type="date" />
      </Form.Item>

      <Form.Item
        // initialValue={format(dataTask.dueDate, "MM/dd/yyyy") || "2024/03/25"}
        label="Due Date"
        name="dueDate"
        rules={[
          {
            required: true,
            message: "Please input Due Date!",
          },
        ]}
      >
        <Input type="date" />
      </Form.Item>
      <Form.Item
        name="assignMembers"
        label="Assign Members"
        initialValue={dataTask?.assignMembers}
      >
        <Select
          mode="multiple"
          style={{
            width: "100%",
          }}
          placeholder="Please select"
          // defaultValue={["a10", "c12"]}
          onChange={handleMemberChange}
          options={options}
        />
      </Form.Item>
    </Form>
  );
};

export default ProjectModalForm;
