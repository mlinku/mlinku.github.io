# 关西旅行专题

博客仓库：mlinku/mlinku.github.io（HTTPS 与 git@github.com:mlinku/mlinku.github.io.git 指向同一仓库）。

此仓库当前是 Hexo 5.4.0 / Yun 1.6.1 的静态发布产物，仅有 master 分支；没有原始 Hexo 的 _config.yml、source 和 themes。此次接入在这一结构上完成，不假定存在缺失的 Hexo 工程。

## 入口与源码

- 专题入口：`/kansai/`，生成文件 `kansai/index.html`。
- 博客首页文章列表增加旅行专题卡，38个现有页面的侧栏增加「旅行」链接。
- 可编辑源码：`kansai-src/`。其中 `data/` 为此次既定行程与逐日攻略快照，`assets/` 为所需离线图片。
- 配色：`kansai-src/blog-theme.css`；统一卡片排版：`layout.css`；导航与结构：`interface.js`；行程规则：`app.js`。
- 背景复用博客的 `background2.jpg`，颜色与布局依据 `css/hexo-theme-yun.css`。为避免旧博客脚本、全局样式与旅行交互冲突，专题单独加载自己的应用代码，沿用 Yun 内页的视觉结构。
- 旅行链接使用完整页面跳转，避开现有 PJAX 的局部替换；返回博客使用相对地址 `../`，本地预览与正式域名均适用。

## 构建与本地预览

无需 npm 安装。使用 Node.js：

```powershell
node kansai-src/build.mjs
python -m http.server 8876 --bind 127.0.0.1
```

访问 `http://127.0.0.1:8876/` 看博客，进入旅行卡，或访问 `http://127.0.0.1:8876/kansai/`。

build.mjs 生成嵌入数据、样式与图片的专题单文件，再调用 integrate-blog.mjs 补齐博客入口。重复构建不会重复插入链接。不要手工编辑 kansai/index.html。

可以直接双击专题 HTML 离线阅读，但返回博客及原博客其它页面建议通过上述本地服务器预览。专题地图、来源链接需联网。原 `D:\关西旅游\可视化网页\index.html` 也保留为离线手册。

## 检查

```powershell
node kansai-src/verify-redesign.mjs
node kansai-src/verify-polish.mjs
```

包含8天67段既定行程、互斥可选安排、路线重复返程点、完成进度、复制失败回退的检查。

## 后续维护

此目录包含可直接发布的专题页面与可维护源码。如果以后找到真正的 Hexo 源码，应把专题生成文件接入 source/kansai/，并把入口移到主题菜单或页面模板；仅重新运行原 Hexo 发布流程会覆盖当前发布目录的手工入口。现有 integrate-blog.mjs 可在生成博客之后补回入口，但必须同时保留 kansai-src 与 kansai 目录。

浏览器进度按域名/端口/浏览器保存。原离线文件、本地8876预览、未来线上域名之间不会自动共享已勾选进度；此次没有删除或覆盖旧浏览器的记录。

阅读调整：正文层已提高到近实色蓝灰，减少背景透出，卡片与辅助文字同步提亮。
