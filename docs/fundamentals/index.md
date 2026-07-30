---
title: 核心基础
description: HTML/CSS/JS/TypeScript/浏览器原理 — 核心基础总览
---

# 📖 核心基础

HTML、CSS、JavaScript、TypeScript、浏览器原理 — 前端开发者的基本功，**所有面试的必考环节**。共 20 个知识点，按三级难度递进。

<DifficultyBadge level="beginner" /> 无需前置知识 · <DifficultyBadge level="intermediate" /> 需了解基础概念 · <DifficultyBadge level="advanced" /> 需一定实践经验

::: tip 💡 建议
如果你是资深前端但基础知识有些生疏，建议从 🟡 进阶开始快速过一遍，遇到不熟悉的再回看 🟢 入门。
:::

---

## 🟢 入门（8 个）

这些是最基础但面试高频的核心概念。

<div class="card-grid">
  <a href="./html-semantic" class="card">
    <h3>HTML 语义化与 SEO</h3>
    <p>header/main/section 等标签语义、结构化数据、可访问性</p>
  </a>
  <a href="./css-layout" class="card">
    <h3>CSS 布局完全指南</h3>
    <p>Flex 深入、Grid 完全攻略、经典布局方案与面试题</p>
  </a>
  <a href="./css-responsive" class="card">
    <h3>CSS 响应式与动画</h3>
    <p>媒体查询、容器查询、transition/animation/keyframe</p>
  </a>
  <a href="./js-execution" class="card">
    <h3>JS 执行机制</h3>
    <p>执行上下文、作用域链、变量提升、闭包</p>
  </a>
  <a href="./js-async" class="card">
    <h3>JS 异步编程</h3>
    <p>回调 → Promise → async/await 演进、异常处理</p>
  </a>
  <a href="./js-prototype" class="card">
    <h3>原型链与继承</h3>
    <p>prototype/__proto__、ES6 class 本质、继承方式</p>
  </a>
  <a href="./js-event-loop" class="card">
    <h3>事件循环 Event Loop</h3>
    <p>浏览器 vs Node 事件循环、宏任务/微任务、经典考题</p>
  </a>
  <a href="./js-data-types" class="card">
    <h3>数据类型与 API</h3>
    <p>深浅拷贝、类型判断、数组/对象高阶方法</p>
  </a>
</div>

---

## 🟡 进阶（8 个）

理解这些，你在基础环节就能超越大多数候选人。

<div class="card-grid">
  <a href="./ts-basics" class="card">
    <h3>TypeScript 类型系统</h3>
    <p>基础类型、联合/交叉、类型守卫、断言模式</p>
  </a>
  <a href="./ts-generics" class="card">
    <h3>TypeScript 泛型进阶</h3>
    <p>泛型约束、条件类型、infer、映射类型</p>
  </a>
  <a href="./ts-utility-types" class="card">
    <h3>TS 工具类型实现</h3>
    <p>Partial/Required/Pick/Omit/ReturnType 手写实现</p>
  </a>
  <a href="./browser-rendering" class="card">
    <h3>浏览器渲染流水线</h3>
    <p>DOM/CSSOM → Render Tree → Layout → Paint → Composite</p>
  </a>
  <a href="./browser-reflow" class="card">
    <h3>重排/重绘优化</h3>
    <p>触发条件、性能影响、最佳实践</p>
  </a>
  <a href="./browser-cors" class="card">
    <h3>跨域全解</h3>
    <p>CORS、JSONP、PostMessage、代理方案对比</p>
  </a>
  <a href="./browser-security" class="card">
    <h3>Web 安全</h3>
    <p>XSS、CSRF、点击劫持、CSP、安全 Headers</p>
  </a>
  <a href="./browser-storage" class="card">
    <h3>浏览器存储</h3>
    <p>Cookie/Storage/IndexedDB 对比与选型场景</p>
  </a>
</div>

---

## 🔴 高级（4 个）

P7+ 面试的"区分度"知识点。

<div class="card-grid">
  <a href="./ts-advanced" class="card">
    <h3>TS 类型体操</h3>
    <p>高级条件类型、递归类型、模板字面量类型、实战挑战</p>
  </a>
  <a href="./v8-engine" class="card">
    <h3>V8 引擎与 JIT</h3>
    <p>隐藏类、内联缓存、优化/去优化、TurboFan</p>
  </a>
  <a href="./memory-management" class="card">
    <h3>内存管理与泄漏排查</h3>
    <p>引用计数、标记清除、V8 代际回收、Chrome DevTools 排查</p>
  </a>
  <a href="./web-worker" class="card">
    <h3>Web Worker 与多线程</h3>
    <p>SharedArrayBuffer、Atomics、OffscreenCanvas、线程通信</p>
  </a>
</div>
