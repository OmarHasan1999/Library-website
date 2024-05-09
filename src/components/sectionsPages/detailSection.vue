  <template lang="">
    <div class="detailSec">
        
        <div class="detailCon">
            <hr class="headerHrOne" >
            <div class="headerIcon">
                <i class="fa-brands fa-facebook-f" id="headerIconOne"></i>
                <i class="fa-brands fa-twitter" id="headerIconTwo"></i>
            </div>
            <hr class="headerHrTwo">
            <hr class="headerHrThree">
            <div class="headerBook">
                <div><p>{{ $route.params.title }}</p><span> / </span><p>{{ $route.params.cat }}</p> <span> / </span> <p><router-link to="/" class="homeBack">Ana Sayfa</router-link></p></div>
            </div>
            <h3> {{ $route.params.title }} Kitabi indir</h3><br>
            <hr class="oneHrDetail">
            <hr class="hrDetail">
            <div class="detail">
                 <div class="detailBook">
                    <div class="one"><strong>{{ $route.params.year }}</strong><span>:</span><b>Yayınlanma yılı</b><i class="fa fa-calendar-days"></i></div>
                    <div class="one"><strong>{{ $route.params.pageNum }}</strong><span>:</span><b>Sayfa sayısı</b><i class="fa-solid fa-file-lines"></i></div>
                    <div class="one"><strong>{{ $route.params.size }}</strong><span>:</span><b>Dosya Boyutu</b><i class="fa-solid fa-file"></i></div>
                    <div class="one"><strong id="endKat">{{ $route.params.cat }}</strong><span id="dotEndCat">:</span><b id="theEndCat">Kategori</b><i class="fa-solid fa-list"></i></div>
                      
                </div>
                <div class="imgDetail">
                <img :src="$route.params.img">

                <div class="buttonDetail" @click="downloadFile">
                    <!-- Dosyayı indirme düğmesi -->
                    <button>Indir<span><i class="fa-solid fa-download"></i></span></button><br><br>
                    <!-- Dosya indirme bağlantısı -->
                    <a ref="link" style="display:none"></a>
                </div>

                </div>
                <div class="shareBook">
                    <p>: Kitabı paylaşın</p>
                    <div class="newLinks"><i class="fa-brands fa-whatsapp"></i>
                    <i class="fa-brands fa-twitter"></i><i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-solid fa-share-nodes"></i></div>
                </div>
            </div>

            <div class="bookDesc">
                   <hr class="hrDescOne">
                   <h6>Kitaba genel bakış</h6><br><br>
                   <hr class="hrDescOne"><br><br>
                   <p>{{ $route.params.overView }}</p>
            </div>

            
        </div>
        
        
    </div>
    <p class="Rights"><span>2023 © </span>CoffeeBook ..Tüm hakları saklıdır </p>
</template>


<script>
import allFile from "../../js/download"

export default {
    // Dosya detayları için props tanımı 
props:
['title','img','pageNum','year','size','cat','file','overView'],

methods: {
    // Dosyayı indirme metodu
    downloadFile() {
      // Dosya yolu
      // 'allFile' nesnesi, JSON dosyasından gelen tüm dosyaları içerir.
// 'this.file', detailSection bileşeninden gelen prop'tur ve indirilecek dosyanın adını temsil eder.
      const filePath = allFile[this.file]
      // Bağlantı referansı
      const link = this.$refs.link
      // Dosya yolu ve adını ayarla
      link.href = filePath;
      link.download = this.$route.params.title;
      // Bağlantıyı tetikle
      link.click();
    },
    
  },
 

}
</script>
<style lang="">
    
</style>

