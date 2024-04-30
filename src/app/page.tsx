"use client";
import React from "react";
import { Button } from "antd";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <p className="text-[30px] text-center my-3">Project management system</p>
      <Button type="primary" onClick={() => router.push("/login")}>
        Login
      </Button>
    </div>
  );
};

export default Home;
