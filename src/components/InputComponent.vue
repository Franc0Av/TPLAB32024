<template>
    <div class="d-flex justify-content-center w-full">
      <div class="d-flex flex-row align-items-center gap-2">
        <div>
          <i class="bi bi-person-fill-lock fs-1"></i>
          <label for="validationServer03" class="form-label"></label>
        </div>
        <div>
          <input
          type="text"
          v-model="userInput"
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
  import useUserInput from '@/utils/userValidate';

  export default {
    name: 'InputComponent',
    setup(props, { emit }) {
      const { userInput, inputClass, isValid } = useUserInput();

      watch(isValid, (newVal) => {
        emit('validityChanged', newVal);
      });

      return {
        userInput,
        inputClass,
        isValid,
      };
    },
  };
  </script>
  