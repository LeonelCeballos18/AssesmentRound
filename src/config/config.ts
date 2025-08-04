import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT,
  webhookUrl: process.env.WEBHOOK_URL,
  apiKey: process.env.API_KEY,
  githubRepo: process.env.GITHUB_REPO,
  boardId: process.env.BOARD_ID,
  name: process.env.NAME,
  edad: process.env.EDAD,
  email: process.env.EMAIL,
  phone: process.env.PHONE,
  github: process.env.GITHUB,
  apiUrl: process.env.API_URL,
  edadColumn: process.env.COLUMN_ID_AGE!,
  emailColumn: process.env.COLUMN_ID_EMAIL!,
  phoneColumn: process.env.COLUMN_ID_PHONE!,
  dateColumn: process.env.COLUMN_ID_DATE!,
  githubColumn: process.env.COLUMN_ID_GITHUB!,
};

export default config;