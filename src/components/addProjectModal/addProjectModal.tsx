import React, { useState } from "react";
import { Button, Modal } from "antd";
import ProjectModalForm from "./projectModalForm";

const AddProjectModal = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState({ username: "dfjdlsf" });
  const [formData, setFormData] = useState(null);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    if (formData) {
      console.log("formData:", formData);
    }
    // setConfirmLoading(true);
    // setTimeout(() => {
    //   setOpen(false);
    //   setConfirmLoading(false);
    // }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const onFormChange = (_, allValues) => {
    setFormData(allValues);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Project
      </Button>
      <Modal
        title="Project Details"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        okText="Submit"
        onCancel={handleCancel}
      >
        <ProjectModalForm onFormChange={onFormChange} />
        {/* <p>{modalText?.username}</p> */}
      </Modal>
    </>
  );
};
export default AddProjectModal;
