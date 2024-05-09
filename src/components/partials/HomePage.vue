<template>
    
  
        <div class="backImg">
        <div class="parInput">
          <p>Merak, aktif bir zihnin kalıcı ve kesin özelliklerinden biridir</p>
          
           <!-- Arama girişi -->
           <div class="searchInput">
              <!-- Arama simgesi -->
              <span @click="search"><i class="fa-solid fa-magnifying-glass"></i></span>
              <!-- Arama metni girişi -->
            <input v-model="searchValue" type="text" placeholder="Bir kitap bul">
           </div>
           
           <!-- Filtrelenmiş kitapların listesi -->
           <div v-for="item in filterBook" :key="item.id" @click="goDetailPage(item)">
           <!-- Her bir kitap için ayrıntıları görüntülemek için tıklanabilir -->
           </div>


        </div>
        </div>

        <div class="textIndro">
                
                <div>
                   <hr class="hrOne"> <span class="nokta">...</span> <hr class="hrTwo">
                </div>
              <div>
                <p>
                        Kitapları sevmiyorum çünkü hayatta çileciyim ama kitapları seviyorum çünkü bir hayat bana yetmiyor.
                        Bir insan ne yerse yesin...
                         Birden fazla mideyle yemek yemez, ne giyerse giysin, tek beden üzerine giyilir.
                        Ve ne kadar hareket ederse etsin
                        Ülkede iki yerde kalamayacak. Ama düşünceyi ve duyguyu arttırdı
                        Hayal gücü, yaşamları tek bir yaşamda bir araya getirebilir, düşünce ve duyguları çoğaltabilir.
                        Ve karşılıklı sevgi duygusu ikiye katlandıkça hayal gücü de ikiye katlanır ve iki ayna arasındaki görüntü iki katına çıkar.
                </p>
              </div>

              <div>
                   <hr class="hrThree"> <span class="noktaTwo">...</span> <hr class="hrFour">
              </div>

        </div>

        <navPage/>
        <div class="mainPages">
        <div class="mainReview">
        <main-page class="review"></main-page>
        <books-section @showDiv = "showDiv" @showDivTwo="showDivTwo" @showDivThree="showDivThree"
        @showDivFour="showDivFour" @showDivFive="showDivFive" @showDivSix="showDivSix"/>
        </div>
        </div>
        <div class="complete" v-show="showComplete"></div>
        <div class="complete" v-show="showCompleteTwo"></div>
        <div class="completeCre" v-show="showCompleteThree"></div>
        <div class="completeCre" v-show="showCompleteFour"></div>
        <div class="completeCre" v-show="showCompleteFive"></div>
        <div class="completeEnd" v-show="showCompleteSix"></div>


</template>
   
<script>
import navPage from '../../components/HomePartials/navPage.vue'
import mainPage from '../../components/HomePartials/mainPage.vue'
import booksSection from '../sectionsPages/booksSection.vue';



import booksData from "../../data/books.json"

export default {
        components: {navPage,mainPage,booksSection},
        data() {
                return {
                        // Arama değeri
                        searchValue : "",
                        // Tüm kitap bilgileri
                        booksInfo : booksData,
                        showComplete:false,
                        showCompleteTwo:false,
                        showCompleteThree:false,
                        showCompleteFour:false,
                        showCompleteFive:false,
                        showCompleteSix:false,
                }
        },
        computed:{
                // Arama sonucuna göre filtrelenmiş kitapları döndüren hesaplanmış özellik
                filterBook(){
                        const newSearch = this.searchValue.toLowerCase().trim();
                        if(!newSearch){
                                // Arama değeri yoksa tüm kitapları döndür
                                return this.booksInfo.books
                        }else{
                                // Arama değeri varsa, kitap başlıklarında eşleşen kitapları filtrele
                                return this.booksInfo.books.filter(book => 
                                book.title.toLowerCase().includes(newSearch))
                        }
                }
        },
        methods: {
                // Detay sayfasına gitmek için kitabın ayrıntılarına tıklama
                goDetailPage(book){
                this.$router.push({
                        name: "detailPage",
                        params: { ...book}
                                })
                        },
                // Arama işlemi
                search(){
                        const theSearch = this.searchValue.toLowerCase().trim();
                        if(theSearch){
                        // Arama değeri varsa, kitap başlıklarında eşleşen ilk kitabı bul
                          const foundBook = this.booksInfo.books.find(book => 
                                book.title.toLowerCase().includes(theSearch))
                        
                           if(foundBook){
                                // Bulunan kitabın detay sayfasına git
                                this.goDetailPage(foundBook)

                           }else{
                           // Sonuç bulunamadıysa konsola bir mesaj yaz
                           console.log("no result");
                           }
                }
                },
                
                showDiv(){
                        this.showComplete = true
                },
                showDivTwo(){
                        this.showCompleteTwo = true
                },
                showDivThree(){
                        this.showCompleteThree = true
                },
                showDivFour(){
                        this.showCompleteFour = true
                },
                showDivFive(){
                        this.showCompleteFive = true
                },
                showDivSix(){
                        this.showCompleteSix = true
                }
                },
}

</script>

<style>

</style>
