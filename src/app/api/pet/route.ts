import fs from 'fs/promises'
import path from 'path'
import { NextRequest, NextResponse } from 'next/server'

type ReqBody = {
  pet: string
}

export async function POST(req: NextRequest) {
  try {
    const body: ReqBody = await req.json()

    const pet = body.pet
    if (pet == null) {
      return NextResponse.json({ success: false, message: 'Missing pet name.' })
    }
    await fs.writeFile('./pet.txt', pet, 'utf-8')
    return NextResponse.json({
      success: true,
    })
  } catch (error) {
    console.log(error)
  }
  return NextResponse.json({ success: false })
}
