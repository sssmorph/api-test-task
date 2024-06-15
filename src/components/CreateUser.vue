<script setup lang="ts">
import { ref } from 'vue';
import { createNewUser } from '../api.js';
import { useRoute, useRouter } from 'vue-router';

interface UserForm {
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


const form = ref<UserForm>({
  name: '',
  username: '',
  email: '',
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: {
        lat: '',
        lng: '',
    }
  },  
  phone: '',
  website: '',
  company: {
    name: '',
    catchPhrase: '',
    bs: ''
  },
});
const router = useRouter();

const submitForm = async () =>{
    try{
        await createNewUser(form.value)
        router.push('/');
    } catch(error){
        console.error(error)
    }   
}
</script>

<template>
    <h1 class="users-title">Создание пользователя</h1>
    <div class="new-user-container">
        <button class="to-main">
            <router-link to="/" class="link">На главную</router-link>
        </button>
        
        <form @submit.prevent="submitForm" class="form">
            <p><strong>Contacts</strong></p>
            <div>
                <label for="name">name</label>
                <input type="text" v-model="form.name" id="name" required>
            </div>
            <div>
                <label for="username">username</label>
                <input type="text" v-model="form.username" id="username" required>
            </div>
            <div>
                <label for="email">email</label>
                <input type="text" v-model="form.email" id="email" required>
            </div>
            <div>
                <label for="phone">phone</label>
                <input type="text" v-model="form.phone" id="phone" required>
            </div>
            <div>
                <label for="website">website</label>
                <input type="text" v-model="form.website" id="website" required>
            </div>
            <!-- <p><strong>Company</strong></p>
            <div>
                <label for="company-name">company name</label>
                <input type="text" v-model="form.company.name" id="company-name">
            </div>
            <div>
                <label for="company-phrase">company phrase</label>
                <input type="text" v-model="form.company.catchPhrase" id="company-phrase">
            </div>
            <div>
                <label for="company-bs">company bs</label>
                <input type="text" v-model="form.company.bs" id="company-bs">
            </div>
            <p><strong>Address</strong></p>
            <div>
                <label for="street">street</label>
                <input type="text" v-model="form.address.street" id="street">
            </div>
            <div>
                <label for="suite">suite</label>
                <input type="text" v-model="form.address.suite" id="suite">
            </div>
            <div>
                <label for="city">city</label>
                <input type="text" v-model="form.address.city" id="city">
            </div>
            <div>
                <label for="zipcode">zipcode</label>
                <input type="text" v-model="form.address.zipcode" id="zipcode">
            </div>
            <div>
                <label for="lat">lat</label>
                <input type="text" v-model="form.address.geo.lat" id="lat">
            </div>
            <div>
                <label for="lng">lng</label>
                <input type="text" v-model="form.address.geo.lng" id="lng">
            </div> -->
            <button type="submit" class="submit-button">Create User</button>
        </form>
    </div>
</template>

<style scoped lang="scss">
@import '../styles/main'
</style>