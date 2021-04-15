<template>
  <div class="News">
    <div class="str-outer">
      <div class="str-inner">
        <dl class="mod-list-description">

          <div>
            <h1 class="hdg-lv1-02">網站地圖</h1><br />
            <button @click="Click_Title(0)" class="hdg-lv2-01 btn" >首頁</button><br />
              <button @click="Click_Title(0)" class="btn_li">公司的理念</button><br />
              <button @click="Click_Title(0)" class="btn_li">專注的領域</button><br />
              <button @click="Click_Title(0)" class="btn_li">快速導覽</button><br />
            <button @click="Click_Title(1)" class="hdg-lv2-01 btn">關於我們</button><br />
              <button @click="Click_Title(1)" class="btn_li">公司目標</button><br />
              <button @click="Click_Title(1)" class="btn_li">我們的願景</button><br />
              <button @click="Click_Title(1)" class="btn_li">總經理的話</button><br />
            <button @click="Click_Title(2)" class="hdg-lv2-01 btn">What we do</button><br />
              <div>
                <button @click="Click_Title(2)"  class="hdg-lv3-01 btn">Products</button>
                  <div class="row">
                    <div class="col">
                      <li><button @click="Click_Title(2)" class="col_li_a btn" href="/what_we_do/products/abstral/index.html">NESP</button></li>
                      <li><button @click="Click_Title(2)" class="col_li_a btn" href="/what_we_do/products/abstral/index.html">REGPARA</button></li>
                      <li><button @click="Click_Title(2)" class="col_li_a btn" href="/what_we_do/products/abstral/index.html">Filgrastim</button></li>
                      <li><button @click="Click_Title(2)" class="col_li_a btn" href="/what_we_do/products/abstral/index.html">Leunase</button></li>
                      <li><button @click="Click_Title(2)" class="col_li_a btn" href="/what_we_do/products/abstral/index.html">Neulasta</button></li>                  
                    </div>
                    <div class="col">
                      <li><button @click="Click_Title(2)" class="col_li_a btn" href="/what_we_do/products/abstral/index.html">Romiplate</button></li>
                      <li><button @click="Click_Title(2)" class="col_li_a btn" href="/what_we_do/products/abstral/index.html">Sancuso</button></li>
                      <li><button @click="Click_Title(2)" class="col_li_a btn" href="/what_we_do/products/abstral/index.html">Lumicef</button></li>
                      <li><button @click="Click_Title(2)" class="col_li_a btn" href="/what_we_do/products/abstral/index.html">Leunase</button></li>
                    </div>
                  </div>            
              </div>
            <button  @click="Click_Title(3)" class="hdg-lv2-01 btn">最新資訊</button><br />
            <button @click="Click_Title(4)" class="hdg-lv2-01 btn">亞太分佈圖</button>
            <h2 class="hdg-lv2-01">其他</h2>
              <button class="btn_li" @click="ContactUs()">連絡我們</button><br />
              <button class="btn_li" @click="sitemap()">網站地圖</button><br />
              <button class="btn_li" @click="law()">法律聲明</button><br />
              <button class="btn_li" @click="Privacy()">隱私條款</button>
          </div>
  
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
      law(){
        this.$router
        .push({
          path: "law",
        })
        .catch(err => {
          console.log(err)
        })
        this.Click_Title(-1)
      },
      Privacy(){
        this.$router
        .push({
          path: "Privacy",
        })
        .catch(err => {
          console.log(err)
        })
        this.Click_Title(-1)
      },
      sitemap(){
        this.$router
        .push({
          path: "sitemap",
        })
        .catch(err => {
          console.log(err)
        })
        this.Click_Title(-1)
      },
      ContactUs(){
        this.$router
        .push({
          path: "ContactUs",
        })
        .catch(err => {
          console.log(err)
        })
        this.Click_Title(-1)
      },
    }
  }
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*computer*/
.btn_li {
  background-color:white;
  outline:0;
  border:0;
  font-size: 2.4rem;
  font-weight: bold;
  padding-left: 3vw;
  color: #ea5504;
}

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
  font-size: 4.8rem;
  line-height: 1.125;
  margin-top: 55px;
  margin-bottom: 42px;
  color: #ea5504;
}

.hdg-lv2-01 {
  font-size: 2.8rem;
  font-weight: bold;
  margin-top: 4vh;
  margin-bottom: 2vh;
  text-decoration:underline;
}


.hdg-lv3-01 {
  font-size: 2.4rem;
  margin-top: 3vh;
  color: #ea5504;
  margin-left: 1vw;;
}

.hdg-lv4-01 {
  font-size: 2rem;
  color: #5D6164;
  margin-top: 3.5vh;
  margin-bottom: 2vh;
  margin-left: 2vw;
}

a {
  color: #000000;
}

.col_li_a {
  font-family: Arial;
  font-size: 1.8rem;
  font-weight: bold;
  color: #1ba8d6;
}

.row {
  margin-left: 1vw;
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
    .str-outer {
      position: relative;
      min-height: 250px;
      padding-right: calc(46px/2);
      padding-left: calc(46px/2);
    }    
  }

</style>
