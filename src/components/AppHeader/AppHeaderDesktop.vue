<script setup>

</script>
<template>
    <div class="header">
        <div class="container">
            <div class="header-content">
                <img 
                src="@/assets/svg/logo.svg"
                />
                <AppHeaderProfile
                />
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@import '@/assets/css/common';
    .header-content {
        min-height: 48px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 8px;
        border-bottom: 1px solid #D0D0D0;
    }
    img {
        width: 48px;
        height: 48px;
    }
</style>