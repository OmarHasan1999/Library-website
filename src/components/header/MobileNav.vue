<template>
    <Teleport to="body">
    <div class="mobile-links" :class="{open:mobileLinks}">
        <div class="top-bar">
            <h3><span>مصطفى <em>محمود</em></span></h3>
            <span class="close-icon" @click="mobileLinks=false">&#x2715;</span>
        </div>
        <div class="mobile-menu">
            <a @click="closeDrawer" href="#about">عن الكاتب</a>
            <a @click="closeDrawer" href="#quotes">الاقتباسات</a>
            <a @click="closeDrawer" href="#books">الكتب</a>
            <a @click="closeDrawer" href="#main">الرئيسية</a>
        </div>
        <div class="mobile-menu-footer">
            <div class="mobile-menu-icons">f</div>
            <div class="mobile-menu-icons">t</div>
            <div class="mobile-menu-icons">in</div>
        </div>
    </div>
    </Teleport>
</template>
<script setup>
defineOptions({
    inheritAttrs: false
})

import { ref, inject, onMounted, onUnmounted, watch } from 'vue';

const mobileLinks = ref(false)
const emitter = inject('Emitter');

const closeDrawer = () => {
    mobileLinks.value = false
}

// for close the drawer when width > 1024px
const handleResize = () => {
    if (window.innerWidth > 1024) {
        mobileLinks.value = false
    }
}

onMounted(() => {
            emitter.on('openMobileNav', () => {
            mobileLinks.value = true;
        });
            
        // event for set window resize (set width of the screen)
            window.addEventListener("resize", handleResize)
    });

onUnmounted(() => {
    window.removeEventListener("resize", handleResize)
}),

watch(mobileLinks, (open) => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    if (open) {
        document.documentElement.style.overflow = 'hidden'
        document.documentElement.style.paddingRight = scrollbarWidth + 'px'
        document.getElementById('app').style.opacity = '0.8'
        document.getElementById('app').style.transition = 'opacity .2s cubic-bezier(.4, 0, .2, 1)'
        document.getElementById('app').style.pointerEvents = 'none'
    } else {
        document.documentElement.style.overflow = ''
        document.documentElement.style.paddingRight = ''
        document.getElementById('app').style.opacity = '1'
        document.getElementById('app').style.pointerEvents = ''
    }
})
</script>
<style lang="css">
    .mobile-links{
        width: min(280px,100%);
        height: 100%;
        background-color: #fff;
        border-radius: 0;
        border-left: 0.5px solid #e8e0d0;
        overflow-y: auto;
        position: fixed;
        top: 0;
        right: -280px;
        z-index:1000;
        transition: right 0.3s ease;
        overflow: hidden;
        direction: rtl;
    }
    .mobile-links.open{
        right: 0;
    }
    .mobile-links .top-bar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.2rem;
    border-bottom: 0.5px solid #f5ede0;
    }
    .top-bar .close-icon{
    font-size: 16px;
    color: #c8b8a0;
    cursor: pointer;
    }
    .top-bar h3{
    font-size: 23px; 
    font-weight: 600;
    color: rgba(0, 0, 0, 0.413); 
    }
    .top-bar h3 span{
    font-size: 20px;
    font-weight: 500;
    color: #2c2418;
    letter-spacing: 0.5px;
}
    .top-bar h3 em{
    color: #8b6914;
}

    .mobile-menu{
        padding: 0.8rem 0;
    }
    .mobile-menu a{
    display: block;
    padding: 0.8rem 1.5rem;
    font-size: 13px;
    text-decoration: none;
    border-bottom: 0.5px solid #faf0e8;
    color: #5a4a35;
    }
    .mobile-menu a.active{
    color: #8b6914;
    background: #faf8f3;
    }
    .mobile-menu-footer{
    padding: 0.8rem 1.5rem;
    display: flex;
    gap: 0.8rem;
    }
    .mobile-menu-footer .mobile-menu-icons{
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 0.5px solid #e8d8b8;
        font-size: 10px;
        color: #8b6914;
    }
</style>