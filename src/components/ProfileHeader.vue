<template>
  <img class="avatar-img" :src="avatarSrc" alt="Avatar" />
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from '@/store'

const store = useStore()

const avatar = computed(() => store.getUserInfo.avatar)

const avatarSrc = computed(() => `../${avatar.value || 'red'}.png`)
</script>

<style scoped>
.avatar-img {
  display: block;
  margin: 0 auto 2rem;
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
</style>
