const capitalize = require('./capitalize')

test('first letter caps', () => {
  expect(capitalize('test')).toBe('Test')
})
