"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

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


  try {
    console.log(trial)
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "joaquincaballero182@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      text: message
    });
    console.log(data)
    const trial = await resend.apiKeys.list()
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};