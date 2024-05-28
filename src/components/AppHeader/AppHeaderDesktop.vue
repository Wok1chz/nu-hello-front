<script lang="ts" setup>

</script>
<template>
    <div class="header">
        <div class="container">
            <div class="header-content">
                
                <div class="main_name">
                    <img 
                    src="@/assets/svg/logo.svg"
                    />
                    Ну... Хэллоу</div>
                <AppHeaderProfile
                />
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@import '@/assets/css/variables.scss';
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
    .main_name {
        color: $default-red;
        font-size: 28px;
        font-weight: 700;
        font-style: oblique
    }
</style>