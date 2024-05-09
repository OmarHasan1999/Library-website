 <template lang="">
    <div class="booksMain">

        <div class="containerBook">

        <div v-for="item in different" :key="item.id" class="booksNames"
             @click="goToDetailPage( item.title,item.img,item.pageNum,item.year,item.size,item.cat,item.file,item.overView )">
            <div class="starsBooks">
                   <span>{{ item.stars }}</span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
            </div>
            <div class="booksImg"><img :src="item.img"></div>
            <p>{{ item.title }}</p>

        </div>

      <button class="loadMore" @click="loadMore" v-show="showButton">Daha Fazla Yükle</button>
      <button class="loadMore" @click="loadMoreTwo" v-show="showButtonTwo">Daha Fazla Yükle</button>
      <button class="loadMore" @click="loadMoreThree" v-show="showButtonThree">Daha Fazla Yükle</button>
      <button class="loadMore" @click="loadMoreFour" v-show="showButtonFour">Daha Fazla Yükle</button>
      <button class="loadMore" @click="loadMoreFive" v-show="showButtonFive">Daha Fazla Yükle</button>
      <button class="loadMore" @click="loadMoreSix" v-show="showButtonSix">Daha Fazla Yükle</button>
    </div>

    </div>

    
</template>
<script>
import booksData from "../../data/books.json"

export default {
    data() {
        return {
            booksInfo : booksData,
            showButton: true,
            showButtonTwo:false,
            showButtonThree:false,
            showButtonFour:false,
            showButtonFive:false,
            showButtonSix:false,
            visibleBook:28
        }
    },
    methods: {
         goToDetailPage(title,img,pageNum,year,size,cat,file,overView){
            this.$router.push({
            name:'detailPage',
            params:{title,img,pageNum,year,size,cat,file,overView}

        })
           
    },
    
    loadMore(){
        this.showButton = false
        this.$emit("showDiv")
        this.visibleBook += 12
        this.showButtonTwo=true
    },
    loadMoreTwo(){
        this.showButtonTwo= false
        this.$emit("showDivTwo")
        this.visibleBook += 12,
        this.showButtonThree = true
    },
    loadMoreThree(){
        this.showButtonThree = false
        this.$emit("showDivThree")
        this.visibleBook += 8
        this.showButtonFour = true
    },
    loadMoreFour(){
        this.showButtonFour = false
        this.$emit("showDivFour")
        this.visibleBook += 8
        this.showButtonFive = true
    },
    loadMoreFive(){
        this.showButtonFive = false
        this.$emit("showDivFive")
        this.visibleBook += 8
        this.showButtonSix = true
    },
    loadMoreSix(){
        this.showButtonSix = false
        this.$emit("showDivSix")
        this.visibleBook += 5
    }
    },

    computed:{
        // Farklı kitapları rastgele sıralayarak döndüren hesaplanmış özellik
        different(){
            const newArray = [...this.booksInfo.books].sort(() => Math.random() - 0.4)
            return newArray.slice(0,this.visibleBook)
        }
    }
 
}
</script>
<style lang="">
    
</style>



