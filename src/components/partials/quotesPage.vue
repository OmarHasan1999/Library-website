<template>

    <div>
        <div class="navPage"><h3>Mustafa Mahmud’un kitaplarından alıntılar</h3></div>

        <navPage/>
        <div class="mainPages">
        <div class="mainReview">
            <main-page class="review"></main-page>
            <quotes-section @showDiv="showDiv" @showDivTwo="showDivTwo" @showDivThree="showDivThree"
            @showDivFour="showDivFour" @showDivFive="showDivFive" @showDivSix="showDivSix"/> 
        </div>
       
        </div>
        <div class="completeQuotes"></div>
        <div class="completeQuotesOne" v-show="showQuote"></div>
        <div class="completeQuotesTwo" v-show="showQuoteTwo"></div>
        <div class="completeQuotesThree" v-show="showQuoteThree"></div>
        <div class="completeQuotesFour" v-show="showQuoteFour"></div>
        <div class="completeQuotesFive" v-show="showQuoteFive"></div>
        <div class="completeQuotesSix" v-show="showQuoteSix"></div>
        
    </div>

</template>
<script>
import mainPage from '../HomePartials/mainPage.vue';
import navPage from '../HomePartials/navPage.vue';
import quotesSection from '../sectionsPages/quotesSection.vue';

export default{
    components:{mainPage,navPage, quotesSection },
    data() {
        return {
            
            showQuote : false,
            showQuoteTwo: false,
            showQuoteThree:false,
            showQuoteFour:false,
            showQuoteFive:false,
            showQuoteSix:false,
        }
    },
    methods: {
        showDiv(){
            this.showQuote = true
        },
        showDivTwo(){
            this.showQuoteTwo = true
        },
        showDivThree(){
            this.showQuoteThree = true
        },
        showDivFour(){
            this.showQuoteFour = true
        },
        showDivFive(){
            this.showQuoteFive = true
        },
        showDivSix(){
            this.showQuoteSix = true
        },
    },
}


</script>
<style lang="">
    
</style>