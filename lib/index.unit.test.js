const _ = require('lodash');
const chai = require('chai');

const index = require('./index');

const expect = chai.expect;

describe('index', () => {
    it('should export an object', () => {
        expect(index).to.be.an('object');
    });

    describe("properties", () => {
        let clone;

        before(() => {
            clone = _.clone(index);
        });

        [
            'createMocks',
            'createRequest',
            'createResponse',
            'expect',
            'proxyquire',
            'rewire',
            'spy',
            'stub',
            'unexpectedFlow',
            'verifyHal',
            'verifyProperties'
        ].forEach((key) => {
            it(`should expose '${key}' as a function`, () => {
                expect(clone).to.have.property(key);
                expect(clone[key]).to.be.a('function');
                delete clone[key];
            });
        });

        [
            'chai',
            'sandbox'
        ].forEach((key) => {
            it(`should expose '${key}' as an object`, () => {
                expect(clone).to.have.property(key).to.be.an('object');
                delete clone[key];
            });
        });

        after(() => {
            expect(clone).to.deep.equal({});
        });
    });
});
