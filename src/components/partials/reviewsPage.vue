
<template lang="">
    
    <div>
        <div class="navPage"><h3>Mustafa Mahmud'un kitaplarına ilişkin incelemeler</h3></div>
        <navPage/>
        
        <div class="mainPages">
        <div class="mainReview">
            <main-page class="review"></main-page>
            <reviews-section  @showDiv="showDiv" @showDivTwo="showDivTwo" @showDivThree="showDivThree"/>
        </div>
        
        </div>
        <div class="reviewsComplete"></div>
        <div class="reviewsCompleteOne" v-show="completeOne"></div>
        <div class="reviewsCompleteTwo" v-show="completeTwo"></div>
        <div class="reviewsCompleteThree" v-show="completeThree"></div>
        
    </div>
</template>
<script>

import mainPage from '../HomePartials/mainPage.vue';
import navPage from '../HomePartials/navPage.vue';
import reviewsSection from '../sectionsPages/reviewsSection.vue';

export default {
    components:{
    mainPage,navPage,reviewsSection
    },
    data() {
        return {
            completeOne:false,
            completeTwo:false,
            completeThree:false,
        }
    },
    methods: {
        showDiv(){
            this.completeOne = true
        },
        showDivTwo(){
            this.completeTwo = true
        },
        showDivThree(){
            this.completeThree = true
        }
    },
}


</script>
<style lang="">
    
</style>