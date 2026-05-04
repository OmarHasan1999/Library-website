<template>
  
    <footer class="footer-page">

        <h4>مصطفى محمود</h4>
        <p>مكتبة رقمية تضم كامل أعمال الدكتور مصطفى محمود — فيلسوف وطبيب وكاتب مصري</p>
        <div class="footerLink">
            <span>in</span>
            <span>x</span>
            <span>f</span>
        </div>
        <span class="copyRights">جميع الحقوق محفوظة ©</span>
        
    </footer>

</template>


<script>


</script>

<style lang="css">
.footer-page{ 
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #2c2418;
        padding: 2.5rem 2rem;
        text-align: center;
}

.footer-page h4{
    font-size: 16px;
    color: #f5f0e8;
    font-weight: 500;
    margin-bottom: 0.5rem;
  
}
footer p{
    font-size: 12px;
    color: #8b7a5e;
    max-width: 400px;
    margin: 0 auto 1.5rem;
    line-height: 1.8;
}

.footerLink{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.footerLink span{
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 0.5px solid rgba(139, 105, 20, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #d4a843;
    font-size: 11px;
    cursor: pointer;
}

.copyRights {
    font-size: 11px;
    color: #a08c6e;
}



</style>