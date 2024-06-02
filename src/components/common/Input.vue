<script setup lang="ts">
    const modelValue = defineModel();
    defineProps({
            title: String
        });

</script>
<template>
    <div 
        :class="['input', {
            'without-title:': !title
        }]"
    >
        <div class="input_wrapper">
            <label 
                v-if="title"
                :class="['input__title']"
            >
                {{ title }}
            </label>
            <input 
            v-model="modelValue"
            class="input__input"
        />            
        </div>    

    </div>
</template>
<style scoped lang="scss">
    .input {
        position: relative;

        &__wrapper {
            position: relative;
        }

        &__title {
            font-size: 12px;
            line-height: 16px;
            color: #D94C40;
            margin: 0;
            position: absolute;
            top: 5px;
            left: 16px;
        }

        &__input {
            font-size: 16px;
            color: black;
            background-color: #FBF7DE;
            line-height: 22px;
            border-radius: 8px;
            padding: 21px 40px 5px 16px;
            border:none;
            cursor: pointer;
            outline: none;
            box-sizing: border-box;
            border: 1px solid transparent;
        }
    }
</style>