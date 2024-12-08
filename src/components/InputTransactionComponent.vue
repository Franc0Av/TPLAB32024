<template>
    <div class="d-flex justify-content-center w-full">
      <div class="d-flex flex-row align-items-center gap-2">
        <div>
          <label for="validationServer03" class="form-label"></label>
        </div>
        <div>
          <input
          type="text"
          v-model="amountInput"
          :class="inputClass"
          id="validationServer03"
          aria-describedby="validationServer03Feedback"
          required
          />
        </div>
      </div>
    </div>
  </template>

<script>
import { watch } from 'vue';
import amountValidate from '@/utils/transactionValidate';

export default {
  name: 'InputComponent',
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const { amountInput, inputClass, isValid } = amountValidate(props.type);

    watch(isValid, (newVal) => {
      emit('validityChanged', newVal);
    });

    watch(amountInput, (newVal) => {
      emit('inputChanged', newVal); // Emite el valor actual del input
    });

    return {
      amountInput,
      inputClass,
      isValid,
    };
  },
};
</script>