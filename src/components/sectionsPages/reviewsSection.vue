 <template lang="">
    
        
        <div class="reviewsSection" ref="refReview">

          <div class="containerReviews">
              <div class="contentReviews" v-for="item in infoReviews.reviews.slice(0,reviewsVisibility)" :key="item.id">
                <div class="headReview"><p>{{ item.title }}</p><i class="fa-solid fa-book"></i>
                </div>
                <div class="ReviewText">
                    <h5>{{ item.name }}</h5>
                    <h4>( <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> Kitaba dair incelemem )</h4>
                    <p class="reviewPar">{{ item.par }}</p>
                    <img :src="item.img">
                    <p class="dateReview">{{ item.date }}</p>
                </div>
                <hr class="hrReviews">
              </div>

          </div>
        </div>

    
</template>
<script>
import reviewsData from "../../data/reviews.json"
export default {
    data() {
      return {
        infoReviews : reviewsData,
        reviewsVisibility:13,  
      }
    },
    mounted() {
      window.addEventListener("scroll", () => {
        if(window.scrollY > 3300){
          const ref = this.$refs.refReview
          ref.style.height = "740vh"
          this.$emit("showDiv")
          this.reviewsVisibility = 18
          this.infoReviews.reviews.slice(0,this.reviewsVisibility)

        }
        if(window.scrollY > 4500){
          const ref = this.$refs.refReview
          ref.style.height = "940vh"
          this.$emit("showDivTwo")
          this.reviewsVisibility = 23
          this.infoReviews.reviews.slice(0,this.reviewsVisibility)
        }
        if(window.scrollY > 5700){
          const ref = this.$refs.refReview
          ref.style.height = "1170vh"
          this.$emit("showDivThree")
          this.reviewsVisibility = 29
          this.infoReviews.reviews.slice(0,this.reviewsVisibility)
        }
        
      })
    },
    
  

}
</script>
<style lang="">
    
</style>


