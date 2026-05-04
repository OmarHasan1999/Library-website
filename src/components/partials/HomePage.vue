<template>
<div>
        <div class="home-page" id="main">
        <div class="left-section fade-up fade-up-delay-1">
                <div class="book-numbers">
                        <strong>٨١</strong>
                        <span>كتاباً</span>
                </div>
                <div class="book-numbers">
                        <strong>١٥٨</strong>
                        <span>اقتباساً</span>
                </div>
        </div>
        <div class="right-section fade-up fade-up-delay-1">
                <span>مكتبة رقمية · ١٩٢١ — ٢٠٠٩</span>
                <h1>مصطفى محمود<br>
                        فيلسوف وطبيب وكاتب
                </h1>
                <p>رحلة فكرية عبر ٨١ كتاباً تجمع بين العلم والفلسفة والروح — مكتبة رقمية كاملة لأعمال الدكتور مصطفى محمود</p>
        </div>
        
        </div>

        <div class="writer-about fade-up fade-up-delay-1" id="about">
                <span>من هو</span>
                <h3>عن الكاتب</h3>
                <hr />

                <div class="writer-info">
                        <div class="writer-paragraph">
                                <p>مصطفى محمود (١٩٢١ — ٢٠٠٩) فيلسوف وطبيب وكاتب مصري. درس الطب وتخصص في أمراض الرئة، لكنه كرّس نفسه للكتابة والبحث العلمي. يُعدّ من أبرز المفكرين العرب في القرن العشرين، جمع في كتاباته بين العلم والدين والفلسفة بأسلوب يسيل للقارئ العادي والمتخصص على حدٍّ سواء.</p>
                                <div class="writer-job">
                                        <span>طبيب وفيلسوف</span>
                                        <span>١٩٢١ — ٢٠٠٩</span>
                                        <span>٨١ كتاباً</span>
                                        <span>مصر</span>
                                </div>
                        </div>
                        <div class="writer-image">
                                <img src="/reviews-images/تنزيل.jpg" alt="image of the writer" loading="lazy">
                        </div>

                </div>
        </div>

        <booksSection/>
        <writerProgram/>
        <quotesSection/>

</div>
</template>

<script setup>
import booksSection from '../../components/HomePartials/booksSection.vue'
import quotesSection from '../../components/HomePartials/quotesSection.vue'
import writerProgram from '../HomePartials/writerProgram.vue';

</script>

<style lang="css">
.home-page{
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
        align-items: center;
        width: 100%;
        height: auto;
        padding: 4rem 35px;
        background-color:#2c2418;
        overflow: visible !important;
}
.home-page .right-section{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        max-width: 60%;
        width: 280px;
        flex: 1;
}
.home-page .right-section span{
        font-size: 12px;
        color: #d4a843;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: 1rem;
}
.home-page .right-section h1{
        font-size: 28px;
        font-weight: 400;
        color: #f5f0e8;
        line-height: 1.4;
        margin-bottom: 1rem;
        text-align: right;
}
.home-page .right-section p{
        font-size: 13px;
        color: #a08c6e;
        text-align: Right;
        max-width: 400px;
        line-height: 1.8;
}

.home-page .left-section{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        text-align: center;
        flex-shrink: 0;
}
.left-section .book-numbers{
        display: flex;
        align-items: center;
        flex-direction: column;
        border: 0.5px solid rgba(139, 105, 20, 0.3);
        border-radius: 8px;
        background-color: rgba(255, 255, 255, 0.05);
        padding: 1rem 1.5rem;
}

.book-numbers strong{
        font-size: 22px;
        color: #d4a843;
        font-weight: 500;
}
.book-numbers span{
        font-size: 11px;
        color: #c9a97a;
        margin-top: 4px;
}

.writer-about{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        padding: 3rem 35px;
        background-color: #fff;
}
.writer-about span{
        font-size: 12px;
        color: #8b6914;
        letter-spacing: 2px;
        margin-bottom: 0.5rem;
}
.writer-about h3{
        font-size: 20px;
        font-weight: 500;
        color: #2c2418;
        margin-bottom: 0.4rem;
        
}
.writer-about hr{
        width: 40px;
        height: 1px;
        background-color: #d4a843;
        border: none;
        outline: none;
        margin-bottom: 2rem;
}

.writer-info{
        width: 100%;
        min-height: 200px;
        display: flex;
        align-items: start;
        gap: 2rem;
}
.writer-info .writer-image{
        width: 140px;
        height: 150px;
        border-radius: 6px;
        color: #8b7a5e;
        border: 0.5px solid #d4c8a8;
}
.writer-info .writer-image img{
        width: 100%;
        height: 100%;
        border-radius: 3px;
}
.writer-info .writer-paragraph{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
}
.writer-paragraph p{
        font-size: 13px;
        color: #4a3c28;
        line-height: 2;
        text-align: right;
}
.writer-paragraph .writer-job{
        display: flex;
        flex-wrap: wrap;
        margin-top: 1.2rem;
        gap: 1.5rem;
}
.writer-job span{
        font-size: 11px;
        color: #8b6914;
        background-color: #faf0d8;
        padding: 4px 10px;
        border-radius: 20px;
        border: 0.5px solid #d4a843;
}

/* media query */
@media (max-width:768px) {
.home-page{
        flex-direction: column-reverse;
        align-items: flex-end;
        padding: 3rem 35px;
}
.home-page .right-section{
        max-width: 100%;
}
.home-page .left-section{
        width: 100%;
        flex-direction: row;
        justify-content: flex-end;
        margin-top: 2rem;
}
.left-section .book-numbers{
        width: 90px;
}

.writer-info{
        flex-direction: column-reverse;
        align-items: flex-end;
        height: auto;
        gap: 1rem;
}
.writer-info .writer-image{
        width: 150px !important;
        height: 140px;
}
.writer-info .writer-paragraph{
        width: 100%;
}
.writer-info .writer-job{
        gap: 0.8rem;
        direction:rtl;
}
}

@media (max-width:1024px) {
.writer-info .writer-image{
        width: 200px;
        }
}
</style>
