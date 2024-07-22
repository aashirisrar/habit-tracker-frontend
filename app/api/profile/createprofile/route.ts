import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const d = await req.json();

    const { data } = await axios.post(
      "http://127.0.0.1:8000/users/create-user",
      d
    );

    if (data.error == "user already exists") {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Successfully created user", data: data },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
