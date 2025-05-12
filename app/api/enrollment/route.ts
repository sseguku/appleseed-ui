import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.json();

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: "appleseedug@gmail.com",
      subject: `New Enrollment Application: ${formData.childFirstName} ${formData.childLastName}`,
      html: `
        <h2>New Enrollment Application Received</h2>
        
        <h3>Child Information</h3>
        <p><strong>Name:</strong> ${formData.childFirstName} ${
        formData.childLastName
      }</p>
        <p><strong>Date of Birth:</strong> ${formData.dateOfBirth}</p>
        <p><strong>Gender:</strong> ${formData.gender}</p>
        <p><strong>Nationality:</strong> ${formData.nationality}</p>
        <p><strong>Place of Birth:</strong> ${formData.placeOfBirth}</p>
        <p><strong>Previous School:</strong> ${
          formData.previousSchool || "None"
        }</p>
        
        <h3>Health Information</h3>
        <p><strong>Medical Conditions:</strong> ${
          formData.medicalConditions || "None"
        }</p>
        <p><strong>Allergies:</strong> ${formData.allergies || "None"}</p>
        <p><strong>Special Needs:</strong> ${
          formData.specialNeeds || "None"
        }</p>
        
        <h3>Parent/Guardian Information</h3>
        <p><strong>Name:</strong> ${formData.parentFirstName} ${
        formData.parentLastName
      }</p>
        <p><strong>Relationship:</strong> ${formData.relationship}</p>
        <p><strong>Occupation:</strong> ${formData.occupation}</p>
        <p><strong>Phone:</strong> ${formData.phoneNumber}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Address:</strong> ${formData.address}</p>
        
        <h3>Emergency Contact</h3>
        <p><strong>Name:</strong> ${formData.emergencyContactName}</p>
        <p><strong>Phone:</strong> ${formData.emergencyContactPhone}</p>
        <p><strong>Relationship:</strong> ${
          formData.emergencyContactRelationship
        }</p>
        
        <h3>Additional Information</h3>
        <p><strong>Preferred Start Date:</strong> ${
          formData.preferredStartDate
        }</p>
        <p><strong>Program Type:</strong> ${formData.programType}</p>
        <p><strong>Additional Notes:</strong> ${
          formData.additionalNotes || "None"
        }</p>
        
        ---
        <p>This application was submitted via the Appleseed Preschool & Kindergarten website enrollment form.</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Application submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing enrollment:", error);
    return NextResponse.json(
      { message: "Error processing enrollment" },
      { status: 500 }
    );
  }
}
