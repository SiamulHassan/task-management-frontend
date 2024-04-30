"use client";
import React from "react";
import { Col, Divider, Row, Button } from "antd";
import { Card } from "antd";
import { useRouter } from "next/navigation";
import AddProjectModal from "@/components/addProjectModal/addProjectModal";
const OverView = () => {
  const router = useRouter();
  return (
    <div className="container mx-auto">
      <h2 className="my-6 font-bold text-3xl">Projects Overview</h2>

      <div className="add-project">
        {/* <Divider orientation="left">sub-element align left</Divider> */}
        <Row justify="start" align="middle" gutter={[4, 12]}>
          <Col span={6}>
            <Card
              style={{
                width: 300,
              }}
            >
              <h3 className="font-bold text-2xl">Project Name</h3>
              <p>deadlie: 4/5/24</p>
              <div className="flex gap-3 mt-5">
                <Button
                  type="primary"
                  onClick={() => router.push("/project-details")}
                >
                  View
                </Button>
                <Button type="primary">Edit</Button>
                <Button type="primary">Delete</Button>
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              style={{
                width: 300,
              }}
            >
              <h3 className="font-bold text-2xl">Project Name</h3>
              <p>deadlie: 4/5/24</p>
              <div className="flex gap-3 mt-5">
                <Button
                  type="primary"
                  onClick={() => router.push("/project-details")}
                >
                  View
                </Button>
                <Button type="primary">Edit</Button>
                <Button type="primary">Delete</Button>
              </div>
            </Card>
          </Col>
          <Col>
            <AddProjectModal />
            {/* <Button type="primary">Add Project</Button> */}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OverView;
