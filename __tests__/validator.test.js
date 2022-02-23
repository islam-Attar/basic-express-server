"use strict";
const server = require("../src/server.js");
const supertest = require("supertest");
const request = supertest(server.app);

describe("server", () => {
  test("get status 404 for bad method ", async () => {
    const response = await request.get("/wrongRoute");
    expect(response.status).toBe(404);
  });

  test("get status 500", async () => {
    const response = await request.get("/person?name=");
    expect(response.status).toBe(500);
  });

  test("get status 200", async () => {
    const response = await request.get("/person?name=islam");
    expect(response.status).toBe(200);
    expect(response.text).toBe('{"name":"islam"}');
  });
});