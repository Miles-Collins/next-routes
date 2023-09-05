import { NextResponse } from "next/server"

interface Feedback {
  name?: string
  email?: string
  message?: string
}

export async function POST(request: Request) {
  const data: Feedback = await request.json()

  const {name, email, message} = data

  return NextResponse.json({name, email, message})
}