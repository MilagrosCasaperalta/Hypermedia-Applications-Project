import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {
  const body = await useBody(event);

  const { email, problem } = body;

  if (!email || !problem) {
    return {
      statusCode: 400,
      message: "Email and message are required."
    };
  }

  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: path.join(__dirname, '../../../google_account.json'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = '1H1Wd0PmECrJZwy0uIsUDYaOtXQkLA0pmj8lIs3PFh8s'; 

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:B',
      valueInputOption: 'RAW',
      resource: {
        values: [
          [email, problem],
        ],
      },
    });

    return {
      statusCode: 200,
      message: "Message received successfully!",
    };
  } catch (error) {
    console.error('Error writing to Google Sheets:', error);
    return {
      statusCode: 500,
      message: "Something went wrong. Please try again later.",
    };
  }
});
