import { etherlinkTestnetTokens } from '@pancakeswap/tokens'
import { getAddress } from 'viem'

import { PoolCategory, SerializedPool } from '../../types'

export const livePools: SerializedPool[] = [
  {
    sousId: 1,
    stakingToken: etherlinkTestnetTokens.ign,
    earningToken: etherlinkTestnetTokens.wxtz,
    contractAddress: '0x0A150c0AbbbD852ec8940AeE67A1aB59d9Fe76d1',
    poolCategory: PoolCategory.CORE,
    tokenPerSecond: '0.000331',
  },
  {
    sousId: 2,
    stakingToken: etherlinkTestnetTokens.wxtz,
    earningToken: etherlinkTestnetTokens.eusd,
    contractAddress: '0x0A150c0AbbbD852ec8940AeE67A1aB59d9Fe76d1',
    poolCategory: PoolCategory.CORE,
    tokenPerSecond: '0.000331',
  },
  {
    sousId: 3,
    stakingToken: etherlinkTestnetTokens.eusd,
    earningToken: etherlinkTestnetTokens.usdt,
    contractAddress: '0x0A150c0AbbbD852ec8940AeE67A1aB59d9Fe76d1',
    poolCategory: PoolCategory.CORE,
    tokenPerSecond: '0.000331',
  },
].map((p) => ({
  ...p,
  contractAddress: getAddress(p.contractAddress),
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

// known finished pools
export const finishedPools: SerializedPool[] = [
  
]

export const pools: SerializedPool[] = [...livePools, ...finishedPools]