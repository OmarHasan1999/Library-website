<template>
    <div class="program-page" id="books">
    <div class="program-section">
                <span>برنامج تلفزيوني</span>
                <h2>العقل والإيمان</h2>
                <hr />

    <div class="program-intro">
            <p>
                برنامج تلفزيوني أسبوعي أذاعته التلفزيون المصري، جمع فيه الدكتور مصطفى محمود بين العلم والإيمان في حوار هادئ ومعمّق — يطرح أسئلة الوجود الكبرى بأسلوب يصل إلى كل عقل وكل قلب
            </p>
            <a class="all-episodes-link" href="https://www.youtube.com/watch?v=0VyYrtc5sUg&list=PLf9dSQvwDWn_HPr-zwWDY3VBEp7d0bIy0" target="_blank">
                مشاهدة جميع الحلقات
                <span class="arrow">←</span>
            </a>
    </div>
        
    <div class="program-layout">

        <div class="programCarts">
            <div class="cart programAnimation" v-for="episode in episodes" :key="episode.id">
                <div class="program-cover">
                    <img :src="`https://i.ytimg.com/vi/${getVideoId(episode.link)}/hqdefault.jpg`" 
                    :alt="episode.title" />
                    <div class="play-btn">
                        <div class="play-icon"></div>
                    </div>
                </div>
                    <div class="dev">
                        <h3 class="ep-title">{{ episode.title }}</h3>
                    <div class="watch-episode">
                    <a class="ep-watch" :href="episode.link" target="_blank">مشاهدة</a>
                    <p>١٩٧٣</p>
                    </div>
                </div>
            </div>

        </div>

        </div>

    </div>

    </div>
</template>

<script setup>
import { booksStore } from '../../store/store';
import { storeToRefs } from 'pinia';
import { onMounted, onUnmounted} from 'vue';
import ScrollReveal from 'scrollreveal';

const books_store = booksStore()
const { episodes } = storeToRefs(books_store)
const { getEpisodes } = books_store

const getVideoId = (url) => {
    try {
        const params = new URLSearchParams(new URL(url).search)
        return params.get('v')
    } catch {
        return ''
    }
}

onMounted(() => {
    getEpisodes()

    setTimeout(() => {
        ScrollReveal().reveal('.programAnimation', {
            duration: 900,
            distance: '30px',
            origin: 'bottom',
            delay: 100,
            easing: 'ease',
            reset: false,
            interval: 100
        })
    }, 100)
})

onUnmounted(() => {
})
</script>

<style lang="css">
.program-page{
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 100vh;
        padding: 4rem 35px;
        background-color: #faf8f3;
    }
.program-section{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        width: 100%;
}

.program-section span{
        font-size: 12px;
        color: #8b6914;
        letter-spacing: 2px;
        margin-bottom: 0.5rem;
        font-family: sans-serif;
}
.program-section h2{
        font-size: 20px;
        font-weight: 500;
        color: #2c2418;
        margin-bottom: 0.4rem;

}
.program-section hr{
        width: 40px;
        height: 1px;
        background: #d4a843;
        border: none;
        outline: none;
        margin-bottom: 1.7rem;
}

.program-intro {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 2rem;
    gap: 0.8rem;
}

.program-intro p {
    font-size: 13px;
    color: #4a3c28;
    line-height: 2;
    text-align: right;
    max-width: 600px;
}


.all-episodes-link {
    font-size: 12px;
    color: #8b6914;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;
    border-bottom: 0.5px solid #d4a843;
    padding-bottom: 2px;
    transition: opacity 0.2s;
}

.all-episodes-link:hover {
    opacity: 0.7;
}

.all-episodes-link .arrow {
    font-size: 14px;
    transition: transform 0.2s;
}

.all-episodes-link:hover .arrow {
    transform: translateX(-4px);
}

.program-layout{
    width: 100%;
    display: flex;
    align-items: flex-start;
}

.programCarts{
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-wrap: wrap;
    width: 100%;
    gap: 1rem;
    }
.programCarts .cart{
    width: 240px;
    height: 180px;
    border: 0.5px solid #e8e0d0;
    border-radius: 8px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: 0.6s ease;
}
.programCarts .cart:hover{
    border-color: #8b6914;
}
.programCarts .cart:hover .cover-overlay {
    opacity: 1;
}

.program-cover{
    position: relative;
    overflow: hidden;
    background: #2c2418;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60%;
}

.program-cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
}
.programCarts .cart:hover .program-cover img {
    transform: scale(1.05);
}

.program-cover .play-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(212, 168, 67, 0.6);;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
    pointer-events: none;
}

.programCarts .cart:hover .play-btn {
    transform: translate(-50%, -50%) scale(1.1);
}

.program-cover .play-icon{
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-left: 12px solid #fff;
    margin-right: -3px;
}

.programCarts .cart .dev{
    padding: 0.44rem 0.75rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    height: 40%;
}

.programCarts .cart h3{
    font-size: 11px;
    color: #2c2418;
    font-weight: 500;
    margin-bottom: 0px;
}


.programCarts .cart p{
    font-size: 11px;
    color: #a09080;
    font-family: sans-serif;

}

.programCarts .watch-episode{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 5px;
    padding-top: 5px;
    border-top: 0.5px solid #f0e8d8;
}
.programCarts .watch-episode a{
    font-size: 9px;
    color: #8b6914;
    background-color: #faf0d8;
    padding: 2px 8px;
    border-radius: 12px;
    border: 0.5px solid #d4a843;
    cursor: pointer;
    text-decoration: none;
}

</style>