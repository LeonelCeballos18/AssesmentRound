import express from 'express';
import config from './config/config';

const app = express();
const PORT = config.port;

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Hello world");
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});