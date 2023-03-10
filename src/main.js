import { createPinia } from "pinia"
import { createApp } from "vue"
import App from "./App.vue"
import "bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"
import "vue-multiselect/dist/vue-multiselect.css"
import "./assets/main.css"


createApp(App).use(createPinia()).mount('#app')