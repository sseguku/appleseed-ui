import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const students = await prisma.student.findMany({
      include: {
        class: true,
        parents: true,
      },
    });
    return NextResponse.json(students);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching students" },
      { status: 500 }
    );
  }
}
