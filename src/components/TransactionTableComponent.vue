<template>
  <h2 class="d-flex align-items-center justify-content-center mt-5">Historial de movimientos</h2>
    <div v-if="!showList" id="tableView" class="d-flex align-items-center justify-content-center mt-5 h-100">
      <SpinnerComponent />
    </div>
    <div class="table-container">
      <table class="transactions-table">
        <thead>
          <tr>
            <th><i class="bi bi-calendar4-week"></i> Fecha y hora</th>
            <th><i class="bi bi-currency-exchange"></i> Tipo</th>
            <th><i class="bi bi-coin"></i> Crypto</th>
            <th><i class="bi bi-cart-plus"></i> Cantidad</th>
            <th><i class="bi bi-cash-stack"></i> Dinero</th>
            <th><i class="bi bi-toggles2"></i> Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(transaction, index) in transactions" :key="index">
            <td>{{ formatDate(transaction.datetime)}}</td>
            <td>{{ transaction.action === 'purchase' ? 'Compra' : 'Venta' }}</td>
            <td>{{ (transaction.crypto_code).toUpperCase() }}</td>
            <td>{{ transaction.crypto_amount }}</td>
            <td>$ {{ transaction.money }}</td>
            <td id="tableDataIcons" class="d-flex align-items-center justify-content-center gap-4 fs-5">
              <i 
                class="bi bi-eye" 
                style="color: green;"
                data-bs-toggle="modal" 
                data-bs-target="#staticBackdrop"
                @click="openModal({transaction, isReadOnly: true})"
              ></i> 
              <i 
                class="bi bi-pencil" 
                style="color: orange;"
                data-bs-toggle="modal" 
                data-bs-target="#staticBackdrop"
                @click="openModal({transaction, isUpdate: true})"
              ></i> 
              <i 
                class="bi bi-trash" 
                style="color: red;"
                data-bs-toggle="modal" 
                data-bs-target="#staticBackdrop"
                @click="openModal({transaction, isDelete: true})"
              ></i> 
            </td>
          </tr>
        </tbody>
      </table>
      <ModalMovementsComponent 
        @successfull="handleSuccess" 
        :isReadOnly="isRead" 
        :isDelete="isDelete"  
        :isUpdate="isUpdate" 
        :transactionBody="transactionBody" 
        modalTitle="Detalles de transacción" 
        :btnText="isRead ? 'Cerrar': isUpdate? 'Actualizar': 'Eliminar'"
      />
    </div>
</template>

<script>
import ModalMovementsComponent from './ModalMovementsComponent.vue';
import SpinnerComponent from './SpinnerComponent.vue';
import dayjs from 'dayjs';

export default {
  name: 'TransactionTableComponent',
  components:{
    ModalMovementsComponent,
    SpinnerComponent
  },
  data() {
    return {
      transactionBody: {
        _id: '',
        user_id: '',
        action: '',
        crypto_code: '',
        crypto_amount: '',
        money: '',
        datetime: ''      
      },
      isRead: null,
      isUpdate: null,
      isDelete: null
    };
  },
  props: {
    transactions: {
      type: Array,
      required: true
    },
    showList: {
      type: Boolean,
      default: false
    }
  },
  emits: ["success"],
  methods: {
    formatDate(dateString) {
      dateString = dayjs(dateString).format('DD-MM-YYYY HH:mm');
      return dateString;
    },
    openModal({transaction, isReadOnly = null, isUpdate = null, isDelete = null}) {
      this.transactionBody._id = transaction._id;
      this.transactionBody.user_id = transaction.user_id;
      this.transactionBody.action = transaction.action;
      this.transactionBody.datetime = transaction.datetime;
      this.transactionBody.crypto_amount = transaction.crypto_amount;
      this.transactionBody.crypto_code = transaction.crypto_code;
      this.transactionBody.money = transaction.money;

      this.isRead = isReadOnly ?? null;
      this.isUpdate = isUpdate ?? null;
      this.isDelete = isDelete ?? null;

      console.log(this.transactionBody)
    },
    handleSuccess(value){
      if(value)
        this.$emit('success', true)
    }
  }
};
</script>

<style scoped>
#tableView{
  animation: fadeInUp 1s ease-out;
}
#tableDataIcons i{
  cursor: pointer;
  transition: font-size 0.3s ease-in-out;
}
#tableDataIcons i:hover{
  font-size: 1.25em;
}
.table-container {
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-top: 5em;
  border-radius: 15px;
}

.transactions-table {
  width: 80%;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.transactions-table th,
.transactions-table td {
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
}

.transactions-table th {
  background-color: #6c63ff;
  font-size: 20px;
  font-weight: bold;
  color: white;
}

.transactions-table td {
  font-size: 14px;
  font-weight: bold;
}

.transactions-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.transactions-table tr:hover {
  background-color: #f1f1f1;
}
</style>