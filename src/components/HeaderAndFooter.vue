<template>
  <div class="HeaderAndFooter">
      <div class="header_"> </div>
      <!-- <font style="font-size:5rem !important">112334896</font> -->
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'HeaderAndFooter',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header_{
    width: 100vw;
    height:52px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 1;
    position: fixed;
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
