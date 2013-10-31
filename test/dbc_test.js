'use strict';


var base_path = require('./basePath.js');
var dbc = require(base_path + '../lib/main.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['test assert function'] = {

    'contract fulfilled by assertion': function (test) {

        // The contract is fulfilled if a is not equal b.
        test.doesNotThrow(function () {
            dbc.assert('a' != 'b', 'a and b should not be equa')
        });

        test.done();

    },

    'contract not fulfilled and exception thrown': function (test) {

        // The contract is not fulfilled if a and a are equal.
        test.throws(function () {
            dbc.assert('a' != 'a', 'a and a should be equal')
        });

        test.done();

    }
};

exports['test hasMember function'] =  {

    'contract fulfilled and exception not thrown': function (test) {

        // Test object
        var testObj = {testProp:'test'};

        test.doesNotThrow( function() {
           dbc.hasMember(testObj, 'testProp')
        });

        test.done();
    },
    'contract not fulfilled and exception thrown': function (test) {

        // Test object
        var testObj = {};

        // Contract is fulfilled if test object has property testProp.
        test.throws( function() {
            dbc.hasMember(testObj, 'testProp')
        });

        test.done();

    }
};