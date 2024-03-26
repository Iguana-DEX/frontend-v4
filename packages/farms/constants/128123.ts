import { etherlinkTestnetTokens } from '@pancakeswap/tokens'
import { FeeAmount } from '@pancakeswap/v3-sdk'
import { defineFarmV3Configs } from '../src/defineFarmV3Configs'

export const farmsV3 = defineFarmV3Configs([
  {
    pid: 1,
    lpAddress: '0xae62072e5e25fE2D811Da7e4E33F75E0524B8FdC',
    token0: etherlinkTestnetTokens.wxtz,
    token1: etherlinkTestnetTokens.ign,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 2,
    lpAddress: '0xfc45871d6c0df3cdae736db52b2d81ac61ecf6ef',
    token0: etherlinkTestnetTokens.weth,
    token1: etherlinkTestnetTokens.ign,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 3,
    lpAddress: '0x9c7505095aa5a1b2227822ba47d13054ec570972',
    token0: etherlinkTestnetTokens.usdc,
    token1: etherlinkTestnetTokens.ign,
    feeAmount: FeeAmount.HIGH,
  },
])
