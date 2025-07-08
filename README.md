# Jekyll VitePress 风格文档主题

本项目为 Jekyll 实现了类似 [VitePress](https://vitepress.dev/) 的文档主题模板，支持侧边栏、顶部导航、右侧目录（TOC）、暗色模式、代码高亮等。

## 目录结构

```
.
├── _layouts/
│   └── default.html
├── _includes/
│   ├── header.html
│   ├── sidebar.html
│   └── toc.html
├── _data/
│   ├── nav.yml
│   └── sidebar.yml
├── assets/
│   ├── css/
│   │   └── vitepress.css
│   └── js/
│       └── vitepress.js
└── README.md
```

## 使用方法

1. 将本项目文件复制到你的 Jekyll 项目对应目录。
2. 配置 `_data/nav.yml` 和 `_data/sidebar.yml`，自定义导航和侧边栏。
3. 页面 front matter 里使用 `layout: default`。
4. 启动 Jekyll (`bundle exec jekyll serve`) 预览效果。

## 功能特性
- 左侧导航栏（侧边栏）
- 顶部导航栏
- 右侧自动生成目录（TOC）
- 响应式设计，移动端自适应
- 暗色/亮色模式切换
- 代码高亮（Prism.js）

## 主题切换
点击右上角 🌓 按钮可切换暗色/亮色模式，自动记忆。

## 目录自动生成
右侧 TOC 会自动抓取正文 h2/h3 标题。

---
如需进一步美化或添加功能（如搜索、页脚等），欢迎提 issue！
