import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    // Create a new collection
    const { title, description } = req.body;
    const collection = await prisma.collection.create({
      data: {
        title,
        description,
      },
    });
    res.status(201).json(collection);
  } else if (req.method === "GET") {
    // Fetch all collections
    const collections = await prisma.collection.findMany();
    res.status(200).json(collections);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
