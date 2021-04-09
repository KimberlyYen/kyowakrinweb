<template>
  <body>
    <div class="str-outer">
      <div class="main-content-type-only">
        <h1 class="hdg-lv1-02">隱私條款</h1>
        <p class="mb-5">台灣協和麒麟股份有限公司(下稱「KKTW」)將依下列內容，保護您的隱私與個人資料。</p>
        
        <h3 class="hdg-lv3-01">1. 收集與使用個人資料</h3>
        <h4 class="hdg-lv4-01">(1) 個人資料</h4>
        <p>個人資料是指可以直接或間接方式辨識您個人的資料，例如姓名、生日、住址、身份證字號、電話號碼、e-mail、相片或聲訊檔。</p>
    
        <h4 class="hdg-lv4-01">(2) 個人資料的蒐集、處理及利用</h4>
        <p>KKTW可能會要求您提供個人資料，以回覆您的諮詢。KKTW將事前告知您蒐集個人資料之目的，並依該目的進行蒐集、處理及利用您的個人資料。您可以拒絕提供個人資料，惟KKTW在無個人資料之情況下，可能將無法順利提供某些服務。</p>
        
        <h3 class="hdg-lv3-01">2. 個人資料的揭露</h3>
        <p>除非取得您的同意，KKTW絕對不向第三方提供您的個人資料，惟當法院、主管機關、政府或其他行政機關要求、或依其他相關法令KKTW得進行揭露時，KKTW可能提供您的個人資料給第三人。</p>
    
        <h3 class="hdg-lv3-01">3. 連結第三方網站</h3>
        <p>當您自本網站連結到第三方網站，並提供個人資料時，若因此造成任何損失、費用等，KKTW無承擔相關責任之義務，請您連結到第三方網站時，詳細閱讀該網站的隱私政策聲明。</p>
    
        <h3 class="hdg-lv3-01">4. 隱私條款的修改</h3>
        <p>為了更有效地保護個人資料，或更符合相關法律規定，KKTW可能會修改部分隱私政策規定，此等修改都將提示於本網站上。</p>
      </div>
    </div>
    <Footer-bg></Footer-bg>    
  </body>
</template>
  
<script>
  import Footer from './Footer'
  export default {
    components: {
      'Footer-bg':Footer
    },
    name: 'sitemap',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
  
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>        

  /* All */
  .str-outer   {
    height:100vh;
  }
  .main-content-type-only {
    font-family: Arial;
    text-align:left;
    margin: 0 auto;
    max-width: 980px;
    padding-top: 52px;
    padding-bottom: 100px;
  }

  h1,h2,h3,h4 {
    font-weight: 600;
    margin-bottom: 18px;
  }

  .hdg-lv1-02 {
    font-size: 4.8rem;
    line-height: 1.125;
    margin-top: 55px;
    margin-bottom: 42px;
    color: #ea5504;
  }

  .hdg-lv3-01 {
    font-size: 2.5rem;
    color: #ea5504;
  }

  .hdg-lv4-01 {
    font-size: 2rem;
    color: #5D6164;
    margin-left: 2vw;
  }

  p {
    color:#a5a5a5;
    font-size: 1.8rem;
    margin-left: 4%;
    margin-bottom: 3%;
  }

  /*computer*/
  @media (min-width: 769px) {

  }

  /*mobile*/
  @media (min-width: 320px) and (max-width:768px) {
    .str-outer {
      height:100vh;
    }
    
    .main-content-type-only {
      position: relative;
      min-height: 250px;
      padding-right: calc(46px/2);
      padding-left: calc(46px/2);
    }
  }
</style>