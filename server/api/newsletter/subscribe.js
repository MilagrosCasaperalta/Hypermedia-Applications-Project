import { google } from 'googleapis'
import nodemailer from 'nodemailer'
import { readBody } from 'h3'
import fs from 'fs'
import path from 'path'

export default eventHandler(async (event) => {
  const body = await readBody(event)
  const email = body.email

  if (!email) {
    return { error: 'Email is required' }
  }

  try {
    const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
    const keyFilePath = path.resolve('server', 'google_account.json')

    const auth = new google.auth.GoogleAuth({
      keyFile: keyFilePath,
      scopes: SCOPES
    })

    const sheets = google.sheets({ version: 'v4', auth: await auth.getClient() })
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'A:A',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[email]]
      }
    })
    console.log('Email saved in sheet')

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    })

    await transporter.sendMail({
      from: `"SoulFlow Studio" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'You are now subscribed!',
      html: `
        <h2>Thank you for joining!</h2>
        <p>You'll start receiving news, events, and class updates soon.</p>
      `
    })
    console.log('Confirmation email sent')

    return { success: true }

  } catch (error) {
    console.error('Error during subscription process:', error)
    return { error: 'An error occurred during the subscription process. Please try again later.' }
  }
})
