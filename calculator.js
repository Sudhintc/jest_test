function add (a, b) {
  return a + b
}

function sub (a, b) {
  return a - b
}

function mul (a, b) {
  return a * b
}

function div (a, b) {
  if (b == 0) {
    return 'error'
  } else {
    return a / b
  }
}

const a = 10
console.log(a)
add(3, 5)

module.exports = { add, sub, mul, div }
