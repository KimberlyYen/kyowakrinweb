<template>
  <div id="AboutUs">
    <!-- <img src="./assets/logo.png"> -->
    <Footer-bg style="background-color:#F3F3F3" @Click_Title_trigger="Click_Title2"></Footer-bg>
  </div>
</template>

<script>
import Footer from './Footer'
export default {
  name: 'AboutUs',
components: {
    'Footer-bg':Footer
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

<style>
#AboutUs {
    padding-top: 52px;
}
</style>
