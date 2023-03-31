const calculator = require('./calculator')

test('add 2 no:', () => {
  expect(calculator.add(2, 3)).toBe(5)
})
describe('subtraction',()=>{

  test('sub 2 no:', () => {
    expect(calculator.sub(3, 2)).toBe(1)
  })
  
  test('subtract larger number from smaller', () => {
    expect(calculator.sub(2, 3)).toBe(-1)
  })
})

test('multiply 2 no:', () => {
  expect(calculator.mul(2, 3)).toBe(6)
})

test('divide 2 no:', () => {
  expect(calculator.div(6, 2)).toBe(3)
})

test('divide by 0', () => {
  expect(calculator.div(6, 0)).toBe('error')
})
