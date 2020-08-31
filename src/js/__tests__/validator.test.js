import Validator from '../validator';

test('not latin characters in string', () => {
  expect(Validator.validateUsername('Иван')).toEqual(false);
});

test('illegal characters in string', () => {
  expect(Validator.validateUsername('Iam#Ivan')).toEqual(false);
  expect(Validator.validateUsername('Iam Ivan')).toEqual(false);
});

test('The name must not contain more than three digits in a row', () => {
  expect(Validator.validateUsername('Ivan1234Ivanoff')).toEqual(false);
});

test('The name must not start or end with numbers, underscores or dashes.', () => {
  expect(Validator.validateUsername('IamIvan8')).toEqual(false);
  expect(Validator.validateUsername('7Ivan')).toEqual(false);
  expect(Validator.validateUsername('_Ivan_')).toEqual(false);
  expect(Validator.validateUsername('7Ivan-')).toEqual(false);
});

test('Latin letters, dashes -, underscores _ and numbers (0-9) are allowed', () => {
  expect(Validator.validateUsername('I_am_Ivan-007_IvanOFF')).toEqual(true);
});

test('replacing 7 by 8 at the beginning of the Russian number', () => {
  expect(Validator.getValidatedPhone('8 (927) 000-00-00')).toEqual('+79270000000');
});

test('invalid characters should be removed', () => {
  expect(Validator.getValidatedPhone('+7 960 000 00 00')).toEqual('+79600000000');
});

test('for non-Russian numbers, the initial 8 is not replaced', () => {
  expect(Validator.getValidatedPhone('+86 000 000 0000')).toEqual('+860000000000');
});

test('add "7" to short number', () => {
  expect(Validator.getValidatedPhone('922 555 9999')).toEqual('+79225559999');
});
