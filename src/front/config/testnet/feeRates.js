import api from './api'

export default {
  eth: `${api.etherscan}?module=proxy&action=eth_gasPrice&apikey=${api.etherscan_ApiKey}`,
  bsc: `${api.bscscan}?module=proxy&action=eth_gasPrice&apikey=${api.bscscan_ApiKey}`,
  matic: 'https://gasstation-mumbai.matic.today/',
  btc: `${api.blockcypher}?module=proxy&action=eth_gasPrice&apikey=${api.blockcypher_ApiKey}`,
}
