import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
// import { useRouter } from "next/router";
import ProjectModalForm from "./projectModalForm";
import axios from "axios";
import { useCreateTask } from "../../reactQuery/useCreateTask";
import { useTask } from "@/reactQuery/useFetchTask";
const AddProjectModal = ({ status, dataTaskId = "" }) => {
  // member model er shathe kono realtion dorkar nai taskModel er
  const [open, setOpen] = useState(false);

  // const router = useRouter();
  const { data } = useTask();
  const { isLoading, data: createdData, createTask } = useCreateTask();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState({ username: "dfjdlsf" });
  const [formData, setFormData] = useState(null);
  const [seeEditItem, setEditItem] = useState(null);

  const showModal = () => {
    // getting id
    const taskId = dataTaskId;
    const targetItemEdit = data?.data?.task.filter(
      (item) => item._id === taskId
    );
    // filter item with that id and pass to form
    setEditItem(targetItemEdit);
    setOpen(true);
  };
  const handleOk = async () => {
    if (formData && status === "edit") {
      const data = await axios.patch(
        `http://localhost:8000/api/v1/overview/create-overview/${dataTaskId}`,
        { ...formData, id: dataTaskId }
      );
      setOpen(false);
    } else {
      createTask(formData);
      // await axios.post(
      //   "http://localhost:8000/api/v1/overview/create-overview",
      //   formData
      // );
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
    console.log("formdata sub click:", allValues);
    setFormData(allValues);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        {status === "edit" ? "Edit" : "Add Project"}
      </Button>
      <Modal
        title="Project Details"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        okText="Submit"
        onCancel={handleCancel}
      >
        <ProjectModalForm
          onFormChange={onFormChange}
          targetItemEdit={seeEditItem}
        />
        {/* <p>{modalText?.username}</p> */}
      </Modal>
    </>
  );
};
export default AddProjectModal;
