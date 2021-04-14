<template>
  <div id="AboutUs">
    <div class="bg_cp_AboutUs" >
    </div>
    <div class="d-flex justify-content-center pt-5 pb-4" style="width:100vw">
        <div class="d-flex justify-content-center align-items-center" style="max-width:1200px;min-width:320px;width:100%;color:rgb(234, 85, 4);font-size:5rem;font-weight:bold">公司目標</div>
    </div>
    <div class="d-flex justify-content-center pt-5 pb-4" style="width:100vw">
        <div class="d-flex justify-content-center align-items-center" style="color:#5D6164;font-size:2rem">日本麒麟控股集團下所屬協和麒麟公司，是一個以研究為基礎的生命科學事業體， 且專精於生物化學相關領域。我們不斷致力於尖端生物化學的發展，並使用於製藥流程當中， 以期望能研發出更符合患者所需的藥品，改善病患的生活品質。</div>
    </div>
    <div class="d-flex justify-content-center pt-5 pb-4" style="width:100vw">
        <div class="d-flex justify-content-center align-items-center" style="max-width:1200px;min-width:320px;width:100%;color:rgb(234, 85, 4);font-size:5rem;font-weight:bold">我們的願景</div>
    </div>
    <div class="d-flex justify-content-center pt-5 pb-4" style="width:100vw">
        <div class="d-flex justify-content-center align-items-center" style="color:#5D6164;font-size:2rem">在我們的周遭有無數珍貴的生命， 是在祝福中誕生，在關愛中成長， 心中充滿著夢想並追求著幸福的生命。 我們是為了地球上所有最珍貴的生命而工作— 我們深切的了解並銘記在心。 正因為如此，製藥企業對我們而言就是代表無限大的可能。</div>
    </div>
    <Footer-bg style="background-color:white" @Click_Title_trigger="Click_Title2"></Footer-bg>
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


/*computer*/
@media (min-width: 769px){
    .bg_cp_AboutUs {
    display: flex;
    height: 600px;
    background-position: center;
    background-size: cover;
    background-image: url("../assets/AboutUs_bg.png");
    justify-content: center;
}
}
/*mobile*/
@media (min-width: 320px) and (max-width:768px) {
    .bg_cp_AboutUs {
        display: flex;
        height: 600px;
        background-position: center;
        background-size: cover;
        background-image: url("../assets/AboutUs_Mobile_bg.png");
        justify-content: center;
    }
}
#AboutUs {
    padding-top: 52px;
}
</style>
