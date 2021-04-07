<template>
<div>
    <div class="main-content-type-only">
        <h1 class="hdg-lv1-02">Sitemap</h1>
        <h2 class="hdg-lv2-01"><a href="/index.html">Home</a></h2>
        <h2 class="hdg-lv2-01"><a href="/index.html">Who we are</a></h2>
        <h2 class="hdg-lv2-01"><a href="/what_we_do/index.html">What we do</a></h2>
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
.main-content-type-only {
  font-family: Arial;
  text-align:left;
  margin: 0 auto;
  max-width: 980px;
  height:100vh;
  padding-top: 52px;
  padding-bottom: 100px;
}
h1,h2 {
    font-weight: 600;
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
a {
    color: #000000;
}
/*mobile*/

</style>