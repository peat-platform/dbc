/**
 * Created by dconway on 01/09/15.
 */
'use strict';

var dbc    = require('../lib/main.js');
var assert = require('chai').assert;

describe('DBC Tests', function(){
   describe('assert',function(){
      it('should pass assert for not equals check', function () {
         try{
            dbc.assert('a' != 'b','error')
         }catch(e){
            assert(e === undefined,'There should not be an error thrown')
         }
         return
      });
      it('should pass assert for equals check', function () {
         try{
            dbc.assert('a' == 'a','error')
         }catch(e){
            assert(e === undefined,'There should not be an error thrown')
         }
         return
      });
      it('should throw error for not equals check', function () {
         try{
            dbc.assert('a' != 'a','error')
         }catch(e){
            assert(e == 'error','There should be an error thrown')
         }
         return
      });
      it('should throw for equals check', function () {
         try{
            dbc.assert('a' == 'b','error')
         }catch(e){
            assert(e == 'error','There should be an error thrown')
         }
         return
      });
   });
   describe('hasMember',function(){
      it('should pass', function () {
         try{
            dbc.hasMember({'a':'b'},'a')
         }catch(e){
            assert(e === undefined,'There should not be an error thrown')
         }
         return
      });
      it('should fail', function () {
         try{
            dbc.hasMember({'a':'b'},'b')
         }catch(e){
            assert(e.toString().indexOf('Object is missing member: b') !== -1,'There should be an error thrown')
         }
         return
      });
   });
   describe('hasMemberIn',function(){
      it('should pass with member in array', function () {
         try{
            dbc.hasMemberIn({'a':'b'},'a',['a','b'])
         }catch(e){
            assert(e === undefined,'There should not be an error thrown')
         }
         return
      });
      it('should fail with no member in object', function () {
         try{
            dbc.hasMemberIn({'a':'b'},'b',['a','b'])
         }catch(e){
            assert(e.toString().indexOf('Object is missing member:') !== -1,'There should be an error thrown')
         }
         return
      });
      it('should fail with no member in array', function () {
         try{
            dbc.hasMemberIn({'a':'b'},'a',['c'])
         }catch(e){
            assert(e.toString().indexOf('should be one of the following') !== -1,'There should be an error thrown')
         }
         return
      });
   });
   describe('conditionalHasMember',function(){
      it('should pass with true condition', function () {
         try{
            dbc.conditionalHasMember({'a':'b'},'a', 'a'==='a')
         }catch(e){
            assert(e === undefined,'There should not be an error thrown')
         }
      });
      it('should fail with true condition', function () {
         try{
            dbc.conditionalHasMember({'a':'b'},'b', 'a' === 'a')
         }catch(e){
            assert(e.toString().indexOf('Object is missing member') !== -1,'There should not be an error thrown')
         }
      });
      it('should fail with false condition', function () {
         try{
            dbc.conditionalHasMember({'a':'b'},'a', 'a' != 'a')
         }catch(e){
            assert(e.toString().indexOf('Object is missing member') !== -1,'There should not be an error thrown')
         }
      });
   })
});