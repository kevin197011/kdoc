# KDoc - 极简 Ruby 官网风格文档主题

KDoc 是一款专为企业/开源项目设计的 Jekyll 文档主题，采用极简 Ruby 官网风格，支持顶部导航和分组侧边栏菜单。

## ✨ 特性

- 🎨 **极简设计** - 采用 Ruby 官网风格，简洁美观
- 📱 **响应式布局** - 完美适配桌面端和移动端
- 🧭 **智能导航** - 顶部导航 + 分组侧边栏菜单
- 🎯 **代码高亮** - 支持多种编程语言语法高亮
- ⚡ **快速构建** - 基于 Jekyll 4.3.2，构建速度快
- 🎨 **Tailwind CSS** - 现代化 CSS 框架，样式灵活
- 📖 **目录生成** - 自动生成页面目录导航

## 🚀 快速开始

### 环境要求

- Ruby 2.7+
- Jekyll 4.3.2+
- Bundler

### 安装步骤

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd kdoc
   ```

2. **安装依赖**
   ```bash
   bundle install
   ```

3. **启动开发服务器**
   ```bash
   bundle exec jekyll serve
   ```

4. **访问网站**
   打开浏览器访问 `http://localhost:4000`

## 📁 项目结构

```
kdoc/
├── _config.yml          # Jekyll 配置文件
├── _data/               # 数据文件
│   ├── nav.yml         # 顶部导航配置
│   └── sidebar.yml     # 侧边栏菜单配置
├── _includes/          # 页面组件
│   ├── header.html     # 页面头部
│   ├── footer.html     # 页面底部
│   ├── sidebar.html    # 侧边栏组件
│   └── toc.html        # 目录组件
├── _layouts/           # 页面布局模板
│   ├── default.html    # 默认布局
│   └── doc.html        # 文档布局
├── assets/             # 静态资源
│   └── js/
│       └── kdoc.js     # 主题 JavaScript
├── guide/              # 指南文档
├── api/                # API 文档
├── about.md            # 关于页面
└── index.md            # 首页
```

## ⚙️ 配置说明

### 顶部导航配置 (`_data/nav.yml`)

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

### 侧边栏菜单配置 (`_data/sidebar.yml`)

```yaml
- group: 指南
  items:
    - title: 快速开始
      url: /guide/
    - title: 配置
      url: /guide/config/
    - title: 插件
      url: /guide/plugins/
- group: API
  items:
    - title: API 概览
      url: /api/
    - title: 示例接口
      url: /api/example/
    - title: 范例接口
      url: /api/sample/
```

### 页面 Front Matter

```yaml
---
layout: default
title: 页面标题
sidebar_group: 指南  # 指定侧边栏分组
---
```

## 🎨 主题特色

### 设计风格
- 采用 Ruby 官网配色方案（主色：#cc342d）
- 极简现代的设计语言
- 圆角卡片式内容区域
- 优雅的阴影和过渡效果

### 技术栈
- **Jekyll 4.3.2** - 静态站点生成器
- **Tailwind CSS** - 实用优先的 CSS 框架
- **Prism.js** - 代码语法高亮
- **Font Awesome** - 图标库

### 响应式设计
- 移动端友好的侧边栏
- 自适应内容区域
- 流畅的过渡动画

## 📝 编写文档

### 创建新页面

1. 在相应目录下创建 `.md` 文件
2. 添加 Front Matter 配置
3. 使用 Markdown 编写内容

### 代码块示例

````markdown
```ruby
def hello_world
  puts "Hello, KDoc!"
end
```
````

### 表格示例

```markdown
| 功能 | 状态 | 说明 |
|------|------|------|
| 响应式 | ✅ | 支持移动端 |
| 代码高亮 | ✅ | 多语言支持 |
| 目录生成 | ✅ | 自动生成 |
```

## 🔧 自定义配置

### 修改主题色

在 `_layouts/default.html` 中修改 Tailwind 配置：

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        ruby: '#your-color',        // 主色
        'ruby-dark': '#dark-color', // 深色
        'ruby-light': '#light-color' // 浅色
      }
    }
  }
}
```

### 添加新页面类型

1. 在 `_layouts/` 目录下创建新的布局文件
2. 在页面 Front Matter 中指定 `layout: your-layout`

## 📦 插件支持

项目已集成以下 Jekyll 插件：

- `jekyll-feed` - RSS 订阅
- `jekyll-seo-tag` - SEO 优化
- `jekyll-sitemap` - 站点地图
- `base64` - Base64 编码支持
- `csv` - CSV 文件处理
- `logger` - 日志记录

## 🌟 使用场景

- 企业产品文档
- 开源项目文档
- API 文档站点
- 技术博客
- 知识库系统

## 🤝 贡献指南

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Jekyll](https://jekyllrb.com/) - 静态站点生成器
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [Prism.js](https://prismjs.com/) - 代码高亮
- [Font Awesome](https://fontawesome.com/) - 图标库

---

**KDoc** - 让文档更优雅，让知识更易获取 ✨
