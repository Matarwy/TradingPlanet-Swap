export const COIN_TYPE = Object.freeze({
  NATIVE: 'NATIVE',
  ETH_TOKEN: 'ETH_TOKEN',
  BNB_TOKEN: 'BNB_TOKEN',
  MATIC_TOKEN: 'MATIC_TOKEN',
})

export const TOKEN_STANDARD = Object.freeze({
  ERC20: 'ERC20',
  BEP20: 'BEP20',
  ERC20MATIC: 'ERC20MATIC'
})

export const BLOCKCHAIN = Object.freeze({
  BTC: 'BTC',
  GHOST: 'GHOST',
  NEXT: 'NEXT',
  ETH: 'ETH',
  BNB: 'BNB', // TODO: rename with BSC
  MATIC: 'MATIC',
  //ARBITRUM: 'ARBITRUM',
})

export const BASE_TOKEN_CURRENCY = Object.freeze({
  ETH: 'ETH',
  BNB: 'BNB',
  MATIC: 'MATIC'
})

export const COIN_MODEL = Object.freeze({
  UTXO: 'UTXO', // Unspent Transaction Outputs model
  AB: 'AB' // Account/Balance model
})

export const COIN_DATA = {
  'BTC': {
    ticker: 'BTC',
    name: 'Bitcoin',
    type: COIN_TYPE.NATIVE,
    blockchain: BLOCKCHAIN.BTC,
    model: COIN_MODEL.UTXO,
    precision: 8,
  },
  'ETH': {
    ticker: 'ETH',
    name: 'Ethereum',
    type: COIN_TYPE.NATIVE,
    blockchain: BLOCKCHAIN.ETH,
    model: COIN_MODEL.AB,
    precision: 18,
  },
  'BNB': {
    ticker: 'BNB',
    name: 'Binance Coin',
    type: COIN_TYPE.NATIVE,
    blockchain: BLOCKCHAIN.BNB,
    model: COIN_MODEL.AB,
    precision: 18,
  },
  'MATIC': {
    ticker: 'MATIC',
    name: 'MATIC Token',
    type: COIN_TYPE.NATIVE,
    blockchain: BLOCKCHAIN.MATIC,
    model: COIN_MODEL.AB,
    precision: 18,
  },
  // 'ARBETH': {
  //   ticker: 'ARBETH',
  //   name: 'Arbitrum ETH',
  //   type: COIN_TYPE.NATIVE,
  //   blockchain: BLOCKCHAIN.ARBITRUM,
  //   model: COIN_MODEL.AB,
  //   precision: 18,
  // },
  'USDT': {
    ticker: 'USDT',
    name: 'Tether',
    type: COIN_TYPE.ETH_TOKEN,
    blockchain: BLOCKCHAIN.ETH,
    standard: TOKEN_STANDARD.ERC20,
    model: COIN_MODEL.AB,
    precision: 18,
  },
  'BTCB': {
    ticker: 'BTCB',
    name: 'BTCB Token',
    type: COIN_TYPE.BNB_TOKEN,
    blockchain: BLOCKCHAIN.BNB,
    standard: TOKEN_STANDARD.BEP20,
    model: COIN_MODEL.AB,
    precision: 18,
  },
  'EURS': {
    ticker: 'EURS',
    name: 'STASIS EURO',
    type: COIN_TYPE.ETH_TOKEN,
    blockchain: BLOCKCHAIN.ETH,
    standard: TOKEN_STANDARD.ERC20,
    model: COIN_MODEL.AB,
    precision: 18,
  },
  'GHOST': {
    ticker: 'GHOST',
    name: 'Ghost',
    type: COIN_TYPE.NATIVE,
    blockchain: BLOCKCHAIN.GHOST,
    model: COIN_MODEL.UTXO,
    precision: 8,
  },
  'NEXT': {
    ticker: 'NEXT',
    name: 'NEXT.coin',
    type: COIN_TYPE.NATIVE,
    blockchain: BLOCKCHAIN.NEXT,
    model: COIN_MODEL.UTXO,
    precision: 8,
  },
  'SWAP': {
    ticker: 'SWAP',
    name: 'SWAP',
    type: COIN_TYPE.ETH_TOKEN,
    blockchain: BLOCKCHAIN.ETH,
    standard: TOKEN_STANDARD.ERC20,
    model: COIN_MODEL.AB,
    precision: 18,
  },
  'SNM': {
    ticker: 'SONM',
    name: 'SWAP',
    type: COIN_TYPE.ETH_TOKEN,
    blockchain: BLOCKCHAIN.ETH,
    standard: TOKEN_STANDARD.ERC20,
    model: COIN_MODEL.AB,
    precision: 18,
  },
}


// todo: move to COIN_DATA

export const NATIVE = {
  btc: 'BTC',
  eth: 'ETH',
  bnb: 'BNB',
  matic: 'MATIC',
  //arbeth: 'ARBETH',
  ghost: 'GHOST',
  next: 'NEXT',
}

export const BNB_TOKENS = {
  btcb: '{BEP20}BTCB',
  busd: '{BEP20}BUSD',
  eth: '{BEP20}ETH',
  doge: '{BEP20}DOGE',
  wbnb: '{BEP20}WBNB',
  ada: '{BEP20}ADA',

}

export const MATIC_TOKENS = {
  wbtc: '{ERC20MATIC}WBTC',
}

export const ETH_TOKENS = {
  usdt: '{ERC20}USDT',
  wbtc: '{ERC20}WBTC',
  eurs: '{ERC20}EURS',
  swap: '{ERC20}SWAP',
  pay: '{ERC20}PAY',

  // needs for the front
  proxima: '{ERC20}PROXIMA',
  snm: '{ERC20}SNM',
  noxon: '{ERC20}NOXON',
  pbl: '{ERC20}PBL',
  xsat: '{ERC20}XSAT',
  hdp: '{ERC20}HDP',
  scro: '{ERC20}SCRO',
  xeur: '{ERC20}XEUR',

}

export default {
  ...NATIVE,
  ...ETH_TOKENS,
  ...BNB_TOKENS,
  ...MATIC_TOKENS,
  ...COIN_DATA,
}
