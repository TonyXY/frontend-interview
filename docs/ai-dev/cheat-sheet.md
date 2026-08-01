---
title: AI 难点速记卡
description: 考前 10 分钟冲刺 — 五大难点的记忆锚点/一句话类比/混淆点对照表
difficulty: intermediate
frequency: high
---

<DifficultyBadge level="intermediate" />

# 🃏 AI 难点速记卡

## 一句话解释

这是全模块最难 5 个主题的**考前速记卡**——每个主题浓缩成"一句话类比 + 记忆锚点 + 高频混淆点"，**适合面试前 10 分钟快速过一遍**，把抽象概念重新唤醒。

::: tip 💡 使用建议
先通读各章完整内容理解原理，考前再看本页复习。**类比是记忆的钩子，不是知识的全部**——理解还得回原文。
:::

---

## 🀄 1. LLM 核心原理

<div class="analogy-card">
  <span class="analogy-title">🧩 一句话类比</span>
  <div class="analogy-body">
    <strong>"模型不是查数据库，是掷骰子"</strong> —— 它生成"最像答案"的文字，不是"查证过"的事实。
  </div>
</div>

**记忆锚点：**

| 概念 | 记忆锚点 | 高频混淆点 |
|------|---------|-----------|
| **Token 化** | 给文本"切麻将牌" | 中文信息密度高 ≠ 便宜，汉字更稀疏更贵 |
| **上下文窗口** | 只有"10 张便利贴" | 新内容不是"覆盖"旧的，而是"挤掉"最老的 |
| **采样不稳定** | 掷骰子（temperature=手劲） | temperature 调大 ≠ 更聪明，是更发散 |
| **幻觉** | 爱面子的"民间专家" | 幻觉不是 bug，是训练目标（生成像样文字）的副作用 |
| **结构化输出** | 作文 / 填表格 / 填申请表 | JSON Mode 保格式，不保内容正确 |

**面试急救话术：**
> "让 AI 输出稳定四板斧：降 temperature → 固定 seed → 结构化输出约束 → prompt 给 Few-shot 示例。"

---

## 🔧 2. AI 应用前端开发（流式）

<div class="analogy-card">
  <span class="analogy-title">🧩 一句话类比</span>
  <div class="analogy-body">
    <strong>"SSE 是水龙头（单向放水），WebSocket 是对讲机（双向喊话）"</strong> —— Chat 默认选水龙头。
  </div>
</div>

**记忆锚点：**

| 考点 | 记忆锚点 | 高频混淆点 |
|------|---------|-----------|
| **流式解析** | 拼贴"撕碎的纸条" | 不能 `res.json()`，必须 `getReader()` 流式读 |
| **防乱码** | `TextDecoder(..., { stream: true })` | 不加 `{stream:true}`，多字节字符被拆两包就乱码 |
| **防拆条** | buffer 拼到完整 `\n\n` 才处理 | 最后一段不完整要留到下次，不能丢 |
| **结束标志** | `[DONE]` 哨兵 | 没读到 `[DONE]` 前不能认为生成结束 |
| **取消** | AbortController | 取消后要标记"已中断"，不能悄悄消失 |

**面试急救话术：**
> "流式解析三个边界：**半字**（多字节）、**半条**（跨 chunk 消息）、**半程**（生成一半取消）。全处理了就稳了。"

---

## 💬 3. AI 对话界面工程

<div class="analogy-card">
  <span class="analogy-title">🧩 一句话类比</span>
  <div class="analogy-body">
    <strong>"消息状态机=外卖订单状态，自动滚动=陪跑不是绑架，Markdown 防截断=厨师边炒边上菜"</strong>
  </div>
</div>

**记忆锚点：**

| 考点 | 记忆锚点 | 高频混淆点 |
|------|---------|-----------|
| **五态状态机** | 外卖：下单/配送中/已送达/取消/异常 | 中断 ≠ 错误，必须分开（重试逻辑依赖它） |
| **Markdown 防截断** | 未闭合的 ``` 先"补锅盖" | 等闭合再渲染会闪烁，补闭合更顺滑 |
| **智能滚动** | 陪跑：用户翻历史就停下 | 跟随是默认，不跟随是用户选择 |
| **增量渲染** | 增量追加 ≠ 全量覆盖 | 全量覆盖几千字会卡顿 |

**面试急救话术：**
> "用户感知的连续过程比绝对正确更重要——代码块中途闪成纯文本再变回来，比始终不渲染更难受。"

---

## 🔌 4. MCP 协议深度

<div class="analogy-card">
  <span class="analogy-title">🧩 一句话类比</span>
  <div class="analogy-body">
    <strong>"MCP 是人和工具（USB-C），Host=人、Client=手、Server=工具；工具会干活、资源能查书、提示词是模板"</strong>
  </div>
</div>

**记忆锚点：**

| 考点 | 记忆锚点 | 高频混淆点 |
|------|---------|-----------|
| **三层架构** | 人（Host）/ 手（Client）/ 工具（Server） | Client 长在 Host 这边，不是 Server 的一部分 |
| **三类能力** | 干活 / 查书 / 套模板 | Tools 有副作用，Resources 只读 |
| **两种传输** | stdio=本地进程，SSE=远程服务 | 浏览器端接 SSE Server 可能要网关桥接 |
| **ACP 区别** | MCP=人和工具，ACP=人和人 | 两者不同层，共存不互斥 |

**面试急救话术：**
> "写 MCP Server 四步：建 McpServer → 注册 tool/resource → 连 transport → 启动。参数用 zod schema 校验。"

---

## 🛡️ 5. 前端 AI 安全

<div class="analogy-card">
  <span class="analogy-title">🧩 一句话类比</span>
  <div class="analogy-body">
    <strong>"API Key=房门钥匙（不能给访客）；Prompt 注入=对海关使诈的走私客；AI 输出=陌生人包裹（先过安检）"</strong>
  </div>
</div>

**记忆锚点：**

| 考点 | 记忆锚点 | 高频混淆点 |
|------|---------|-----------|
| **Key 保护** | 前台发临时门禁卡，钥匙留酒店 | 环境变量对前端可访问 ≠ 安全 |
| **Prompt 注入** | 模型分不清指令和数据的来源 | 前端只能缓解，边界在服务端 |
| **输出消毒** | AI 输出 = 用户输入 = 不可信 | react-markdown 默认不开 rehypeRaw 才是安全姿势 |
| **数据合规** | 发送前脱敏 + 用户可删除 | 聊天记录也是数据资产 |

**面试急救话术：**
> "Prompt 注入纵深防御四层：输入检测 → 系统提示声明 → 高危操作独立校验 → 权限最小化。最终边界在服务端。"

---

## 🎯 一句话汇总（背这 6 句就够）

1. **LLM**：模型是掷骰子，不是查字典
2. **流式**：SSE 是水龙头，解析要防"半字半条半程"
3. **Chat UI**：状态机是外卖单，滚动是陪跑
4. **MCP**：人-手-工具，干活-查书-套模板
5. **安全**：钥匙不出门，输出过安检，指令分来源
6. **通用**：类比是钩子，理解回原文

## 关联知识

- [LLM 核心原理](./llm-basics) — 第 1 卡完整版
- [AI 应用前端开发](./ai-app-frontend) — 第 2 卡完整版
- [AI 对话界面工程](./ai-chat-ui) — 第 3 卡完整版
- [MCP 协议深度](./mcp-protocol) — 第 4 卡完整版
- [前端 AI 安全](./ai-security) — 第 5 卡完整版
