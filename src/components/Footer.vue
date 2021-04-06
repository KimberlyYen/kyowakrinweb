<template>
  <div class="Footer">
      <div class="bg_cp" style="width:100%;height:250px;padding:30px 0 28px 0">
          <img src="../assets/logo_footer.png" style="width:100px;margin-bottom:40px">
          <div class="d-flex justify-content-center" style="width:100%;">
            <div class="row p-0 m-0" style="max-width:980px;width:calc(100% + -250px);">
                <div class="col p-0 m-0"> 
                    <div class="fontcss d-flex jusitfy-content-start">我們的產品</div>
                    <div class="fontcss d-flex jusitfy-content-start">關於我們</div>
                </div>
                <div class="col p-0 m-0">
                    <div class="fontcss d-flex jusitfy-content-start">連絡我們</div>
                    <div class="fontcss d-flex jusitfy-content-start">網站地圖</div>
                </div>
                <div class="col p-0 m-0">
                    <div class="fontcss d-flex jusitfy-content-start">法律聲明</div>
                    <div class="fontcss d-flex jusitfy-content-start">隱私條款</div>
                </div>
                <div class="col p-0 m-0">
                    <div class="fontcss d-flex jusitfy-content-start">Kyowa Kirin Group</div>
                </div>
            </div>
          </div>
      </div>
      <div class="bg_mobile" style="width:100%;height:375px;padding:69px 0 62px 0">
            <img src="../assets/logo_footer.png" style="width:160px;margin-bottom:60px">
            <div class="row m-0" style="padding-left:100px">
                <div class="col-6 p-0 m-0 text-left"> 
                    <div class="fontcss mb-2">我們的產品</div>
                    <div class="fontcss mb-2">關於我們</div>
                    <div class="fontcss mb-2">法律聲明</div>
                    <div class="fontcss mb-2">隱私條款</div>
                </div>
                <div class="col-6 p-0 m-0 text-left">
                    <div class="fontcss mb-2">連絡我們</div>
                    <div class="fontcss mb-2">網站地圖</div>
                </div>
                <div class="col-6 p-0 m-0 text-left mt-5">
                    <div class="fontcss">Kyowa Kirin Group</div>
                </div>
            </div>
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
.fontcss:hover{
    color: gray;
}
.fontcss{
    color: white;
    cursor: pointer;
    font-size: 1.55rem;
}
/*computer*/
  @media (min-width: 769px) {
    .bg_cp {
        display: block;
        background-position: center;
        background-size: cover;
        background-image: url("../assets/bg_footer.png");
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
        background-image: url("../assets/bg_footer.png");
    }

    .bg_mobile {
        display: block;
        background-size: cover;
        background-image: url("../assets/bg_footer_01_sp.png");
    }
  }
</style>
