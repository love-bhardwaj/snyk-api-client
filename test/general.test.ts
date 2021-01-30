import { General } from '../src/index';
import { expect } from 'chai';

describe('GET Documentaion related request', () => {
  it('Should return success and response if token valid', async () => {
    const res = await General.getDocs();
    console.log('Response: ', res);
    expect(res.success).to.be.true;
    expect(res.response).to.not.be.null;
  });

  it('Should throw HttpError with error code 401, if token not valid', async () => {
    try {
      await General.getDocs({ apiToken: 'invalid' });
    } catch (error) {
      console.error(error);
      expect(error.success).to.be.false;
      expect(error.response).to.exist;
      expect(error.response.code).to.be.equal(401);
    }
  });
});
