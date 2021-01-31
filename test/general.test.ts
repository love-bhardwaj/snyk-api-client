import { General } from '../src/index';
import { expect } from 'chai';
import utilFunctions from './util';

describe('GET: Documentaion related request', () => {
  it('Should return success and response if token valid', async () => {
    const res = await General.getDocs();
    utilFunctions.expect200(res);
  });

  it('Should throw HttpError with error code 401, if token not valid', async () => {
    try {
      await General.getDocs({ apiToken: 'invalid' });
    } catch (errRes) {
      utilFunctions.expect401(errRes);
    }
  });
});
