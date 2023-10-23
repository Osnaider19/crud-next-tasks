"use client";
import React from "react";
import { useRouter } from "next/navigation";
export const ButtonDeleteTaks = ({ id } : {id : string}) => {
  const router = useRouter();
  const handelDelete = async () => {
    await fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: "DELETE",
    });
    router.refresh();
  };
  return (
    <button className="bg-red-400 rounded-md py-2 px-4" onClick={handelDelete}>
      delete
    </button>
  );
};
