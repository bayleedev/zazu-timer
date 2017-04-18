const expect = require('chai').expect
const convertToMs = require('../src/convertToMs')

const fiveMinutes = 5 * 60 * 1000
const thirtySeconds = 30 * 1000
const fiveMinutesThirtySeconds = fiveMinutes + thirtySeconds

describe('Convert To Ms', () => {
  it('does just minutes', () => {
    expect(convertToMs('5')).to.eq(fiveMinutes)
  })

  it('does just minutes with a title', () => {
    expect(convertToMs('5 pomodoro')).to.eq(fiveMinutes)
  })

  it('does minutes and seconds', () => {
    expect(convertToMs('5:30')).to.eq(fiveMinutesThirtySeconds)
  })

  it('does minutes and seconds with title', () => {
    expect(convertToMs('5:30 pomodoro')).to.eq(fiveMinutesThirtySeconds)
  })
})
