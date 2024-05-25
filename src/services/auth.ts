import { ref } from 'vue'

const isAuthenticated = ref(localStorage.getItem('isAuthenticated') === 'true')

const login = (username, password) => {
  if (username === '1' && password === '1') {
    isAuthenticated.value = true
    localStorage.setItem('isAuthenticated', 'true')
    return true
  } else {
    return false
  }
}

const logout = () => {
  isAuthenticated.value = false
  localStorage.removeItem('isAuthenticated')
}

export { isAuthenticated, login, logout }
