module.exports = require('./lib/create-server')
module.exports.payout = require('./lib/payout')
module.exports.payment = require('./lib/payment')
const { getBalance } = require('./lib/Account')
module.exports.getBalance = getBalance
