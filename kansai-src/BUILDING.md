# 构建旅行手册

网页源码统一维护在 `kansai-src`。`build-site.mjs` 同时负责两种交付，行程选择逻辑、文案和样式不再维护两套。

```powershell
node kansai-src/build.mjs
node kansai-src/verify-redesign.mjs
node kansai-src/verify-polish.mjs
```

- 博客版输出 `kansai/index.html`：数据与脚本为独立文件，图片使用缩略图、响应式尺寸和延迟加载，放大时读取原图。资源名包含内容哈希。
- 离线版通过本地 `可视化网页/build.mjs` 调用同一构建器：照片、数据和样式全部嵌入 HTML，双击打开不需要服务器。
- 博客缩略图构建使用 Python + Pillow；可用 `KANSAI_PYTHON` 指定 Python 路径。浏览器和读者不需要这些依赖。
- 离线目录中的源码文件由离线构建同步，仅作镜像。请在 `kansai-src` 修改后重新构建。

`dayPresentation()` 统一生成当前选择下的日标题、摘要和封面；`mealRows()` 统一决定餐厅首选、预算、地图和备选顺序。请勿在各视图另写替换条件。

样式按基础布局、巡礼、路线与流程、博客主题、统一阅读布局分层。字号与阅读表面变量集中在 `layout.css`，新增规则前先检查现有定义，避免继续追加同选择器覆盖。

在本地旅行目录构建时，两版都以旅行目录的三份规划文件为准；博客构建自动同步到 `kansai-src/data`。独立克隆仓库时使用已提交的数据副本。文档中的交通、票券和地点来源应保持完整。
