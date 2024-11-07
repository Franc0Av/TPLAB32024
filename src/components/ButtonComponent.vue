<template>
    <button @click="handleClick" :class="btnClass" type="submit">{{ text }}</button>
</template>

<script>

export default{
    name: 'BtnComponent',
    props: {
        text: String,
        btnClass: String,
        onClick: Function

    },
    methods: {
        handleClick() {
            if (typeof this.onClick === 'function') {
                this.onClick();
            }
        }
    }
};

</script>