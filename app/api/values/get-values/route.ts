import { NextResponse } from "next/server";
import { signIn } from "@/lib/auth";
import axios from "axios";

export async function POST(req: Request) {
  try {
    // get habit id here
    // const id = await req.json();

    const id = 1;

    const { data } = await axios.post(
      `http://127.0.0.1:8000/values/get-habit-values?habitId=${id}`
    );

    return NextResponse.json(
      { message: "Successfully found values", data: data },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
