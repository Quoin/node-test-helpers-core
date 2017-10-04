const chai = require('chai');

const testHelpers = require('./index');

const moduleToTest = require('./verify-hal');

const expect = testHelpers.expect;

describe("lib/verify-hal", () => {
    it("should expose a function with 2 params", () => {
        expect(moduleToTest).to.be.a('function')
            .to.have.lengthOf(2);
    });

    describe("_links", () => {
        it("should fail when no '_links'", () => {
            const data = {};
            expect(() => moduleToTest(expect, data))
                .to.throw(chai.AssertionError, /expected {} to have property '_links'/);
        });

        it("should fail if _link doesn't have 'self'", () => {
            const data = {
                _links: {
                }
            };
            expect(() => moduleToTest(expect, data))
                .to.throw(chai.AssertionError, /expected {} to have property 'self'/);
        });

        it("should fail if a link doesn't have 'href'", () => {
            const data = {
                _links: {
                    self: {
                    }
                }
            };

            expect(() => moduleToTest(expect, data))
                .to.throw(chai.AssertionError, /expected {} to have property 'href'/);
        });

        it("should fail if _links.self.href not string", () => {
            const data = {
                _links: {
                    self: {
                        href: 1
                    }
                }
            };
            expect(() => moduleToTest(expect, data))
                .to.throw(chai.AssertionError, /expected 1 to be a string/);
        });

        it("should not throw", () => {
            const data = {
                _links: {
                    self: {
                        href: 'valid'
                    }
                }
            };
            expect(() => moduleToTest(expect, data)).not.to.throw();
        });
    });

    describe("_embedded", () => {
        it("should just recheck each embedded", () => {
            const data = {
                _links: {
                    self: {
                        href: 'valid'
                    }
                },
                _embedded: {
                    someKey: [{}]
                }
            };
            expect(() => moduleToTest(expect, data))
                .to.throw(chai.AssertionError, /expected {} to have property '_links'/);
        });
    });
});
