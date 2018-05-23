const testHelpers = require('./index');

const verifyProperties = require('./verify-properties');

const expect = testHelpers.expect;

describe('lib/verify-properties', () => {
    it('should export a function with 4 params', () => {
        expect(verifyProperties).to.be.a('function').to.have.lengthOf(4);
    });

    it('should not throw when empty array', () => {
        expect(() => verifyProperties(expect, null, null, [])).not.to.throw();
    });

    it("should throw when obj doesn't have property", () => {
        const clone = {};
        const propertyType = null;
        const properties = ['foo'];
        expect(() => verifyProperties(expect, clone, propertyType, properties)).to.throw();
    });

    it('should not throw when obj have property', () => {
        const clone = { foo: 'bar' };
        const propertyType = null;
        const properties = ['foo'];
        expect(() => verifyProperties(expect, clone, propertyType, properties)).not.to.throw();
    });

    it('should not throw when obj have property and some others', () => {
        const clone = { foo: 'bar', hello: 'world' };
        const propertyType = null;
        const properties = ['foo'];
        expect(() => verifyProperties(expect, clone, propertyType, properties)).not.to.throw();
    });

    it("should throw when obj doesn't have all properties", () => {
        const clone = { foo: 'bar', hello: 'world' };
        const propertyType = null;
        const properties = ['foo', 'bad'];
        expect(() => verifyProperties(expect, clone, propertyType, properties)).to.throw();
    });

    it('should throw if property wrong type', () => {
        const clone = { foo: 'bar', hello: 'world' };
        const propertyType = 'number';
        const properties = ['foo'];
        expect(() => verifyProperties(expect, clone, propertyType, properties)).to.throw();
    });

    it('should throw when at least one is wrong type', () => {
        const clone = { foo: 1, hello: 'world' };
        const propertyType = 'number';
        const properties = ['foo', 'hello'];
        expect(() => verifyProperties(expect, clone, propertyType, properties)).to.throw();
    });
});
