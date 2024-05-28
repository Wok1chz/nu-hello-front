<script lang="ts" setup>
    const modelValue = defineModel()

</script>
<template>
    <div>
        {{ modelValue }}
        <input 
            v-model="modelValue"
        />
    </div>
</template>