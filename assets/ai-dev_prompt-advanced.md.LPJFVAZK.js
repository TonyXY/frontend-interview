import{_ as d,C as l,o as n,c as u,E as t,a1 as p,b as o,w as a,a as i,a2 as r}from"./chunks/framework.NjEjlYNI.js";const v=JSON.parse('{"title":"Prompt 工程进阶","description":"面向开发者的高级 Prompt 技术 — CoT/Few-shot/结构化输出/上下文管理/Meta Prompt/自我反思","frontmatter":{"title":"Prompt 工程进阶","description":"面向开发者的高级 Prompt 技术 — CoT/Few-shot/结构化输出/上下文管理/Meta Prompt/自我反思","difficulty":"advanced","frequency":"medium"},"headers":[],"relativePath":"ai-dev/prompt-advanced.md","filePath":"ai-dev/prompt-advanced.md"}'),h={name:"ai-dev/prompt-advanced.md"};function g(m,s,q,A,E,b){const c=l("DifficultyBadge"),e=l("Mermaid");return n(),u("div",null,[t(c,{level:"advanced"}),s[2]||(s[2]=p('<h1 id="prompt-工程进阶" tabindex="-1">Prompt 工程进阶 <a class="header-anchor" href="#prompt-工程进阶" aria-label="Permalink to &quot;Prompt 工程进阶&quot;">​</a></h1><h2 id="一句话解释" tabindex="-1">一句话解释 <a class="header-anchor" href="#一句话解释" aria-label="Permalink to &quot;一句话解释&quot;">​</a></h2><p>如果说 Prompt 基础是&quot;让 AI 听懂人话&quot;，那 <strong>Prompt 进阶是让 AI 输出你想要的精确结果</strong>——通过思维链、Few-shot 示例、结构化约束等技术，把 AI 从&quot;偶尔靠谱&quot;变成&quot;稳定可靠&quot;。</p><h2 id="技术层级" tabindex="-1">技术层级 <a class="header-anchor" href="#技术层级" aria-label="Permalink to &quot;技术层级&quot;">​</a></h2>',4)),(n(),o(r,null,{default:a(()=>[t(e,{id:"mermaid-14",class:"mermaid",graph:"flowchart%20TD%0A%20%20%20%20subgraph%20L1%5BL1%20%E5%9F%BA%E7%A1%80%5D%0A%20%20%20%20%20%20%20%20A%5B%E8%A7%92%E8%89%B2%E8%AE%BE%E5%AE%9A%5D%0A%20%20%20%20%20%20%20%20B%5B%E6%98%8E%E7%A1%AE%E4%BB%BB%E5%8A%A1%5D%0A%20%20%20%20%20%20%20%20C%5B%E8%BE%93%E5%87%BA%E6%A0%BC%E5%BC%8F%5D%0A%20%20%20%20end%0A%20%20%20%20%0A%20%20%20%20subgraph%20L2%5BL2%20%E8%BF%9B%E9%98%B6%5D%0A%20%20%20%20%20%20%20%20D%5BFew-shot%3Cbr%2F%3E%E7%BB%99%E7%A4%BA%E4%BE%8B%5D%0A%20%20%20%20%20%20%20%20E%5BChain-of-Thought%3Cbr%2F%3E%E6%80%9D%E7%BB%B4%E9%93%BE%5D%0A%20%20%20%20%20%20%20%20F%5B%E7%BB%93%E6%9E%84%E5%8C%96%E8%BE%93%E5%87%BA%3Cbr%2F%3EJSON%2FSchema%5D%0A%20%20%20%20end%0A%20%20%20%20%0A%20%20%20%20subgraph%20L3%5BL3%20%E9%AB%98%E7%BA%A7%5D%0A%20%20%20%20%20%20%20%20G%5BMeta%20Prompt%3Cbr%2F%3E%E8%AE%A9%20AI%20%E8%87%AA%E5%B7%B1%E5%86%99%20Prompt%5D%0A%20%20%20%20%20%20%20%20H%5BSelf-Reflection%3Cbr%2F%3E%E8%87%AA%E6%88%91%E5%8F%8D%E6%80%9D%5D%0A%20%20%20%20%20%20%20%20I%5BTree-of-Thought%3Cbr%2F%3E%E5%A4%9A%E8%B7%AF%E5%BE%84%E6%8E%A8%E7%90%86%5D%0A%20%20%20%20end%0A%20%20%20%20%0A%20%20%20%20subgraph%20L4%5BL4%20%E5%B7%A5%E7%A8%8B%E5%8C%96%5D%0A%20%20%20%20%20%20%20%20J%5BPrompt%20%E6%A8%A1%E6%9D%BF%E7%B3%BB%E7%BB%9F%5D%0A%20%20%20%20%20%20%20%20K%5B%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86%5D%0A%20%20%20%20%20%20%20%20L%5B%E6%B5%8B%E8%AF%95%E4%B8%8E%E8%AF%84%E4%BC%B0%5D%0A%20%20%20%20end%0A%20%20%20%20%0A%20%20%20%20L1%20--%3E%20L2%20--%3E%20L3%20--%3E%20L4%0A"})]),fallback:a(()=>[...s[0]||(s[0]=[i(" Loading... ",-1)])]),_:1})),s[3]||(s[3]=p(`<h2 id="深入理解" tabindex="-1">深入理解 <a class="header-anchor" href="#深入理解" aria-label="Permalink to &quot;深入理解&quot;">​</a></h2><h3 id="_1-chain-of-thought-思维链" tabindex="-1">1. Chain-of-Thought（思维链） <a class="header-anchor" href="#_1-chain-of-thought-思维链" aria-label="Permalink to &quot;1. Chain-of-Thought（思维链）&quot;">​</a></h3><p><strong>核心思想</strong>：让 AI 在回答之前&quot;想一下&quot;，显著提升复杂推理的准确性。</p><div class="analogy-card"><span class="analogy-title">🎬 生活类比：教小孩做应用题要&quot;分步写过程&quot;</span><div class="analogy-body"> 你问小孩&quot;小明有 3 个苹果，又买了 5 个，吃了 2 个，还剩几个？&quot;——他直接喊答案可能喊错。但如果你让他<strong>&quot;先算一共买了几个，再算吃掉了几个，最后说还剩几个&quot;</strong>，正确率立刻飙升。<em>AI 也一样：直接问容易&quot;跳步出错&quot;，让它把推理过程一步一步写出来，错误就会在过程中暴露并自我修正。</em>这就是&quot;逐步思考&quot;四个字的魔法。 </div></div><p><strong>零样本 CoT（最简单的魔法）：</strong></p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">- &quot;实现一个深拷贝函数&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+ &quot;逐步思考：实现深拷贝需要考虑哪些边界情况？然后写出代码。&quot;</span></span></code></pre></div><p><strong>效果对比：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>❌ 直接问：&quot;React.memo 和 useMemo 有什么区别？&quot;</span></span>
<span class="line"><span>→ 可能泛泛而谈，遗漏重点</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✅ CoT 问法：</span></span>
<span class="line"><span>&quot;请逐步分析 React.memo 和 useMemo 的区别：</span></span>
<span class="line"><span>Step 1: 它们各自的作用是什么</span></span>
<span class="line"><span>Step 2: 它们分别在什么层面做优化</span></span>
<span class="line"><span>Step 3: 它们的使用场景分别是什么</span></span>
<span class="line"><span>Step 4: 它们能互相替代吗？为什么？</span></span>
<span class="line"><span>Step 5: 给出一个实际代码示例展示两者的区别&quot;</span></span>
<span class="line"><span>→ 结构清晰，覆盖全面</span></span></code></pre></div><p><strong>面向前端的 CoT 模板：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请逐步分析以下问题：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>问题：[粘贴问题]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>分析框架：</span></span>
<span class="line"><span>1. 核心概念：这个问题的本质是什么</span></span>
<span class="line"><span>2. 技术原理：底层机制是怎样的</span></span>
<span class="line"><span>3. 实际应用：在项目中怎么用</span></span>
<span class="line"><span>4. 常见误区：最容易搞错的地方</span></span>
<span class="line"><span>5. 面试回答：用 2-3 句话总结</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请先输出你的逐步思考，再给出最终答案。</span></span></code></pre></div><h3 id="_2-few-shot-学习" tabindex="-1">2. Few-shot 学习 <a class="header-anchor" href="#_2-few-shot-学习" aria-label="Permalink to &quot;2. Few-shot 学习&quot;">​</a></h3><p><strong>核心思想</strong>：给 AI 2-3 个输入/输出示例，让它&quot;学会&quot;你要的模式。</p><div class="analogy-card"><span class="analogy-title">🎬 生活类比：新员工看 3 份&quot;标准答卷&quot;就会干活</span><div class="analogy-body"> 教新同事写周报，你光说&quot;写得规范点&quot;没用——<strong>直接甩给他 3 份老同事的标准周报（Few-shot 示例），他立刻知道格式、语气、详略。</strong>AI 也一样：<em>文字描述是&quot;意会&quot;，示例是&quot;模仿&quot;</em>。给 2~3 个输入/输出对，比写一百字规则更有效，因为它直接&quot;照抄&quot;你的风格。 </div></div><p><strong>代码迁移 Few-shot：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我有一段 jQuery 代码要迁移到 React。请按照以下模式改写：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例 1:</span></span>
<span class="line"><span>jQuery: $(&quot;#btn&quot;).click(() =&gt; { $(&quot;#result&quot;).text(&quot;clicked&quot;) })</span></span>
<span class="line"><span>React: const handleClick = () =&gt; setResult(&quot;clicked&quot;)</span></span>
<span class="line"><span>      ; &lt;button onClick={handleClick}&gt;{result}&lt;/button&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例 2:</span></span>
<span class="line"><span>jQuery: $(&quot;.item&quot;).each((i, el) =&gt; { $(el).addClass(&quot;active&quot;) })</span></span>
<span class="line"><span>React: items.map(item =&gt; &lt;div className=&quot;active&quot;&gt;{item}&lt;/div&gt;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在请改写：</span></span>
<span class="line"><span>jQuery: $(document).ready(() =&gt; { $.get(&quot;/api/data&quot;, (res) =&gt; { $(&quot;#list&quot;).html(res.map(item =&gt; \`&lt;li&gt;\${item.name}&lt;/li&gt;\`)) }) })</span></span></code></pre></div><p><strong>Few-shot 最佳实践：</strong></p><table tabindex="0"><thead><tr><th>要点</th><th>说明</th></tr></thead><tbody><tr><td><strong>2-3 个示例最有效</strong></td><td>太少学不会，太多会过拟合</td></tr><tr><td><strong>示例要有代表性</strong></td><td>覆盖常见的输入变化</td></tr><tr><td><strong>示例要正确</strong></td><td>AI 会模仿你的错误</td></tr><tr><td><strong>边缘情况示例</strong></td><td>让 AI 学会处理特殊情况</td></tr></tbody></table><h3 id="_3-结构化输出-schema-约束" tabindex="-1">3. 结构化输出（Schema 约束） <a class="header-anchor" href="#_3-结构化输出-schema-约束" aria-label="Permalink to &quot;3. 结构化输出（Schema 约束）&quot;">​</a></h3><p><strong>核心思想</strong>：让 AI 输出<strong>程序可直接解析的结构化数据</strong>，而非自由文本。</p><p><strong>JSON Schema 约束：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请分析以下 React 组件的问题，输出 JSON 格式：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`json</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;component&quot;: &quot;组件名&quot;,</span></span>
<span class="line"><span>  &quot;issues&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;type&quot;: &quot;performance | security | maintainability | bug&quot;,</span></span>
<span class="line"><span>      &quot;severity&quot;: &quot;critical | major | minor&quot;,</span></span>
<span class="line"><span>      &quot;line&quot;: 行号,</span></span>
<span class="line"><span>      &quot;description&quot;: &quot;问题描述&quot;,</span></span>
<span class="line"><span>      &quot;suggestion&quot;: &quot;修改建议&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;summary&quot;: {</span></span>
<span class="line"><span>    &quot;total_issues&quot;: 总问题数,</span></span>
<span class="line"><span>    &quot;critical_count&quot;: 严重问题数,</span></span>
<span class="line"><span>    &quot;score&quot;: &quot;A/B/C/D&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>代码：[粘贴代码]</span></span></code></pre></div><p><strong>Markdown 表格输出：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请将以下架构方案按表格对比：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| 维度 | 方案A: [名称] | 方案B: [名称] | 方案C: [名称] |</span></span>
<span class="line"><span>|---|---|---|---|</span></span>
<span class="line"><span>| 架构描述 | | | |</span></span>
<span class="line"><span>| 适用场景 | | | |</span></span>
<span class="line"><span>| 复杂度 | 1-5 | 1-5 | 1-5 |</span></span>
<span class="line"><span>| 推荐度 | ⭐ | ⭐⭐ | ⭐⭐⭐ |</span></span></code></pre></div><p><strong>TypeScript 类型约束输出：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请生成一个 React 组件代码，类型定义如下：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`typescript</span></span>
<span class="line"><span>interface UserProfileProps {</span></span>
<span class="line"><span>  userId: string</span></span>
<span class="line"><span>  onError?: (error: Error) =&gt; void</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 输出符合此类型定义的完整组件</span></span>
<span class="line"><span>\`\`\`</span></span></code></pre></div><h3 id="_4-上下文管理" tabindex="-1">4. 上下文管理 <a class="header-anchor" href="#_4-上下文管理" aria-label="Permalink to &quot;4. 上下文管理&quot;">​</a></h3><p><strong>核心挑战</strong>：AI 的上下文窗口有限（2026 年主流模型 100K-200K token），需要策略性地管理。</p><table tabindex="0"><thead><tr><th>策略</th><th>说明</th><th>适用场景</th></tr></thead><tbody><tr><td><strong>滑动窗口</strong></td><td>只保留最近 N 条消息</td><td>长对话</td></tr><tr><td><strong>摘要压缩</strong></td><td>定期总结已讨论内容</td><td>超长任务</td></tr><tr><td><strong>分层上下文</strong></td><td>项目级 + 文件级 + 话题级</td><td>大型项目</td></tr><tr><td><strong>外部存储</strong></td><td>用文件/MCP 存储上下文</td><td>Agent 场景</td></tr></tbody></table><p><strong>滑动窗口实战：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 当对话太长时，用这条 Prompt 压缩：</span></span>
<span class="line"><span>&quot;以上是我们的讨论总结。接下来基于这个方向继续：</span></span>
<span class="line"><span>[粘贴关键决策和当前状态]</span></span>
<span class="line"><span>现在请：...&quot;</span></span></code></pre></div><h3 id="_5-self-reflection-让-ai-自我纠错" tabindex="-1">5. Self-Reflection（让 AI 自我纠错） <a class="header-anchor" href="#_5-self-reflection-让-ai-自我纠错" aria-label="Permalink to &quot;5. Self-Reflection（让 AI 自我纠错）&quot;">​</a></h3><div class="analogy-card"><span class="analogy-title">🎬 生活类比：交卷前让自己当 5 分钟&quot;阅卷老师&quot;</span><div class="analogy-body"> 学生写完作文直接交，容易错字连篇；聪明的学生会<strong>角色切换成&quot;阅卷老师&quot;再读一遍</strong>——立刻看出逻辑漏洞和语病。<em>Self-Reflection 就是让 AI 写完代码后，换一个&quot;Code Reviewer&quot;的身份重新审查自己刚写的代码。</em>人容易看自己的东西&quot;自带滤镜&quot;，AI 换个角色反而能发现自己的 bug——因为它本质是换个视角重新推理一遍。 </div></div>`,32)),(n(),o(r,null,{default:a(()=>[t(e,{id:"mermaid-190",class:"mermaid",graph:"flowchart%20TD%0A%20%20%20%20A%5BAI%20%E7%94%9F%E6%88%90%E4%BB%A3%E7%A0%81%5D%20--%3E%20B%5BAI%20%E8%87%AA%E5%B7%B1%E5%AE%A1%E6%9F%A5%5D%0A%20%20%20%20B%20--%3E%20C%7B%E5%8F%91%E7%8E%B0%E9%97%AE%E9%A2%98%3F%7D%0A%20%20%20%20C%20--%3E%7C%E6%98%AF%7C%20D%5BAI%20%E4%BF%AE%E5%A4%8D%5D%0A%20%20%20%20D%20--%3E%20B%0A%20%20%20%20C%20--%3E%7C%E5%90%A6%7C%20E%5B%E8%BE%93%E5%87%BA%E6%9C%80%E7%BB%88%E7%BB%93%E6%9E%9C%5D%0A"})]),fallback:a(()=>[...s[1]||(s[1]=[i(" Loading... ",-1)])]),_:1})),s[4]||(s[4]=p(`<p><strong>Self-Reflection Prompt：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>你刚刚写了这段代码。现在请以 Code Reviewer 的身份重新审查它：</span></span>
<span class="line"><span>1. 类型安全：所有类型是否正确？有无 any？</span></span>
<span class="line"><span>2. 边界情况：空值/undefined/极端输入怎么处理？</span></span>
<span class="line"><span>3. 性能：有无不必要的重渲染/计算？</span></span>
<span class="line"><span>4. 错误处理：所有异常路径都处理了吗？</span></span>
<span class="line"><span>5. 可维护性：命名/结构/注释是否清晰？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>代码：[代码]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>找出所有问题，然后输出修正后的版本。</span></span></code></pre></div><h3 id="_6-meta-prompt-让-ai-写-prompt" tabindex="-1">6. Meta Prompt（让 AI 写 Prompt） <a class="header-anchor" href="#_6-meta-prompt-让-ai-写-prompt" aria-label="Permalink to &quot;6. Meta Prompt（让 AI 写 Prompt）&quot;">​</a></h3><p>最高阶的技巧——<strong>让 AI 帮你写 Prompt</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我需要和 AI 协作完成以下任务，请帮我生成一个优化过的 Prompt：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我的目标：[描述任务]</span></span>
<span class="line"><span>我的原始 Prompt：[粘贴]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请帮我优化：</span></span>
<span class="line"><span>1. 结构更清晰（用角色/任务/上下文/格式/约束框架）</span></span>
<span class="line"><span>2. 增加 Few-shot 示例（如果需要）</span></span>
<span class="line"><span>3. 增加自检步骤（让 AI 验证输出质量）</span></span>
<span class="line"><span>4. 指出我原始 Prompt 的问题</span></span></code></pre></div><h2 id="面试问法" tabindex="-1">面试问法 <a class="header-anchor" href="#面试问法" aria-label="Permalink to &quot;面试问法&quot;">​</a></h2><ul><li><p>🔥 <strong>你怎么确保 AI 输出的代码质量稳定？</strong></p><ul><li>回答框架：用 CoT 让 AI 先思考 → 结构化输出约束格式 → Self-Reflection 自检</li><li>核心：<strong>Prompt 写得越精确，AI 输出越稳定</strong></li></ul></li><li><p>⭐ <strong>Few-shot 和 Zero-shot 的区别？怎么选？</strong></p><ul><li>Zero-shot 适合简单/通用任务；Few-shot 适合有特定风格/格式要求的任务</li><li>新项目用 Few-shot 建立模式，稳定后用 Zero-shot</li></ul></li><li><p>📌 <strong>怎么看 2026 年 Prompt 工程的发展趋势？</strong></p><ul><li>从&quot;写 Prompt&quot;到&quot;设计 Agent 系统&quot;，关注：结构化输出 + 工具调用 + 自我反思</li></ul></li></ul><h2 id="💡-ai-辅助学习" tabindex="-1">💡 AI 辅助学习 <a class="header-anchor" href="#💡-ai-辅助学习" aria-label="Permalink to &quot;💡 AI 辅助学习&quot;">​</a></h2><p><strong>向 AI 提问：</strong></p><ul><li>&quot;给我一个前端面试中展示 Prompt 工程能力的案例，从基础到进阶到工程化&quot;</li><li>&quot;CoT（思维链）在前端代码生成中怎么用？给我 3 个具体场景的 Prompt 模板&quot;</li><li>&quot;我想系统学习 Prompt 工程，给我一个学习路线图&quot;</li><li>&quot;Self-Reflection Prompt 怎么写？让 AI 写完代码后自我审查&quot;</li></ul><h2 id="关联知识" tabindex="-1">关联知识 <a class="header-anchor" href="#关联知识" aria-label="Permalink to &quot;关联知识&quot;">​</a></h2><ul><li><a href="./prompt-basics.html">Prompt 基础</a> — Prompt 核心结构</li><li><a href="./ai-code-gen.html">AI 代码生成实战</a> — 场景化 Prompt 模板</li><li><a href="./ai-tool-config.html">AI 工具配置与定制</a> — 将 Prompt 固化为配置</li><li><a href="./ai-agent-usage.html">Agent 模式使用</a> — Prompt 的 Agent 化应用</li></ul>`,12))])}const f=d(h,[["render",g]]);export{v as __pageData,f as default};
