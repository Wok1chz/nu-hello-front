<script setup>
    import { useCommonStore } from '~/store/common';

    const commonStore = useCommonStore();
</script>
<template>
    <div>
        <span v-if="1==1">PROFILE</span>
        <span v-else>PHOTO</span>
    </div>
</template>