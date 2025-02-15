<template>
    <div class="cardContainer">
        <div class="d-flex align-items-center h-100">
            <h1 class="fw-bold"> {{ formatCoinName(CoinName) }}</h1>
        </div>
        <div class="d-flex flex-column align-items-center justify-content-around fs-4 fw-bold">
            <div class="d-flex gap-2"><i class="bi bi-coin text-warning"></i>{{ CoinBody.totalAvailable  }}</div>
            <div class="d-flex gap-2 align-items-center"><i class="bi bi-cash-coin text-success"></i> ${{ CoinBody.totalValueARS  }} ARS</div>
        </div>
    </div>
</template>

<script>

export default {
    props:{
        CoinName: String,
        CoinBody: Object
    },
    methods:{
        formatCoinName(value){
            switch (value) {
                case 'btc':
                    return 'Bitcoin';
                case 'usdt':
                    return 'USDT';
                case 'dai':
                    return 'Dai';
                case 'eth':
                    return 'Ethereum';
                default:
                    return 'Desconocido';
            }
        }
    }
}
</script>

<style>
.cardContainer{
    display: flex;
    justify-content: space-around;
    width: 35%;
    height: 20vh;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    gap: 1em;
}
.cardContainer:hover{
    background-color: #9f99ff;
    color: white;
}
</style>