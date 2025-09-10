import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'

/* eslint-disable @next/next/no-img-element */
export const Footer = props => {
  return (
    <>
      {/* <!-- ====== Footer Section Start --> */}
      <footer className='bg-[#090E34] text-white'>
        {/* 顶部导航和社交媒体 */}
        <div className='border-b border-gray-600 py-6'>
          <div className='container'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
              {/* 左侧导航链接 */}
              <div className='flex flex-wrap gap-6 text-sm'>
                <SmartLink href='/archive' className='hover:text-gray-300 transition-colors'>
                  往期文章
                </SmartLink>
                <SmartLink href='https://space.bilibili.com/1201690957' className='hover:text-gray-300 transition-colors'>
                  UMPA Channel
                </SmartLink>
                <SmartLink href='/about' className='hover:text-gray-300 transition-colors'>
                  關於我們
                </SmartLink>
                <SmartLink href='/contact' className='hover:text-gray-300 transition-colors'>
                  聯絡我們
                </SmartLink>
              </div>
              
              {/* 右侧社交媒体图标 */}
              <div className='flex gap-4'>
                {/* 微信 */}
                <a href='https://weixin.qq.com/r/skyrs9XER4g4rZHQ9xmg' target='_blank' rel='noopener noreferrer' className='w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity'>
                  <svg viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
                    <path d='M8.5 12.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm7 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z'/>
                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'/>
                  </svg>
                </a>
                
                {/* 小红书 */}
                <a href='https://www.xiaohongshu.com/user/profile/5fc1ac100000000001005fb9' target='_blank' rel='noopener noreferrer' className='w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity'>
                  <svg viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
                    <rect x='3' y='3' width='18' height='18' rx='2' ry='2'/>
                    <path d='M9 9h6v6H9z'/>
                  </svg>
                </a>
                
                {/* B站 */}
                <a href='https://space.bilibili.com/1201690957' target='_blank' rel='noopener noreferrer' className='w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity'>
                  <svg viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z'/>
                  </svg>
                </a>
                
                {/* 抖音 */}
                <a href='https://v.douyin.com/k5mWp2u/' target='_blank' rel='noopener noreferrer' className='w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity'>
                  <svg viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z'/>
                  </svg>
                </a>
                
                {/* 微博 */}
                <a href='https://weibo.cn/qr/userinfo?uid=7609492813' target='_blank' rel='noopener noreferrer' className='w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity'>
                  <svg viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z'/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 中间联系信息和网站地图 */}
        <div className='py-8'>
          <div className='container'>
            <div className='flex flex-col lg:flex-row justify-between gap-8'>
              {/* 左侧联系信息 */}
              <div className='space-y-4'>
                <div className='flex items-center gap-3'>
                  <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'/>
                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'/>
                  </svg>
                  <span>umpa@um.edu.mo</span>
                </div>
                
                <div className='flex items-start gap-3'>
                  <svg className='w-5 h-5 mt-1' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd'/>
                  </svg>
                  <div>
                    <div>中国澳門氹仔大學大馬路 澳門大學研究生宿舍S3 G017室</div>
                    <div className='text-gray-400 text-sm mt-1'>Room G017, Postgraduate dormitory South 3, University of Macau, Avenida da Universidade, Taipa, Macau, China</div>
                  </div>
                </div>
                
                <div className='flex items-center gap-3'>
                  <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z' clipRule='evenodd'/>
                  </svg>
                  <span>https://www.umpa.studio</span>
                </div>
              </div>
              
              {/* 右侧网站地图和更新信息 */}
              <div className='text-right space-y-2'>
                <div className='text-lg font-medium'>網站地圖 Sitemap</div>
                <div className='text-gray-400'>上次更新 Last update: 2025-09-10</div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部版权信息 */}
        <div className='border-t border-gray-600 py-6'>
          <div className='container'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>

                
                {/* 右侧版权信息 */}
              <div className='text-gray-400 text-sm'>
                © 2022-2024, Content By UMPA. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- ====== Footer Section End --> */}
    </>
  )
}
