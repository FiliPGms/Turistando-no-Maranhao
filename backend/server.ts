import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { prisma } from "./src/config/database.ts"
import cadastroRouter from "./src/routes/cadastroRoute.js";
import loginRouter from "./src/routes/loginRoute.js";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/cadastro", cadastroRouter);
app.use("/login", loginRouter);

app.listen(port,()=>{
    console.log("Server running")
});