/* eslint-disable no-unreachable */
import DashboardButton from '@/components/ui/dashboard/DashboardButton'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import throttle from 'lodash.throttle'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { Logo } from './Logo'
import { MenuList } from './MenuList'

/**
 * 顶部导航栏
 */
export const Header = props => {
  const router = useRouter()
  const { isDarkMode } = useGlobal()
  const [buttonTextColor, setColor] = useState('')

  const enableClerk = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

  useEffect(() => {
    // 由于导航栏现在有白色背景，文字应该始终使用深色
    setColor('text-gray-800')
    // ======= Sticky
    window.addEventListener('scroll', navBarScollListener)
    return () => {
      window.removeEventListener('scroll', navBarScollListener)
    }
  }, [isDarkMode])

  // 滚动监听
  const throttleMs = 200
  const navBarScollListener = useCallback(
    throttle(() => {
      // eslint-disable-next-line camelcase
      const ud_header = document.querySelector('.ud-header')
      const scrollY = window.scrollY
      // 简化滚动逻辑，只切换定位，保持样式一致
      if (scrollY > 0) {
        ud_header?.classList?.remove('absolute')
        ud_header?.classList?.add('fixed')
      } else {
        ud_header?.classList?.remove('fixed')
        ud_header?.classList?.add('absolute')
      }
    }, throttleMs)
  )

  return (
    <>
      {/* <!-- ====== Navbar Section Start --> */}
      <div className='ud-header absolute left-0 top-0 z-40 w-full bg-white shadow-md'>
        <div className='container'>
          <div className='flex items-center justify-between h-16 px-6'>
            {/* Logo */}
            <div className='flex-shrink-0'>
              <Logo {...props} />
            </div>

            {/* 中间菜单 */}
            <div className='flex-1 flex justify-center max-w-2xl'>
              <MenuList {...props} />
            </div>

            {/* 右侧功能 */}
            <div className='flex items-center gap-6 flex-shrink-0'>
                {/* 注册登录功能 */}
                {enableClerk && (
                  <>
                    <SignedOut>
                      <div className='hidden sm:flex gap-6'>
                        {siteConfig('STARTER_NAV_BUTTON_1_TEXT') && (
                          <SmartLink
                            href={siteConfig('STARTER_NAV_BUTTON_1_URL', '')}
                            className={`loginBtn ${buttonTextColor} px-4 py-2 text-base font-medium hover:opacity-70 transition-opacity`}>
                            {siteConfig('STARTER_NAV_BUTTON_1_TEXT')}
                          </SmartLink>
                        )}
                        {siteConfig('STARTER_NAV_BUTTON_2_TEXT') && (
                          <SmartLink
                            href={siteConfig('STARTER_NAV_BUTTON_2_URL', '')}
                            className={`signUpBtn ${buttonTextColor} px-6 py-2 rounded-lg bg-blue-600 text-white text-base font-medium duration-300 ease-in-out hover:bg-blue-700 transition-colors`}>
                            {siteConfig('STARTER_NAV_BUTTON_2_TEXT')}
                          </SmartLink>
                        )}
                      </div>
                    </SignedOut>
                    <SignedIn>
                      <UserButton />
                      <DashboardButton className={'hidden md:block'} />
                    </SignedIn>
                  </>
                )}
                {!enableClerk && (
                  <div className='hidden sm:flex gap-6'>
                    {siteConfig('STARTER_NAV_BUTTON_1_TEXT') && (
                      <SmartLink
                        href={siteConfig('STARTER_NAV_BUTTON_1_URL', '')}
                        className={`loginBtn ${buttonTextColor} px-4 py-2 text-base font-medium hover:opacity-70 transition-opacity`}>
                        {siteConfig('STARTER_NAV_BUTTON_1_TEXT')}
                      </SmartLink>
                    )}
                    {siteConfig('STARTER_NAV_BUTTON_2_TEXT') && (
                      <SmartLink
                        href={siteConfig('STARTER_NAV_BUTTON_2_URL', '')}
                        className={`signUpBtn ${buttonTextColor} px-6 py-2 rounded-lg bg-blue-600 text-white text-base font-medium duration-300 ease-in-out hover:bg-blue-700 transition-colors`}>
                        {siteConfig('STARTER_NAV_BUTTON_2_TEXT')}
                      </SmartLink>
                    )}
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====== Navbar Section End --> */}
    </>
  )
}
