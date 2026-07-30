<template>
  <div v-if="show" class="progress-float">
    <button class="progress-toggle" @click="expanded = !expanded" :title="`学习进度 ${percent}%`">
      <svg viewBox="0 0 36 36" class="progress-ring">
        <path class="ring-bg" d="M18 2a16 16 0 1 1 0 32a16 16 0 0 1 0-32"/>
        <path class="ring-fg" :d="ringPath" :style="{ strokeDasharray, strokeDashoffset }"/>
      </svg>
      <span class="ring-text">{{ percent }}</span>
    </button>

    <div v-if="expanded" class="progress-panel">
      <div class="panel-header">📊 学习进度</div>
      <div class="panel-body">
        <div class="overall-row">
          <span>总进度</span>
          <strong>{{ visitedCount }}/{{ totalCount }} 页</strong>
        </div>
        <div class="bar-wrap"><div class="bar-fill" :style="{ width: percent + '%' }"/></div>
        <div v-for="mod in modules" :key="mod.key" class="mod-row">
          <span>{{ mod.icon }} {{ mod.label }}</span>
          <span class="mod-stat">{{ mod.done }}/{{ mod.total }}</span>
        </div>
      </div>
      <div class="panel-footer">
        <a href="/frontend-interview/progress.html">查看详情 →</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()
const expanded = ref(false)
const show = ref(false)

const STORAGE_KEY = 'fe-interview-progress'

const PAGE_DEFS = {
  fundamentals: {
    icon: '📖', label: '核心基础',
    pages: ['html-semantic','css-layout','css-responsive','js-execution','js-async','js-prototype','js-event-loop','js-data-types','ts-basics','ts-generics','ts-utility-types','browser-rendering','browser-reflow','browser-cors','browser-security','browser-storage','ts-advanced','v8-engine','memory-management','web-worker']
  },
  frameworks: {
    icon: '⚛️', label: '框架深入',
    pages: ['react-core','react-hooks','vue-core','vue-advanced','framework-comparison','state-management','react-fiber','react-optimization','react-concurrent','vue-compile-optimize','custom-hooks','component-patterns','react-source','vue-source','cross-platform','web-components']
  },
  engineering: {
    icon: '🏗️', label: '工程架构',
    pages: ['build-tools-evolution','webpack-core','vite-principles','package-managers','css-engineering','git-workflow','performance-overview','loading-optimization','rendering-optimization','bundle-optimization','frontend-testing','ci-cd','micro-frontend','monorepo','architecture-design','design-patterns','error-monitoring','refactoring-strategy']
  },
  'ai-dev': {
    icon: '🤖', label: 'AI 开发',
    pages: ['ai-tools-overview','prompt-basics','ai-code-gen','ai-debugging','ai-code-review','ai-testing','ai-tool-config','ai-workflow','ai-agent-usage','ai-architecture','prompt-advanced','rag-knowledge-base','build-own-agent','ai-interview']
  },
  interview: {
    icon: '🎯', label: '面试实战',
    pages: ['resume-writing','interview-flow','behavioral-questions','salary-negotiation','company-selection','interview-mindset','handwrite-code','algorithms-basics','system-design-1','system-design-2','open-questions','project-deep-dive','algorithms-advanced','system-design-3','leadership','foreign-company']
  }
}

const totalCount = computed(() => modules.value.reduce((s, m) => s + m.pages.length, 0))

const modules = ref(Object.entries(PAGE_DEFS).map(([key, v]) => ({
  key, ...v, done: 0, pct: 0
})))

const visitedCount = ref(0)
const percent = computed(() => visitedCount.value === 0 ? 0 : Math.round(visitedCount.value / totalCount.value * 100))

const ringPath = 'M18 2a16 16 0 1 1 0 32a16 16 0 0 1 0-32'
const circumference = 2 * Math.PI * 16
const strokeDasharray = `${circumference} ${circumference}`
const strokeDashoffset = computed(() => circumference - percent.value / 100 * circumference)

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : { visited: [] }
  } catch { return { visited: [] } }
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

function getModuleForPath(path) {
  for (const [key, def] of Object.entries(PAGE_DEFS)) {
    for (const slug of def.pages) {
      if (path.includes(`${key}/${slug}`) || path.includes(`${key}/${slug}.html`)) {
        return { mod: key, slug }
      }
    }
  }
  return null
}

function updateStats(data) {
  const visited = new Set(data.visited)
  for (const mod of modules.value) {
    mod.done = mod.pages.filter(p => visited.has(`${mod.key}/${p}`)).length
  }
  visitedCount.value = visited.size
}

onMounted(() => {
  show.value = true
  const data = loadProgress()
  const currentPath = page.value.relativePath.replace(/\.md$/, '')
  const match = getModuleForPath(currentPath)

  if (match && !data.visited.includes(`${match.mod}/${match.slug}`)) {
    data.visited.push(`${match.mod}/${match.slug}`)
    saveProgress(data)
  }

  updateStats(data)
})
</script>

<style scoped>
.progress-float {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 999;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}
.progress-toggle {
  position: relative;
  width: 52px; height: 52px;
  border: none; border-radius: 50%;
  background: #fff;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(0,0,0,0.15);
  display: flex; align-items: center; justify-content: center;
  transition: transform .15s;
}
.progress-toggle:hover { transform: scale(1.08); }
.progress-ring { width: 48px; height: 48px; }
.ring-bg { fill: none; stroke: #e2e8f0; stroke-width: 3; }
.ring-fg { fill: none; stroke: #2563eb; stroke-width: 3; stroke-linecap: round; transition: stroke-dashoffset .4s; }
.ring-text {
  position: absolute;
  font-size: 11px; font-weight: 700;
  color: #2563eb;
}
.progress-panel {
  position: absolute;
  bottom: 60px; right: 0;
  width: 260px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  overflow: hidden;
}
.panel-header {
  padding: 12px 16px 8px;
  font-weight: 700; font-size: 14px;
  color: #1e293b;
}
.panel-body { padding: 0 16px 12px; }
.overall-row {
  display: flex; justify-content: space-between;
  font-size: 13px; margin-bottom: 6px;
  color: #475569;
}
.bar-wrap {
  height: 6px; background: #e2e8f0;
  border-radius: 3px; margin-bottom: 12px;
}
.bar-fill {
  height: 100%; background: linear-gradient(90deg,#2563eb,#7c3aed);
  border-radius: 3px; transition: width .4s;
}
.mod-row {
  display: flex; justify-content: space-between;
  font-size: 12px; padding: 3px 0;
  color: #64748b;
}
.mod-stat { color: #94a3b8; }
.panel-footer {
  padding: 8px 16px;
  border-top: 1px solid #e2e8f0;
  text-align: center;
}
.panel-footer a {
  font-size: 12px; color: #2563eb;
  text-decoration: none;
}
.panel-footer a:hover { text-decoration: underline; }
</style>
