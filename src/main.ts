import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { defineRule, configure } from 'vee-validate'
import { required } from '@vee-validate/rules'
import { Field, Form, ErrorMessage } from 'vee-validate'

configure({
  generateMessage: ({ field }) => `${field} is required`
})

defineRule('required', required)

loadFonts()

createApp(App)
  .use(router)
  .use(createPinia())
  .component('Field', Field)
  .component('Form', Form)
  .component('ErrorMessage', ErrorMessage)
  .use(vuetify)
  .mount('#app')
