<template>
  <div class="Expansion">
    <button class="button_form" type="button">
        <img style="height:13px;width:13px">
    </button>
  </div>
</template>

<script>
export default {
  name: 'Expansion',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button_form{
    background-color: white;
    width: 100%;
    height: 62px;
    border: 0;
    border-bottom: 1px solid #d1d2d2;
}
.button_form:active{
    background-color: #65C1ED;
    width: 100%;
    height: 62px;
    border: 0;
    opacity: 0.5;
}
</style>
