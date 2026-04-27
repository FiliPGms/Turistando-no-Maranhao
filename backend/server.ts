import express from 'express';
import 'dotenv/config';
import { prisma } from "./src/config/database.ts"

const app = express();
const port = process.env.PORT;

app.listen(port,()=>{
    console.log("Server running")
});



//console.log('just testing...')