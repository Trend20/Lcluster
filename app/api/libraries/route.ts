import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// creating a collection
// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const { name } = body;
//     const library = await prisma.library.create({
//       data: {
//         name,
//       },
//     });
//     return NextResponse.json(library, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ message: error }, { status: 500 });
//   }
// }
