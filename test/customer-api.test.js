import { expect } from "chai";
import axios from "axios";

describe("Customer API", async () => {
  let token = "xyz";
  before(async () => {
    token = "abc";
  });

  describe("/get-customer-info", async () => {
    it("should return 200 OK", async () => {
      console.log(token);
      const res = await axios.get(`${process.env.APP_URL}/api/category/all`);
      expect(res.status).equal(200);
    });
  });
});
