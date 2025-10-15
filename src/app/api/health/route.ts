import { NextResponse } from "next/server";

export async function GET() {
  const healthData = {
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || "development",
    version: "1.0.0",
  };

  return NextResponse.json(healthData, { status: 200 });
}
