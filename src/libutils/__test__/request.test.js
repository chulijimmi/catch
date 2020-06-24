import request, { requestGetOption, requestPostOption } from "../request";

describe("request test", () => {
  const optionsGet = requestGetOption();
  const optionsPost = requestPostOption();
  const url = "test";
  window.fetch = jest.fn();

  describe("stubbing successful response", () => {
    // Before each test, pretend we got a successful response
    beforeEach(() => {
      const jsonResult = { hello: "world" };
      fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(jsonResult),
          status: 200,
          headers: {
            "Content-type": "application/json",
          },
        })
      );
    });

    it("should format the response correctly", async () => {
      const response = await request(url, optionsGet);
      expect(response.hello).toBe("world");
    });
  });

  describe("stubbing 204 response", () => {
    // Before each test, pretend we got a successful response
    beforeEach(() => {
      const jsonResult = "";
      fetch = jest.fn(() =>
        Promise.resolve({
          status: 204,
          headers: {
            "Content-type": "application/json",
          },
        })
      );
    });
    it("should format the response correctly", async () => {
      const response = await request(url, optionsGet);
      expect(response).toBe(null);
    });
  });

  describe("stubbing error response", () => {
    // Before each test, pretend we got an unsuccessful response
    beforeEach(() => {
      fetch = jest.fn(() =>
        Promise.resolve({
          status: 404,
          statusText: "Not Found",
          headers: {
            "Content-type": "application/json",
          },
        })
      );
    });

    it("should catch error correctly", (done) => {
      request(url, optionsGet).catch((err) => {
        expect(err.response.status).toBe(404);
        done();
      });
    });
  });
});
