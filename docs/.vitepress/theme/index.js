import DefaultTheme from 'vitepress/theme'
import DifficultyBadge from './components/DifficultyBadge.vue'
import ProgressTracker from './components/ProgressTracker.vue'
import LearningDashboard from './components/LearningDashboard.vue'
import Layout from './Layout.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('DifficultyBadge', DifficultyBadge)
    app.component('ProgressTracker', ProgressTracker)
    app.component('LearningDashboard', LearningDashboard)
  }
}
