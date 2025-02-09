<template>
    <section v-if="!begin" id="welcomeView" class="d-flex justify-content-between align-items-center mt-5 h-100">
      <div class="mt-5 w-25">
        <img src="../../assets/nakamoto.svg" alt="bitcoin-graphic">
      </div>
      <div>
        <div class="transactionText">
            <div>
              <h1 id="title1">
                En esta sección podes comenzar a invertir tu dinero.
                Dale click al botón y adentrate en el mundo crypto!
              </h1>
            </div>
            <div>
              <ButtonComponent @click="handleBegin" text="Empezar a tradear" id="btn-custom" btn-class="btn btn-lg h-100 w-50 fs-2 fw-bold"/>
            </div>
        </div>
      </div>
    </section>
    <div v-if="begin" class="transactions-box">
      <div class="d-flex justify-content-center align-items-center mb-5">
        <div class="toogleBox">
          <span @click="updateActions" class="toogle" :class="{active: transactionType === 'Compra'}" id="buyToogle" data-type="Compra">Compra</span>
          <span @click="updateActions" class="toogle" :class="{active: transactionType === 'Venta'}" id="sellToogle" data-type="Venta">Venta</span>
        </div>
      </div>
      <FormComponent :transactionType="transactionType" actionTitle="Nueva Compra" v-if="purchase" />
      <FormComponent :transactionType="transactionType" actionTitle="Nueva Venta" v-else-if="sale" />
    </div>
</template>

<script>
import FormComponent from '@/components/FormComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

export default {
  components: {
    FormComponent,
    ButtonComponent
  },
  data() {
    return {
      transactionType: "",
      begin: false,
      purchase: false,
      sale: false,
      actions: [
        {name: "Compra"},
        {name: "Venta"}
      ],
    };
  },
  // watch: {
  //   transactionType: "updateActions"
  // },
  methods: {
    updateActions(event){

      this.transactionType = event.target.dataset.type;

      if(this.transactionType == "Compra"){
        this.purchase = true
        this.sale = false
      }
      else if(this.transactionType === "Venta"){
        this.sale = true
        this.purchase = false
      }

      // this.$emit('selected-action', this.transactionType)
    },
    handleBegin(){
      this.begin = true;
    }
  }
};
</script>

<style>
.transactionText{
  display: flex;
  flex-direction: column;
  height: 70vh;
  width: 50vw;
  gap: 8em;
}
#welcomeView{
  animation: fadeInUp 1s ease-out;
}
#title1{
  text-wrap: wrap;
  align-items: self-start;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
}
.transactions-box{
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 5em;
    background-image: url('../../assets/ether.svg'), url('../../assets/crypto-flower.svg');
    background-repeat: no-repeat;
    background-position: bottom left, bottom right;
    background-size: 40% 85%, 40% 50%;
    animation: fadeInUp 1s ease-out;
}
.input-box{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    gap: 2em;
    width: 20%;
    height: 70vh;
}
input{
    width: 10%;
}
.toogleBox{
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(133, 90, 250, 0.5);
  border-radius: 15px;
  width: 20%;
  height: 5vh;
}
.toogle{
  border-radius: 15px;
  width: 48%;
  height: 4vh;
  cursor: pointer;
  align-content: center;
  animation: fadeInUp 1s ease-out;
}
.toogle:hover{
  background-color: #9f99ff;
  color: white;
}
.toogle.active{
    background-color: #6c63ff;
    color: white;
    cursor: pointer;
}
#buyToogle{
  border-right: 1px solid black;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
#sellToogle{
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>

