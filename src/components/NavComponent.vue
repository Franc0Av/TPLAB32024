<template>
    <div class="nav">
        <div class="routes">
            <div class="icon-box" :class="{ active: $route.name === 'Home' }">
                <ion-icon name="home"></ion-icon>
                <router-link class="custom-link" :to="{name: 'Home'}">Home</router-link>
            </div>
            <div class="icon-box" :class="{ active: $route.name === 'Transactions' }">
                <ion-icon name="logo-bitcoin"></ion-icon>
                <router-link class="custom-link" :to="{name: 'Transactions'}">Transacciones</router-link>
            </div>
            <div class="icon-box" :class="{ active: $route.name === 'Movements' }">
                <ion-icon name="swap-vertical"></ion-icon>
                <router-link class="custom-link" :to="{name: 'Movements'}">Movimientos</router-link>
            </div>
            <div class="icon-box" :class="{ active: $route.name === 'Analysis' }">
                <ion-icon name="wallet-outline"></ion-icon>
                <router-link class="custom-link" :to="{name: 'Analysis'}">Mi Cartera</router-link>
            </div>
        </div>
        <div class="avatar">
            <div class="d-flex justify-content-center align-items-center gap-1">
                <ion-icon name="person-outline"></ion-icon>
                <div>¡Hola, {{ user }}!</div>
            </div>
            <ion-icon @click="logOut" id="icon-logOut" name="log-out-outline"></ion-icon>
        </div>
    </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth.js';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

export default {
  name: 'NavComponent',
  setup() {
    const store = useAuthStore();
    const router = useRouter();
    const { user, isUserLogged } = storeToRefs(store);

    const logOut = () => {
        store.isUserLogged = false;
        router.push({ name: 'Login' });
    };

    return {
      user,
      isUserLogged,
      logOut
    };
  },
};
</script>

<style scoped>
.nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    /* color: white; */
    width: 70vw;
    height: 6vh;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(133, 90, 250, 0.5);
    /* background-color: #6c63ff; */
    /* background: linear-gradient(to top, #a9a5f8ff 0%, #6c63ffff 100%); */
}

.routes{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 3em;
    padding-left: 2em;
}

.avatar{
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-right: 2em;
    font-weight: bold;
    font-size: large;
}

img{
    width: auto;
    height: 5vh;
}

ion-icon {
  font-size: 1.5em;
}

.icon-box{
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5em;
    border-radius: 10px;
    height: 2.5rem;
    width: auto;
}

.icon-box:hover{
    background-color: #9f99ff;
    color: white;
    cursor: pointer;
}

.icon-box.active {
    background-color: #6c63ff;
    color: white;
    cursor: pointer;
}

.custom-link {
  color: inherit;
  text-decoration: none;
}

#icon-logOut{
    cursor: pointer;
    color: #6c63ff;
    font-size: 1.7em;
    transition: font-size 0.3s ease-in-out;
}

#icon-logOut:hover{
    font-size: 2em;
}

</style>