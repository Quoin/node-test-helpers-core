const testHelpers = require('./index');

const unexpectedFlow = require('./unexpected-flow');

const expect = testHelpers.expect;

describe('lib/unexpected-flow', () => {
    it('should throw default message', () => {
        expect(() => unexpectedFlow()).to.throw('Unexpected flow');
    });

    it('should throw default message if only 1 param', () => {
        expect(() => unexpectedFlow('My Message')).to.throw('Unexpected flow');
    });

    it('should throw my message if 2 params', () => {
        expect(() => unexpectedFlow('My Message', {})).to.throw('My Message');
    });
});
