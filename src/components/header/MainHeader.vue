<template>
    
    <header class="main fade-up">
        <nav>
            <a href="#about">عن الكاتب</a>
            <a href="#quotes">الاقتباسات</a>
            <a href="#books">الكتب</a>
            <a href="#main">الرئيسية</a>
        </nav>

        <h3 class="logo"><span>مصطفى <em>محمود</em></span></h3>

    </header>

</template>

<script>
  
</script>
<style lang="css">

.main { 
        display: flex;
        background-color: white;
        width: 100%;
        justify-content: space-between;
        padding: 25px 35px;
        align-items: center;
        }

.logo { 
    font-size: 23px; 
    font-weight: 600;
    color: rgba(0, 0, 0, 0.413); 
}

nav{
    display: flex;
    align-items: center;
    gap: 1.8rem;
}
nav a  { 
    display: inline-block;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500; 
    color: #5a4a35;
    cursor: pointer;
    letter-spacing: 0.3px;
}  
.logo span{
        font-size: 20px;
        font-weight: 500;
        color: #2c2418;
        letter-spacing: 0.5px;
}
.main em{
    color: #8b6914;
}

</style>
    
    






    




