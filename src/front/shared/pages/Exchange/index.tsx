import { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import CSSModules from 'react-css-modules'
import styles from './index.scss'
import { externalConfig, localStorage, constants, links } from 'helpers'
import QuickSwap from './QuickSwap'
import P2PSwap from './P2PSwap'

// option from the WP panel
const globalMode = window.exchangeMode

const GlobalModes = {
  P2P: 'P2P',
  quick: 'quick',
  only_P2P: 'only_P2P',
  only_quick: 'only_quick',
}

function Exchange(props) {
  const { location, history } = props

  const validMode = globalMode && GlobalModes[globalMode]
  const showOnlyOneType =
    validMode === GlobalModes.only_P2P || validMode === GlobalModes.only_quick

  const exchangeSettings = localStorage.getItem(constants.localStorage.exchangeSettings) || {}
  let initialState = location.pathname === '/exchange/quick' ? 'quick' : 'P2P'

  if (externalConfig.entry === 'testnet') {
    initialState = 'P2P'
  } else if (showOnlyOneType) {
    // and hide tabs next
    initialState = globalMode.replace(/only_/, '')
  } else if (validMode && location.pathname === '/exchange') {
    // show the default WP mode if url isn't specified
    initialState = validMode
  } else if (exchangeSettings.swapMode) {
    initialState = exchangeSettings.swapMode
  } else {
    // mode isn't saved for new users. Save it
    exchangeSettings.swapMode = initialState
    localStorage.setItem(constants.localStorage.exchangeSettings, exchangeSettings)
  }

  const [swapMode, setSwapMode] = useState(initialState)

  const openP2PMode = () => {
    if (exchangeSettings.P2PCurrency) {
      const { sell, buy } = exchangeSettings.P2PCurrency

      history.push(`${links.exchange}/${sell}-to-${buy}`)
    }

    updateSwapMode('P2P')
  }

  const openQuickMode = () => {
    if (exchangeSettings.quickCurrency) {
      const { sell, buy } = exchangeSettings.quickCurrency

      history.push(`${links.exchange}/quick/${sell}-to-${buy}`)
    } else {
      history.push(`${links.exchange}/quick`)
    }

    updateSwapMode('quick')
  }

  const updateSwapMode = (mode) => {
    setSwapMode(mode)
    const exchangeSettings = localStorage.getItem(constants.localStorage.exchangeSettings)

    exchangeSettings.swapMode = mode
    localStorage.setItem(constants.localStorage.exchangeSettings, exchangeSettings)
  }

  return (
    <div>
      {!showOnlyOneType && (
        <div styleName="tabsWrapper">
          <button
            /* externalConfig.entry === 'testnet' ? 'disabled' : '' */
            styleName={`tab
              ${swapMode === 'quick' ? 'active' : ''}
              ${externalConfig.entry !== 'mainnet' ? 'disabled' : ''}
            `}
            /* externalConfig.entry === 'mainnet' ? openQuickMode : undefined */
            onClick={openQuickMode}
          >
            <FormattedMessage id="quickSwap" defaultMessage="Quick swap" />
          </button>
          <button
            styleName={`tab ${swapMode === 'P2P' ? 'active' : ''}`}
            onClick={openP2PMode}
          >
            <FormattedMessage id="P2PSwap" defaultMessage="P2P swap" />
          </button>
        </div>
      )}

      {/* this swap type is available only on mainnet networks */}
      {swapMode === 'quick' && externalConfig.entry === 'mainnet' && (
        <div styleName="container">
          <QuickSwap {...props} />
        </div>
      )}

      {/*
      pass props from this component into the components
      because there has to be "url" props like match, location, etc.
      but this props are only in the Router children */}
      {swapMode === 'P2P' && <P2PSwap {...props} />}
    </div>
  )
}

export default CSSModules(Exchange, styles, { allowMultiple: true })
