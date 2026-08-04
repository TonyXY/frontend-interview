import{_ as o,C as a,o as n,c as r,E as p,a1 as t,b as c,w as e,a as d,a2 as u}from"./chunks/framework.NjEjlYNI.js";const v=JSON.parse('{"title":"AI 代码生成实战","description":"从需求描述到生产代码 — AI 代码生成的最佳实践与 Prompt 模板","frontmatter":{"title":"AI 代码生成实战","description":"从需求描述到生产代码 — AI 代码生成的最佳实践与 Prompt 模板","difficulty":"beginner","frequency":"high"},"headers":[],"relativePath":"ai-dev/ai-code-gen.md","filePath":"ai-dev/ai-code-gen.md"}'),g={name:"ai-dev/ai-code-gen.md"};function h(E,s,A,b,m,q){const l=a("DifficultyBadge"),i=a("Mermaid");return n(),r("div",null,[p(l,{level:"beginner"}),s[1]||(s[1]=t('<h1 id="ai-代码生成实战" tabindex="-1">AI 代码生成实战 <a class="header-anchor" href="#ai-代码生成实战" aria-label="Permalink to &quot;AI 代码生成实战&quot;">​</a></h1><h2 id="一句话解释" tabindex="-1">一句话解释 <a class="header-anchor" href="#一句话解释" aria-label="Permalink to &quot;一句话解释&quot;">​</a></h2><p>AI 代码生成不是&quot;让 AI 自动写所有代码&quot;，而是<strong>把 AI 当成一个高效的结对编程伙伴</strong>——你设计架构和做决策，AI 负责实现细节。</p><h2 id="核心流程" tabindex="-1">核心流程 <a class="header-anchor" href="#核心流程" aria-label="Permalink to &quot;核心流程&quot;">​</a></h2>',4)),(n(),c(u,null,{default:e(()=>[p(i,{id:"mermaid-14",class:"mermaid",graph:"flowchart%20TD%0A%20%20%20%20A%5B%E9%9C%80%E6%B1%82%E5%88%86%E6%9E%90%5D%20--%3E%20B%7B%E5%86%99%20Prompt%7D%0A%20%20%20%20B%20--%3E%20C%5BAI%20%E7%94%9F%E6%88%90%E4%BB%A3%E7%A0%81%5D%0A%20%20%20%20C%20--%3E%20D%5B%E5%AE%A1%E6%9F%A5%E4%BB%A3%E7%A0%81%5D%0A%20%20%20%20D%20--%3E%20E%7B%E8%B4%A8%E9%87%8F%E5%90%88%E6%A0%BC%3F%7D%0A%20%20%20%20E%20--%3E%7C%E6%98%AF%7C%20F%5B%E9%9B%86%E6%88%90%E5%88%B0%E9%A1%B9%E7%9B%AE%5D%0A%20%20%20%20E%20--%3E%7C%E5%90%A6%7C%20G%7B%E9%97%AE%E9%A2%98%E6%98%AF%3F%7D%0A%20%20%20%20G%20--%3E%7C%E6%96%B9%E5%90%91%E4%B8%8D%E5%AF%B9%7C%20B%5B%E9%87%8D%E6%96%B0%E5%86%99%20Prompt%5D%0A%20%20%20%20G%20--%3E%7C%E5%B0%8F%E9%97%AE%E9%A2%98%7C%20H%5B%E6%89%8B%E5%8A%A8%E4%BF%AE%E6%94%B9%20%2F%20%E8%A1%A5%E5%85%85%20Prompt%20%E8%BF%AD%E4%BB%A3%5D%0A%20%20%20%20H%20--%3E%20C%0A%20%20%20%20F%20--%3E%20I%5B%E8%BF%90%E8%A1%8C%E6%B5%8B%E8%AF%95%5D%0A%20%20%20%20I%20--%3E%20J%7B%E9%80%9A%E8%BF%87%3F%7D%0A%20%20%20%20J%20--%3E%7C%E5%90%A6%7C%20K%5B%E5%88%86%E6%9E%90%E5%A4%B1%E8%B4%A5%E5%8E%9F%E5%9B%A0%5D%0A%20%20%20%20K%20--%3E%20B%0A%20%20%20%20J%20--%3E%7C%E6%98%AF%7C%20L%5B%E5%AE%8C%E6%88%90%5D%0A"})]),fallback:e(()=>[...s[0]||(s[0]=[d(" Loading... ",-1)])]),_:1})),s[2]||(s[2]=t(`<h2 id="深入理解" tabindex="-1">深入理解 <a class="header-anchor" href="#深入理解" aria-label="Permalink to &quot;深入理解&quot;">​</a></h2><h3 id="_1-代码生成的最佳实践" tabindex="-1">1. 代码生成的最佳实践 <a class="header-anchor" href="#_1-代码生成的最佳实践" aria-label="Permalink to &quot;1. 代码生成的最佳实践&quot;">​</a></h3><p><strong>分步生成 &gt; 一次性生成</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>❌ 一个大 Prompt 让 AI 生成完整应用</span></span>
<span class="line"><span>→ 容易遗漏细节，逻辑混杂</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✅ 拆成多步：</span></span>
<span class="line"><span>Step 1: &quot;先帮我设计这个组件的接口定义&quot;</span></span>
<span class="line"><span>Step 2: &quot;基于以上接口，实现核心逻辑&quot;</span></span>
<span class="line"><span>Step 3: &quot;补全测试用例&quot;</span></span></code></pre></div><p><strong>先给类型，再要实现</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>✅ 好做法：</span></span>
<span class="line"><span>&quot;这是一个类型定义：</span></span>
<span class="line"><span>interface User {</span></span>
<span class="line"><span>  id: string</span></span>
<span class="line"><span>  name: string</span></span>
<span class="line"><span>  email: string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>请实现一个 useUser(id) Hook，返回 user/loading/error&quot;</span></span></code></pre></div><p><strong>让 AI 先出方案再出代码</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>✅ 让 AI 先思考：</span></span>
<span class="line"><span>&quot;我需要实现一个无限滚动列表。</span></span>
<span class="line"><span>先给我 3 种方案对比（IntersectionObserver / scroll event / 虚拟列表），</span></span>
<span class="line"><span>分析各自的优缺点和适用场景，</span></span>
<span class="line"><span>然后我选一种你再出代码。&quot;</span></span></code></pre></div><h3 id="_2-场景模板" tabindex="-1">2. 场景模板 <a class="header-anchor" href="#_2-场景模板" aria-label="Permalink to &quot;2. 场景模板&quot;">​</a></h3><p><strong>场景一：组件生成</strong></p><p>Prompt：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>你是一个 React + TypeScript 前端工程师。</span></span>
<span class="line"><span>请生成一个 SearchableSelect 组件：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>功能需求：</span></span>
<span class="line"><span>- 支持选项搜索过滤</span></span>
<span class="line"><span>- 支持键盘导航（上下箭头 + 回车选择）</span></span>
<span class="line"><span>- 点击外部关闭下拉</span></span>
<span class="line"><span>- 支持单选/多选模式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>接口定义：</span></span>
<span class="line"><span>interface Option {</span></span>
<span class="line"><span>  value: string</span></span>
<span class="line"><span>  label: string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface Props {</span></span>
<span class="line"><span>  options: Option[]</span></span>
<span class="line"><span>  value?: string | string[]</span></span>
<span class="line"><span>  onChange: (value: string | string[]) =&gt; void</span></span>
<span class="line"><span>  multiple?: boolean</span></span>
<span class="line"><span>  placeholder?: string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>约束：</span></span>
<span class="line"><span>- 使用 React 18 + TypeScript</span></span>
<span class="line"><span>- 不要引入 UI 库（自己实现样式）</span></span>
<span class="line"><span>- 使用 CSS Modules 或 style 对象</span></span>
<span class="line"><span>- 注意性能（大量选项时不要卡顿）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输出：完整组件代码 + 类型定义 + 使用示例</span></span></code></pre></div><p><strong>场景二：API 调用封装</strong></p><p>Prompt：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>帮我封装一个 API 请求模块：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>API 端点：</span></span>
<span class="line"><span>- GET /api/users?page=1&amp;pageSize=20 返回 { list: User[], total: number }</span></span>
<span class="line"><span>- GET /api/users/:id 返回 User</span></span>
<span class="line"><span>- POST /api/users body: CreateUserDTO 返回 User</span></span>
<span class="line"><span>- PUT /api/users/:id body: UpdateUserDTO 返回 User</span></span>
<span class="line"><span>- DELETE /api/users/:id</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>- 基于 fetch（不要 axios）</span></span>
<span class="line"><span>- 统一错误处理</span></span>
<span class="line"><span>- 请求/响应拦截器机制</span></span>
<span class="line"><span>- TypeScript 泛型</span></span>
<span class="line"><span>- 支持请求取消（AbortController）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>先给我接口类型定义，再给实现。</span></span></code></pre></div><p><strong>场景三：类型定义生成</strong></p><p>Prompt：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我有一个 JSON 响应格式如下：</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;code&quot;: 0,</span></span>
<span class="line"><span>  &quot;data&quot;: {</span></span>
<span class="line"><span>    &quot;list&quot;: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;id&quot;: &quot;u_001&quot;,</span></span>
<span class="line"><span>        &quot;name&quot;: &quot;Alice&quot;,</span></span>
<span class="line"><span>        &quot;profile&quot;: { &quot;age&quot;: 28, &quot;avatar&quot;: null, &quot;tags&quot;: [&quot;frontend&quot;, &quot;react&quot;] }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;pagination&quot;: { &quot;page&quot;: 1, &quot;pageSize&quot;: 20, &quot;total&quot;: 100 }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;message&quot;: &quot;success&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请帮我生成完整的 TypeScript 类型定义，</span></span>
<span class="line"><span>包括：</span></span>
<span class="line"><span>- 泛型包装类型 ApiResponse&lt;T&gt;</span></span>
<span class="line"><span>- 分页类型 Pagination</span></span>
<span class="line"><span>- 各个实体的类型</span></span>
<span class="line"><span>- 类型守卫（isSuccess 等）</span></span></code></pre></div><p><strong>场景四：测试生成</strong></p><p>Prompt：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我有以下工具函数，请帮我写 Vitest 测试用例：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`typescript</span></span>
<span class="line"><span>// utils/format.ts</span></span>
<span class="line"><span>export function formatDate(date: Date, format: string): string</span></span>
<span class="line"><span>export function truncate(str: string, maxLength: number): string</span></span>
<span class="line"><span>export function debounce&lt;T extends (...args: any[]) =&gt; any&gt;(</span></span>
<span class="line"><span>  fn: T, delay: number</span></span>
<span class="line"><span>): (...args: Parameters&lt;T&gt;) =&gt; void</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>- 覆盖正常情况、边界情况、错误情况</span></span>
<span class="line"><span>- 用 describe/it 组织</span></span>
<span class="line"><span>- debounce 需要测试异步场景（vi.useFakeTimers）</span></span>
<span class="line"><span>- 测试代码格式规范</span></span></code></pre></div><h3 id="_3-ai-生成代码质量检查清单" tabindex="-1">3. AI 生成代码质量检查清单 <a class="header-anchor" href="#_3-ai-生成代码质量检查清单" aria-label="Permalink to &quot;3. AI 生成代码质量检查清单&quot;">​</a></h3><table tabindex="0"><thead><tr><th>检查项</th><th>说明</th><th>严重程度</th></tr></thead><tbody><tr><td><strong>类型安全</strong></td><td>类型定义是否完整？有无 <code>any</code> 滥用？</td><td>🔴 必须修</td></tr><tr><td><strong>边界情况</strong></td><td>空值、undefined、极端输入是否处理？</td><td>🔴 必须修</td></tr><tr><td><strong>错误处理</strong></td><td>try/catch、错误回退、用户提示是否完善？</td><td>🟡 建议修</td></tr><tr><td><strong>性能</strong></td><td>有无不必要的重渲染、重复计算、内存泄漏？</td><td>🟡 建议修</td></tr><tr><td><strong>可维护性</strong></td><td>命名是否清晰？逻辑是否过于复杂？</td><td>🟢 可选</td></tr><tr><td><strong>安全性</strong></td><td>有无 XSS 风险（dangerouslySetInnerHTML）？</td><td>🔴 必须修</td></tr><tr><td><strong>依赖</strong></td><td>有无引入不必要的外部库？版本是否兼容？</td><td>🟡 建议修</td></tr><tr><td><strong>风格匹配</strong></td><td>是否遵循项目的 ESLint/Prettier 配置？</td><td>🟢 可选</td></tr></tbody></table><h2 id="面试问法" tabindex="-1">面试问法 <a class="header-anchor" href="#面试问法" aria-label="Permalink to &quot;面试问法&quot;">​</a></h2><ul><li><p>🔥 <strong>AI 生成的代码你敢直接用吗？怎么看质量？</strong></p><ul><li>回答框架：不敢直接→先用上面 checklist 审查（类型/边界/错误）→ 跑测试 → 手动改</li><li>核心观点：<strong>AI 生成代码需要开发者把关，这正是资深前端不可替代的地方</strong></li></ul></li><li><p>⭐ <strong>说说你的 AI 代码生成工作流？</strong></p><ul><li>分步策略：先定义接口 → 再生成核心逻辑 → 再补测试 → 最后集成</li><li>迭代策略：先让 AI 出方案 → 审方案 → 再出代码 → 审代码 → 改 Prompt 迭代</li></ul></li></ul><h2 id="💡-ai-辅助学习" tabindex="-1">💡 AI 辅助学习 <a class="header-anchor" href="#💡-ai-辅助学习" aria-label="Permalink to &quot;💡 AI 辅助学习&quot;">​</a></h2><blockquote><p>用这个 Prompt 练习审查 AI 生成代码的能力： &quot;你是一个 AI 代码生成器。请生成一个有 3-5 个隐藏问题的 React 组件（类型错误/性能问题/内存泄漏/边界情况）。然后我作为开发者来审查并指出问题，你来确认我是否找对了。&quot;</p></blockquote><h2 id="关联知识" tabindex="-1">关联知识 <a class="header-anchor" href="#关联知识" aria-label="Permalink to &quot;关联知识&quot;">​</a></h2><ul><li><a href="./prompt-basics.html">Prompt 基础</a> — 核心 Prompt 结构</li><li><a href="./ai-debugging.html">AI 调试助手</a> — 用 AI 排查 Bug</li><li><a href="./ai-workflow.html">AI + 前端工作流</a> — AI 驱动的全链路开发</li></ul>`,29))])}const f=o(g,[["render",h]]);export{v as __pageData,f as default};
