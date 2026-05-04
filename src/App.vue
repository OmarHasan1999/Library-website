<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
  <RouterView />
</template>

<style>


nav a.router-link-exact-active {
  color: #601cfc;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Noto Naskh Arabic', serif;
}
html,body{
    overflow-x: hidden;
    width: 100%;
    min-height: 100vh;
}

@keyframes fadeUp {
    from {
        opacity: 0;
        /* transform: translateY(30px); */
    }
    to {
        opacity: 1;
        /* transform: translateY(0); */
    }
}

.fade-up {
    animation: fadeUp 1.1s ease forwards;
}

.fade-up-delay-1 { animation-delay: 0.1s; }
.fade-up-delay-2 { animation-delay: 0.2s; }
.fade-up-delay-3 { animation-delay: 0.3s; }


</style>
