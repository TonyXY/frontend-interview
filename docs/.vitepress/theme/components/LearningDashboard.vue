<template>
  <div class="dashboard" v-if="ready">
    <div class="summary-card">
      <div class="summary-ring-wrap">
        <svg viewBox="0 0 120 120" class="summary-ring">
          <path class="sr-bg" d="M60 10a50 50 0 1 1 0 100a50 50 0 0 1 0-100"/>
          <path class="sr-fg" :d="ringPath" :style="ringStyle"/>
        </svg>
        <div class="sr-text">
          <span class="sr-pct">{{ pct }}%</span>
          <span class="sr-label">已完成</span>
        </div>
      </div>
      <div class="summary-stats">
        <div class="stat-item"><span class="stat-num">{{ done }}</span><span class="stat-lbl">已学页面</span></div>
        <div class="stat-divider"/>
        <div class="stat-item"><span class="stat-num">{{ total }}</span><span class="stat-lbl">核心页面</span></div>
      </div>
    </div>

    <div v-for="mod in modules" :key="mod.key" class="mod-card">
      <div class="mod-head">
        <span class="mod-icon">{{ mod.icon }}</span>
        <span class="mod-name">{{ mod.label }}</span>
        <span class="mod-pct">{{ mod.done }}/{{ mod.pages.length }}</span>
      </div>
      <div class="mod-bar-wrap"><div class="mod-bar-fill" :style="{ width: (mod.done / mod.pages.length * 100) + '%' }"/></div>
      <div class="mod-pages">
        <span v-for="p in mod.pages" :key="p.slug"
          class="page-chip"
          :class="{ visited: p.done, unvisited: !p.done }"
          @click="go(`/${mod.key}/${p.slug}`)">
          {{ p.done ? '✅' : '⭕' }} {{ p.label }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, withBase } from 'vitepress'

const router = useRouter()
const go = (path) => { window.location.href = withBase(path) }

const STORAGE_KEY = 'fe-interview-progress'
const ready = ref(false)

