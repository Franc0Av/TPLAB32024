<template>
    <button 
        @click="handleClick" 
        :class="btnClass" 
        type="submit"
        :disabled="isLoading"
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
            required: false, // Esto permite que sea opcional.
        },
        disabled: {
            type: Boolean,
            default: false
        },
    },
    emits: ['click'],
    setup(_, { emit }) {
        const isLoading = ref(false);

        const handleClick = async () => {
            if (isLoading.value) return;

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
            
    },
    // methods: {
    //     async handleClick() {
    //         if (!this.disabled && typeof this.onClick === 'function') {
    //             //this.onClick();
    //             this.isLoading = true;
    //             console.log('isloadin', this.isLoading)
    //             //await this.onClick();
    //             try {
    //                 await this.onClick();
    //             } finally {
    //                 setTimeout(() => {
    //                     this.isLoading = false;
    //                 }, 1000);
    //             }
    //         }
    //     }
    // }
};

</script>