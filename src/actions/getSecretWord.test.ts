import moxios from "moxios";
import { getSecretWord } from "./getSecretWord";

describe("getSecretWord", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("secretWord is returned", async () => {
    await moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: "party",
      });
    });

    const secretWord = await getSecretWord();
    expect(secretWord).toBe("party");
  });
});
