const testHelpers = require('./index');

const unexpectedFlow = require('./unexpected-flow');

const expect = testHelpers.expect;

describe('lib/unexpected-flow', () => {
    it('should be a function with 2 params', () => {
        expect(unexpectedFlow).to.be.a('function').to.have.lengthOf(2);
    });

    it('should throw default message', () => {
        expect(() => unexpectedFlow()).to.throw(Error, unexpectedFlow.DEFAULT_ERROR);
    });

    it('should throw default message if only 1 param', () => {
        expect(() => unexpectedFlow('My Message')).to.throw(Error, unexpectedFlow.DEFAULT_ERROR);
    });

    it('should throw my message if defined', () => {
        expect(() => unexpectedFlow('My Message', {})).to.throw(Error, 'My Message');
    });

    it('should throw default message if undefined', () => {
        expect(() => unexpectedFlow(null, {})).to.throw(Error, unexpectedFlow.DEFAULT_ERROR);
    });
});
