const convertToMs = require('./convertToMs')
const timerCache = require('./timerCache')

module.exports = () => {
  return (value) => {
    return new Promise((resolve, reject) => {
      const id = setTimeout(() => {
        delete timerCache[id]
        resolve(value)
      }, convertToMs(value))
      timerCache[id] = {
        value,
        kill: () => {
          delete timerCache[id]
          clearTimeout(id)
          reject()
          return value
        },
      }
    })
  }
}
