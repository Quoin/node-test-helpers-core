# node-test-helpers

This is a helper library to limit the number of packages to install in your
project.

## To install

To add the library to your project:

    npm install --save-dev @quoin/node-test-helpers

## Usage

An example of usage:

    const testHelpers = require('@quoin/node-test-helpers');

    const moduleToTest = require('./index');

    const expect = testHelpers.expect;

    describe("index", () => {
        it("should export a function with 2 params", () => {
            expect(index).to.be.a('function').to.have.lengthOf(2);
        });
    });

See the [lib/index.js](lib/index.js) file to see what libraries are imported and
refer to their respective documentation.
