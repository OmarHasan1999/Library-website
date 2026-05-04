import db from "../data/db.json";

import { defineStore } from "pinia";

export const booksStore = defineStore("booksStore", {
    state: () => ({
        allBooks:[],
        books:[],
        counter: 4,
        quotes:[],
        quotesCounter:2,
        categories:[
            { title: "مقالات" },
            { title: "كتب فكرية" },
            { title: "روايات" },
            { title: "قصص قصيرة" },
            { title: "مسرحيات" },
            { title: "أدب الرحلات" },
        ],
        allCategoryBooks:[],
        booksCategory:[],
        categoryCounter : 4,
        selectedCategory: "",
        allEpisodes:[],
        episodes:[],
    }),

    actions: {
        getBooks(){
            this.allBooks = db.books
            this.books = this.allBooks.slice(0,this.counter)
            this.quotes = this.allBooks.slice(0,this.quotesCounter)
        },
        addBooks(){
            this.counter +=4
            this.books = this.allBooks.slice(0,this.counter)
        },
        addQuotes(){
            this.quotesCounter +=2
            this.quotes = this.allBooks.slice(0,this.quotesCounter)
        },
        // show category section with the name of the category
        booksWithCat(cat){
            this.selectedCategory = cat
            this.categoryCounter = 4 // reset when click on category
            this.allCategoryBooks = db.books.filter(book => book.cat === cat)
                this.booksCategory = this.allCategoryBooks.slice(0,this.categoryCounter)
        },
        addCategory(){
            this.categoryCounter += 4
            this.booksCategory = this.allCategoryBooks.slice(0,this.categoryCounter)
        },

        getEpisodes(){
            this.allEpisodes = db.episodes
            this.episodes = this.allEpisodes.slice(0,this.counter)
        }
    }

})