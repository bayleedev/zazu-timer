module.exports = () => {
  return (query) => {
    return Promise.resolve([
      {
        id: 'create-timer',
        icon: 'fa-clock-o',
        title: 'Start a countdown timer',
        subtitle: 'Timer ' + query,
        value: query,
      },
    ])
  }
}
