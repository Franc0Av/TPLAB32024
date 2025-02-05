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
          :placeholder="placeholder"
          :readonly="readonly"
          required
          />
        </div>
      </div>
    </div>
  </template>

<script>
import { ref, watch } from 'vue';
import amountValidate from '@/utils/transactionValidate';

export default {
  name: 'InputComponent',
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String
    },
    placeholder: {
      type: String
    },
    availableAmount: {
      type: Number
    }
  },
  setup(props, { emit }) {

    const availableAmountRef = ref(props.availableAmount);

    const { amountInput, inputClass, isValid } = amountValidate(props.type, availableAmountRef);

    watch(
      () => props.modelValue,
      (newVal) => {
        if (newVal !== amountInput.value) {
          amountInput.value = newVal ?? '';
        }
      }
    );

    watch(amountInput, (newVal) => {
      emit('update:modelValue', newVal);
    });

    // watch(isValid, (newVal) => {
    //   emit('validityChanged', newVal);
    // });

    watch(amountInput, (newVal) => {
      emit('inputChanged', newVal);
    });

    watch(
      () => props.availableAmount,
      (newVal) => {
        availableAmountRef.value = newVal;
      }
    );

    return {
      amountInput,
      inputClass,
      isValid
    };
  },
};
</script>