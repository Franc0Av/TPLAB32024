<template>
    <div ref="toastElement" :class="`toast align-items-center border-0 position-fixed bottom-0 end-0 m-3 text-bg-${toastType}`" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body">
          {{ toastMessage }}
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.bundle.min.js';
  import bootstrapBundle from 'bootstrap/dist/js/bootstrap.bundle';
  
  export default {
    name: 'SuccessToast',
    props: {
        toastType: {
            type: String,
            default: 'success'
        },
        toastMessage: String
    },
    setup() {
      const toastElement = ref(null);
  
      const showToast = () => {
        const myToast = new bootstrapBundle.Toast(toastElement.value);
        myToast.show();
      };
  
      return {
        toastElement,
        showToast
      };
    }
  };
  </script>
  
  <style scoped>
  </style>