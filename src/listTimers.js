const timerCache = require('./timerCache')

module.exports = () => {
  return (query) => {
    return Promise.resolve(Object.keys(timerCache)
      .filter((key) => {
        const { value } = timerCache[key]
        return value.match(query)
      })
      .map((key) => {
        const { value } = timerCache[key]
        return {
          id: key,
          icon: 'fa-clock-o',
          title: 'Timer: ' + value,
          value: key,
        }
      })
    )
  }
}
