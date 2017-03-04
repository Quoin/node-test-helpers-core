const chai = require('chai');
const chaiHttp = require('chai-http');
const dirtyChai = require('dirty-chai');
const nodeMocksHttp = require('node-mocks-http');
const proxyquire = require('proxyquire');
const rewire = require('rewire');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const unexpectedFlow = require('./unexpected-flow');
const verifyProperties = require('./verify-properties');

// dirty-chai needs to be the first use().
chai.use(dirtyChai);
chai.use(sinonChai);
chai.use(chaiHttp);

module.exports = {
    createMocks: nodeMocksHttp.createMocks,
    createRequest: nodeMocksHttp.createRequest,
    createResponse: nodeMocksHttp.createResponse,
    expect: chai.expect,
    proxyquire,
    request: chai.request,
    rewire,
    spy: sinon.spy,
    stub: sinon.stub,
    unexpectedFlow,
    verifyProperties: verifyProperties.bind(null, chai.expect),
};
