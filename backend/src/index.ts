import express from 'express';
import cors from 'cors';
import userRoutes from './infraestructure/routers/user_route';
import dotenv from "dotenv";

const app = express();
const port = 4000;
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user/', userRoutes)

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
