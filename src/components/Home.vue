<template>
  <div class="Home">
    <!-- <font style="font-size:5rem !important">112334896</font> -->
    <!-- <div style="height:100vh">123456789</div> -->
    <Footer-bg></Footer-bg>
  </div>
</template>

<script>
import Footer from './Footer'
export default {
    components: {
    'Footer-bg':Footer
  },
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Home{
  padding-top: 52px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
