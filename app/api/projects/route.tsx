import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"
import z from "zod";
const prisma = new PrismaClient();


export async function GET() {
 try {
   const projects = await prisma.project.findMany();
   return NextResponse.json(projects);
 } catch (err) {
   return NextResponse.json({err:"Server side err",})
 }
};

