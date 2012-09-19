/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var validator = require('utils/validator');

describe('validator', function () {

  describe('#isValidEmail(value)', function () {
    it('should return false if value is null', function () {
      expect(validator.isValidEmail(null)).to.equal(false);
    })
    it('should return false if value is ""', function () {
      expect(validator.isValidEmail('')).to.equal(false);
    })
    it('should return false if value is "a.com"', function () {
      expect(validator.isValidEmail('a.com')).to.equal(false);
    })
    it('should return false if value is "@a.com"', function () {
      expect(validator.isValidEmail('@a.com')).to.equal(false);
    })
    it('should return false if value is "a@.com"', function () {
      expect(validator.isValidEmail('a@.com')).to.equal(false);
    })
    it('should return true if value is "a@a.com"', function () {
      expect(validator.isValidEmail('a@a.com')).to.equal(true);
    })
    it('should return true if value is "user@a.b.com"', function () {
      expect(validator.isValidEmail('user@a.b.com')).to.equal(true);
    })
  })

  describe('#isValidInt(value)', function () {
    it('should return false if value is null', function () {
      expect(validator.isValidInt(null)).to.equal(false);
    })
    it('should return false if value is ""', function () {
      expect(validator.isValidInt('')).to.equal(false);
    })
    it('should return false if value is "abc"', function () {
      expect(validator.isValidInt('abc')).to.equal(false);
    })
    it('should return false if value is "0xff"', function () {
      expect(validator.isValidInt('0xff')).to.equal(false);
    })
    it('should return false if value is " 1""', function () {
      expect(validator.isValidInt(' 1')).to.equal(false);
    })
    it('should return false if value is "1 "', function () {
      expect(validator.isValidInt('1 ')).to.equal(false);
    })
    it('should return true if value is "10"', function () {
      expect(validator.isValidInt('10')).to.equal(true);
    })
    it('should return true if value is "-123"', function () {
      expect(validator.isValidInt('-123')).to.equal(true);
    })
    it('should return true if value is "0"', function () {
      expect(validator.isValidInt('0')).to.equal(true);
    })
    it('should return true if value is 10', function () {
      expect(validator.isValidInt(10)).to.equal(true);
    })
    it('should return true if value is -123', function () {
      expect(validator.isValidInt(10)).to.equal(true);
    })
    it('should return true if value is 0', function () {
      expect(validator.isValidInt(10)).to.equal(true);
    })
  })

  describe('#isValidFloat(value)', function () {
    it('should return false if value is null', function () {
      expect(validator.isValidFloat(null)).to.equal(false);
    })
    it('should return false if value is ""', function () {
      expect(validator.isValidFloat('')).to.equal(false);
    })
    it('should return false if value is "abc"', function () {
      expect(validator.isValidFloat('abc')).to.equal(false);
    })
    it('should return false if value is "0xff"', function () {
      expect(validator.isValidFloat('0xff')).to.equal(false);
    })
    it('should return false if value is " 1""', function () {
      expect(validator.isValidFloat(' 1')).to.equal(false);
    })
    it('should return false if value is "1 "', function () {
      expect(validator.isValidFloat('1 ')).to.equal(false);
    })
    it('should return true if value is "10"', function () {
      expect(validator.isValidFloat('10')).to.equal(true);
    })
    it('should return true if value is "-123"', function () {
      expect(validator.isValidFloat('-123')).to.equal(true);
    })
    it('should return true if value is "0"', function () {
      expect(validator.isValidFloat('0')).to.equal(true);
    })
    it('should return true if value is 10', function () {
      expect(validator.isValidFloat(10)).to.equal(true);
    })
    it('should return true if value is -123', function () {
      expect(validator.isValidFloat(10)).to.equal(true);
    })
    it('should return true if value is 0', function () {
      expect(validator.isValidFloat(10)).to.equal(true);
    })
    it('should return true if value is "0.0"', function () {
      expect(validator.isValidFloat("0.0")).to.equal(true);
    })
    it('should return true if value is "10.123"', function () {
      expect(validator.isValidFloat("10.123")).to.equal(true);
    })
    it('should return true if value is "-10.123"', function () {
      expect(validator.isValidFloat("-10.123")).to.equal(true);
    })
    it('should return true if value is 10.123', function () {
      expect(validator.isValidFloat(10.123)).to.equal(true);
    })
    it('should return true if value is -10.123', function () {
      expect(validator.isValidFloat(-10.123)).to.equal(true);
    })

  })

})