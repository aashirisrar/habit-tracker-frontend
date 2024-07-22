import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { id } = await req.json();

    const { data } = await axios.post(
      `http://127.0.0.1:8000/users/get-user?id=${id}`
    );

    return NextResponse.json(
      { message: "User found", data: data },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
