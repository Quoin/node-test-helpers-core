const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const chaiHttp = require('chai-http');
const chaiImmutable = require('chai-immutable');
const dirtyChai = require('dirty-chai');
const nodeMocksHttp = require('node-mocks-http');
const proxyquire = require('proxyquire');
const rewire = require('rewire');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const unexpectedFlow = require('./unexpected-flow');
const verifyHal = require('./verify-hal');
const verifyProperties = require('./verify-properties');

chai.use(chaiImmutable);
chai.use(dirtyChai);
chai.use(sinonChai);
chai.use(chaiHttp);
chai.use(chaiAsPromised);

module.exports = {
    createMocks: nodeMocksHttp.createMocks,
    createRequest: nodeMocksHttp.createRequest,
    createResponse: nodeMocksHttp.createResponse,
    expect: chai.expect,
    proxyquire,
    request: chai.request,
    rewire,
    sandbox: sinon.sandbox,
    spy: sinon.spy,
    stub: sinon.stub,
    unexpectedFlow,
    verifyHal: verifyHal.bind(null, chai.expect),
    verifyProperties: verifyProperties.bind(null, chai.expect)
};
