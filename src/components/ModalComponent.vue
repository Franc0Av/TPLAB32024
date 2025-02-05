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
                    <ListComponent :bodyList="transactionBody" :crypto="cryptoSelected"/>
                    <div class="d-flex gap-1 align-items-center justify-content-center text-nowrap" id="warningText">
                        <i class="bi bi-info-circle-fill" style="color: #f1c21b; font-size: 1.2em;"></i>
                        <small>Los montos a pagar o recibir ya incluyen las <strong>comisiones</strong> del exchange.</small>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <ButtonComponent :text="btnText" btnClass="btn" @click="handleConfirm" id="btn-custom" />
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
import { ref } from 'vue';
//import { addTransaction } from '@/Services/transactions';

export default {
    components: {
        ButtonComponent,
        ListComponent,
        ToastComponent
    },
    props: {
        modalTitle: String,
        btnText: String,
        transactionBody: Object,
        cryptoSelected: String
    },
    emits: ["successfull"],
    setup(_, { emit }) {

        let toastColor = ref('');
        let toastMessage = ref('');
        const successToast = ref(null);

        const handleConfirm = async () => {
            try{

                // const response = await addTransaction(this.transactionBody);

                // if (response.success) {
                //     toastColor.value = 'success';
                //     toastMessage.value = "Transacción realizada exitosamente";
                //     console.log('Transacción exitosa:', response);
                // } else {
                //     toastMessage.value = "Algo salió mal, intenta nuevamente";
                //     toastColor.value = 'danger';
                //     console.warn('Transacción no fue exitosa:', response);
                // }

                const success = true;

                if (success) {
                    toastColor.value = 'success';
                    toastMessage.value = "Transacción realizada exitosamente";

                    emit('successfull', true)
                    console.log('Transacción exitosa');
                } else {
                    toastMessage.value = "Algo salió mal, intenta nuevamente";
                    toastColor.value = 'danger';

                    emit('successfull', false)
                    console.warn('Transacción no fue exitosa');
                }

            } catch (error) {
                console.error('Error al realizar la transacción:', error);
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
            handleConfirm
        };
    }
    // methods: {
    //     async handleConfirm(){

    //         try {

    //             // const response = await addTransaction(this.transactionBody);

    //             // if (response.success) {
    //             //     this.toastColor = 'success';
    //             //     this.toastMessage = "Transacción realizada exitosamente";
    //             //     console.log('Transacción exitosa:', response);
    //             // } else {
    //             //     this.toastMessage = "Algo salió mal, intenta nuevamente";
    //             //     this.toastColor = 'danger';
    //             //     console.warn('Transacción no fue exitosa:', response);
    //             // }
    //             const success = true;
    //             console.log(this.transactionBody)

    //             if (success) {
    //                 this.toastColor = 'success';
    //                 this.toastMessage = "Transacción realizada exitosamente";
    //                 console.log('Transacción exitosa');
    //             } else {
    //                 this.toastMessage = "Algo salió mal, intenta nuevamente";
    //                 this.toastColor = 'danger';
    //                 console.warn('Transacción no fue exitosa');
    //             }

    //         } catch (error) {
    //             console.error('Error al realizar la transacción:', error);
    //         }
    //         finally {
    //             setTimeout(() => {
    //                 const button = document.getElementById('btn-helper')
    //                 if (button) {
    //                     button.click();
    //                     router.push({ name: 'Transactions' });
    //                 } else {
    //                     console.warn('Botón no encontrado');
    //                 }
    //             }, 1000);

    //             setTimeout(() => {
    //                 this.$refs.successToast.showToast();
    //             }, 1200);
    //         }

    //     }
    // }
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