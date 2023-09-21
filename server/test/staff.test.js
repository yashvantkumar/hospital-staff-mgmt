const request = require('supertest');

const baseURL = process.env.BASE_URL

describe("staff details", () => {
    it("should update item if it exists", async () => {
        const response = await request(baseURL).post(`/api/v1/staff`).send({
            staffId: "123",
        });
        expect(response.statusCode).toBe(200);
        expect(response.body.data.success).toBe(true);
    });
    it("should create an item", async () => {
        const response = await request(baseURL).put(`/api/v1/staff`).send({
            "name": "nurse",
            "role": "nurse",
            "age": 21,
            "gender": "MALE",
            "emailId": "ab@ab.co",
            "department": "test"
        });
        expect(response.status).toBe(200);
        expect(response.data.success).toBe(true);
    });
});
