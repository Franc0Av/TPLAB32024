<template>
    <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center fw-bold">
            Fecha y hora de transacción:
            <span class="badge text-bg-warning rounded-pill">{{ formatDate(bodyList.datetime) }}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center fw-bold">
            Transacción a realizar:
            <span class="badge text-bg-warning rounded-pill">{{ bodyList.action == 'purchase' ? 'Compra' : 'Venta' }}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center fw-bold">
            Cryptomoneda elegida:
            <span class="badge text-bg-warning rounded-pill">{{ crypto }}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center fw-bold">
            {{ bodyList.action == 'purchase' ? 'Monto a comprar:' : 'Monto a vender:' }}
            <span class="badge text-bg-warning rounded-pill">{{ bodyList.crypto_amount }}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center fw-bold">
            {{ bodyList.action == 'purchase' ? 'Monto a pagar:' : 'Monto a recibir:' }}
            <span class="badge text-bg-warning rounded-pill">${{ bodyList.money }} ARS</span>
        </li>
    </ul>
</template>

<script>
import dayjs from 'dayjs';

export default {
    props: {
        bodyList: Object,
        crypto: String
    },
    methods:{
        formatDate(dateString) {
            dateString = dayjs(dateString).format('DD-MM-YYYY HH:mm');
            return dateString;
        }
    }
}

</script>