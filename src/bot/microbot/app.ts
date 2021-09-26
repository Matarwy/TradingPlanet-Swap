import _debug from 'debug'

import { setup, helpers, constants } from '../../core/simple/src'
import { handleRequest, handleOrder, handleError, fillOrderbook, startSaved } from './actions'
import { TOKENS, TOKEN_DECIMALS } from '../config/constants'
import * as configStorage from '../config/storage'
import { erc20 } from '../../core/swap.app/util'
import { FG_COLORS as COLORS, colorString } from 'common/utils/colorString'


const debug = _debug('swap.bot')
const network = configStorage.getNetwork() || process.env.NETWORK || 'testnet'

const {
  room: {
    ready,
  },
} = helpers

//register unkronw tokens in core
Object.keys(TOKENS).filter((name) => !Object.keys(constants.COINS).includes(name))
  .map((name) => {
    erc20.register(name.toLowerCase(), TOKENS[name].decimals)
  })

if (configStorage.hasTradeConfig()) {
  configStorage
    .getCustomERC20()
    .filter(({name}) => !Object.keys(constants.COINS).includes(name))
    .forEach((ercData) => {
      const {
        name,
        address,
        decimals,
      } = ercData

      TOKEN_DECIMALS[name] = decimals

      erc20.register(name.toLowerCase(), decimals)
      TOKENS[name.toLowerCase()] = ercData
      console.log(
        colorString('>>> Add ERC token', COLORS.GREEN),
        colorString(name, COLORS.RED),
        colorString('[OK]', COLORS.GREEN)
      )
    })
}

const ERC20TOKENS = Object.keys(TOKENS)
  .filter((name) => Object.keys(constants.COINS).includes(name))
  .map((name) => ({
    ...TOKENS[name],
    name: name.toUpperCase(),
    tokenAddress: TOKENS[name].address,
  }))


let TradingPlanetApp, app, auth, wallet, room, orders, services

try {
  TradingPlanetApp = setup({
    network,
    ERC20TOKENS,
    mnemonic: configStorage.getMnemonic() || process.env.SECRET_PHRASE,
  })

  let { app, auth, wallet, room, orders, services } = TradingPlanetApp

  ready(room).then(() => {
    debug('room ready')
    debug('swaps', Object.keys(app.swaps).join(','))

    debug(auth.getPublicData())

    helpers.history.init(app)
    startSaved(app)

    const update = () => fillOrderbook(wallet, orders)

    update()

    setInterval(() => {
      console.log(
        colorString(`Refill order book`, COLORS.GREEN)
      )
      update()
    }, 10 * 60 * 1000)

    // orders.on('new orders', orders => orders.map(handleOrder(orders)))
    // orders.on('new order', handleOrder(orders))

    orders.on('new order request', handleRequest(app, wallet, orders))
  })
} catch (err) {
  console.log('Fail create TradingPlanetApp', err)
  handleError(err)
}

export {
  TradingPlanetApp
}
