import { Request, Response } from "express";
import { fetchBalanceSheet } from "../services/xeroService";

export const getBalanceSheet = async (req: Request, res: Response) => {
    try {
        const data = await fetchBalanceSheet();
        res.status(200).json(data);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
