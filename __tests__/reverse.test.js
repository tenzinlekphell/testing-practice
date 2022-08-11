import reverse from '../reverse';

test('the word "behave" should be "evaheb"', () => {
  expect(reverse('behave')).toBe('evaheb');
});

test('the word "battle" should be "elttab"', () => {
  expect(reverse('battle')).toBe('elttab');
});
