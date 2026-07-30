<template>
  <div v-if="time > 0" class="reading-time">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12,6 12,12 16,14"/>
    </svg>
    <span>{{ time }} 分钟</span>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const time = ref(0)
const WPM = 300

function calc() {
  const el = document.querySelector('.vp-doc')
  if (!el) return

  const path = location.pathname
  if (el.dataset.readingDone === path) return
  el.dataset.readingDone = path

  const text = (el.textContent || '').trim()
  if (text.length < 50) return

  const chinese = (text.match(/[\u4e00-\u9fff\u3400-\u4dbf]/g) || []).length
  const english = text.replace(/[\u4e00-\u9fff\u3400-\u4dbf]/g, ' ')
                       .split(/[\s,;.!?()\[\]{}'"\n\r]+/)
                       .filter(w => w.length > 0).length
  const total = chinese + english
  const minutes = Math.max(1, Math.ceil(total / WPM))
  time.value = minutes
}

onMounted(async () => {
  await nextTick()
  calc()
  if (time.value === 0) {
    const observer = new MutationObserver(() => {
      calc()
      if (time.value > 0) observer.disconnect()
    })
    observer.observe(document.body, { childList: true, subtree: true })
    setTimeout(() => observer.disconnect(), 3000)
  }
})
</script>

<style scoped>
.reading-time {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: #94a3b8;
  margin: 0 0 12px 0;
}
.reading-time svg {
  width: 14px;
  height: 14px;
}
</style>
