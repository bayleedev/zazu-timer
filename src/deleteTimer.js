const timerCache = require('./timerCache')

module.exports = () => {
  return (id) => {
    return Promise.resolve(timerCache[id].kill())
  }
}
