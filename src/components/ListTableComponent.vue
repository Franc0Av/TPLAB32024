<template>
    <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center fw-bold">
            Fecha y hora de transacción:
            <span class="badge text-bg-warning rounded-pill">{{ formatDate(bodyList.datetime) }}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center fw-bold">
            Tipo de transacción:
            <span class="badge text-bg-warning rounded-pill">{{ bodyList.action == 'purchase' ? 'Compra' : 'Venta' }}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center fw-bold">
            Cryptomoneda:
            <span class="badge text-bg-warning rounded-pill">{{ (bodyList.crypto_code).toUpperCase() }}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center fw-bold">
            {{ bodyList.action == 'purchase' ? 'Monto comprado:' : 'Monto vendido:' }}
            <span v-if="!isUpdate" class="badge text-bg-warning rounded-pill">{{ bodyList.crypto_amount }}</span>
            <InputTransactionComponent v-if="isUpdate" v-model="cryptoAmount" :placeholder="bodyList.crypto_amount" @input="updateTransaction" />
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center fw-bold">
            {{ bodyList.action == 'purchase' ? 'Dinero pagado:' : 'Dinero recibido:' }}
            <span v-if="!isUpdate" class="badge text-bg-warning rounded-pill">${{ bodyList.money }} ARS</span>
            <InputTransactionComponent v-if="isUpdate" v-model="money" :placeholder="bodyList.money" @input="updateTransaction" />
        </li>
    </ul>
</template>

<script>
import InputTransactionComponent from './InputTransactionComponent.vue';
import { watch, ref, defineComponent } from 'vue';
import dayjs from 'dayjs';

export default defineComponent({
    components:{
        InputTransactionComponent
    },
    props: {
        bodyList: Object,
        isUpdate: Boolean
    },
    setup(props, { emit }) {
        
        const money = ref(props.bodyList.money ?? 0);
        const cryptoAmount = ref(props.bodyList.crypto_amount ?? 0);

        watch(() => props.bodyList, (newVal) => {
            if (newVal) {
                money.value = newVal.money ?? 0;
                cryptoAmount.value = newVal.crypto_amount ?? 0;
            }
        }, { deep: true, immediate: true });

        const updateTransaction = () => {
            emit('update-transaction', {
                crypto_amount: cryptoAmount.value,
                money: money.value
            });
        };

        const formatDate = (dateString) => {
            return dayjs(dateString).format('DD-MM-YYYY HH:mm');
        };

        return {
            money,
            cryptoAmount,
            updateTransaction,
            formatDate
        };
    }
})

</script>