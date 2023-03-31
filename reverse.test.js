const reverse = require('./reverse')

test('reverse a string', () => {
  expect(reverse('hello')).toBe('olleh')
})

test('reverse multiple words', () => {
  expect(reverse('hello world!')).toBe('!dlrow olleh')
})

test('reverse with numbers', () => {
  expect(reverse('hello123')).toBe('321olleh')
})
