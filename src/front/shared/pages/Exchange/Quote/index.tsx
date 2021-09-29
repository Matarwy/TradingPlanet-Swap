import React from 'react'
import { FormattedMessage } from 'react-intl'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'

/* eslint-disable */
const Quote = () => {
  const href = "https://blog.qtum.org/P2P-cross-chain-swap-on-qtum-7e756a890ed7"
  return (
    <div styleName="container">
      <div styleName="header">
        &#34;
      <FormattedMessage
          id="Quote"
          defaultMessage="The swap.online project realizes swaps among Bitcoin-like, Ethereum-like, and made a product for users to execute swaps"
        />
        &#34;
    </div>
      <a href={href} title={href} target="_blank" rel="noopener noreferrer" styleName="href">
        <b>
          — QTUM official P2P Swap research
          <span> https://blog.qtum.org/P2P-cross-chain-swap-on-qtum-7e756a890ed7</span>
        </b>
      </a>
    </div>
  )
}
/* eslint-enable */

export default CSSModules(Quote, styles, { allowMultiple: true })
