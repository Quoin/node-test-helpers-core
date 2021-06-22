const chai = require('chai');
const nodeMocksHttp = require('node-mocks-http');
const proxyquire = require('proxyquire');
const rewire = require('rewire');
const sinon = require('sinon');

const filespace = require('./filespace');
const unexpectedFlow = require('./unexpected-flow');
const verifyHal = require('./verify-hal');
const verifyProperties = require('./verify-properties');

module.exports = {
    chai,
    createMocks: nodeMocksHttp.createMocks,
    createRequest: nodeMocksHttp.createRequest,
    createResponse: nodeMocksHttp.createResponse,
    createSandbox: sinon.createSandbox,
    expect: chai.expect,
    filespace,
    proxyquire,
    rewire,
    spy: sinon.spy,
    stub: sinon.stub,
    unexpectedFlow,
    verifyHal: (data) => verifyHal(chai.expect, data),
    verifyProperties: (clone, propertyType, key) => verifyProperties(chai.expect, clone, propertyType, key)
};
