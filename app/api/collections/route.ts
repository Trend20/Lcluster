import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// creating a collection
export async function POST(req: any) {
  try {
    const { name, description } = req.body;
    await prisma.collection.create({
      data: {
        name,
        description,
      },
    });
    return NextResponse.json(
      { message: "Collection Created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

// getting all collections
// export async function GET() {
//   try {
//     const res = await prisma.library.findMany();
//     return NextResponse.json(res, { status: 201 });
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Error Occurred while creating Collection" },
//       { status: 500 }
//     );
//   }
// }
