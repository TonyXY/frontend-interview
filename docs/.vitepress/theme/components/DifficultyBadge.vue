<template>
  <span class="difficulty-badge" :class="level">
    {{ label }}
  </span>
</template>

<script setup>
const props = defineProps({
  level: { type: String, default: 'beginner' }
})

const labels = { beginner: '🟢 入门', intermediate: '🟡 进阶', advanced: '🔴 高级' }
const label = labels[props.level] || labels.beginner
</script>

<style scoped>
.difficulty-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.6;
}
.difficulty-badge.beginner {
  background: #dcfce7;
  color: #166534;
}
.difficulty-badge.intermediate {
  background: #fef9c3;
  color: #854d0e;
}
.difficulty-badge.advanced {
  background: #fee2e2;
  color: #991b1b;
}
</style>
