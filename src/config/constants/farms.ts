import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'GME',
    lpAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },  
  {
    pid: 1,
    lpSymbol: 'GME-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x1020c21B153a7E1941a1458d61286955f1042ECA',
    },
    token: tokens.gme,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x70D8929d04b60Af4fb9B58713eBcf18765aDE422',
    },
    token: tokens.eth,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'BUSD-GME LP',
    lpAddresses: {
      97: '',
      56: '0xddBf610d1F2aaC3D532622459014696FCf0904Ea',
    },
    token: tokens.busd,
    quoteToken: tokens.gme,
  },
]

export default farms
