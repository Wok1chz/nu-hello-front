<script lang="ts" setup>
    import { ref } from 'vue';
    const email = ref('');
    const password = ref('');

</script>
<template>
    <div class="index">
        <div>
            <img
                class="index__img" 
                src="@/assets/images/auth.jpg"
            />
        </div>
        <div class="index__input">
            <CommonInput 
                v-model="email"
                :title="'Логин'"
            />
            <CommonInput 
                v-model="password"
                :title="'Пароль'"
            />

        </div>
    </div>
</template>
<style scoped lang="scss">

    .index {
        box-sizing: border-box;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        column-gap: 16px;
        width: 100%;
        align-items: center;

        &__img {
            width: 600px;
            height: 600px;
        }

        &__input {
            display: flex;
            flex-direction: column;
            row-gap: 12px
        }
    }
</style>