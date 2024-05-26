<script lang="ts" setup>

    // import { useCommonStore } from '~/store/common';
    // const commonStore = useCommonStore();
</script>

<template>
    <div class="default">
        <AppHeader />
        <div class="main">
            <slot />
        </div>
    </div>
</template>

<style scoped lang="scss">
    .default {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
</style>../components/AppHeader.vue