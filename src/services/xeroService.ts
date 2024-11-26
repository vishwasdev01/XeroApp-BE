import axios from "axios";

const BASE_URL = "http://localhost:3000/api.xro/2.0";

export const fetchBalanceSheet = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/Reports/BalanceSheet`);
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch Balance Sheet data");
    }
};
