/*
 * dbc
 * 
 *
 * Copyright (c) 2013 dmccarthy dbenson
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function() {
  return {
      assert: function(arg, errorMessage){
         if (!arg){
            throw errorMessage
         }
      },
      hasMember: function(obj, memberName){
         if (!obj.hasOwnProperty(memberName)){
            throw ('Object is missing member: ' + memberName)
         }
      }
   }
};