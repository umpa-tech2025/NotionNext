import { useGlobal } from '@/lib/global'
import { siteConfig } from '@/lib/config'
import dynamic from 'next/dynamic'
import CONFIG from '../config'

const NotionPage = dynamic(() => import('@/components/NotionPage'))

/**
 * 公告组件
 * 用于显示网站公告信息
 * @param {Object} props - 组件属性
 * @param {Object} props.notice - 公告内容（Notion页面数据）
 * @param {string} props.className - 自定义CSS类名
 * @returns {JSX.Element}
 */
const Announcement = ({ notice, className = '' }) => {
  const { locale } = useGlobal()
  
  // 如果没有公告内容，不显示组件
  if (!notice || Object.keys(notice).length === 0) {
    return <></>
  }

  // 获取公告样式配置
  const announcementStyle = siteConfig('STARTER_ANNOUNCEMENT_STYLE', 'default', CONFIG)
  
  // 根据样式配置返回不同的组件
  const getAnnouncementContent = () => {
    switch (announcementStyle) {
      case 'compact':
        return (
          <div className="mb-4 p-3 overflow-auto bg-blue-50 dark:bg-blue-900/20">
            <div className="text-sm flex items-center justify-center mb-2">
              <i className="mr-2 fas fa-bullhorn text-blue-500" />
              <span className="font-medium text-blue-700 dark:text-blue-300 text-center">
                公告<br/>Anouncement
              </span>
            </div>
            {notice && (
              <div id="announcement-content" className="text-blue-800 dark:text-blue-200 text-sm">
                <NotionPage post={notice} className="text-left" />
              </div>
            )}
          </div>
        )
      
      case 'banner':
        return (
          <div className="mb-6 p-4 overflow-auto bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
            <div className="text-sm flex items-center justify-center mb-3">
              <i className="mr-2 fas fa-bullhorn text-blue-600" />
              <span className="font-semibold text-blue-800 dark:text-blue-200 text-center">
                公告<br/>Anouncement
              </span>
            </div>
            {notice && (
              <div id="announcement-content" className="text-blue-900 dark:text-blue-100">
                <NotionPage post={notice} className="text-center" />
              </div>
            )}
          </div>
        )
      
      default: // 'default'
        return (
          <div className="mb-6 p-4 overflow-auto bg-white dark:bg-gray-800">
            <div className="text-sm flex items-center justify-center mb-3">
              {/* <i className="mr-2 fas fa-bullhorn text-blue-500" /> */}
              <span className="mb-2 block text-lg font-semibold text-primary text-center">
                公告<br/>Anouncement
              </span>
            </div>
            {notice && (
              <div id="announcement-content" className="text-gray-800 dark:text-gray-200">
                <NotionPage post={notice} className="text-center" />
              </div>
            )}
          </div>
        )
    }
  }

  return (
    <div className={`w-full ${className}`}>
      {getAnnouncementContent()}
    </div>
  )
}

export default Announcement
