<script setup>
    import { useCommonStore } from '~/store/common';

    const commonStore = useCommonStore();
    const userName = 'Ахмед';
</script>
<template>
    <div class="profile">
        <div class="profile__circle"> 
            <img 
            class="profile__circle__img"
            src="@/assets/tmp/misha.jpg"
            />    
        </div>
        {{ userName }}
    </div>
</template>
<style scoped lang="scss">
    .profile {
        display: flex;
        align-items: center;
        
        &__circle {
            border: 2px solid #ae86f9; 
            background-color: #D0D0D0;
            justify-content: center;
            min-width: 36px; 
            min-height: 36px; 
            border-radius: 50%; 
            margin: 0px 10px; 
            display: flex; 
            vertical-align: top;

            &__img {
                border-radius: 50%; 
                width: 36px;
                height: 36px;
            }
        }

        &__modal-arrow {
        padding-left: 4px;
        width: 8px;
        height: 8px;
    }
    }
</style>