"use client";
import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";

type Task = {
  title: string;
  description: string;
};

export const From = () => {
  const createTask = async (newTaks: Task) => {
    await fetch("http://localhost:3000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTaks),
    });
  };
  const handelSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { elements } = e.currentTarget;
    const title = elements.namedItem("title") as HTMLInputElement;
    const description = elements.namedItem("description") as HTMLInputElement;
    if (title.value === "" || description.value === " ")
      return console.log("los campos esta vacios");
    const newTask = {
      title: title.value,
      description: description.value,
    };
    await createTask(newTask);
    router.refresh();
    description.value = ""
    title.value = ""
  };
  const router = useRouter();
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div className="flex flex-col gap-2">
          <label className="block">title</label>
          <input
            type="text"
            name="title"
            className="bg-slate-500 text-white outline-none px-4 h-10 "
          />

          <label>description</label>
          <input
            type="text"
            name="description"
            className="bg-slate-500 text-white outline-none px-4 h-10 "
          />
          <button type="submit" className="py-2 px-4 bg-green-500">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};
