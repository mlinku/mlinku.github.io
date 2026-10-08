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

每日以行程为主，`routeOverview()` 在顶部生成默认收起的地点索引，沿用 `timedRoute()` 的顺序、返程用途和当前选择；完整换乘与执行说明保留在活动中。有巡礼的日期才显示行程／巡礼切换。旧 `route`、`gallery` 地址以及 `timeline/route` 地址均进入主行程并展开路线索引。

样式按基础布局、巡礼、路线与流程、博客主题、统一阅读布局分层。字号与阅读表面变量集中在 `layout.css`，新增规则前先检查现有定义，避免继续追加同选择器覆盖。

在本地旅行目录构建时，两版都以旅行目录的三份规划文件为准；博客构建自动同步到 `kansai-src/data`。独立克隆仓库时使用已提交的数据副本。文档中的交通、票券和地点来源应保持完整。

本地记录沿用 `kansai-autumn-notebook-v1` 存储键，`schemaVersion: 3` 的活动值为 `pending`、`done`，旧 `skipped` 按未完成迁移；拍摄仍沿用 `日期:shot:点位ID` 的布尔值。首次升级在任何迁移写入前，将旧存储原文保存在 `kansai-autumn-notebook-v1-before-activity-v3`（键已占用且内容不同则追加时间戳）。需要恢复时可从浏览器开发工具导出该值，再写回原存储键并刷新；先导出当前记录，恢复会替换当前进度。备份失败时不会覆盖旧存储。各浏览器和网页／文件来源分别保存。
