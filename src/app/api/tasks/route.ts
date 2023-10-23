import { connectDb } from "@/utils/mongoose";
import { NextRequest, NextResponse } from "next/server";
import Task from "@/models/Task";

type Params = {
  id: string;
};
export async function GET() {
  connectDb();
  const tasks = await Task.find();
  console.log(tasks);
  return NextResponse.json(tasks);
}

export async function POST(request: NextRequest, params: Params) {
  try {
    const data = await request.json();
    const newTask = new Task(data);
    const saveTask = await newTask.save();
    return NextResponse.json(saveTask);
  } catch (error) {
    return NextResponse.json("error" + error   , {
     status : 400,
     statusText : "invalid credencials"
    });
  }
}
