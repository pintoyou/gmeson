import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.gme,
    earningToken: tokens.gme,
    contractAddress: { // masterChef contract
      97: '',
      56: '0xcEf38F90CbB43725fa3bdbcD2F1fA141c0fc0cd3',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
