// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('PHONE NUMBER no parentheses', () => {
  expect(isPhoneNumber(`123-456-7890`)).toBe(true);
});

test('PHONE NUMBER parentheses', () => {
  expect(isPhoneNumber(`(123) 456-7890`)).toBe(true);
});

test('PHONE NUMBER letters', () => {
  expect(isPhoneNumber(`(123) 456-test`)).toBe(false);
});

test('PHONE NUMBER no hyphen', () => {
  expect(isPhoneNumber(`(123) 456 7890`)).toBe(false);
});

test('EMAIL regular', () => {
  expect(isEmail(`example@gmail.com`)).toBe(true);
});

test('EMAIL underscore', () => {
  expect(isEmail(`example_second@hello.io`)).toBe(true);
});

test('EMAIL spaces', () => {
  expect(isEmail(`example second@gmail.com`)).toBe(false);
});

test('EMAIL no domain', () => {
  expect(isEmail(`example@.com`)).toBe(false);
});

test('STRONG PW uppercase', () => {
  expect(isStrongPassword(`Testing`)).toBe(true);
});

test('STRONG PW numbers', () => {
  expect(isStrongPassword(`Testing123`)).toBe(true);
});

test('STRONG PW very long', () => {
  expect(isStrongPassword(`this is a very long sentence`)).toBe(false);
});

test('STRONG PW short', () => {
  expect(isStrongPassword(`h`)).toBe(false);
});