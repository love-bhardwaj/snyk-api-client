import { expect } from 'chai';

export default {
  expect200: (res: any) => {
    expect(res).to.exist;
    expect(res.response).to.exist;
    expect(res.success).to.be.true;
    expect(res.httpCode).to.be.equal(200);
    expect(res.snykRequestId).to.not.be.null;
    expect(res.error).to.be.null;
  },
  expect204: (res: any) => {
    expect(res).to.exist;
    expect(res.response).to.exist;
    expect(res.success).to.be.true;
    expect(res.httpCode).to.be.equal(204);
    expect(res.snykRequestId).to.not.be.null;
    expect(res.error).to.be.null;
  },
  expect400: (errRes: any) => {
    expect(errRes).to.exist;
    expect(errRes.success).to.be.false;
    expect(errRes.httpCode).to.be.equal(400);
    expect(errRes.error).to.not.be.null;
    expect(errRes.snykRequestId).to.not.be.null;
  },
  expect401: (errRes: any) => {
    expect(errRes).to.exist;
    expect(errRes.success).to.be.false;
    expect(errRes.httpCode).to.be.equal(401);
    expect(errRes.error).to.not.be.null;
    expect(errRes.snykRequestId).to.not.be.null;
  },
  expect404: (errRes: any) => {
    expect(errRes).to.exist;
    expect(errRes.success).to.be.false;
    expect(errRes.httpCode).to.be.equal(404);
    expect(errRes.error).to.not.be.null;
    expect(errRes.snykRequestId).to.not.be.null;
  },
  expect422: (errRes: any) => {
    expect(errRes).to.exist;
    expect(errRes.success).to.be.false;
    expect(errRes.httpCode).to.be.equal(422);
    expect(errRes.error).to.not.be.null;
    expect(errRes.snykRequestId).to.not.be.null;
  },
  expectErr: (errRes: any) => {
    expect(errRes).to.exist;
    expect(errRes).to.not.be.null;
  },
  expectToNotExist: (res: any) => {
    expect(res).to.not.exist;
  },
};
