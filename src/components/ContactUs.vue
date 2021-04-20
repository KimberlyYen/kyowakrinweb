<template>
    <div class="News">
        <div class="str-outer">
            <div class="str-inner">
                <dl class="mod-list-description">

                    <h1 class="hdg-lv1-02">連絡我們</h1>
                    <h1 class="hdg-lv1-03">台灣協和麒麟股份有份公司</h1>
                    
                    <h3 class="hdg-lv3-01">電話</h3>
                    <p>(02)2564-2800</p>
                
                    <h3 class="hdg-lv3-01">傳真</h3>
                    <p>(02)2560-1667</p>
                
                    <h3 class="hdg-lv3-01">辦公室地址</h3>
                    <p>10448台北市中山區中山北路二段68號9樓</p>
                    <p>9F., No.68, Sec. 2, Chung Shan North Road, Taipei 10448, Taiwan</p>
                    <p>若您對我們公司的產品或網站有任何疑問，請點擊下面的按鈕，在您填寫完並送出諮詢表單後，我們將儘速回覆給您。</p>
            
                </dl>
            </div>
          <button @click="GotoMail()" class="button_1">點擊此處連結至諮詢表單</button>
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
      name: 'ContactUs',
      data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
      },
      methods:{
        GotoMail(){
        location.href = 'https://faq.kirin.co.jp/form/kkc_18_cn.html#_ga=2.267408327.85928623.1616483882-769985277.1576133350'
        },
        Click_Title2(index){
        this.$emit('Click_Title_trigger', { index: index.index });
        },
        Click_Title(index){
        this.$emit('Click_Title_trigger', { index: index });
        },
      },
    }
    </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  /*computer*/
  
  *{
    font-family: Arial, sans-serif;
  }
  .expand{
    height:12.5px;
    width:12.5px;
    transform:rotate(45deg);
    border-right:1px solid black;
    border-bottom:1px solid black;
  }
  
  .mod-list-description{
    text-justify:inter-ideograph
  }
  
  h1,h2,h3,h4 {
    font-weight: 600;
    margin-bottom: 18px;
  }
  
  .hdg-lv1-02 {
    font-weight: bold;
    font-size: 4.8rem;
    line-height: 1.125;
    margin-top: 55px;
    margin-bottom: 42px;
    color: #ea5504;
  }
  
  .hdg-lv1-03 {
    font-weight: bold;
    font-size: 4rem;
    line-height: 1.5;
    margin-top: 55px;
    color: #000000; 
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
    color:#5D6164;
    font-size: 1.8rem;
  }
  
  .News {
    height:100vh;
    padding-top: 52px;
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
  }
  .str-inner {
    max-width: 1000px;
    margin: 0 auto;
  }

  .button_1 {
    font-family: "Microsoft JhengHei", "sans-serif";
    font-size: calc(3.5rem/2);
    letter-spacing:0.1vw;
    border: none;
    background-color: #ea5504;
    font-weight: 400;
    color: white;
    margin-top: 6vh;
    margin-bottom: 3vh;
    border-radius: 30px;
    width: 100%;
    max-width: 415px;
    padding: calc(35px/2);
    transition: background-color .4s;
    box-shadow: none;
  }

  .button_1:hover {
    background-color: #FCCAAD;
    color: #ea5504;
    text-decoration: underline;
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
      .str-outer {
          text-align: justify;
          text-justify:inter-ideograph;
          position: relative;
          min-height: 250px;
          padding-right: calc(46px/2);
          padding-left: calc(46px/2);
      }
      .hdg-lv1-03 {
          max-width: 220px;
      }
    }
  
  </style>
  