import { ChainId, Currency } from "@pancakeswap/sdk";
import { useMemo } from "react";
import { WrappedTokenInfo } from "@pancakeswap/token-lists";
import styled from "styled-components";
import { useHttpLocations } from "@pancakeswap/hooks";

import { TokenLogo } from "../TokenLogo";
import { BinanceIcon } from "../Svg";
import { getCurrencyLogoUrls } from "./utils";

const StyledLogo = styled(TokenLogo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
`;

export function CurrencyLogo({
  currency,
  size = "24px",
  style,
}: {
  currency?: Currency;
  size?: string;
  style?: React.CSSProperties;
}) {
  const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined);

  const srcs: string[] = useMemo(() => {
    if (currency?.isNative) return [];

    if (currency?.isToken) {
      const logoUrls = getCurrencyLogoUrls(currency);

      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, ...logoUrls];
      }
      return [...logoUrls];
    }
    return [];
  }, [currency, uriLocations]);

  if (currency?.isNative) {
    if (currency.chainId === ChainId.BSC) {
      return <BinanceIcon width={size} style={style} />;
    }
    if (currency.chainId === ChainId.ETHERLINK_TESTNET) {
      return (
        <StyledLogo
          size={size}
          srcs={[`https://assets.coingecko.com/coins/images/976/standard/Tezos-logo.png?1696502091`]}
          width={size}
          style={style}
        />
      );
    }
    return (
      <StyledLogo
        size={size}
        srcs={[`https://assets.pancakeswap.finance/web/native/${currency.chainId}.png`]}
        width={size}
        style={style}
      />
    );
  }

  if (currency?.symbol === "WXTZ") {
    return (
      <StyledLogo
        size={size}
        srcs={[`https://assets.coingecko.com/coins/images/976/standard/Tezos-logo.png?1696502091`]}
        alt={`${currency?.symbol ?? "token"} logo`}
        style={style}
      />
    );
  }
  if (currency?.symbol === "eUSD") {
    return (
      <StyledLogo
        size={size}
        srcs={[
          `https://raw.githubusercontent.com/Iguana-DEX/assets/main/assets/0x221836a597948dce8f3568e044ff123108acc42a.png`,
        ]}
        alt={`${currency?.symbol ?? "token"} logo`}
        style={style}
      />
    );
  }

  return <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? "token"} logo`} style={style} />;
}
