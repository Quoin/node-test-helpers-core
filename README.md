# node-test-helpers-core

[![Build Status](https://travis-ci.com/Quoin/node-test-helpers-core.svg?branch=master)](https://travis-ci.com/Quoin/node-test-helpers-core)

This is a helper library to limit the number of packages to install in your
project. Because of the nature of chai plugins, this library only include the
core for your tests. You will need to write a local helper to include all your
chai plugins,

## To install

To add the library to your project:

    npm install --save-dev @quoin/node-test-helpers-core

## Usage

`local-helper.js`:

    const testHelpers = require('@quoin/node-test-helpers-core');
    const dirtyChai = require('dirty-chai');

    testHelpers.chai.use(dirtyChai);

    module.exports = testHelpers;

`file.unit.test.js`:

    const testHelpers = require('./local-helpers');
    const moduleToTest = require('./index');

    const expect = testHelpers.expect;

    describe("index", () => {
        it("should export a function with 2 params", () => {
            expect(index).to.be.a('function').to.have.lengthOf(2);
        });
    });

See the [lib/index.js](lib/index.js) file to see what libraries are imported and
refer to their respective documentation.

## Examples

### createMocks, createRequest and createResponse

See [node-mocks-http](https://github.com/howardabrams/node-mocks-http) for more
details.

    it("should set headers", () => {
      const {req, res} = testHelpers.createMocks();
    });

### verifyHal

To verify that a portion of a response (or the entire reponse is a valid HAL:

    it("should be a valid HAL", () => {
        const someResponseFromServer = requestCall();
        testHelpers.verifyHal(someResponseFromServer.body);
    });

### verifyProperties

To verify all properties of an object:

    it("should expose known properties", () => {
      const clone = _.clone(moduleToTest);

      testHelpers.verifyProperties(clone, 'string', [
        'prop1',
        'prop2'
      ]);

      testHelpers.verifyProperties(clone, 'function', [
        'prop3',
        'prop4'
      ]);

      expect(clone).to.deep.equal({});
    });

