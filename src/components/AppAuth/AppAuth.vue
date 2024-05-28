<script lang="ts" setup>
    import { ref } from 'vue';
    const email = ref('');
</script>
<template>
    <div class="index">
        <CommonInput 
            v-model="email"
        />
    </div>
</template>
<style scoped lang="scss">

    .index {
        box-sizing: border-box;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        width: 100%;
    }
</style>