import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    // const id = await req.json();
    const id = 1;
    // get session here anid get user's id
    const { data } = await axios.post(
      `http://127.0.0.1:8000/habits/get-user-habits?userId=${id}`
    );

    return NextResponse.json(
      { message: "Found user habits", habits: data.habits },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
