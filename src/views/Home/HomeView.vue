<template>
    <section class="home">
        <NavComponent />
    </section>
</template>

<script>
import NavComponent from '@/components/NavComponent.vue';

export default{
    name: 'HomeView',
    components: {
        NavComponent
    }
}
</script>

<style scoped>
.home{
    display: flex;
    justify-content: center;
}
</style>