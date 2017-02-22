const _ = require('lodash');
const chai = require('chai');

const index = require('./index');

const expect = chai.expect;


describe('index', () => {
    it('should export an object', () => {
        expect(index).to.be.an('object');
    });

    it('should expose known properties', () => {
        const clone = _.clone(index);

        expect(clone).to.have.property('createMocks')
            .to.be.a('function').to.have.lengthOf(2);
        delete clone.createMocks;

        expect(clone).to.have.property('createRequest')
            .to.be.a('function').to.have.lengthOf(1);
        delete clone.createRequest;

        expect(clone).to.have.property('createResponse')
            .to.be.a('function').to.have.lengthOf(1);
        delete clone.createResponse;

        expect(clone).to.have.property('expect')
            .to.be.a('function').to.have.lengthOf(2);
        delete clone.expect;

        expect(clone).to.have.property('proxyquire')
            .to.be.a('function').to.have.lengthOf(2);
        delete clone.proxyquire;

        expect(clone).to.have.property('request')
            .to.be.a('function').to.have.lengthOf(1);
        delete clone.request;

        expect(clone).to.have.property('rewire')
            .to.be.a('function').to.have.lengthOf(1);
        delete clone.rewire;

        expect(clone).to.have.property('spy')
            .to.be.a('function').to.have.lengthOf(3);
        delete clone.spy;

        expect(clone).to.have.property('stub')
            .to.be.a('function').to.have.lengthOf(3);
        delete clone.stub;

        expect(clone).to.deep.equal({});
    });
});
