<template>
  <div class="Footer">
      <div class="bg_cp" style="width:100%;height:250px;padding:30px 0 28px 0">
          <img src="../assets/logo_footer.png" style="width:100px">
      </div>
      <div class="bg_mobile" style="width:100%;height:375px;padding:69px 0 62px 0">
          <img src="../assets/logo_footer.png" style="width:160px">
      </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*computer*/
  @media (min-width: 769px) {
    .bg_cp {
        display: block;
        background-position: center;
        background-size: cover;
        background-image: url("../assets/bg_footer_01.png");
    }

    .bg_mobile {
        display: none;
        background-position: center;
        background-size: cover;
        background-image: url("../assets/bg_footer_01_sp.png");
    }
  }
/*mobile*/
  @media (min-width: 320px) and (max-width:768px) {
    .bg_cp {
        display: none;
        background-position: center;
        background-size: cover;
        background-image: url("../assets/bg_footer_01.png");
    }

    .bg_mobile {
        display: block;
        background-size: cover;
        background-image: url("../assets/bg_footer_01_sp.png");
    }
  }
</style>
