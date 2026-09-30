import path from 'node:path';
import fs from 'node:fs';
import {fileURLToPath} from 'node:url';
import {buildSite} from './build-site.mjs';
import {integrateBlog} from './integrate-blog.mjs';
const dir=path.dirname(fileURLToPath(import.meta.url));
const packagedData=path.join(dir,'data'),workspaceData=path.resolve(dir,'../..');
const dataFiles=['关西行程_可视化数据.json','关西旅行规划基准_2026-09-28.md','关西逐日执行攻略_2026-11-30至12-07.md'];
// In the travel workspace, canonical planning files feed both deliveries.
// A standalone repository checkout uses the committed, synchronized copies.
const dataDir=dataFiles.every(name=>fs.existsSync(path.join(workspaceData,name)))?workspaceData:packagedData;
if(dataDir===workspaceData)for(const name of dataFiles)fs.copyFileSync(path.join(dataDir,name),path.join(packagedData,name));
console.log(JSON.stringify(buildSite({sourceDir:dir,dataDir,outputDir:path.resolve(dir,'../kansai')})));
integrateBlog();
