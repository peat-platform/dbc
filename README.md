# dbc - Design by Contract module

Design By Contract (DBC) utility module which allows for precise and verifiable interface specification. This modules functions can be used at the entry point of a function to verify that the incoming data/message has the required fields. If an assertion fails an exception is thrown and the program is exited (failing early helps identify bugs).

## Getting Started
Install the module with: `npm install dbc`

```javascript
var dbc = require('dbc');
dbc.assert(null !== msg, errorMessage)
```
The dbc.assert function checks that a statement equates to true or false and throws an exception with the message if it doesn't.


```javascript
dbc.hasMember(object, 'action')
```
The dbc.hasMember function takes two parameters: 1) a JavaScript object and 2) a member name as a string. It throws and exception if the object doesn't contains the member.

##Conributors
Donal McCarthy (dmccarthy@tssg.org)
David Benson   (dbenson@tssg.org)


## Examples

```javascript
var dbc = require('dbc');
var obj = {age:99}

dbc.assert   (null !== obj, "Message cannot be null")
dbc.hasMember(obj, 'age')

```

## Release History
0.1.0 (23/10/14 dmccarthy@tssg.org dbenson@tssg.org) Includes assert and hasMember functions

## License
Copyright (c) 2013
Licensed under the MIT license.
