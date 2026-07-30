<template>
  <Layout>
    <template #doc-before>
      <ReadingTime />
    </template>
    <template #layout-bottom>
      <ProgressTracker />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import ProgressTracker from './components/ProgressTracker.vue'
import ReadingTime from './components/ReadingTime.vue'

const { Layout } = DefaultTheme
</script>
