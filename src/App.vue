<template>
  <nav-component v-if="isUserLogged" class="navBar" />
  <RouterView />
</template>

<script>
import { useAuthStore } from './stores/auth';
import { storeToRefs } from 'pinia';
import NavComponent from './components/NavComponent.vue';

export default {
  name: 'App',
  components: {
    NavComponent
  },
  setup() {
    const store = useAuthStore();
    const { isUserLogged } = storeToRefs(store);

    return {
      isUserLogged
    };
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  min-width: 100vw;
  min-height: 100vh;
}

.navBar{
    justify-self: center;
}
</style>
