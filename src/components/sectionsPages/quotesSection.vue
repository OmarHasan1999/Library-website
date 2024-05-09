<template lang="">
    

    <div class="mainQuotesSection">

    <div class="containerQuotes">

    <div class="quotesSection" id="quotesHash" v-for="item in infoQuotes.headersPars.slice(0,visibleQuote)" :key="item.id">
        <p>{{ item.par  }}</p> 
        <hr class="hrQuo"> 
        <div class="bookQuote">
            <h7>{{ item.header }}</h7><i class="fa-solid fa-book" id="quo"></i>
        </div>

        <div class="likeQuote">
            <i class="fa fa-thumbs-down" @click="toggleDis(item)">
            <span>{{ item.disLikeNum }}</span></i>
            <i class="fa-solid fa-thumbs-up" @click="toggleLike(item)">
            <span>{{ item.likeNum }}</span></i>
        </div>
        
    </div>

         </div>


    </div>
    
    <button class="arrow" v-show="showButton" @click="scroll">
    <span><i class="fa-solid fa-arrow-up"></i></span></button>



</template>
<script>
import quotesData from '../../data/quotes.json'
export default {
    data() {
        return {
            infoQuotes : quotesData,
            disLike:false,
            Like:false,
            visibleQuote : 23,
            showButton:false
            
        }
    },
    methods: {
         toggleDis(item){
            if(item.disLike){
                item.disLikeNum--
            }else{
                item.disLikeNum++
                
            }
             item.disLike = !item.disLike  
                  
         },
         toggleLike(item){
            if(item.Like){
                item.likeNum--   
            }else{
                item.likeNum++  
            }
            item.Like = !item.Like  
         },  
         scroll(){
            window.scrollTo(0,490)
         }

    },
    mounted() {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 4060 ){
                 this.$emit("showDiv")
                 this.visibleQuote = 38
                this.infoQuotes.headersPars.slice(0,this.visibleQuote)
            }
            if((window.scrollY > 6620)){
                this.$emit("showDivTwo")
                this.visibleQuote = 52
                this.infoQuotes.headersPars.slice(0,this.visibleQuote)
                this.showButton = true
            }
            if((window.scrollY > 9040)){
                this.$emit("showDivThree")
                this.visibleQuote = 65
                this.infoQuotes.headersPars.slice(0,this.visibleQuote)
            }
            if((window.scrollY > 11200)){
                this.$emit("showDivFour")
                this.visibleQuote = 80
                this.infoQuotes.headersPars.slice(0,this.visibleQuote)
            }
            if((window.scrollY > 13700)){
                this.$emit("showDivFive")
                this.visibleQuote = 95
                this.infoQuotes.headersPars.slice(0,this.visibleQuote)
            }
            if((window.scrollY > 16220)){
                this.$emit("showDivSix")
                this.visibleQuote = 104
                this.infoQuotes.headersPars.slice(0,this.visibleQuote)
                console.log("object");
            }
            if(window.scrollY < 4060){
                this.showButton = false
            }
            if(window.scrollY > 18300){
                this.showButton = false
            }

        })
    },
    
    
}
</script>
<style lang="">
    
</style>


