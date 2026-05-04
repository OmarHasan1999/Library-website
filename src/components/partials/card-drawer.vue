<template>
    <Teleport to="body">
    <div class="drawer" :class="{open:drawer}">
        <div class="head">
            <span class="close-drawer" @click="drawer=false">&#x2715;</span>
            <span class="head-title">تفاصيل الكتاب</span>
        </div>

        <div class="top">
            <div class="info">
                <strong>{{ bookData.title }}</strong>
                <span>{{ bookData.cat }}</span>
            </div>
            <div class="cover">
                <img :src="bookData.img" alt="image cover of the book" loading="lazy">
            </div>
            
        </div>

        <div class="detail-book">
            <div class="page-number">
                <span class="val">{{ bookData.pageNum }} صفحة</span>
                <span class="label">الصفحات</span>
            </div>
            <div class="file-size">
                <span class="val">{{ bookData.size }} ميغا</span>
                <span class="label">الحجم</span>
            </div>
        </div>

        <div class="over-view">
            <div class="label">نبذة عن الكتاب</div>
            <p class="text">{{ bookData.overView }}</p>
        </div>

        <a class="btn" :href="bookData.file" download>تحميل الكتاب</a>
    </div>
    </Teleport>
</template>

<script setup>
import { ref, inject, onMounted, watch } from 'vue';

const drawer = ref(false)
const bookData = ref("");
const emitter = inject('Emitter'); 

onMounted(() => {
    emitter.on('openCard', (data) => {
        bookData.value = data;
        drawer.value = true;
    });
})

watch(drawer, (open) => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    if (open) {
        document.documentElement.style.overflow = 'hidden'
        document.documentElement.style.paddingRight = scrollbarWidth + 'px'
        document.getElementById('app').style.opacity = '0.7'
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
    .drawer{
        width: min(280px,100%);
        height: 100%;
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 0;
        border-left: 0.5px solid #e8e0d0;
        overflow-y: auto;
        position: fixed;
        top: 0;
        right: -280px;
        z-index:1000;
        transition: right 0.3s ease;
        overflow: hidden;
    }
    .drawer.open{
        right: 0;
    }
    .drawer .head{
    padding: 1rem 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.5px solid #f0e8d8;
    }
    .head .head-title{
        font-size: 12px;
        color: #6b5a3e;
    }
    .head .close-drawer{
        font-size: 14px;
        color: #c8b8a0;
        cursor: pointer;
    }
    .drawer .top{
        padding: 1.2rem 1.2rem 0 1.2rem;
        margin: 0%;
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: flex-end;
    }
    .drawer .top .cover{
    width: 75px;
    height: 105px;
    border-radius: 4px;
    border: 0.5px solid #d4c8a8;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    color: #8b7a5e;
    }
    .drawer .top .cover img {
    width: 75px;
    height: 105px;
    object-fit: cover;
    border-radius: 4px;
}
    .drawer .top .info{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .info strong{
    font-size: 15px;
    font-weight: 500;
    color: #2c2418;
    margin-bottom: 5px;
    line-height: 1.3;
    }
    .info span{
    font-size: 9px;
    color: #8b6914;
    background: #faf0d8;
    padding: 2px 8px;
    border-radius: 8px;
    border: 0.5px solid #d4a843;
    display: inline-block;
    margin-bottom: 8px;
    text-align: center;
    }
    .detail-book{
    padding: 0;
    margin: 1rem 1.2rem 0 1.2rem;
    background: #faf8f3;
    border-radius: 6px;
    border: 0.5px solid #f0e8d8;
    overflow: hidden;
    }
    .detail-book .page-number{
    display: flex;
    justify-content: space-between;
    padding: 8px 0.8rem;
    border-bottom: 0.5px solid #f0e8d8;
    font-size: 11px;
    }
    .page-number .label, .file-size .label{
        color: #6b5a3e;
    }
    .page-number .val, .file-size .val{
        color: #2c2418;
        font-weight: 500;
    }
    .detail-book .file-size{
    display: flex;
    justify-content: space-between;
    padding: 8px 0.8rem;
    font-size: 11px;
    }
    .over-view{
        padding: 1rem 1.2rem;
    }
    .over-view .label{
            font-size: 9px;
            color: #b0a090;
            letter-spacing: 1px;
            margin-bottom: 6px;
            text-align: right;
    }
    .over-view .text{
        font-size: 11px;
        color: #5a4a35;
        line-height: 2;
        max-height: 10rem;
        overflow-y: auto;
        text-align: right;
        padding-left: 4px;
        scrollbar-width: thin;
        scrollbar-color: #d4a843 #f0e8d8;
    }


    .drawer .btn {
    margin: 0 1.2rem 1.2rem 1.2rem;
    width: calc(100% - 2.4rem);
    background: #2c2418;
    color: #f5f0e8;
    border: none;
    padding: 10px;
    border-radius: 6px;
    font-size: 12px;
    cursor: pointer;
    display: block;
    text-decoration: none;
    text-align: center;
    }
</style>