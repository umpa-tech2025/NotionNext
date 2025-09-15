# 生产环境部署指南 - HTML渲染问题解决方案

## 问题描述
在生产环境使用PM2部署后，Contact页面的HTML格式没有被正确渲染，显示为转义的HTML标签（如`&lt;br&gt;`而不是`<br>`）。

## 问题原因
1. **SSR/客户端渲染差异**：生产环境使用SSR，而`siteConfig`函数依赖于`useGlobal()`钩子，在SSR阶段可能无法正确获取配置
2. **配置加载时机**：Notion配置在客户端才完全加载，导致SSR阶段HTML内容没有被正确处理
3. **缓存问题**：PM2部署后可能存在缓存问题

## 解决方案

### 方案1：修改Contact组件（已实施）
已修改`themes/starter/components/Contact.js`，添加客户端检查：
- 使用`useState`和`useEffect`检测客户端渲染
- 在SSR阶段使用`CONFIG`作为fallback
- 在客户端使用完整的`siteConfig`配置

### 方案2：PM2部署优化
```bash
# 1. 清理缓存
pm2 delete all
rm -rf .next
rm -rf node_modules/.cache

# 2. 重新安装依赖
npm install

# 3. 重新构建
npm run build

# 4. 重新部署
pm2 start ecosystem.config.js
```

### 方案3：环境变量配置
确保生产环境的环境变量正确设置：
```bash
# 检查环境变量
echo $NOTION_TOKEN_V2
echo $NOTION_PAGE_ID
echo $NODE_ENV
```

### 方案4：Next.js配置优化
在`next.config.js`中添加：
```javascript
const nextConfig = {
  // 确保SSR正确处理
  experimental: {
    esmExternals: true,
  },
  // 禁用SSR优化（如果问题持续）
  // output: 'standalone',
}
```

## 验证步骤
1. 部署后检查Contact页面
2. 查看浏览器开发者工具中的HTML源码
3. 确认`<br>`标签是否正确渲染
4. 检查控制台是否有JavaScript错误

## 常见问题排查
1. **配置未加载**：检查Notion配置是否正确同步
2. **缓存问题**：清理所有缓存重新部署
3. **环境变量**：确认生产环境变量设置正确
4. **构建问题**：重新构建项目

## 联系支持
如果问题持续存在，请提供：
- 生产环境URL
- 浏览器控制台错误信息
- PM2日志
- 环境变量配置（隐藏敏感信息）
