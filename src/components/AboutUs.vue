<template>
  <div id="AboutUs">
    <div class="bg_cp_AboutUs" >
    </div>
    <div class="d-flex justify-content-center pt-5 pb-4" style="width:100vw">
        <div class="d-flex justify-content-center align-items-center" style="max-width:1200px;min-width:320px;width:100%;color:rgb(234, 85, 4);font-size:5rem;font-weight:bold">公司目標</div>
    </div>
    <div class="d-flex justify-content-center pt-5 pb-4" style="width:100vw">
        <div class="d-flex justify-content-center align-items-center" style="color:#5D6164;font-size:2rem">日本麒麟控股集團下所屬協和麒麟公司，是一個以研究為基礎的生命科學事業體，<br/>且專精於生物化學相關領域。我們不斷致力於尖端生物化學的發展，並使用於製藥流程當中，<br/>以期望能研發出更符合患者所需的藥品，改善病患的生活品質。</div>
    </div>
    <div class="d-flex justify-content-center pt-5 pb-4" style="width:100vw">
        <div class="d-flex justify-content-center align-items-center" style="max-width:1200px;min-width:320px;width:100%;color:rgb(234, 85, 4);font-size:5rem;font-weight:bold">我們的願景</div>
    </div>
    <div class="d-flex justify-content-center pt-5 pb-4" style="width:100vw">
        <div class="d-flex justify-content-center align-items-center" style="color:#5D6164;font-size:2rem" v-html="content[0].content"></div>
        
    </div>
    <div class="d-flex justify-content-center pt-5 pb-4" style="width:100vw">
        <div v-if="show" class="d-flex justify-content-center align-items-center" style="color:#5D6164;font-size:2rem" v-html="content[1].content"></div>
    </div>
    <div @click="SHOW_MORE_click()" style="font-weight: 600;color:#5d6164;height:25px;cursor:pointer;font-size:2rem;padding-bottom: 120px;" class="row d-flex justify-content-center ">SHOW MORE<div class="expand ml-4 mt-1" style="color:#5d6164;"></div></div>
    <div class="bg_child_AboutUs" >
    </div>
    <div class="d-flex justify-content-center pt-5 pb-4" style="width:100vw">
        <div class="d-flex justify-content-center align-items-center" style="max-width:1200px;min-width:320px;width:100%;color:rgb(234, 85, 4);font-size:5rem;font-weight:bold">總經理的話</div>
    </div>
    <div class="row p-0 m-0"  style="position:relative;max-width:1200px;min-width:350px;width:100%;">
        <div class="col p-0 m-0">
            <img src="">
        </div>
        <div class="col p-0 m-0">

        </div>
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
    SHOW_MORE_click(){
        this.show=true
    }
  },
  data(){
      return{
          content:[
            {content:'在我們的周遭有無數珍貴的生命，<br/>是在祝福中誕生，在關愛中成長，<br/>心中充滿著夢想並追求著幸福的生命。<br/>我們是為了地球上所有最珍貴的生命而工作—<br/>我們深切的了解並銘記在心。<br/>正因為如此，製藥企業對我們而言就是代表無限大的可能。'}
          ,{content:'<br/>請相信我們自己，相信我們的力量，相信我們自己所積累的寶貴經驗。<br/>我們雖然不是大型企業，但我們有著不輸給任何大型企業的許多特質。<br/>我們可引以為傲的無可比擬的悠久歷史、<br/>無可取代的技術，還有別處所沒有的優秀人材。<br/>讓我們擁有不懼困難的勇氣，擁有勇於突破常識的熱情。<br/>革新並不是指單純的成長，而是飛躍式的，插上了雙翼的成長。<br/>不過，這對雙翼永遠不會屬於滿足現狀的人。<br/>我們不要只是生產藥品，更要讓人們露出微笑，為他們的生命帶來光亮。<br/>作為一個人，有著多麼強烈的求生欲望，<br/>每個人都是被摯愛的人多麼深切的關愛著。<br/>醫療從事人員又是多麼期望能夠挽救一條生命。<br/>保持接納的態度，使你的感受更為敏銳。<br/>我們要成為世界第一關愛生命的企業。<br/>拯救世界不僅只需要強大，更需要的是關愛的心。<br/><br/><br/>讓我們成為最優秀的團隊。無論是多麼優秀的人材，<br/>如果只有一個人的話，就會顯得多麼薄弱無力，並難免出差錯。<br/>眾人齊心協力就會創造出卓越的成果。<br/>我們要向世界展示這團結合作的力量。<br/>我們要加緊腳步—無需過於匆促，但我們一定不能停止不動。<br/>無論何時保持真誠—願此成為我們的誓言。<br/>我們生產藥品，我們與人們的生命共行。<br/>我們的工作會給人們帶來幸福，請時刻不要忘記這一點。<br/>我們各自出生在不同之處、有著不同的經歷，猶如奇蹟一般，<br/>與這個工作、與這團隊、與這個公司相逢。請為此感到喜悅。<br/>心存感謝那些你所擁有的，在你所被賦予的使命中傾注心血，<br/>為你的工作感到驕傲，那是拯救珍貴生命的工作。<br/><br/><br/>這就是我們全體成員所組成的協和麒麟。<br/><br/><br/>與您共同守護 這僅有一次的生命<br/><br/>'}
          ],
          show:false
      }
  }
}
</script>

<style>

.expand{
  height:12.5px;
  width:12.5px;
  transform:rotate(45deg);
  border-right: 2px solid #5d6164;
  border-bottom: 2px solid #5d6164;
}
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
    .bg_child_AboutUs{
        display: flex;
        height: 900px;
        background-position: center;
        background-size: cover;
        background-image: url("../assets/42415230.png");
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
    .bg_child_AboutUs{
        display: flex;
        height: 600px;
        background-position: center;
        background-size: cover;
        background-image: url("../assets/42415230_Mobile.png");
        justify-content: center;
    }
}
#AboutUs {
    padding-top: 52px;
}
</style>
