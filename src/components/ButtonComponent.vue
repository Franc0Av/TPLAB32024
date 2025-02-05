<template>
    <button 
        @click="handleClick"
        :class="btnClass" 
        type="submit"
        :disabled="isLoading || disabled"
    >
    <span v-if="isLoading" class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
    {{ text }}
    </button>
</template>

<script>
import { ref } from 'vue';

export default{
    name: 'BtnComponent',
    props: {
        text: String,
        btnClass: String,
        onClick: {
            type: Function,
            required: false
        },
        disabled: {
            type: Boolean,
            default: false,
            required: false
        },
    },
    emits: ['click'],
    setup(props, { emit }) {
        const isLoading = ref(false);

        const handleClick = async () => {
            if (isLoading.value || props.disabled) return;

            isLoading.value = true;

            try {
                emit('click');
                await new Promise(resolve => setTimeout(resolve, 1000));
            } catch (error) {
                console.error('Error durante el clic:', error);
            } finally {
                isLoading.value = false;
            }
        };

        return{
            isLoading,
            handleClick
        } 
            
    }
};

</script>