import { NextRequest, NextResponse } from "next/server";

// Type definition for contact form data
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save the message to a database
    // 2. Send an email notification
    // 3. Add to a message queue for processing
    // For demonstration, we'll just log it
    console.log("Contact form submission:", {
      name: body.name,
      email: body.email,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        message: "Thank you for your message! We'll get back to you soon.",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Handle GET requests to the contact API
export async function GET() {
  return NextResponse.json(
    {
      message: "Contact API endpoint. Use POST to submit contact form.",
      endpoints: {
        POST: "/api/contact - Submit contact form",
      },
    },
    { status: 200 }
  );
}
