import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message content is required." },
        { status: 400 }
      );
    }

    const inquiry = {
      id: `INQ-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      email: email.trim(),
      subject: subject || "General Inquiry",
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    // Save inquiry to a local JSON log file for persistence
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const logFilePath = path.join(dataDir, "inquiries.json");
      let existingInquiries = [];
      if (fs.existsSync(logFilePath)) {
        try {
          const fileData = fs.readFileSync(logFilePath, "utf8");
          existingInquiries = JSON.parse(fileData);
        } catch {
          existingInquiries = [];
        }
      }
      existingInquiries.push(inquiry);
      fs.writeFileSync(logFilePath, JSON.stringify(existingInquiries, null, 2), "utf8");
    } catch (saveError) {
      console.warn("Could not write to local inquiries.json (might be in read-only environment):", saveError);
    }

    console.log("New contact form submission received:", inquiry);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out. Your inquiry has been logged successfully.",
        inquiryId: inquiry.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return NextResponse.json(
      { error: "Internal server error occurred while processing your request." },
      { status: 500 }
    );
  }
}

