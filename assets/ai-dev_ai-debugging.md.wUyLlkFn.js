import{_ as o,C as a,o as n,c as r,E as p,a1 as t,b as c,w as e,a as d,a2 as u}from"./chunks/framework.NjEjlYNI.js";const f=JSON.parse('{"title":"AI 调试助手","description":"用 AI 快速定位 Bug — 错误分析、调试策略、性能问题排查","frontmatter":{"title":"AI 调试助手","description":"用 AI 快速定位 Bug — 错误分析、调试策略、性能问题排查","difficulty":"beginner","frequency":"medium"},"headers":[],"relativePath":"ai-dev/ai-debugging.md","filePath":"ai-dev/ai-debugging.md"}'),h={name:"ai-dev/ai-debugging.md"};function g(E,s,A,b,m,B){const l=a("DifficultyBadge"),i=a("Mermaid");return n(),r("div",null,[p(l,{level:"beginner"}),s[1]||(s[1]=t('<h1 id="ai-调试助手" tabindex="-1">AI 调试助手 <a class="header-anchor" href="#ai-调试助手" aria-label="Permalink to &quot;AI 调试助手&quot;">​</a></h1><h2 id="一句话解释" tabindex="-1">一句话解释 <a class="header-anchor" href="#一句话解释" aria-label="Permalink to &quot;一句话解释&quot;">​</a></h2><p>AI 调试不是把报错扔给 AI 让它改——而是<strong>给 AI 完整的上下文（代码 + 错误 + 预期行为 + 排查思路），让 AI 帮你缩小问题范围</strong>。</p><h2 id="核心流程" tabindex="-1">核心流程 <a class="header-anchor" href="#核心流程" aria-label="Permalink to &quot;核心流程&quot;">​</a></h2>',4)),(n(),c(u,null,{default:e(()=>[p(i,{id:"mermaid-14",class:"mermaid",graph:"flowchart%20TD%0A%20%20%20%20A%5B%E5%8F%91%E7%8E%B0%20Bug%5D%20--%3E%20B%7B%E4%BD%A0%E8%83%BD%E5%AE%9A%E4%BD%8D%E5%88%B0%E8%8C%83%E5%9B%B4%3F%7D%0A%20%20%20%20B%20--%3E%7C%E6%98%AF%7C%20C%5B%E6%8F%90%E5%8F%96%E7%9B%B8%E5%85%B3%E4%BB%A3%E7%A0%81%20%2B%20%E9%94%99%E8%AF%AF%E4%BF%A1%E6%81%AF%5D%0A%20%20%20%20B%20--%3E%7C%E5%90%A6%7C%20D%5B%E6%8F%8F%E8%BF%B0%E7%8E%B0%E8%B1%A1%20%2B%20%E6%9C%80%E8%BF%91%E6%94%B9%E5%8A%A8%20%2B%20%E5%A4%8D%E7%8E%B0%E6%AD%A5%E9%AA%A4%5D%0A%20%20%20%20C%20--%3E%20E%5B%E6%9E%84%E9%80%A0%E8%B0%83%E8%AF%95%20Prompt%5D%0A%20%20%20%20D%20--%3E%20E%0A%20%20%20%20E%20--%3E%20F%5BAI%20%E5%88%86%E6%9E%90%5D%0A%20%20%20%20F%20--%3E%20G%7BAI%20%E7%BB%99%E5%87%BA%E6%96%B9%E5%90%91%3F%7D%0A%20%20%20%20G%20--%3E%7C%E6%98%8E%E7%A1%AE%7C%20H%5B%E9%AA%8C%E8%AF%81%E4%BF%AE%E5%A4%8D%5D%0A%20%20%20%20G%20--%3E%7C%E6%A8%A1%E7%B3%8A%7C%20I%5B%E8%A1%A5%E5%85%85%E4%BF%A1%E6%81%AF%3A%20%E6%88%AA%E5%9B%BE%2F%E6%97%A5%E5%BF%97%2F%E6%95%B0%E6%8D%AE%5D%0A%20%20%20%20I%20--%3E%20F%0A%20%20%20%20H%20--%3E%20J%7BBug%20%E4%BF%AE%E5%A4%8D%3F%7D%0A%20%20%20%20J%20--%3E%7C%E6%98%AF%7C%20K%5B%E5%9B%9E%E5%BD%92%E6%B5%8B%E8%AF%95%5D%0A%20%20%20%20J%20--%3E%7C%E5%90%A6%7C%20L%5B%E7%BC%A9%E5%B0%8F%E8%8C%83%E5%9B%B4%3A%20%E7%94%A8%E4%BA%8C%E5%88%86%E6%B3%95%E5%AE%9A%E4%BD%8D%5D%0A%20%20%20%20L%20--%3E%20C%0A"})]),fallback:e(()=>[...s[0]||(s[0]=[d(" Loading... ",-1)])]),_:1})),s[2]||(s[2]=t(`<h2 id="深入理解" tabindex="-1">深入理解 <a class="header-anchor" href="#深入理解" aria-label="Permalink to &quot;深入理解&quot;">​</a></h2><h3 id="_1-调试-prompt-公式" tabindex="-1">1. 调试 Prompt 公式 <a class="header-anchor" href="#_1-调试-prompt-公式" aria-label="Permalink to &quot;1. 调试 Prompt 公式&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## Bug 报告</span></span>
<span class="line"><span>组件/模块：[文件名]</span></span>
<span class="line"><span>框架版本：[React 18 / Vue 3 / Node 20]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 预期行为</span></span>
<span class="line"><span>[应该发生什么]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 实际行为</span></span>
<span class="line"><span>[实际发生了什么，附截图/报错]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 代码片段</span></span>
<span class="line"><span>\`\`\`javascript</span></span>
<span class="line"><span>相关代码（完整函数/组件）</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 环境信息</span></span>
<span class="line"><span>- 浏览器/版本</span></span>
<span class="line"><span>- Node 版本</span></span>
<span class="line"><span>- 其他相关依赖版本</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 我已排查</span></span>
<span class="line"><span>[试过哪些方法/排除了哪些可能]</span></span></code></pre></div><p><strong>三种常见调试场景：</strong></p><p><strong>场景一：运行时错误</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>收到报错: &quot;Cannot read properties of undefined (reading &#39;map&#39;)&quot;</span></span>
<span class="line"><span>代码：</span></span>
<span class="line"><span>\`\`\`javascript</span></span>
<span class="line"><span>function List({ items }) {</span></span>
<span class="line"><span>  return items.map(item =&gt; &lt;li&gt;{item.name}&lt;/li&gt;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>组件调用 &lt;List items={undefined} /&gt;</span></span>
<span class="line"><span>请分析原因和修复方案。</span></span></code></pre></div><p><strong>场景二：逻辑 Bug</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>预期：点击&quot;全选&quot;后所有选项被选中</span></span>
<span class="line"><span>实际：第一次点击正常，取消全选后再点全选无效</span></span>
<span class="line"><span>代码：[完整代码]</span></span>
<span class="line"><span>环境：React 18</span></span>
<span class="line"><span>请分析是什么导致状态不同步。</span></span></code></pre></div><p><strong>场景三：性能问题</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>现象：列表输入框打字卡顿</span></span>
<span class="line"><span>当前实现：每输入一个字符触发 API 搜索</span></span>
<span class="line"><span>代码：[完整代码]</span></span>
<span class="line"><span>请分析性能瓶颈并给出优化方案。</span></span></code></pre></div><h3 id="_2-ai-调试策略" tabindex="-1">2. AI 调试策略 <a class="header-anchor" href="#_2-ai-调试策略" aria-label="Permalink to &quot;2. AI 调试策略&quot;">​</a></h3><table tabindex="0"><thead><tr><th>策略</th><th>说明</th><th>适用场景</th></tr></thead><tbody><tr><td><strong>逐层缩小</strong></td><td>先给整体，AI 问哪个部分再局部深入</td><td>你不确定问题范围时</td></tr><tr><td><strong>二分法</strong></td><td>提交一半代码，让 AI 分析这半有没有问题</td><td>大文件/复杂组件</td></tr><tr><td><strong>对比法</strong></td><td>&quot;这段代码和另一段代码行为不同，差异在这里……&quot;</td><td>重构后出现的新 Bug</td></tr><tr><td><strong>简化法</strong></td><td>&quot;我把问题抽象成最小复现如下……&quot;</td><td>复杂交互场景的 Bug</td></tr><tr><td><strong>历史追溯</strong></td><td>&quot;之前这个功能是好的，改动 X 之后坏了&quot;</td><td>回归 Bug</td></tr></tbody></table><p><strong>最佳实践：给 AI 看完整的错误栈</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>❌ 不好的调试 Prompt:</span></span>
<span class="line"><span>&quot;我的页面报错了，帮我看看&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✅ 好的调试 Prompt:</span></span>
<span class="line"><span>&quot;Next.js 14 App Router 页面报错：</span></span>
<span class="line"><span>Error: Hydration failed because the initial UI does not match what was rendered on the server.</span></span>
<span class="line"><span>相关代码（page.tsx）：</span></span>
<span class="line"><span>\`\`\`tsx</span></span>
<span class="line"><span>export default function Page() {</span></span>
<span class="line"><span>  return &lt;div&gt;{new Date().toLocaleTimeString()}&lt;/div&gt;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>请分析 Hydration 失败的原因并修复。</span></span>
<span class="line"><span>&quot;</span></span></code></pre></div><h3 id="_3-常见调试场景模板" tabindex="-1">3. 常见调试场景模板 <a class="header-anchor" href="#_3-常见调试场景模板" aria-label="Permalink to &quot;3. 常见调试场景模板&quot;">​</a></h3><p><strong>模板一：React 组件 Bug</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>React 18 组件，报错 &quot;Too many re-renders&quot;。</span></span>
<span class="line"><span>代码：</span></span>
<span class="line"><span>\`\`\`tsx</span></span>
<span class="line"><span>function SearchPage() {</span></span>
<span class="line"><span>  const [results, setResults] = useState([])</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  fetch(&#39;/api/search&#39;).then(res =&gt; res.json()).then(setResults)</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  return &lt;List data={results} /&gt;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>请分析什么导致无限重渲染，并修复。</span></span></code></pre></div><p><strong>模板二：异步逻辑 Bug</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Vue 3 + Pinia，用户登录后状态不同步：</span></span>
<span class="line"><span>\`\`\`vue</span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { useUserStore } from &#39;@/stores/user&#39;</span></span>
<span class="line"><span>import { useRouter } from &#39;vue-router&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const userStore = useUserStore()</span></span>
<span class="line"><span>const router = useRouter()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>async function login() {</span></span>
<span class="line"><span>  const res = await fetch(&#39;/api/login&#39;, { method: &#39;POST&#39; })</span></span>
<span class="line"><span>  userStore.setUser(res.data)</span></span>
<span class="line"><span>  router.push(&#39;/dashboard&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>现象：login() 执行后跳转到 /dashboard，但页面上显示&quot;未登录&quot;，</span></span>
<span class="line"><span>刷新后才正常。请分析原因。</span></span></code></pre></div><p><strong>模板三：类型错误</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>TypeScript 类型错误，不确定怎么正确定义：</span></span>
<span class="line"><span>\`\`\`typescript</span></span>
<span class="line"><span>interface EventMap {</span></span>
<span class="line"><span>  click: { x: number; y: number }</span></span>
<span class="line"><span>  focus: { element: HTMLElement }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 想实现一个类型安全的事件发射器</span></span>
<span class="line"><span>class Emitter&lt;T extends Record&lt;string, any&gt;&gt; {</span></span>
<span class="line"><span>  on&lt;K extends keyof T&gt;(event: K, handler: (data: T[K]) =&gt; void) {}</span></span>
<span class="line"><span>  emit&lt;K extends keyof T&gt;(event: K, data: T[K]) {}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 但这里类型推导不对</span></span>
<span class="line"><span>type Test = Emitter&lt;EventMap&gt;</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span>帮我修复类型定义，让 on/emit 有完整的类型推导。</span></span></code></pre></div><h3 id="_4-ai-调试的局限性" tabindex="-1">4. AI 调试的局限性 <a class="header-anchor" href="#_4-ai-调试的局限性" aria-label="Permalink to &quot;4. AI 调试的局限性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>局限</th><th>原因</th><th>应对</th></tr></thead><tbody><tr><td>看不到完整项目上下文</td><td>只有你给的那段代码</td><td>提供相关模块的入口和类型定义</td></tr><tr><td>不理解业务逻辑</td><td>AI 不熟悉你的业务领域</td><td>解释业务规则</td></tr><tr><td>可能给出不存在的 API</td><td>幻觉</td><td>验证 AI 推荐的 API 文档</td></tr><tr><td>难以排查环境问题</td><td>无法复现你的环境配置</td><td>提供依赖版本号 + 复现步骤</td></tr><tr><td>安全盲区</td><td>AI 可能忽略安全风险</td><td>自己把关权限验证等安全逻辑</td></tr></tbody></table><h2 id="面试问法" tabindex="-1">面试问法 <a class="header-anchor" href="#面试问法" aria-label="Permalink to &quot;面试问法&quot;">​</a></h2><ul><li><p>🔥 <strong>你平时怎么用 AI 调试 Bug？</strong></p><ul><li>先自己定位到范围，再给 AI 完整上下文（代码 + 错误 + 预期 + 已排查）</li><li>不是直接丢错误让 AI 修，而是<strong>和 AI 一起分析缩小范围</strong></li><li>关键：AI 帮我看&quot;想不到的角度&quot;而非&quot;替我做&quot;</li></ul></li><li><p>⭐ <strong>AI 调试有什么局限？什么情况 AI 帮不上忙？</strong></p><ul><li>缺乏项目上下文、不懂业务逻辑、可能幻觉</li><li>环境配置问题、复杂竞态条件、与第三方服务的集成问题</li></ul></li></ul><h2 id="💡-ai-辅助学习" tabindex="-1">💡 AI 辅助学习 <a class="header-anchor" href="#💡-ai-辅助学习" aria-label="Permalink to &quot;💡 AI 辅助学习&quot;">​</a></h2><blockquote><p>用这个 Prompt 练习调试能力： &quot;你是一个前端技术面试官。请给我一段有隐藏 Bug 的 React 代码（包含竞态条件/闭包陷阱/渲染问题其中一种）， 我作为开发者尝试定位和修复，你记录我的排查过程并给出反馈。&quot;</p></blockquote><h2 id="关联知识" tabindex="-1">关联知识 <a class="header-anchor" href="#关联知识" aria-label="Permalink to &quot;关联知识&quot;">​</a></h2><ul><li><a href="./prompt-basics.html">Prompt 基础</a> — 调试 Prompt 写法</li><li><a href="./ai-code-gen.html">AI 代码生成实战</a> — 生成与调试配合</li><li><a href="./ai-code-review.html">AI 辅助 Code Review</a> — AI 审查代码质量</li></ul>`,29))])}const q=o(h,[["render",g]]);export{f as __pageData,q as default};
