const chai = require('chai');

const index = require('./index');

const expect = chai.expect;


describe('index', () => {
  it("should expose 'expect'", () => {
    expect(index).to.have.property('expect').to.be.a('function');
  });

  it("should expose 'proxyquire'", () => {
    expect(index).to.have.property('proxyquire').to.be.a('function');
  });

  it("should expose 'request'", () => {
    expect(index).to.have.property('request').to.be.a('function');
  });

  it("should expose 'rewire'", () => {
    expect(index).to.have.property('rewire').to.be.a('function');
  });

  it("should expose 'spy'", () => {
    expect(index).to.have.property('spy').to.be.a('function');
  });

  it("should expose 'stub'", () => {
    expect(index).to.have.property('stub').to.be.a('function');
  });
});
