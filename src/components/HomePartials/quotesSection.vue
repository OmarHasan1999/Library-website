<template>
    
    <div class="quotes-page" id="quotes">
        <span>أقوال مأثورة</span>
        <h2>الاقتباسات</h2>
        <hr />

        <div class="quotesCarts">
            <div class="cart quotesAnimation" v-for="(quote,i) in quotes" :key="i">
                <div class="dev">
                        <p>{{ quote.quotes }}</p>
                        <div class="quotes-source">
                            {{ quote.header }}
                            <span class="quotes-dot"></span>
                        </div>
                </div>

            </div>
        </div>
        <card-drawer/>

        <div class="read-more" v-if="quotesCounter < allBooks.length">
            <button @click="addMoreQuotes">قراءة المزيد</button>
        </div>
    </div>
</template>

<script setup>
import cardDrawer from '../partials/card-drawer.vue';
import { booksStore } from '../../store/store';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import ScrollReveal from 'scrollreveal';


const books_store = booksStore()
const { quotes, quotesCounter, allBooks } = storeToRefs(books_store)
const { getBooks, addQuotes } = books_store

const addMoreQuotes = () => {
    addQuotes()

    setTimeout(() => {
        ScrollReveal().reveal('.quotesAnimation', {
            duration: 900,
            distance: '30px',
            origin: 'bottom',
            delay: 100,
            easing: 'ease',
            reset: false,
            interval: 100
        })
    }, 100)
}

onMounted(() => {
    getBooks()
})

</script>
<style lang="css">
.quotes-page{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        min-height: 100vh;
        padding: 4rem 35px;
        align-items: flex-end;
        justify-content: flex-end;
    }
.quotes-page span{
        font-size: 12px;
        color: #8b6914;
        letter-spacing: 2px;
        margin-bottom: 0.5rem;
}
.quotes-page h2{
        font-size: 20px;
        font-weight: 500;
        color: #2c2418;
        margin-bottom: 0.4rem;
        
}
.quotes-page hr{
        width: 40px;
        height: 1px;
        background-color: #d4a843;
        margin-bottom: 2rem;
        border: none;
        outline: none;
}
.quotesCarts{
    display: flex;
    justify-content: end;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    gap: 1rem;
    }
.quotesCarts .cart{
    width: 100%;
    min-height: 120px;
    height: auto;
    background-color:#f5f4f2f6 ;
    border: 0.5px solid #e8e0d0;
    border-radius: 8px;
    border-right: 3px solid #d4a843;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 0;

}
.quotesCarts .cart .dev{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
}
.quotesCarts .cart p{
    font-size: clamp(12px, 2vw, 17px);
    font-weight: 500;
    color: #3a2e1e;
    line-height: 2;
    font-style: italic;
    margin-bottom: 0.6rem;
    text-align: right;
}


.quotes-source {
    font-size: 11px;
    color: #8b6914;
    font-family: sans-serif;
    display: flex;
    align-items: center;
    gap: 6px;
}
.quotes-source span{
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #d4a843;
    display: inline-block;
    margin-top: 7px;
}
.read-more{
    display: flex;
    margin-top: 1.5rem;
    text-align: center;
}
.read-more button{
    border: 1px solid rgba(0, 0, 0, 0.819);
    border-radius: 20px;
    padding: 5px 1.7rem;
    background: transparent;
    cursor: pointer;
    font-size: 12px;
    /* font-family:cursive; */
    font-weight: 600;
    text-align: center;
    color: #1b1916;
}
</style>