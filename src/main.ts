import express from 'express';
import cors from 'cors';
import config from './config/config';
import { getData } from './services/getData';
import { sendData } from './services/sendData';
import { transformData } from './utils/transformData';

const app = express();
const PORT = config.port;

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Hello world");
})

app.post('/send', async (req, res) => {
  try {
    const originalData = await getData();
    const transformed = transformData(originalData);
    await sendData(transformed);
    res.json({ message: 'Data sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while sending data' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});