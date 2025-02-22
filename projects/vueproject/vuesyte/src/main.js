import { createApp } from 'vue'

import App from './App.vue'
import NavigationPanel from './components/NavigationPanel.vue'

const app = createApp(App)

app.component('navigation-panel', NavigationPanel)
createApp(App).mount('#app')
