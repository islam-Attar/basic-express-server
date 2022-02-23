"use strict";
const server = require("../src/server.js");
const supertest = require("supertest");
const request = supertest(server.app);

describe("server", () => {
  it("should get status 404 for bad route", async () => {
    const response = await request.get("/fakeRoute");
    expect(response.status).toBe(404);
  });
});
