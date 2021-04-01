<template>
  <div class="Header">
      <div class="header_ row p-0 m-0">
        <div class="col p-0 m-0 pl-5 d-flex justify-content-start align-items-center"> 
          <img style="width:153px;height:26px" src="../assets/logo_header_01.png">
        </div>
        <div class="col row p-0 m-0 d-flex justify-content-end">
          <div class="d-flex justify-content-center align-items-center" style="width:52px;"> 
            <img style="width:26px;height:26px" src="../assets/icon_search_01.png">
          </div>
          <div class="d-flex justify-content-center align-items-center" style="width:52px;border-left: 1px solid #c9c9c9;"> 
            <img style="width:26px;height:17px" src="../assets/icon_mail_01.png">
          </div>
          <div class="d-flex justify-content-center align-items-center" style="width:52px;border-left: 1px solid #c9c9c9;"> 
            <img style="width:31px;height:36px" src="../assets/icon_global_01.png">
          </div>
        </div>
      </div>
      <!-- <font style="font-size:5rem !important">112334896</font> -->
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Header',
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
