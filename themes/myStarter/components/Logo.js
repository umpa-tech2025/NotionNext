/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import throttle from 'lodash.throttle'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

/**
 * 站点图标
 * @returns
 */
export const Logo = props => {
  const { white, NOTION_CONFIG } = props
  const router = useRouter()
  const logoWhite = siteConfig('STARTER_LOGO_WHITE')
  const logoNormal = siteConfig('STARTER_LOGO')
  const { isDarkMode } = useGlobal()
  const [logo, setLogo] = useState(logoWhite)
  const [logoTextColor, setLogoTextColor] = useState('text-white')

  useEffect(() => {
    // 滚动监听
    const throttleMs = 200
    const navBarScrollListener = throttle(() => {
      const scrollY = window.scrollY
      // 由于导航栏现在有白色背景，Logo应该始终使用深色
      if (white || isDarkMode) {
        setLogo(logoWhite)
        setLogoTextColor('text-white')
      } else {
        setLogo(logoNormal)
        setLogoTextColor('text-gray-800')
      }
    }, throttleMs)

    navBarScrollListener()
    window.addEventListener('scroll', navBarScrollListener)
    return () => {
      window.removeEventListener('scroll', navBarScrollListener)
    }
  }, [isDarkMode, router])

  return (
    <div className='flex-shrink-0'>
      <div className='navbar-logo flex items-center cursor-pointer'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {logo && (
          <LazyImage
            priority
            onClick={() => {
              router.push('/')
            }}
            src={logo}
            alt='logo'
            className='header-logo mr-1 h-8'
          />
        )}
        {/* logo文字 */}
        <span
          onClick={() => {
            router.push('/')
          }}
          className={`${logoTextColor} logo dark:text-white py-1.5 header-logo-text whitespace-nowrap text-2xl font-semibold`}>
          {siteConfig('TITLE')}
        </span>
      </div>
    </div>
  )
}
