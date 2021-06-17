const chai = require('chai');
const path = require('path');

const moduleToTest = require('./filespace');

const { expect } = chai;

describe(moduleToTest(__filename, path.dirname(__dirname)), () => {
    it('exports a function with 2 params', () => {
        expect(moduleToTest).to.be.a('function').and.to.have.lengthOf(2);
    });

    describe('()', () => {
        const DIRNAME = '/root/path';
        const FILENAME = '/file/path';
        const FILEPATH = `${DIRNAME}/${FILENAME}`;

        it('returns undefined when no params', () => {
            // eslint-disable-next-line no-unused-expressions
            expect(moduleToTest()).to.be.undefined;
        });

        it('returns filepath when only 1 param', () => {
            expect(moduleToTest(FILEPATH)).to.equal(FILEPATH);
        });

        it('returns filepath when dirname does not match', () => {
            expect(moduleToTest(FILEPATH, 'foo')).to.equal(FILEPATH);
        });

        it('returns filename when dirname matches', () => {
            expect(moduleToTest(FILEPATH, DIRNAME)).to.equal(FILENAME);
        });
    });
});
