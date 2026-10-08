import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const plan=JSON.parse(fs.readFileSync(new URL('data/关西行程_可视化数据.json',import.meta.url),'utf8').replace(/^\uFEFF/,''));
const existing={innerHTML:'original coordinate source',children:[],append(el){this.children.push(el);el.parent=this;}};
const nodes=new Map();let restoredFocus=false;
const body={append(el){nodes.set(el.id,el);el.parent=this;}};
function element(tag){return {tag,value:'',style:{},setAttribute(){},select(){this.selected=true;},remove(){if(this.parent?.children)this.parent.children=this.parent.children.filter(x=>x!==this);},showModal(){this.open=true;},querySelector(){return this.field||(this.field=element('textarea'));}};}
const document={body,activeElement:{focus(){restoredFocus=true;}},getElementById:id=>nodes.get(id),querySelector:s=>s==='dialog[open]'?existing:null,createElement:element,execCommand(){return false;}};
const ctx=vm.createContext({PLAN:plan,PHOTOS:{},document,localStorage:{getItem(){return null},setItem(){}},navigator:{clipboard:{async writeText(){throw Error('clipboard unavailable')}}},setTimeout,clearTimeout});
vm.runInContext(fs.readFileSync(new URL('app.js',import.meta.url),'utf8'),ctx);
await vm.runInContext('copyText("地点参考 <35.0> & 135.0")',ctx);
assert.equal(existing.innerHTML,'original coordinate source','复制失败不覆盖坐标来源');
assert.equal(existing.children.length,0,'清理临时复制节点');
assert.equal(nodes.get('copy-dialog').open,true,'独立手动复制弹窗已打开');
assert.ok(nodes.get('copy-dialog').innerHTML.includes('地点参考 &lt;35.0&gt; &amp; 135.0'),'复制内容安全转义');
assert.equal(nodes.get('copy-dialog').field.selected,true,'手动复制文字被选中');
assert.equal(restoredFocus,true,'恢复此前控件焦点');
console.log('PASS: clipboard rejection and fallback failure preserve the original dialog; escaped manual copy stays available.');
