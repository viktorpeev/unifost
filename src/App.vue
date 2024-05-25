<template>
  <header>
    <nav>
      <RouterLink to="/home" v-if="isAuthenticated">Home</RouterLink>
      <RouterLink to="/profile" v-if="isAuthenticated">Profile</RouterLink>
      <button @click="handleLogout" v-if="isAuthenticated">Logout</button>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { isAuthenticated, logout } from '@/services/auth'

const router = useRouter()

const handleLogout = () => {
  logout()
  router.push('/login')
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar-img {
  display: block;
  margin: 0 auto 2rem;
  border-radius: 50%;
  width: 100px;
  height: 100px;
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 1rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid #ddd;
}

nav a:first-of-type {
  border-left: 0;
}

nav a.router-link-exact-active {
  color: blue;
}

main {
  padding: 1rem;
}
</style>
