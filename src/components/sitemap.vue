<template>
  <div class="News">
    <div class="str-outer">
      <div class="str-inner">
        <dl class="mod-list-description">

          <div>
            <h1 class="hdg-lv1-02">網站地圖</h1>
            <h2 class="hdg-lv2-01"><a href="/index.html">首頁</a></h2>
              <h3><a class="hdg-lv3-01" href="/what_we_do/products/index.html">公司的理念</a></h3>
              <h3><a class="hdg-lv3-01" href="/what_we_do/products/index.html">專注的領域</a></h3>
              <h3><a class="hdg-lv3-01" href="/what_we_do/products/index.html">快速導覽</a></h3>
            <h2 class="hdg-lv2-01"><a href="/index.html">關於我們</a></h2>
              <h3><a class="hdg-lv3-01" href="/what_we_do/products/index.html">公司目標</a></h3>
              <h3><a class="hdg-lv3-01" href="/what_we_do/products/index.html">我們的願景</a></h3>
              <h3><a class="hdg-lv3-01" href="/what_we_do/products/index.html">總經理的話</a></h3>
            <h2 class="hdg-lv2-01"><a href="/what_we_do/index.html">What we do</a></h2>
              <div>
                <h3><a class="hdg-lv3-01" href="/what_we_do/products/index.html">Products</a></h3>
                  <div class="row">
                    <div class="col">
                      <li><a class="col_li_a" href="/what_we_do/products/abstral/index.html">NESP</a></li>
                      <li><a class="col_li_a" href="/what_we_do/products/abstral/index.html">REGPARA</a></li>
                      <li><a class="col_li_a" href="/what_we_do/products/abstral/index.html">Filgrastim</a></li>
                      <li><a class="col_li_a" href="/what_we_do/products/abstral/index.html">Leunase</a></li>
                      <li><a class="col_li_a" href="/what_we_do/products/abstral/index.html">Neulasta</a></li>                  
                    </div>
                    <div class="col">
                      <li><a class="col_li_a" href="/what_we_do/products/abstral/index.html">Romiplate</a></li>
                      <li><a class="col_li_a" href="/what_we_do/products/abstral/index.html">Sancuso</a></li>
                      <li><a class="col_li_a" href="/what_we_do/products/abstral/index.html">Lumicef</a></li>
                      <li><a class="col_li_a" href="/what_we_do/products/abstral/index.html">Leunase</a></li>
                    </div>
                  </div>            
              </div>
            <h2 class="hdg-lv2-01"><a href="/sustainability/index.html">最新資訊</a></h2>
            <h2 class="hdg-lv2-01"><a href="/media_center/index.html">亞太分佈圖</a></h2>
            <h2 class="hdg-lv2-01"><a href="/media_center/index.html">其他</a></h2>
              <h3><a class="hdg-lv3-01" href="/what_we_do/products/index.html">連絡我們</a></h3>
              <h3><a class="hdg-lv3-01" href="/what_we_do/products/index.html">網站地圖</a></h3>
              <h3><a class="hdg-lv3-01" href="/what_we_do/products/index.html">法律聲明</a></h3>
              <h3><a class="hdg-lv3-01" href="/what_we_do/products/index.html">隱私條款</a></h3>
          </div>
  
        </dl>
      </div>
    </div>
    <Footer-bg></Footer-bg>
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
    }
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
  font-size: 4.8rem;
  line-height: 1.125;
  margin-top: 55px;
  margin-bottom: 42px;
  color: #ea5504;
}

.hdg-lv2-01 {
  font-size: 2.8rem;
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
  padding-bottom: 100px;
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
