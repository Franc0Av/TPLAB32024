<template>
    <div class="nav">
        <div class="routes">
            <div class="icon-box">
                <ion-icon name="home"></ion-icon>
                <router-link class="custom-link" :to="{name: 'Home'}">Home</router-link>
            </div>
            <div class="icon-box">
                <ion-icon name="logo-bitcoin"></ion-icon>
                <router-link class="custom-link" :to="{name: 'Transactions'}">Transacciones</router-link>
            </div>
            <div class="icon-box">
                <ion-icon name="swap-vertical"></ion-icon>
                <router-link class="custom-link" :to="{name: 'Movements'}">Movimientos</router-link>
            </div>
            <div class="icon-box">
                <ion-icon name="wallet-outline"></ion-icon>
                <router-link class="custom-link" :to="{name: 'Analysis'}">Mi Cartera</router-link>
            </div>
        </div>
        <div class="avatar">
            <img src="../assets/avatar.svg" alt="">
            ¡Hola, Franco!
            <router-link class="custom-link" :to="{name: 'Login'}">
                <ion-icon name="log-out-outline"></ion-icon>
            </router-link>
        </div>
    </div>
</template>

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
    gap: 0.5rem;
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
    background: linear-gradient(to top, #a9a5f8ff 0%, #6c63ffff 100%);
    color: white;
    cursor: pointer;

}

.custom-link {
  color: inherit;
  text-decoration: none;
}

</style>