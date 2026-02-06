import { NextResponse } from "next/server"
import { assets } from "../../../data/sampleAssets"

export async function GET() {
  return NextResponse.json({
    source: "INFER",
    count: assets.length,
    assets
  })
}
