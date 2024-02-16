"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";


export const sendEmail = async (formData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const resend = new Resend(process.env.RESEND_API_KEY);

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data
  try {
      data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "joaquin.caballero.aldorasi@fing.edu.uy",
      subject: "Message from form | personal-portfolio",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
      })
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};