<template>
    <div class="books-page" id="books">
    <div class="books-section">
                <span>المكتبة</span>
                <h2>الكتب</h2>
                <hr />

        <div class="books-layout">

        <div class="projectsCarts">
            <div class="cart booksAnimation" v-for="(theBooks,i) in showBooks" :key="i">
                <div class="book-cover">
                    <img :src="theBooks.img" alt="image of the book" loading="lazy">
                    <div class="cover-overlay">
                        <button class="detail-button" @click="openCard(theBooks)">عرض التفاصيل</button>
                    </div>
                </div>
                    <div class="dev">
                        <h3>{{ theBooks.title }}</h3>
                        <span>{{ theBooks.cat }}</span>
                    <div class="download-book">
                    <a :href="theBooks.file" download>تحميل</a>
                    <p>{{ theBooks.pageNum }} صفحة</p>
                    </div>
                </div>
            </div>

        </div>

        <!-- categories side bar -->
        <div class="categories-sideBar">
            <div class="cat-label">الفئات</div>
            <div v-for="cat in categories" :key="cat.title">
                <span class="cat-item" @click="showCategory(cat.title)">{{ cat.title }}</span>
            </div>

        </div>

        </div>

    </div>

    <div class="load-more" v-if="selectedCategory ? categoryCounter < allCategoryBooks.length : counter < allBooks.length">
        <button @click="addMore">عرض المزيد من الكتب</button>
    </div>

    </div>
</template>

<script setup>
import { booksStore } from '../../store/store';
import { storeToRefs } from 'pinia';
import { onMounted, onUnmounted, inject, computed} from 'vue';
import ScrollReveal from 'scrollreveal';

const emitter = inject('Emitter');
const openCard = (image) => {
    emitter.emit('openCard', image);
}

const books_store = booksStore()
const { allBooks, books, counter, categories, allCategoryBooks, booksCategory, selectedCategory, categoryCounter } = storeToRefs(books_store)
const { getBooks, addBooks, booksWithCat, addCategory } = books_store

const addMore = () => {
    if(selectedCategory.value){
        addCategory()
    }else{
        addBooks()
    }

    setTimeout(() => {
        ScrollReveal().reveal('.booksAnimation', {
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

const showCategory = (cat) => {
    booksWithCat(cat)
}

const showBooks = computed(() => {
    return booksCategory.value.length > 0
    ? booksCategory.value
    : books.value
})

onMounted(() => {
    getBooks()
})

onUnmounted(() => {
})

</script>
<style lang="css">
.books-page{
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 100vh;
        padding: 4rem 35px;
        background-color: #faf8f3;
    }
.books-section{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        width: 100%;
        overflow: visible;
}

.books-section span{
        font-size: 12px;
        color: #8b6914;
        letter-spacing: 2px;
        margin-bottom: 0.5rem;
        font-family: sans-serif;
}
.books-section h2{
        font-size: 20px;
        font-weight: 500;
        color: #2c2418;
        margin-bottom: 0.4rem;

}
.books-section hr{
        width: 40px;
        height: 1px;
        background: #d4a843;
        border: none;
        outline: none;
        margin-bottom: 2rem;
}

.books-layout{
    width: 100%;
    display: flex;
    align-items: flex-start;
    overflow: visible;
}

.projectsCarts{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    gap: 1rem;
    transition: 0.6s ease;
    }
.projectsCarts .cart{
    width: 250px;
    height: 250px;
    border: 0.5px solid #e8e0d0;
    border-radius: 8px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: 0.6s ease;
}
.projectsCarts .cart:hover{
    border-color: #8b6914;
}
.projectsCarts .cart:hover .cover-overlay {
    opacity: 1;
}

.book-cover{
    position: relative;
    overflow: hidden;
    background: #f5f0e8;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 140px;
}

.book-cover img{
    max-width: 100%;
    width: 100%;
    height: 140px;
    object-position: center top;
    border-bottom: 0.5px solid #e8e0d0;
    object-fit:fill;
    display: block;
}

.cover-overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(44, 36, 24, 0.55);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.detail-button {
    font-size: 11px;
    padding: 6px 14px;
    border-radius: 20px;
    background: rgba(255,255,255,0.15);
    border: 0.5px solid rgba(255,255,255,0.6);
    color: #fff;
    cursor: pointer;
}

.projectsCarts .cart .dev{
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
}

.projectsCarts .cart h3{
    font-size: 12px;
    color: #2c2418;
    font-weight: 500;
    margin-bottom: 4px;
    line-height: 1.4;
}
.projectsCarts .cart span{
    font-size: 10px;
    color: #8b7a5e;
    font-family: sans-serif;
}

.projectsCarts .cart p{
    font-size: 13px;
    color: #a09080;
    font-family: sans-serif;

}

.download-book{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    width: 100%;
    margin-top: 8px;
    padding-top: 8px;
    border-top: 0.5px solid #f0e8d8;
}
.download-book a{
    font-size: 10px;
    color: #8b6914;
    background-color: #faf0d8;
    padding: 3px 8px;
    border-radius: 12px;
    border: 0.5px solid #d4a843;
    cursor: pointer;
    text-decoration: none;
}


.load-more{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    margin-right: 5rem;
    text-align: center;
}
.load-more button{
    border: 1px solid rgba(0, 0, 0, 0.708);
    border-radius: 20px;
    padding: 8px 2rem;
    background: transparent;
    color: #2c2418;
    cursor: pointer;
    font-size: 12px;
    font-family: sans-serif;
}

.categories-sideBar{
    max-width: 60%;
    width: 80px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    align-self: flex-start;
    direction: rtl;
}
.cat-label{
    font-size: 9px;
    color: #b0a090;
    letter-spacing: 1px;
    margin-bottom: 0.7rem;
    text-align: right;
    width: 100%;
}
.cat-item{
    width: 100%;
    width: 75px;
    height: 28px;
    white-space: nowrap;
    flex-shrink: 0;
    border-radius: 6px;
    font-size: 11px;
    color: #5a4a35;
    cursor: pointer;
    border: 0.5px solid #e8e0d0;
    background: #eeeaea;
    transition: all 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0rem;
    text-align: center;
}

.cat-item:hover {
    border-color: #d4a843;
    color: #8b6914;
    background: #faf0d8;
}

.cat-item span{
    padding-top: 0.5rem;
    width: 45px;
    height: 45px;
    text-align: center;
}

/* media query */
@media (max-width:768px) {
    .books-layout{
        flex-direction: column-reverse;
    }
    .categories-sideBar{
        width: 100%;
        max-width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        row-gap: 0rem;
        column-gap: 0.6rem;
        overflow-x: auto;
        overflow-y: visible;
        position: static;
        margin-bottom: 0.7rem;
        padding-bottom: 0.5rem;
    }
    .projectsCarts{
        justify-content: flex-end;
    }
    .cat-label {
        width: 100%;
        margin-bottom: 0.4rem;
    }
    .projectsCarts .cart {
        height: auto;
    }
    .load-more{
        justify-content: flex-end;
        margin-right: 0;
    }
}

@media (max-width: 400px) {
    .load-more button{
    border: 1px solid #2c2418;
    border-radius: 20px;
    padding: 6px 1rem;
}
}

</style>