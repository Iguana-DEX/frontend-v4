import { useMemo } from 'react'
import {
  DropdownMenuItems,
  DropdownMenuItemType,
  EarnFillIcon,
  EarnIcon,
  MenuItemsType,
  SwapFillIcon,
  SwapIcon,
} from '@pancakeswap/uikit'
import { LinkStatus } from '@pancakeswap/uikit/src/widgets/Menu/types'
import { ContextApi, useTranslation } from '@pancakeswap/localization'
import { useMenuItemsStatus } from './useMenuItemsStatus'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }

export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Swap'),
        href: '/swap',
      },
      {
        label: t('Bridge'),
        href: 'https://bridge.etherlink.com',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
  {
    label: t('Earn'),
    href: '/liquidity',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    image: '/images/decorations/pe2.png',
    items: [
      {
        label: t('Liquidity Pools'),
        href: '/liquidity',
      },
      {
        label: t('Farms'),
        href: '/farms',
      },
      // {
      //   label: t('Pools'),
      //   href: '/pools',
      // },
    ],
  },
]

export const useMenuItems = (): ConfigMenuItemsType[] => {
  const { t } = useTranslation()
  const menuItemsStatus = useMenuItemsStatus()

  const menuItems = useMemo(() => {
    return config(t)
  }, [t])

  return useMemo(() => {
    if (menuItemsStatus && Object.keys(menuItemsStatus).length) {
      return menuItems.map((item) => {
        const innerItems = item.items?.map((innerItem) => {
          const itemStatus = innerItem?.href ? menuItemsStatus[innerItem.href] : null
          if (itemStatus) {
            let itemMenuStatus
            if (itemStatus === 'soon') {
              itemMenuStatus = <LinkStatus>{ text: t('Soon'), color: 'warning' }
            } else if (itemStatus === 'live') {
              itemMenuStatus = <LinkStatus>{ text: t('Live'), color: 'failure' }
            } else {
              itemMenuStatus = <LinkStatus>{ text: t('New'), color: 'success' }
            }
            return { ...innerItem, status: itemMenuStatus }
          }
          return innerItem
        })
        return { ...item, items: innerItems }
      })
    }
    return menuItems
  }, [t, menuItems, menuItemsStatus])
}
