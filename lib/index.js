const chai = require('chai');
const chaiHttp = require('chai-http');
const dirtyChai = require('dirty-chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

// dirty-chai needs to be the first use().
chai.use(dirtyChai);
chai.use(sinonChai);
chai.use(chaiHttp);

const expect = chai.expect;

module.exports = {
    expect,
    request: chai.request,
    spy: sinon.spy,
    stub: sinon.stub,
};
