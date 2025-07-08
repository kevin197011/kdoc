# KDoc - Ruby 风格极简专业 Jekyll 文档主题

KDoc 是一款专为项目生成文档设计的 Jekyll 主题，采用 Ruby 官方红色配色方案，极简专业风格，支持顶部导航、左侧分组菜单、右侧浮动目录（TOC），适合企业/开源项目文档、API 文档、团队知识库等场景。

## 主题特性
- **Ruby 官方红色主题** (#cc342d) - 专业且富有品牌识别度
- **顶部导航栏** - 基于 `nav.yml` 配置
- **左侧分组菜单栏** - 支持多级分组，基于 `sidebar.yml` 配置
- **右侧浮动目录** - TOC 自动生成，跟随滚动
- **响应式设计** - 移动端菜单可折叠
- **代码高亮** - 集成 Prism.js，支持多种编程语言
- **增强 Markdown 渲染** - 优化排版和代码显示
- **固定宽度布局** - 内容区域固定宽度，提升阅读体验

## 目录结构
```
.
├── _layouts/
│   └── default.html          # 主布局文件
├── _includes/
│   ├── header.html           # 顶部导航栏
│   ├── sidebar.html          # 左侧分组菜单栏
│   ├── toc.html              # 右侧浮动目录
│   └── footer.html           # 页脚（集成到侧边栏）
├── _data/
│   ├── nav.yml               # 顶部导航配置
│   └── sidebar.yml           # 分组侧边栏配置
├── assets/
│   ├── css/
│   │   └── style.css         # 主题样式
│   └── js/
│       └── main.js           # 主题脚本
├── pages/
│   ├── index.md              # 首页
│   ├── about.md              # 关于页面
│   ├── guide/
│   │   ├── index.md          # 指南首页
│   │   ├── quick-start.md    # 快速开始
│   │   ├── configuration.md  # 配置说明
│   │   └── plugins.md        # 插件说明
│   └── api/
│       ├── index.md          # API 文档首页
│       └── examples.md       # API 示例
├── _config.yml               # Jekyll 配置
└── README.md
```

## 顶部导航配置（_data/nav.yml）
```yaml
- title: 首页
  url: /
- title: 指南
  url: /guide/
- title: API
  url: /api/
- title: 关于
  url: /about/
```

## 分组侧边栏配置（_data/sidebar.yml）
```yaml
- group: 快速开始
  items:
    - title: 指南首页
      url: /guide/
    - title: 快速开始
      url: /guide/quick-start/
- group: 配置
  items:
    - title: 配置说明
      url: /guide/configuration/
    - title: 插件
      url: /guide/plugins/
- group: API
  items:
    - title: API 概览
      url: /api/
    - title: 示例
      url: /api/examples/
```

## 页面配置
在 Markdown 文件的 front matter 中配置：

```yaml
---
layout: default
title: 页面标题
sidebar: true  # 可选，控制是否显示侧边栏
---
```

## 使用方法
1. 将本主题文件复制到你的 Jekyll 项目对应目录
2. 配置 `_data/nav.yml` 和 `_data/sidebar.yml`，自定义导航和侧边栏
3. 页面 front matter 里使用 `layout: default`
4. 启动 Jekyll (`bundle exec jekyll serve`) 预览效果

## 代码高亮
- 集成 Prism.js，支持多种编程语言
- 自动检测代码块语言并高亮
- 内联代码样式优化，移除反引号显示

## 响应式设计
- 移动端顶部菜单可折叠
- 侧边栏在小屏幕上自动隐藏
- 内容区域自适应不同屏幕尺寸

## 特色功能
- **多侧边栏支持** - 基于页面 front matter 配置
- **智能 TOC** - 自动生成并跟随滚动
- **专业排版** - 优化的字体、间距和颜色搭配
- **代码友好** - 优化的代码块和内联代码显示

## 适合场景
- 项目/开源文档
- API/SDK 文档
- 团队知识库
- 技术博客
- 产品文档

## 技术栈
- Jekyll 静态站点生成器
- Tailwind CSS 样式框架
- Prism.js 代码高亮
- Font Awesome 图标

---
如需进一步定制、功能增强或问题反馈，欢迎提 issue！
