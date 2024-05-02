"use client";
import React from "react";
import { Col, Divider, Row, Button } from "antd";
import { Card } from "antd";
import { useRouter } from "next/navigation";
import AddProjectModal from "@/components/addProjectModal/addProjectModal";
import { useTask } from "@/reactQuery/useFetchTask";
import { format } from "date-fns/format";
import { useDeleteTask } from "../../reactQuery/useDeleteTask";

const OverView = () => {
  const { isLoading, data, error } = useTask();
  const { delTask } = useDeleteTask();

  const router = useRouter();

  return (
    <div className="container mx-auto">
      <h2 className="my-6 font-bold text-3xl">Projects Overview</h2>

      <div className="add-project">
        <Row justify="start" align="middle" gutter={[6, 12]}>
          {data?.data?.task.map((dataTask) => (
            <Col span={8} key={dataTask._id}>
              <Card title={dataTask.projectName} bordered={false}>
                <p>Task Name : {dataTask.taskName}</p>
                <p>
                  Deadline : {format(new Date(dataTask.deadline), "MM/dd/yyyy")}
                </p>
                <div className="flex gap-3 mt-5">
                  <Button
                    type="primary"
                    onClick={() => router.push("/project-details")}
                  >
                    View
                  </Button>

                  <AddProjectModal status="edit" dataTaskId={dataTask._id} />

                  <Button type="primary" onClick={() => delTask(dataTask._id)}>
                    Delete
                  </Button>
                </div>
              </Card>
            </Col>
          ))}

          <Col>
            <AddProjectModal status="add-project" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OverView;
