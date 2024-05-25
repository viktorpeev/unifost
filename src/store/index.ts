import { defineStore } from 'pinia'

export const useStore = defineStore('app', {
  state: () => ({
    formSchema: {
      phoneNumber: '',
      interests: [],
      avatar: ''
    }
  }),
  actions: {
    setUserInfo(userInfo) {
      this.formSchema = userInfo
    }
  },
  getters: {
    getUserInfo() {
      return this.formSchema
    }
  }
})
