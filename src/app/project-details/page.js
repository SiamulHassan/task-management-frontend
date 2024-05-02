"use client";
import { format } from "date-fns";
import React from "react";
import { Card, Col, Row, Button } from "antd";
import { useTask } from "@/reactQuery/useFetchTask";
import AddProjectModal from "@/components/addProjectModal/addProjectModal";
import { useDeleteTask } from "@/reactQuery/useDeleteTask";
// import { useCreateTask } from "@/reactQuery/useCreateTask";
const ProjectOverview = () => {
  const { delTask } = useDeleteTask();
  const { isLoading, data, error } = useTask();
  // const { data: createdData } = useCreateTask();
  return (
    <div className="container mx-auto">
      <h2 className="text-[2rem] font-bold my-5">Project Details</h2>
      <Row gutter={16} className="container mx-auto p-8">
        {data?.data?.task?.map((dataTask, key) => (
          <Col span={8} key={dataTask._id} className="mb-5">
            <Card title="Task" bordered={false}>
              <p>Task Name : {dataTask.taskName}</p>
              <p>Task Description :{dataTask.taskDescription} </p>
              <p>
                Deadline : {format(new Date(dataTask.deadline), "MM/dd/yyyy")}
              </p>
              <p>
                Due Date : {format(new Date(dataTask.dueDate), "MM/dd/yyyy")}
              </p>
              <p>Assigned Members: {dataTask.assignMembers}</p>
              <div className="flex gap-3 mt-5">
                <Button type="primary">Add Member</Button>
                <AddProjectModal status="edit" dataTaskId={dataTask._id} />
                <Button type="primary" onClick={() => delTask(dataTask._id)}>
                  Delete
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProjectOverview;
