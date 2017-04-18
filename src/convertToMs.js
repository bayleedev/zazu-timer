module.exports = (value) => {
  const [ time ] = value.split(/\s+/)
  const [ minutes, seconds ] = time.split(':').map(n => parseInt(n, 10))
  const ms = ((seconds || 0) * 1000) + ((minutes || 0) * 60 * 1000)

  return ms
}
