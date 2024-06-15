<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { defineProps } from 'vue';
import { getUserById } from '../api.js';
import { useQuery } from '@tanstack/vue-query';

const props = defineProps<{ id: string }>();


interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

const user = ref<User | null>(null);
onMounted(async () => {
  try {
    user.value = await getUserById(props.id);
  } catch (error) {
    console.error(error);
  }
});
onUnmounted(() => {
    const controller = new AbortController();
    controller.abort();
});
</script>

<template>
    <h1 class="users-title">Страница пользователя</h1>
    <div class="user-container">
    <button class="main-page-button">
      <router-link to="/" class="main-page-link">На главную</router-link>
    </button>
    <div v-if="user" class="user-information-container">
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>Username:</strong> {{ user.username }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Phone:</strong> {{ user.phone }}</p>
        <p><strong>Website:</strong> <a :href="'http://' + user.website" target="_blank">{{ user.website }}</a></p>
        <p><strong>Company:</strong> {{ user.company.name }}</p>
        <p><strong>Company phrase:</strong> {{ user.company.catchPhrase }}</p>
        <p><strong>Company bs:</strong> {{ user.company.bs }}</p>
        <p><strong>Address:</strong> {{ user.address.street }}, {{ user.address.suite }}, {{ user.address.city }}, {{ user.address.zipcode }}</p>
        <p><strong>geo:</strong> lat:{{ user.address.geo.lat }}, lng: {{ user.address.geo.lng}}</p>
    </div>
    <div v-else>
      <p>Загрузка...</p>
    </div>
    </div>
</template>

<style scoped lang="scss">
@import '../styles/main';
</style>