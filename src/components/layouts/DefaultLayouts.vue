<template>
  <div style="display: flex;flex-direction: column;min-height: 100vh;">

    <MobileLinks class="mobile"/>
    <MobileHeader  class="mobile"/>
    <MainHeader class="desktop"/>

    <main>
    <slot></slot>
    </main>
    
    <MainFooters/>

  </div>
</template>
<script setup>
import MainHeader from '../header/MainHeader.vue';
import MainFooters from '../footers/MainFooters.vue';
import MobileHeader from '../header/MobileHeader.vue';
import MobileLinks from '../header/MobileNav.vue';

</script>
<style lang="css">
    .desktop {
    display: flex;
}
    .mobile {
    display: none;
}

@media (max-width: 1024px) {
    .mobile {
        display: flex;
    }
    .desktop {
        display: none;
    }
}
</style>