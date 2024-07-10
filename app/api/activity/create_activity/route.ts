import { NextResponse } from "next/server";
import { signIn } from "@/lib/auth";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const d = await req.json();

    // get owner here
    d.owner_id = 1;
    console.log(d);

    const { data } = await axios.post(
      "http://127.0.0.1:8000/habits/create-habit",
      d
    );

    return NextResponse.json(
      { message: "Successfully created habit", data: data },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
