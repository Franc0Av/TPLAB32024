<template>
    <button 
        @click="handleClick" 
        :class="btnClass" 
        type="submit"
        :disabled="disabled"
    >
    {{ text }}
    </button>
</template>

<script>

export default{
    name: 'BtnComponent',
    props: {
        text: String,
        btnClass: String,
        onClick: Function,
        disabled: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        handleClick() {
            if (!this.disabled && typeof this.onClick === 'function') {
                this.onClick();
            }
        }
    }
};

</script>