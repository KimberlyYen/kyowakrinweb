<template>
    <div class="News">
      <div class="str-outer">
        <div class="str-inner">
          <dl class="mod-list-description">
  
            <h1 class="hdg-lv1-02">法律聲明</h1>
            <p class="intro_p">本網站係由台灣協和麒麟股份有份公司（以下將簡稱為「KKTW」）建置及管理。</p>
            <p class="intro_p">於使用本網站資訊前，請先仔細閱讀下列相關使用條款，在您瀏覽、使用本網站時，即表示您同意並接受本法律聲明。</p>
          
            <h3 class="hdg-lv3-01">1. 著作權與商標</h3>
            <p>本網站上所有的內容(文件、照片、插圖、圖片、圖表、影片、音訊檔與程式等)皆為KKTW所有或經合法授權，並受著作權、商標權或相關法律所保護。在未得到KKTW同意前，擅自使用本網站的內容為法律所禁止。此外，如您欲使用本網站的全部或部份內容，進行重製或出版於雜誌、書本、印刷品、網頁、CD或其他儲存媒體前，應先向KKTW取得書面同意。</p>
      
            <h3 class="hdg-lv3-01">2. 網站連結</h3>
            <p>KKTW不保證從本網站連結，或與本網站建立連結之第三方網站所取得之內容，且對該等第三方網站連結所造成的任何損失，KKTW一概不負擔任何責任。請您於使用第三方網站的資料前，務必仔細閱讀該第三方網站的法律聲明。
                若您需要連結本網站至其他網站，請您連絡KKTW，並提供連結網站的主題、連結的目的、連結網頁URL，並取得KKTW的書面許可。
                請勿使用KKTW的商標於連結網站上，KKTW對該連結網站內容不負任何法律責任。
                </p>
        
            <h3 class="hdg-lv3-01">3. 未承諾事項</h3>
            <p>本網站所提供之所有資料僅供學術參考，KKTW不就相關資料之準確性及完整性，承擔任何擔保責任，亦不做任何相關的聲明、承諾或保證。
                KKTW有權隨時更正或刪除本網站上的資訊，並可能因相關合理理由及其他不可抗力事由，中止或不繼續相關資訊的發佈。
                KKTW並未承諾因本網站資訊的修正、中止或不繼續所造成的任何問題、損失或損害負擔任何責任。
                </p>
        
            <h3 class="hdg-lv3-01">4. 隱私聲明</h3>
            <p>KKTW將依本網站上公佈的隱私條款來保護使用者。</p>
  
            <h3 class="hdg-lv3-01">5. 使用者提問</h3>
            <p>KKTW並無必須回覆e-mail或本網頁表單詢問之義務。
                請勿傳送機密資訊，因為利用e-mail傳送的內容、選項或建議，可能沒有經過加密處理。KKTW無法對此類機密資訊負責。
                </p>

          </dl>
        </div>
      </div>
      <Footer-bg style="background-color:white" @Click_Title_trigger="Click_Title2"></Footer-bg>
    </div>
  </template>
  
  <script>
    import Footer from './Footer'
    export default {
      components: {
        'Footer-bg':Footer
      },
      name: 'law',
      data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
      },
      methods:{
        Click_Title2(index){
        this.$emit('Click_Title_trigger', { index: index.index });
        },
        Click_Title(index){
        this.$emit('Click_Title_trigger', { index: index });
        },
      }
    }
    </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  /*computer*/
  
  * {
    font-family: Arial, sans-serif;
    text-justify:inter-ideograph;
  }
  .expand{
    height:12.5px;
    width:12.5px;
    transform:rotate(45deg);
    border-right:1px solid black;
    border-bottom:1px solid black;
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
    margin-top: 3vh;
    color: #ea5504;
  }
  
  .hdg-lv4-01 {
    font-size: 2rem;
    color: #5D6164;
    margin-top: 3.5vh;
    margin-bottom: 2vh;
    margin-left: 2vw;
  }
  
  .intro_p {
    color:#a5a5a5;
    font-size: 1.8rem;
    margin-left: 0%;
    margin-bottom: 3%;
  }
  
  p {
    color:#a5a5a5;
    font-size: 1.8rem;
    margin-left: 4%;
    margin-bottom: 3%;
  }
  
  .News {
    height:100vh;
    padding-top: 60px;
  }  
  .inner {
    z-index:-100;
    position: relative;
    min-height: 250px;
    background-color: #fef3ed;
  }
  .arrow {
    font-weight: bold;
    color: #ea5504;
  }
  .mod-heading-l1 {
    text-align: center;
    max-width: 980px;
    width: 100%;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
  .title {
    top: 50%;
    right: 50%;
    width: 100%;
    font-size: 5rem;
    font-weight: bold;
    text-align: center;
    color: #ea5504;
  }
  .str-outer {
    margin-top: 100px;
    padding-bottom: 100px;
  }
  .str-inner {
    max-width: 1000px;
    margin: 0 auto;
  }
  .mod-list-description {
    text-align: left;
    line-height: 1.8;    
  }
  dt {
    font-size: 2rem;
    color: #ea5504;
  }
  dd {
    font-size: 1.8rem;
    }
  .news-a {
    color: #5D6164;
  }
  .showMore {
    font-weight: 7
    
    
    00;
    font-size: 1.8rem;
    text-align: center;
    padding: 5% 5% 0% 5%;
  }
  
  /*mobile*/
    @media (min-width: 320px) and (max-width:768px) {
      * {
        text-justify:inter-ideograph;
      }
      .str-outer {
        position: relative;
        min-height: 250px;
        padding-right: calc(46px/2);
        padding-left: calc(46px/2);
      }
    }
  
  </style>
  