const PAGE_DEFS = {
  fundamentals: { icon: '📖', label: '核心基础',
    pages: [
      { slug: 'html-semantic', label: 'HTML 语义化' }, { slug: 'css-layout', label: 'CSS 布局' },
      { slug: 'css-responsive', label: 'CSS 响应式' }, { slug: 'js-execution', label: 'JS 执行机制' },
      { slug: 'js-async', label: 'JS 异步编程' }, { slug: 'js-prototype', label: '原型链' },
      { slug: 'js-event-loop', label: '事件循环' }, { slug: 'js-data-types', label: '数据类型' },
      { slug: 'ts-basics', label: 'TS 类型系统' }, { slug: 'ts-generics', label: 'TS 泛型' },
      { slug: 'ts-utility-types', label: 'TS 工具类型' }, { slug: 'browser-rendering', label: '渲染流水线' },
      { slug: 'browser-reflow', label: '重排重绘' }, { slug: 'browser-cors', label: '跨域' },
      { slug: 'browser-security', label: 'Web 安全' }, { slug: 'browser-storage', label: '浏览器存储' },
      { slug: 'ts-advanced', label: 'TS 类型体操' }, { slug: 'v8-engine', label: 'V8 引擎' },
      { slug: 'memory-management', label: '内存管理' }, { slug: 'web-worker', label: 'Web Worker' }
    ]
  },
  frameworks: { icon: '⚛️', label: '框架深入',
    pages: [
      { slug: 'react-core', label: 'React 核心' }, { slug: 'react-hooks', label: 'React Hooks' },
      { slug: 'vue-core', label: 'Vue 3 核心' }, { slug: 'vue-advanced', label: 'Vue 3 进阶' },
      { slug: 'framework-comparison', label: '框架对比' }, { slug: 'state-management', label: '状态管理' },
      { slug: 'react-fiber', label: 'React Fiber' }, { slug: 'react-optimization', label: 'React 优化' },
      { slug: 'react-concurrent', label: '并发模式' }, { slug: 'vue-compile-optimize', label: 'Vue 编译优化' },
      { slug: 'custom-hooks', label: '自定义 Hooks' }, { slug: 'component-patterns', label: '组件模式' },
      { slug: 'react-source', label: 'React 源码' }, { slug: 'vue-source', label: 'Vue 源码' },
      { slug: 'cross-platform', label: '跨端方案' }, { slug: 'web-components', label: 'Web Components' }
    ]
  },
  engineering: { icon: '🏗️', label: '工程架构',
    pages: [
      { slug: 'build-tools-evolution', label: '构建工具演进' }, { slug: 'webpack-core', label: 'Webpack 核心' },
      { slug: 'vite-principles', label: 'Vite 原理' }, { slug: 'package-managers', label: '包管理器' },
      { slug: 'css-engineering', label: 'CSS 工程化' }, { slug: 'git-workflow', label: 'Git 工作流' },
      { slug: 'performance-overview', label: '性能全景' }, { slug: 'loading-optimization', label: '加载优化' },
      { slug: 'rendering-optimization', label: '渲染优化' }, { slug: 'bundle-optimization', label: '包体积' },
      { slug: 'frontend-testing', label: '前端测试' }, { slug: 'ci-cd', label: 'CI/CD' },
      { slug: 'micro-frontend', label: '微前端' }, { slug: 'monorepo', label: 'Monorepo' },
      { slug: 'architecture-design', label: '架构设计' }, { slug: 'design-patterns', label: '设计模式' },
      { slug: 'error-monitoring', label: '错误监控' }, { slug: 'refactoring-strategy', label: '重构策略' }
    ]
  },
  testing: { icon: '🧪', label: '测试·QA',
    pages: [
      { slug: 'test-basics', label: '软件测试基础' }, { slug: 'test-case-design', label: '用例设计' },
      { slug: 'defect-management', label: '缺陷管理' }, { slug: 'interface-testing', label: '接口测试' },
      { slug: 'database-testing', label: '数据库测试' }, { slug: 'automation-basics', label: 'Python 自动化' },
      { slug: 'ui-automation', label: 'UI 自动化' }, { slug: 'performance-testing', label: '性能测试' },
      { slug: 'test-ci-strategy', label: '策略与CI/CD' }, { slug: 'test-interview', label: '转岗面试' },
      { slug: 'ai-testing', label: 'AI 辅助测试' }, { slug: 'ai-product-testing', label: 'AI 产品测试' }
    ]
  },
  'ai-dev': { icon: '🤖', label: 'AI 开发',
    pages: [
      { slug: 'ai-tools-overview', label: 'AI 工具对比' }, { slug: 'prompt-basics', label: 'Prompt 基础' },
      { slug: 'ai-code-gen', label: 'AI 代码生成' }, { slug: 'ai-debugging', label: 'AI 调试' },
      { slug: 'ai-code-review', label: 'AI Code Review' }, { slug: 'ai-testing', label: 'AI 写测试' },
      { slug: 'ai-tool-config', label: 'AI 工具配置' }, { slug: 'ai-workflow', label: 'AI 工作流' },
      { slug: 'ai-agent-usage', label: 'Agent 使用' }, { slug: 'ai-architecture', label: 'AI 架构设计' },
      { slug: 'prompt-advanced', label: 'Prompt 进阶' }, { slug: 'rag-knowledge-base', label: 'RAG 知识库' },
      { slug: 'build-own-agent', label: '构建 Agent' }, { slug: 'ai-interview', label: 'AI 面试' }
    ]
  },
  interview: { icon: '🎯', label: '面试实战',
    pages: [
      { slug: 'resume-writing', label: '简历撰写' }, { slug: 'interview-flow', label: '面试流程' },
      { slug: 'behavioral-questions', label: '行为面试' }, { slug: 'salary-negotiation', label: '谈薪' },
      { slug: 'company-selection', label: '公司选择' }, { slug: 'interview-mindset', label: '面试心态' },
      { slug: 'handwrite-code', label: '手写代码' }, { slug: 'algorithms-basics', label: '算法入门' },
      { slug: 'system-design-1', label: '系统设计 ①' }, { slug: 'system-design-2', label: '系统设计 ②' },
      { slug: 'open-questions', label: '开放问题' }, { slug: 'project-deep-dive', label: '项目深挖' },
      { slug: 'algorithms-advanced', label: '算法进阶' }, { slug: 'system-design-3', label: '系统设计 ③' },
      { slug: 'leadership', label: '领导力' }, { slug: 'foreign-company', label: '外企面试' }
    ]
  }
}

