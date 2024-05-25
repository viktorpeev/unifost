<template>
  <v-container fluid class="login-container">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title class="text-center">
            <h2>Login</h2>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="loginUser">
              <v-text-field v-model="username" label="Username" outlined></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                outlined
              ></v-text-field>
              <v-btn type="submit" color="primary" block>Login</v-btn>
              <p v-if="error" class="error-message">{{ error }}</p>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { login } from '@/services/auth'

const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')

const loginUser = () => {
  if (login(username.value, password.value)) {
    router.push('/home')
  } else {
    error.value = 'Invalid credentials'
  }
}
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  align-items: center;
}

.error-message {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>
