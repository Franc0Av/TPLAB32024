<template>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 fw-bold" id="staticBackdropLabel">{{ modalTitle }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <ListComponent :bodyList="transactionBody" :crypto="cryptoSelected"/>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <ButtonComponent :text="btnText" btnClass="btn" @click="handleConfirm" id="btn-custom" data-bs-dismiss="modal" />
                </div>
            </div>
        </div>
    </div>
    <ToastComponent ref="successToast" :toastMessage="toastMessage" :toastType="toastColor" />
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';
import ToastComponent from './ToastComponent.vue';
import ListComponent from './ListComponent.vue';
import { addTransaction } from '@/Services/transactions';

export default {
    components: {
        ButtonComponent,
        ListComponent,
        ToastComponent
    },
    data() {
        return{
            toastMessage: '',
            toastColor: 'success'
        }
    },
    props: {
        modalTitle: String,
        btnText: String,
        transactionBody: Object,
        cryptoSelected: String
    },
    methods: {
        async handleConfirm(){

            try {

                const response = await addTransaction(this.transactionBody);

                if (response.success) {
                    console.log('Transacción exitosa:', response);
                    this.toastMessage = "Transacción realizada exitosamente";
                    this.$refs.successToast.showToast();
                } else if(!response.success) {
                    this.toastMessage = "Algo salió mal, intenta nuevamente";
                    this.toastColor = 'danger';
                    this.$refs.successToast.showToast();
                    console.warn('Transacción no fue exitosa:', response);
                }

            } catch (error) {
                this.toastMessage = "Algo salió mal, intenta nuevamente";
                this.toastColor = 'danger';
                this.$refs.successToast.showToast();
                console.error('Error al realizar la transacción:', error);
            }

        }
    }
}
</script>