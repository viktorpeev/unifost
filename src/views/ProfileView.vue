<template>
  <ProfileHeader />
  <div class="profile-form">
    <Form :validation-schema="schema" @submit="handleSubmit" class="form">
      <div class="form-group">
        <label>Avatar:</label>
        <div class="avatar-options">
          <div class="avatar-option">
            <Field id="red" name="avatar" type="radio" value="red" v-model="userInfo.avatar" />
            <img class="avatar-img" src="../../public/red.png" />
          </div>
          <div class="avatar-option">
            <Field name="avatar" type="radio" value="green" v-model="userInfo.avatar" />
            <img class="avatar-img" src="../../public/green.png" />
          </div>
          <div class="avatar-option">
            <Field name="avatar" type="radio" value="blue" v-model="userInfo.avatar" />
            <img class="avatar-img" src="../../public/blue.png" />
          </div>
        </div>
        <ErrorMessage name="avatar" class="error-message" />
      </div>

      <div class="form-group">
        <label for="phoneNumber">Phone Number:</label>
        <Field
          name="phoneNumber"
          type="number"
          v-model="userInfo.phoneNumber"
          class="form-control"
        />
        <ErrorMessage name="phoneNumber" class="error-message" />
      </div>

      <div class="form-group">
        <label>Select Interests:</label>
        <div class="interests-options">
          <div class="interest-option">
            <Field
              name="interests"
              type="checkbox"
              value="Javascript"
              v-model="userInfo.interests"
            />
            Javascript
          </div>
          <div class="interest-option">
            <Field
              name="interests"
              type="checkbox"
              value="Typescript"
              v-model="userInfo.interests"
            />
            Typescript
          </div>
          <div class="interest-option">
            <Field name="interests" type="checkbox" value="React" v-model="userInfo.interests" />
            React
          </div>
          <div class="interest-option">
            <Field name="interests" type="checkbox" value="Vue" v-model="userInfo.interests" /> Vue
          </div>
          <div class="interest-option">
            <Field name="interests" type="checkbox" value="Angular" v-model="userInfo.interests" />
            Angular
          </div>
        </div>
        <ErrorMessage name="interests" class="error-message" />
      </div>

      <button type="submit" class="submit-btn">Submit</button>
    </Form>
  </div>
</template>

<script setup>
import ProfileHeader from '@/components/ProfileHeader.vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { ref } from 'vue'
import { useStore } from '@/store'
import * as Yup from 'yup'

const store = useStore()

const userInfo = ref({
  avatar: store.getUserInfo.avatar || '',
  phoneNumber: store.getUserInfo.phoneNumber || '',
  interests: store.getUserInfo.interests || []
})

const schema = Yup.object({
  avatar: Yup.string().required('Avatar is required'),
  phoneNumber: Yup.string()
    .required('Phone number is required')
    .min(6, 'Phone number must be at least 6 digits'),
  interests: Yup.array().min(1, 'You must select at least one interest')
})

const handleSubmit = (values) => {
  store.setUserInfo(values)
  alert('Form submitted successfully!')
}
</script>

<style scoped>
.profile-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

.avatar-options,
.interests-options {
  display: flex;
  gap: 20px;
}

.avatar-option,
.interest-option {
  display: flex;
  align-items: center;
}

.avatar-img {
  width: 100px;
  height: 100px;
  border: 2px solid transparent;
  border-radius: 50%;
}

.avatar-option input[type='radio']:checked + .avatar-img {
  border-color: #007bff;
}

.form-control {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.submit-btn:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  margin-top: 5px;
  font-size: 0.875rem;
}
</style>
