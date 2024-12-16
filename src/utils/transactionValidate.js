import { ref, computed, watch } from 'vue';

export default function amountValidate(type = 'buy', amountAvailable) {
  const amountInput = ref('');
  const isValid = ref(null);

  const regexRules = {
    buy: /^(?!0\d)(\d+(\.\d+)?|0\.\d+)$/,
    pay: /^(?!0\d)\d+(\.\d{1,2})?$/               
  };

  const inputClass = computed(() => {
    if (isValid.value === null) {
      return 'form-control';
    }
    return isValid.value ? 'form-control is-valid' : 'form-control is-invalid';
  });

  watch(amountInput, (value) => {
    if (value === '') {
      isValid.value = null;
    }
    else{
      const numericRegex = regexRules[type];

      if(!numericRegex){
        console.error(`Tipo de validación desconocido: ${type}`);
        isValid.value = false;
        return;
      }

      const regexValid = numericRegex.test(value);

      if (amountAvailable.value != null) {
        const numericValue = parseFloat(value);
        const availableAmountt = amountAvailable.value;
        isValid.value = regexValid && numericValue > 0 && numericValue <= availableAmountt;
      } else {
        isValid.value = regexValid && parseFloat(value) > 0;
      }

    }
  });

  return {
    amountInput,
    inputClass,
    isValid
  };
}