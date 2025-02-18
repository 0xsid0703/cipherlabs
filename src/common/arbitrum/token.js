import {TOKEN_ICONS} from '../tokenIcons';
import {PRIMARY_QUOTE_SYMBOLS} from '../primaryQuoteSymbols';

const arbSepoliaChainId = 421614;
const arbOneChainId = 42161;

/**
 * Arbitrum Sepolia
 */

export const USDC_ARB_SEPOLIA = {
  address: '0xd32ea1c76ef1c296f131dd4c5b2a0aac3b22485a',
  chainId: arbSepoliaChainId,
  tokenDecimals: 6,
  name: 'USD Coin',
  symbol: PRIMARY_QUOTE_SYMBOLS.usdc,
  icon: TOKEN_ICONS.usdc,
};

export const WETH_ARB_SEPOLIA = {
  address: '0x94b3173e0a23c28b2ba9a52464ac24c2b032791c',
  chainId: arbSepoliaChainId,
  tokenDecimals: 18,
  name: 'Wrapped Ethereum',
  symbol: 'wETH',
  icon: TOKEN_ICONS.weth,
};

export const WBTC_ARB_SEPOLIA = {
  address: '0xa7fcb606611358afa388b6bd23b3b2f2c6abed82',
  chainId: arbSepoliaChainId,
  tokenDecimals: 18,
  name: 'Wrapped Bitcoin',
  symbol: 'wBTC',
  icon: TOKEN_ICONS.wbtc,
};

export const ARB_ARB_SEPOLIA = {
  address: '0x0881faabdddecf1b4c3d5331df33c13a1b6589ea',
  chainId: arbSepoliaChainId,
  tokenDecimals: 18,
  name: 'Arbitrum',
  symbol: 'ARB',
  icon: TOKEN_ICONS.arb,
};

export const USDT_ARB_SEPOLIA = {
  address: '0xa1c062ddef8f7b0a97e3bb219108ce73410772ce',
  chainId: arbSepoliaChainId,
  tokenDecimals: 6,
  name: 'Tether USD',
  symbol: 'USDT',
  icon: TOKEN_ICONS.usdt,
};

export const VRTX_ARB_SEPOLIA = {
  address: '0x00abca5597d51e6c06ecfa655e73ce70a1e2cdcf',
  chainId: arbSepoliaChainId,
  tokenDecimals: 18,
  name: 'VRTX',
  symbol: 'VRTX',
  icon: TOKEN_ICONS.vrtx,
};

/**
 * Arbitrum One
 */

export const USDC_ARB_ONE = {
  address: '0xaf88d065e77c8cc2239327c5edb3a432268e5831',
  chainId: arbOneChainId,
  tokenDecimals: 6,
  name: 'USD Coin',
  symbol: PRIMARY_QUOTE_SYMBOLS.usdc,
  icon: TOKEN_ICONS.usdc,
};

export const WETH_ARB_ONE = {
  address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
  chainId: arbOneChainId,
  tokenDecimals: 18,
  name: 'Wrapped Ethereum',
  symbol: 'wETH',
  icon: TOKEN_ICONS.weth,
};

export const WBTC_ARB_ONE = {
  address: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
  chainId: arbOneChainId,
  tokenDecimals: 8,
  name: 'Wrapped Bitcoin',
  symbol: 'wBTC',
  icon: TOKEN_ICONS.wbtc,
};

export const ARB_ARB_ONE = {
  address: '0x912ce59144191c1204e64559fe8253a0e49e6548',
  chainId: arbOneChainId,
  tokenDecimals: 18,
  name: 'Arbitrum',
  symbol: 'ARB',
  icon: TOKEN_ICONS.arb,
};

export const USDT_ARB_ONE = {
  address: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
  chainId: arbOneChainId,
  tokenDecimals: 6,
  name: 'Tether USD',
  symbol: 'USDT',
  icon: TOKEN_ICONS.usdt,
};

export const VRTX_ARB_ONE = {
  address: '0x95146881b86b3ee99e63705ec87afe29fcc044d9',
  chainId: arbOneChainId,
  tokenDecimals: 18,
  name: 'VRTX',
  symbol: 'VRTX',
  icon: TOKEN_ICONS.vrtx,
};
