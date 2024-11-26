import request from "supertest";
import app from "../app";

jest.mock("../src/services/xeroService", () => ({
    fetchBalanceSheet: jest.fn(() => Promise.resolve({ ReportTitle: "Balance Sheet" })),
}));

test("GET /api/balance-sheet - success", async () => {
    const response = await request(app).get("/api/balance-sheet");
    expect(response.status).toBe(200);
    expect(response.body.ReportTitle).toBe("Balance Sheet");
});
