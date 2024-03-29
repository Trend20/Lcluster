import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    // Create a new library
    const { name, collectionId } = req.body;
    const library = await prisma.library.create({
      data: {
        name,
        collectionId,
      },
    });
    res.status(201).json(library);
  } else if (req.method === "GET") {
    // Fetch all libraries
    const libraries = await prisma.library.findMany();
    res.status(200).json(libraries);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
