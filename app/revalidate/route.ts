import { NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

export async function POST(req: Request) {
  revalidateTag('classes')
  return NextResponse.json({ revalidated: true, now: Date.now() })
}
