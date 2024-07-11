import { NextResponse } from "next/server";
import { signIn } from "@/lib/auth";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const d = await req.json();

    const { data } = await axios.post(
      "http://127.0.0.1:8000/values/create-values",
      d
    );

    return NextResponse.json(
      { message: "Successfully created values", data: data },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
