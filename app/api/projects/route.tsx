import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"
import z from "zod";

const prisma = new PrismaClient();

const createProjectSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  liveDemoUrl: z.string().min(1),
  category: z.string().min(1)
})


export async function GET() {
 try {
   const projects = await prisma.project.findMany();
   return NextResponse.json(projects);
 } catch (err) {
  return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
};

export async function POST(req:NextRequest) {
  try {
    const body = await req.json()
    const parsed = createProjectSchema.safeParse(body);

     if (!parsed.success) {
      return NextResponse.json({ error: parsed.error }, { status: 400 });
    }

    const { title,description,liveDemoUrl,category } =  parsed.data;
    
    const newProject = await prisma.project.create({
      data:{title,description,liveDemoUrl,category}
    })

    return NextResponse.json(newProject,{status:201})
    
  } catch (err) {
     console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
};