const modules = ref([])
const total = ref(0)
const done = ref(0)

const pct = computed(() => total.value ? Math.round(done.value / total.value * 100) : 0)
const ringPath = 'M60 10a50 50 0 1 1 0 100a50 50 0 0 1 0-100'
const circ = 2 * Math.PI * 50
const ringStyle = computed(() => ({
  strokeDasharray: `${circ} ${circ}`,
  strokeDashoffset: circ - pct.value / 100 * circ
}))

onMounted(() => {
  let visited = new Set()
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) visited = new Set(JSON.parse(raw).visited)
  } catch {}

  const mods = Object.entries(PAGE_DEFS).map(([key, def]) => {
    const pages = def.pages.map(p => ({
      ...p,
      done: visited.has(`${key}/${p.slug}`)
    }))
    const d = pages.filter(p => p.done).length
    return { key, icon: def.icon, label: def.label, pages, done: d }
  })

  modules.value = mods
  done.value = mods.reduce((s, m) => s + m.done, 0)
  total.value = mods.reduce((s, m) => s + m.pages.length, 0)
  ready.value = true
})
</script>

<style scoped>
.dashboard { max-width: 720px; margin: 24px auto; }
.summary-card {
  display: flex; align-items: center; gap: 32px;
  padding: 24px; background: #f8fafc;
  border: 1px solid #e2e8f0; border-radius: 16px;
  margin-bottom: 20px;
}
.summary-ring-wrap { position: relative; width: 120px; height: 120px; flex-shrink: 0; }
.summary-ring { width: 120px; height: 120px; transform: rotate(-90deg); }
.sr-bg { fill: none; stroke: #e2e8f0; stroke-width: 8; }
.sr-fg { fill: none; stroke: #2563eb; stroke-width: 8; stroke-linecap: round; transition: stroke-dashoffset .6s; }
.sr-text {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
}
.sr-pct { font-size: 28px; font-weight: 800; color: #2563eb; line-height: 1; }
.sr-label { font-size: 12px; color: #94a3b8; margin-top: 2px; }
.summary-stats { display: flex; align-items: center; gap: 24px; }
.stat-item { display: flex; flex-direction: column; }
.stat-num { font-size: 24px; font-weight: 700; color: #1e293b; }
.stat-lbl { font-size: 12px; color: #94a3b8; }
.stat-divider { width: 1px; height: 40px; background: #e2e8f0; }
.mod-card {
  background: #fff; border: 1px solid #e2e8f0;
  border-radius: 12px; padding: 16px; margin-bottom: 12px;
}
.mod-head { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
.mod-icon { font-size: 18px; }
.mod-name { flex: 1; font-weight: 600; color: #1e293b; }
.mod-pct { font-size: 13px; color: #64748b; font-weight: 600; }
.mod-bar-wrap { height: 5px; background: #e2e8f0; border-radius: 3px; margin-bottom: 10px; }
.mod-bar-fill { height: 100%; background: linear-gradient(90deg,#2563eb,#7c3aed); border-radius: 3px; transition: width .4s; }
.mod-pages { display: flex; flex-wrap: wrap; gap: 6px; }
.page-chip {
  font-size: 12px; padding: 3px 8px; border-radius: 999px;
  cursor: pointer; transition: background .15s;
}
.page-chip.visited { background: #f0fdf4; color: #166534; }
.page-chip.unvisited { background: #f8fafc; color: #94a3b8; border: 1px solid #e2e8f0; }
.page-chip:hover { filter: brightness(0.95); }
</style>
