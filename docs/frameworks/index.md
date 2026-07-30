---
title: 框架深入
description: React/Vue 3/组件设计/跨端方案 — 框架深入总览
---

# ⚛️ 框架深入

React、Vue 3、组件设计、跨端方案 — **面试中的重头戏**，中高级岗位 60%+ 的技术面时间都在考察框架理解深度。共 16 个知识点，从使用到源码逐步深入。

<DifficultyBadge level="beginner" /> 框架使用经验 · <DifficultyBadge level="intermediate" /> 理解原理与优化 · <DifficultyBadge level="advanced" /> 源码与架构设计

```mermaid
mindmap
  root((框架深入))
    React
      核心概念
      Hooks 大全
      Fiber 架构
      渲染优化
      并发模式
      源码解读
    Vue 3
      核心概念
      进阶特性
      编译优化
      源码解读
    设计能力
      状态管理
      自定义 Hooks
      组件设计模式
      框架对比选型
    跨端
      跨端方案对比
      Web Components
```

::: tip 💡 建议
不管你的主力框架是什么，**React 和 Vue 的核心机制都要了解**——面试中经常交叉考察你对框架设计哲学的理解。
:::

---

## 🟢 入门（6 个）

掌握这些，你能熟练使用主流框架进行开发。

<div class="card-grid">
  <a href="./react-core" class="card">
    <h3>React 核心概念 <Badge type="info" text="🔥高频" /></h3>
    <p>JSX、虚拟 DOM、组件生命周期、单向数据流</p>
  </a>
  <a href="./react-hooks" class="card">
    <h3>React Hooks 大全 <Badge type="info" text="🔥高频" /></h3>
    <p>useState/useEffect/useRef/useMemo/useCallback/自定义 Hooks</p>
  </a>
  <a href="./vue-core" class="card">
    <h3>Vue 3 核心概念 <Badge type="info" text="🔥高频" /></h3>
    <p>Composition API、ref/reactive、生命周期、模板语法</p>
  </a>
  <a href="./vue-advanced" class="card">
    <h3>Vue 3 进阶特性 <Badge type="info" text="⭐中频" /></h3>
    <p>Suspense、Teleport、自定义指令、插件系统</p>
  </a>
  <a href="./framework-comparison" class="card">
    <h3>框架对比与选型 <Badge type="info" text="🔥高频" /></h3>
    <p>React vs Vue vs Angular vs Svelte vs Solid 设计哲学差异</p>
  </a>
  <a href="./state-management" class="card">
    <h3>状态管理方案对比 <Badge type="info" text="🔥高频" /></h3>
    <p>Redux/Zustand/Pinia/Jotai/Recoil 选型指南</p>
  </a>
</div>

---

## 🟡 进阶（6 个）

理解框架的底层机制，让你在优化和排查问题时游刃有余。

<div class="card-grid">
  <a href="./react-fiber" class="card">
    <h3>React Fiber 架构 <Badge type="info" text="🔥高频" /></h3>
    <p>协调算法、Fiber 树结构、双缓冲、任务调度</p>
  </a>
  <a href="./react-optimization" class="card">
    <h3>React 渲染优化 <Badge type="info" text="🔥高频" /></h3>
    <p>React.memo、useMemo、useCallback、bailout 机制</p>
  </a>
  <a href="./react-concurrent" class="card">
    <h3>React 并发模式 <Badge type="info" text="⭐中频" /></h3>
    <p>Transition、Suspense、useDeferredValue、并发渲染</p>
  </a>
  <a href="./vue-compile-optimize" class="card">
    <h3>Vue 3 编译优化 <Badge type="info" text="⭐中频" /></h3>
    <p>PatchFlag、Tree Shaking、静态提升、Block Tree</p>
  </a>
  <a href="./custom-hooks" class="card">
    <h3>自定义 Hooks 设计 <Badge type="info" text="⭐中频" /></h3>
    <p>Hook 组合模式、抽象粒度、测试策略、常见场景封装</p>
  </a>
  <a href="./component-patterns" class="card">
    <h3>组件设计模式 <Badge type="info" text="🔥高频" /></h3>
    <p>render props、HOC、Compound Component、控制反转</p>
  </a>
</div>

---

## 🔴 高级（4 个）

P7+ 面试的"分水岭"知识点，考察对框架本质的理解。

<div class="card-grid">
  <a href="./react-source" class="card">
    <h3>React 源码解读 <Badge type="info" text="⭐中频" /></h3>
    <p>createRoot、beginWork/completeWork、commit 阶段、Hooks 链表</p>
  </a>
  <a href="./vue-source" class="card">
    <h3>Vue 3 源码解读 <Badge type="info" text="⭐中频" /></h3>
    <p>响应式系统、依赖追踪、渲染器、编译器</p>
  </a>
  <a href="./cross-platform" class="card">
    <h3>跨端方案对比 <Badge type="info" text="📌了解" /></h3>
    <p>React Native、Flutter、Taro、uni-app 原理对比</p>
  </a>
  <a href="./web-components" class="card">
    <h3>Web Components <Badge type="info" text="📌了解" /></h3>
    <p>Custom Elements、Shadow DOM、HTML Templates、浏览器原生组件</p>
  </a>
</div>
