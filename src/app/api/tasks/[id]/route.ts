import Task from "@/models/Task";
import { connectDb } from "@/utils/mongoose";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  params: {
    id: string;
  };
};

export async function GET(request: NextRequest, { params }: Params) {
  await connectDb();
  try {
    const taskFodun = await Task.findById(params.id);
    if (!taskFodun) {
      return NextResponse.json(
        {
          message: "no se encontro la task",
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(taskFodun);
  } catch (error: any) {
    NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function DELETE(request: NextRequest, { params }: Params) {
  const taskDelete = await Task.findByIdAndDelete(params.id);
  if (!taskDelete) {
    NextResponse.json(
      {
        message: "taks no encontrada",
      },
      {
        status: 404,
      }
    );
  }
  return NextResponse.json(taskDelete);
}

export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const data = await request.json();
    const taskUptate = await Task.findById(params.id, data, {
      new: true,
    });
    return NextResponse.json(taskUptate);
  } catch (error) {
    NextResponse.json(
      {
        message: error,
      },
      {
        status: 404,
      }
    );
  }
}
