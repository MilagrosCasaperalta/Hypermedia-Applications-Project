import { H3Event, readBody } from 'h3'
import { appendFile } from 'fs/promises'
import { resolve } from 'path'
import nodemailer from 'nodemailer'

export default async (event: H3Event) => {
  const body = await readBody(event)
  const email = body.email

  if (!email || typeof email !== 'string') {
    return {
      statusCode: 400,
      body: { message: 'Email is required' }
    }
  }

  const filePath = resolve(process.cwd(), 'subscribers.txt')

  try {
    // Salva l'email
    await appendFile(filePath, email + '\n')

    // Configura il trasportatore SMTP (usiamo Gmail esempio)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,     // la tua email Gmail
        pass: process.env.MAIL_PASS      // la password o app password Gmail
      }
    })

    // Prepara il messaggio di conferma
    const mailOptions = {
      from: process.env.MAIL_USER,
      to: email,
      subject: 'Subscription Confirmed - SoulFlow NYC',
      text: `Hi!\n\nThank you for subscribing to the SoulFlow NYC newsletter.\nWe're excited to keep you updated!\n\nBest,\nSoulFlow Team`,
    }

    // Invia la mail
    await transporter.sendMail(mailOptions)

    return {
      statusCode: 200,
      body: { message: 'Subscription successful. Confirmation email sent!' }
    }
  } catch (err) {
    console.error(err)
    return {
      statusCode: 500,
      body: { message: 'Failed to save subscription or send email.' }
    }
  }
}
