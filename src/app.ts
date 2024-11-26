import express from "express";
import cors from "cors"
import { getBalanceSheet } from "./controllers/balanceSheetController";

const app = express();
app.use(cors());

app.get("/api/balance-sheet", getBalanceSheet);

export default app;
