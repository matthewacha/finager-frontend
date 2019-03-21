import Authenticate from "../Authenticate";
import customRequest from '../../../Utils/customRequest'
import nock from 'nock';

jest.mock('../../../Utils/customRequest')

describe("Test authenticate api", () => {
  it("successfully sends request", async () => {
    customRequest.mockResolvedValueOnce({ token: '2334errtr', statusCode: 200 })
    const response = await Authenticate.loginUser(JSON.stringify("data"));
    expect(response).toEqual({ token: '2334errtr', statusCode: 200 })
  });
});
