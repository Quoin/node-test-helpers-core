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

        [
            'createMocks',
            'createRequest',
            'createResponse',
            'expect',
            'proxyquire',
            'request',
            'rewire',
            'spy',
            'stub',
            'unexpectedFlow',
            'verifyHal',
            'verifyProperties'
        ].forEach((key) => {
            expect(clone).to.have.property(key).to.be.a('function');
            delete clone[key];
        });

        [
            'sandbox'
        ].forEach((key) => {
            expect(clone).to.have.property(key).to.be.an('object');
            delete clone[key];
        });

        expect(clone).to.deep.equal({});
    });
});
