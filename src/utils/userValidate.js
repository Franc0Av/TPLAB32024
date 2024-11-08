import { ref, computed, watch } from 'vue';

export default function useUserInput() {
  const userInput = ref('');
  const isValid = ref(null);

  const inputClass = computed(() => {
    if (isValid.value === null) {
      return 'form-control';
    }
    return isValid.value ? 'form-control is-valid' : 'form-control is-invalid';
  });

  watch(userInput, (value) => {
    if (value === '') {
      isValid.value = null;
    }
    else{
      const alphanumericRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9._]+$/;
      isValid.value = alphanumericRegex.test(value) && value.length >= 5;
    }
  });

  return {
    userInput,
    inputClass,
    isValid,
  };
}
