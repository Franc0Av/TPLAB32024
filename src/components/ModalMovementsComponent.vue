<template>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="d-flex align-items-center gap-2">
                        <h1 class="modal-title fs-4 fw-bold" id="staticBackdropLabel">{{ modalTitle }}</h1>
                        <i class="bi bi-check-circle fs-4" style="color: green;"></i>
                    </div>
                    <button type="button" id="btn-helper" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex flex-column gap-3">
                    <ListTableComponent v-if="transactionBody != null" :bodyList="transactionBody" :isUpdate="isUpdate" @update-transaction="updateTransactionBody"/>
                    <div class="d-flex gap-1 align-items-center justify-content-center text-nowrap" id="warningText">
                        <i class="bi bi-info-circle-fill" style="color: #f1c21b; font-size: 1.2em;"></i>
                        <small>El dinero pagado o recibido ya incluye las <strong>comisiones</strong> del exchange.</small>
                    </div>
                </div>
                <div class="modal-footer">
                    <button v-if="!isReadOnly" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <ButtonComponent v-if="!isReadOnly" :text="btnText" btnClass="btn" @click="handleConfirm" id="btn-custom" />
                    <ButtonComponent v-if="isReadOnly" :text="btnText" btnClass="btn" id="btn-custom" data-bs-dismiss="modal" />
                </div>
            </div>
        </div>
    </div>
    <ToastComponent ref="successToast" :toastMessage="toastMessage" :toastType="toastColor" />
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';
import ToastComponent from './ToastComponent.vue';
import ListTableComponent from './ListTableComponent.vue';
import { ref } from 'vue';
import { deleteTransaction, updateTransaction } from '@/Services/transactions';

export default {
    components: {
        ButtonComponent,
        ListTableComponent,
        ToastComponent
    },
    props: {
        modalTitle: String,
        btnText: String,
        transactionBody: Object,
        isReadOnly: Boolean,
        isUpdate: Boolean,
        isDelete: Boolean
    },
    emits: ["successfull"],
    setup(props, { emit }) {

        let toastColor = ref('');
        let toastMessage = ref('');
        let updateBody = ref({
            crypto_amount: props.transactionBody.crypto_amount,
            money: props.transactionBody.money
        });
        
        const updateTransactionBody = (updatedValues) => {
            updateBody.value = updatedValues;
            console.log(updateBody.value)
        }
        const successToast = ref(null);

        const handleConfirm = async () => {
            try{
                const response = props.isDelete ? await deleteTransaction(props.transactionBody._id)
                    : await updateTransaction(props.transactionBody._id, updateBody.value);

                if (response.success) {
                    toastColor.value = 'success';
                    toastMessage.value = props.isDelete ? "Transacción eliminada exitosamente" : "Transacción actualizada exitosamente";

                    emit('successfull', true)
                } else {
                    toastMessage.value = "Algo salió mal, intenta nuevamente";
                    toastColor.value = 'danger';

                    emit('successfull', false)
                }
            } catch (error) {
                console.error('Error al manipular la transacción:', error);
            }
            finally {
                setTimeout(() => {
                    const button = document.getElementById('btn-helper')
                    if (button) {
                        button.click();
                    } else {
                        console.warn('Botón no encontrado');
                    }
                }, 1000);

                setTimeout(() => {
                    if (successToast.value) {
                        successToast.value.showToast();
                    }
                }, 1200);
            }
        }

        return {
            toastMessage,
            toastColor,
            successToast,
            updateTransactionBody,
            handleConfirm
        };
    }
}
</script>

<style>
#warningText{
    border: solid 1px #f1c21b;
    border-left: solid 3px #f1c21b;
    border-radius: 3px;
    background-color: #fff8e1;
    text-align: center;
    font-size: .95em;
    height: 2.5em;
}
</style>