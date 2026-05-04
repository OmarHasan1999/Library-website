<template>
    <header class="nav-mobile">
        <div class="hamburger" @click="openMobileNav">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <h3><span>مصطفى <em>محمود</em></span></h3>
    </header>
</template>
<script setup>
import { inject } from 'vue';

const emitter = inject('Emitter');
const openMobileNav = () => {
    emitter.emit('openMobileNav');
};
</script>
<style lang="css">
    .nav-mobile{
        display: flex;
        background-color: white;
        width: 100%;
        justify-content: space-between;
        padding: 25px 35px;
        align-items: center;
    }
    .nav-mobile h3{
        font-size: 23px; 
        font-weight: 600;
        color: rgba(0, 0, 0, 0.413); 
    }
    .nav-mobile span{
        font-size: 20px;
        font-weight: 500;
        color: #2c2418;
        letter-spacing: 0.5px;
}
    .nav-mobile em{
        color: #8b6914;
}
    .hamburger{
        display: flex;
        flex-direction: column;
        gap: 4px;
        cursor: pointer;
        padding: 4px;
    }
    .hamburger span {
        width: 20px;
        height: 1.5px;
        background: #5a4a35;
        border-radius: 2px;
        display: block;
    }
</style>