<template>
<div>
    <div class="main-content-type-only">
        <h1 class="hdg-lv1-02">Sitemap</h1>
        <h2 class="hdg-lv2-01"><a href="/index.html">Home</a></h2>
        <h2 class="hdg-lv2-01"><a href="/index.html">Who we are</a></h2>
        <h2 class="hdg-lv2-01"><a href="/what_we_do/index.html">What we do</a></h2>
          <div class="Products">
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
        <h2 class="hdg-lv2-01"><a href="/sustainability/index.html">Sustainability</a></h2>
        <h2 class="hdg-lv2-01"><a href="/media_center/index.html">Media center</a></h2>
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
/*computer*/
  @media (min-width: 769px) {
    .main-content-type-only {
      font-family: Arial;
      text-align:left;
      margin: 0 auto;
      max-width: 980px;
      height:100vh;
      padding-top: 52px;
      padding-bottom: 100px;
    }

    h1,h2,h3 {
      font-weight: 600;
      margin-bottom: 18px;
    }
    
    .hdg-lv3-01
    {
      font-size: 2.5rem;
      color: #ea5504;
    }

    .col_li_a {
      font-family: Arial;
      font-size: 2rem;
      color: #1ba8d6;
    }

    .hdg-lv1-02 {
      font-size: 4.8rem;
      line-height: 1.125;
      margin-top: 55px;
      margin-bottom: 42px;
      color: #ea5504;
    }

    .hdg-lv2-01 {
      font-size: 2.6rem;
      margin-top: 63.5px;
      margin-bottom: 17.5px;
      text-decoration:underline;
    }

    .Products {
      padding-left: 20px;
    }

    a {
      color: #000000;
    }

    .col {
      width: 50%;
    }
  }
/*mobile*/
  @media (min-width: 320px) and (max-width:768px) {
    .col {
      width: calc((100% - 20px) / 2);
    }
  }
</style>