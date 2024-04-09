import { etherlinkTestnetTokens } from '@pancakeswap/tokens'
import { getAddress } from 'viem'
import { FeeAmount } from '@pancakeswap/v3-sdk'
import { SerializedFarmConfig } from '..'
import { defineFarmV3Configs } from '../src/defineFarmV3Configs'

export const farmsV3 = defineFarmV3Configs([
  {
    pid: 1,
    lpAddress: '0x0e7f3d246d4d376f6096655d6f305adfedc062ab',
    token0: etherlinkTestnetTokens.ign,
    token1: etherlinkTestnetTokens.wxtz,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 2,
    lpAddress: '0x9644e26ef0ec0659e453dd8035d6b2a169eb65aa',
    token0: etherlinkTestnetTokens.wxtz,
    token1: etherlinkTestnetTokens.eusd,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 3,
    lpAddress: '0x7fe6e89eafa7de640445ad5ae170930cb502749b',
    token0: etherlinkTestnetTokens.eusd,
    token1: etherlinkTestnetTokens.usdt,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 4,
    lpAddress: '0x09528f03c9d23500c15a852acc537e0316392331',
    token0: etherlinkTestnetTokens.eusd,
    token1: etherlinkTestnetTokens.usdc,
    feeAmount: FeeAmount.LOWEST,
  },
])

const farms: SerializedFarmConfig[] = [
  {
    pid: 1,
    vaultPid: 1,
    lpSymbol: 'IGN-WXTZ LP',
    lpAddress: '0x464222a7f24E98c363370B558Cd3e9fea0F5dFDc',
    quoteToken: etherlinkTestnetTokens.wxtz,
    token: etherlinkTestnetTokens.ign,
  },
].map((p) => ({
  ...p,
  token: p.token.serialize,
  quoteToken: p.quoteToken.serialize,
  lpAddress: getAddress(p.lpAddress),
}))

export default farms
