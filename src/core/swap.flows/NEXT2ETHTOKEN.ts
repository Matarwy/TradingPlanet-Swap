import { constants } from 'swap.app'
import NextToEvmToken from './P2P/NextToEvmToken'


export default (tokenName) => {
  class NEXT2ETHTOKEN extends NextToEvmToken {
    _flowName: string
    static blockchainName = `ETH`

    static getName() {
      return `${this.getFromName()}2${this.getToName()}`
    }
    static getFromName() {
      return constants.COINS.next
    }
    static getToName() {
      return `{${this.blockchainName}}${tokenName.toUpperCase()}`
    }

    constructor(swap) {
      super(swap, {
        flowName: NEXT2ETHTOKEN.getName(),
        blockchainName: `ETH`,
        tokenName,
        getMyAddress: swap.app.getMyEthAddress.bind(swap.app),
        getParticipantAddress: swap.app.getParticipantEthAddress.bind(swap.app),
      })

      this._flowName = NEXT2ETHTOKEN.getName()
    }
  }

  return NEXT2ETHTOKEN
}