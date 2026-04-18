export const prerender = false; // Este endpoint NO se prerenderiza (serverless)

import { escapeHtml } from '@/utils/sanitize';
import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parsear el body
    const body = await request.json();
    const { name, email, message } = body;

    // Validar los campos requeridos
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: name, email, message' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validar que las variables de entorno estén configuradas
    if (!import.meta.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!import.meta.env.CONTACT_EMAIL_TO) {
      console.error('CONTACT_EMAIL_TO is not configured');
      return new Response(
        JSON.stringify({ error: 'Email recipient not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Escape user inputs to prevent HTML injection
    const escapedName = escapeHtml(name);
    const escapedEmail = escapeHtml(email);
    const escapedMessage = escapeHtml(message).replace(/\n/g, '<br>');

    // Enviar el email usando Resend
    const { data, error } = await resend.emails.send({
      from: import.meta.env.RESEND_EMAIL_FROM || 'onboarding@resend.dev',
      to: import.meta.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${escapedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nuevo mensaje de contacto</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nombre:</strong> ${escapedName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${escapedEmail}</p>
          </div>
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Mensaje:</strong></p>
            <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; line-height: 1.6;">
              ${escapedMessage}
            </p>
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #999; font-size: 12px;">
            Este mensaje fue enviado desde el formulario de contacto de tu sitio web.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        id: data?.id 
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
