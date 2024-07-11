import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { id } = await req.json();

    const { data } = await axios.post(
      `http://127.0.0.1:8000/habits/get-habit?habitId=${id}`
    );

    return NextResponse.json(
      { message: "Successfully created habit", data: data },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
