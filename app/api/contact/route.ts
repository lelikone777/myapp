import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

type Payload = {
  name: string;
  company: string;
  phone: string;
  email: string;
  telegram: string;
  message: string;
};

const filePath = path.join(process.cwd(), "data", "submissions.json");

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<Payload>;
    const entry: Payload = {
      name: body.name?.trim() || "",
      company: body.company?.trim() || "",
      phone: body.phone?.trim() || "",
      email: body.email?.trim() || "",
      telegram: body.telegram?.trim() || "",
      message: body.message?.trim() || "",
    };

    if (!entry.name || !entry.email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    let existing: Payload[] = [];
    try {
      const raw = await fs.readFile(filePath, "utf8");
      existing = JSON.parse(raw);
    } catch (err) {
      existing = [];
    }

    existing.push({ ...entry, message: entry.message });
    await fs.writeFile(filePath, JSON.stringify(existing, null, 2), "utf8");

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}
