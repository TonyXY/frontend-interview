---
title: 工程架构
description: 构建工具/性能优化/测试部署/架构设计 — 工程架构总览
---

# 🏗️ 工程架构

构建工具、性能优化、测试体系、CI/CD、架构设计 — **资深前端 vs 初中级的分水岭**。共 18 个知识点，覆盖从开发到上线的全链路工程能力。

<DifficultyBadge level="beginner" /> 工具使用经验 · <DifficultyBadge level="intermediate" /> 理解原理与优化策略 · <DifficultyBadge level="advanced" /> 架构设计与工程决策

```mermaid
flowchart LR
  subgraph Dev[开发阶段]
    A[代码编写] --> B[构建打包]
  end
  subgraph Quality[质量阶段]
    B --> C[单元/集成测试]
    C --> D[Code Review]
  end
  subgraph Deploy[部署阶段]
    D --> E[CI/CD 流水线]
    E --> F[灰度发布]
  end
  subgraph Ops[运维阶段]
    F --> G[错误监控]
    G --> H[性能观测]
    H --> I[持续优化]
    I --> A
  end

  style Dev fill:#e0f2fe,stroke:#2563eb
  style Quality fill:#dcfce7,stroke:#16a34a
  style Deploy fill:#fef3c7,stroke:#d97706
  style Ops fill:#f3e8ff,stroke:#7c3aed
```

::: tip 💡 建议
资深前端面试中，工程能力考察比重可达 40%。不仅要会用工具，更要**理解设计取舍和演进逻辑**——为什么从 Webpack 到 Vite？为什么需要 Monorepo？
:::

---

## 🟢 入门（6 个）

掌握这些，你具备标准的前端工程化开发能力。

<div class="card-grid">
  <a href="./build-tools-evolution" class="card">
    <h3>构建工具演进 <Badge type="info" text="🔥高频" /></h3>
    <p>Grunt/Gulp → Webpack → Vite/Turbopack 的发展脉络</p>
  </a>
  <a href="./webpack-core" class="card">
    <h3>Webpack 核心机制 <Badge type="info" text="🔥高频" /></h3>
    <p>Loader/Plugin、Tree Shaking、Code Splitting、HMR 原理</p>
  </a>
  <a href="./vite-principles" class="card">
    <h3>Vite 原理与 HMR <Badge type="info" text="🔥高频" /></h3>
    <p>ESM、esbuild 预构建、Rollup 打包、毫秒级 HMR</p>
  </a>
  <a href="./package-managers" class="card">
    <h3>包管理器对比 <Badge type="info" text="⭐中频" /></h3>
    <p>npm/yarn/pnpm 对比、依赖管理、lock 文件、Monorepo 支持</p>
  </a>
  <a href="./css-engineering" class="card">
    <h3>CSS 工程化方案 <Badge type="info" text="⭐中频" /></h3>
    <p>CSS Modules、Tailwind CSS、CSS-in-JS、PostCSS 对比</p>
  </a>
  <a href="./git-workflow" class="card">
    <h3>Git 工作流 <Badge type="info" text="⭐中频" /></h3>
    <p>Git Flow、GitHub Flow、Trunk Based、Commit 规范</p>
  </a>
</div>

---

## 🟡 进阶（6 个）

这些是资深前端必备的工程优化能力。

<div class="card-grid">
  <a href="./performance-overview" class="card">
    <h3>性能优化全景 <Badge type="info" text="🔥高频" /></h3>
    <p>Core Web Vitals、RAIL 模型、性能指标测量与优化策略</p>
  </a>
  <a href="./loading-optimization" class="card">
    <h3>加载优化策略 <Badge type="info" text="🔥高频" /></h3>
    <p>懒加载、预加载/预连接、CDN、HTTP/2/3、资源优先级</p>
  </a>
  <a href="./rendering-optimization" class="card">
    <h3>渲染优化 <Badge type="info" text="🔥高频" /></h3>
    <p>虚拟列表、时间分片、避免布局抖动、GPU 加速</p>
  </a>
  <a href="./bundle-optimization" class="card">
    <h3>包体积优化 <Badge type="info" text="⭐中频" /></h3>
    <p>分包策略、Tree Shaking 深度、CDN 外置、按需加载</p>
  </a>
  <a href="./frontend-testing" class="card">
    <h3>前端测试体系 <Badge type="info" text="⭐中频" /></h3>
    <p>单元测试/组件测试/E2E、Vitest/Playwright/Cypress 选型</p>
  </a>
  <a href="./ci-cd" class="card">
    <h3>CI/CD 搭建 <Badge type="info" text="⭐中频" /></h3>
    <p>GitHub Actions、自动化部署、环境管理、发布策略</p>
  </a>
</div>

---

## 🔴 高级（6 个）

架构级别的工程能力，P7+ 面试的核心考察点。

<div class="card-grid">
  <a href="./micro-frontend" class="card">
    <h3>微前端实践 <Badge type="info" text="🔥高频" /></h3>
    <p>qiankun、Module Federation、Isomorphic Micro Apps、沙箱隔离</p>
  </a>
  <a href="./monorepo" class="card">
    <h3>Monorepo 工程化 <Badge type="info" text="⭐中频" /></h3>
    <p>Turborepo/Nx/pnpm workspace、依赖管理、构建缓存</p>
  </a>
  <a href="./architecture-design" class="card">
    <h3>前端架构设计 <Badge type="info" text="🔥高频" /></h3>
    <p>分层架构、领域驱动、模块化、可扩展性设计</p>
  </a>
  <a href="./design-patterns" class="card">
    <h3>设计模式在前端 <Badge type="info" text="⭐中频" /></h3>
    <p>观察者/发布订阅、工厂、策略、代理模式在前端的应用</p>
  </a>
  <a href="./error-monitoring" class="card">
    <h3>错误监控与可观测性 <Badge type="info" text="⭐中频" /></h3>
    <p>Sentry、SourceMap、性能监控、日志采集与分析</p>
  </a>
  <a href="./refactoring-strategy" class="card">
    <h3>大型项目重构策略 <Badge type="info" text="⭐中频" /></h3>
    <p>渐进式重构、Strangler Pattern、代码迁移、质量保障</p>
  </a>
</div>
