import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (username === "demo" && password === "password") {
    return NextResponse.json({ success: true, message: "Login successful" });
  }
  return NextResponse.json(
    { success: false, message: "Invalid credentials" },
    { status: 401 }
  );
}