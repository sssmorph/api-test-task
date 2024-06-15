<script setup lang="ts">
import { ref, onMounted, onUnmounted} from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { getNames } from '../api.js';


interface User {
    id: number;
    name: string;
}

const { data: users, isLoading: isPaymentsLoading, refetch  } = useQuery({
    queryKey: ['users'],
    queryFn: getNames,
    refetchOnMount:false,
});
// const users = ref<User | null>(null);
// onMounted(async () => {
//   try {
//     users.value = await getNames();
//   } catch (error) {
//     console.error(error);
//   }
// });
// onUnmounted(() => {
//     const controller = new AbortController();
//     controller.abort();
// });
</script>

<template>
    <h1 class="users-title">Список пользователей</h1>

    <div class="users-list">
        <button class="new-user">
            <router-link to="/create" class="user-link">Создать пользователя</router-link>
        </button>
        <ul v-if="users">
            <li v-for="user in users" :key="user.id">
                <button class="user-button">
                    <router-link :to="{ name: 'user', params: { id: user.id }}" class="user-link">{{ user.name }}</router-link>
                </button>
            </li>
        </ul>
        <div v-else>
            <p>Загрузка...</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import '../styles/main';

</style>