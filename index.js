import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import dotenv from 'dotenv';

// подключаем локальные данные в .env
dotenv.config();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

const app = express();

app.use(express.json());
app.use('/api', router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log('Server is started...' + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
