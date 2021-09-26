import TradingPlanetApp, { constants } from 'swap.app'

import Wallet from './wallet'

import * as configFactory from './config'

const network = process.env.NETWORK

export default (settings) => {
  const useMnemonic = settings.mnemonic

  const getConfig = configFactory[network || 'testnet']

  const config = getConfig({
    contracts: {},
    ...settings,
    ...(useMnemonic) ? {
      mnemonic: useMnemonic,
    } : {}
  })

  const TradingPlanetApp = TradingPlanetApp.init(config, true)

  const wallet = new Wallet(TradingPlanetApp, constants, config)

  //@ts-ignore: strictNullChecks
  TradingPlanetApp.services.wallet = wallet

  //@ts-ignore: strictNullChecks
  const { auth, room, orders } = TradingPlanetApp.services

  const app = {
    app: TradingPlanetApp,
    wallet,
    auth,
    room,
    orders,
  }

  return app
}
