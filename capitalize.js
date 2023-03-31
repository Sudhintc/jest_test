function capitalize (string) {
  const str = string[0].toUpperCase() + string.slice(1)
  return str
}

module.exports = capitalize
