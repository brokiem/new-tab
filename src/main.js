import { createApp } from 'vue'
import App from './App.vue'

import FirefoxLogo from "./components/FirefoxLogo.vue";
import GoogleLogo from "./components/GoogleLogo.vue";
import SearchInput from "./components/SearchInput.vue";
import AdjustIcon from "./components/AdjustIcon.vue";

import './assets/main.css'

createApp(App)
    .component('FirefoxLogo', FirefoxLogo)
    .component('GoogleLogo', GoogleLogo)
    .component('SearchInput', SearchInput)
    .component('AdjustIcon', AdjustIcon)
    .mount('#app')
