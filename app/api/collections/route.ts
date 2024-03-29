import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// creating a collection
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description } = body;
    const collection = await prisma.collection.create({
      data: {
        name,
        description,
      },
    });
    return NextResponse.json(collection, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

// getting all collections
export async function GET() {
  try {
    const res = await prisma.collection.findMany();
    return NextResponse.json(res, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error Occurred while creating Collection" },
      { status: 500 }
    );
  }
}
