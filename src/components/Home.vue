<template>
  <div class="Home">
    <div :class="disabled">
      <div class="bg_cp" >
        <div v-html="Title" style="position:relative;top:150px;color:white;max-width:800px;width:100%;height:200px;min-width:350px;text-align:left;"></div>
      </div>
      <div class="bg_mobile">
        <div v-html="Title" style="position:relative;top:80px;color:white;max-width:345px;width:100%;min-width:320px;height:200px;text-align:left;"></div>
      </div>
      <div class="d-flex justify-content-center pt-5 pb-5 pl-5 pr-5" style="width:100vw;background-color:#F3F3F3;">
        <div style="max-width:1000px;min-width:320px;width:100%;color:rgb(234, 85, 4);">
          <div style="font-size:3rem;font-weight:bold;text-align:left;">{{NewInformation}}</div><br />
          <div class="row p-0 m-0">
            <div class="col-12 col-md-8 p-0 m-0" style="text-align:left;">
              <div v-for="(items,index) in NewsListObj" :key="index">
                <div class="row p-0 m-0" v-if="index < ShowNum">
                  <div class="col-4 col-md-2  p-0 m-0 font_size" style="color:#5D6164;">{{items.date}}</div><div class="col-8 col-md-10 p-0 m-0 font_size" style="color:#009DE1;">{{items.content}}</div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 p-0 m-0 mt-5 mt-md-0 d-flex justify-content-center align-items-center">
              <div @click="ToNews()" style="font-size:1.5rem;background-color:white;width:260px;height:40px;border-radius:40px;cursor:pointer;color:rgb(234, 85, 4);display: flex;justify-content: center;align-items: center;position:relative;"><font>更多資訊</font><font style="position:absolute;right:20px">➝</font>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center pt-5 pb-4" style="width:100vw">
        <div class="d-flex justify-content-center align-items-center" style="max-width:1000px;min-width:320px;width:100%;color:rgb(234, 85, 4);font-size:5rem;font-weight:bold">專注的領域</div>
      </div>
        <div class="d-flex justify-content-center" style="width:100vw">
        <div class="d-flex justify-content-center align-items-center p-0 pl-5 pr-5" style="max-width:1000px;min-width:320px;width:100%;color:#5D6164;font-size:2rem;">公司的產品專注於血液腫瘤科，腎臟科與免疫科的治療領域。</div>
      </div>
      <div class="d-flex justify-content-center pro_height">
        <div  style="position:relative;max-width:1200px;min-width:350px;width:100%;">
          <div class="d-flex justify-content-center" style="position:relative;top:140px;width:100%;height:100%">
            <div @click="ToNews()"  style="font-size:1.5rem;background-color:#F3F3F3;width:260px;height:40px;border-radius:40px;cursor:pointer;color:rgb(234, 85, 4);display: flex;justify-content: center;align-items: center;position:relative;"><font>我們的產品</font><font style="position:absolute;right:20px">➝</font></div>
          </div>
          <div class="svg_1 bg_svg_1" style="left:0px;top:0"><font style="color:white;position:relative;top:20%;">Nephrology</font></div>
          <div class="svg_1 bg_svg_2 positioncss_left" style="top:180px" ><font style="color:white;position:relative;top:50%;">Oncology</font></div>
          <div class="svg_1 bg_svg_3 positioncss_right" style="top:180px" ><font style="color:white;position:relative;top:20%;">Central nervous<br /> system (CNS)</font></div>
          <div class="svg_1 bg_svg_4" style="right:0px;top:0" ><font style="color:white;position:relative;top:40%;">Immunology <br />& Allergy</font></div>
        </div>
      </div>
      <div class="d-flex justify-content-center pt-5 pb-5" style="width:100vw;background-color:rgb(243, 243, 243);">
        <div class="d-flex justify-content-center align-items-center" style="max-width:1000px;min-width:320px;width:100%;color:rgb(234, 85, 4);font-size:5rem;font-weight:bold">快速導覽</div>
      </div>
      <div class="d-flex justify-content-center pt-4 pb-5" style="width:100vw;background-color:rgb(243, 243, 243);color:#5D6164;font-size:2rem">我們利用生命科學和技術的創新力量幫助患者過上更好的生活</div>
      <div class="d-flex justify-content-center pt-5 pb-5" style="width:100vw;background-color:rgb(243, 243, 243);">
        <!-- <video width="320" height="240" src="" >
        </video> -->
        <div class="d-flex justify-content-center" style="max-width:1000px;min-width:320px;width:90%;">
          <div @click="ShowVedio(1)"  class="d-flex justify-content-center align-items-center vedio_img pic">
            <img src="../assets/icon_movie_01.png">
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center pt-0" style="width:100vw;background-color:rgb(243, 243, 243);padding-bottom:100px">
        <div style="max-width:1000px;min-width:320px;width:100%;">
          <div class="row p-0 m-0 mb-5 justify-content-center">
            <div @mouseover="Arrow(1)" @mouseleave="ArrowBack(1)" class="d-flex justify-content-center align-items-center pic" style="cursor:pointer;position:relative">
              <img class="imgsize1" src="../assets/29595215.jpg">
              <font style="position:absolute;top:5px;left:10px;color:#EA5504;font-size:2rem;font-weight:bold;text-shadow: 0px 0px 5px black;">我們的產品</font>
              <font id="arrow1" style="position:absolute;top:25px;left:10px;color:#EA5504;font-size:2rem;font-weight:bold;text-shadow: 0px 0px 5px black;">→</font>
            </div>
            <div @mouseover="Arrow(2)" @mouseleave="ArrowBack(2)" class="d-flex justify-content-center align-items-center pic ml-0 ml-md-5 mt-5 mt-md-0" style="cursor:pointer;position:relative">
              <img class="imgsize2" src="../assets/首頁69480419.jpg">
              <font style="position:absolute;top:5px;left:10px;color:#EA5504;font-size:2rem;font-weight:bold;text-shadow: 0px 0px 5px black;">關於我們</font>
              <font id="arrow2" style="position:absolute;top:25px;left:10px;color:#EA5504;font-size:2rem;font-weight:bold;text-shadow: 0px 0px 5px black;">→</font>
            </div>
          </div>
          <div class="row p-0 m-0 justify-content-center">
            <div @mouseover="Arrow(3)" @mouseleave="ArrowBack(3)" class="d-flex justify-content-center align-items-center pic" style="cursor:pointer;position:relative">
              <img class="imgsize3" style="height:260px;width:520px" src="../assets/66253614.jpg">
              <font style="position:absolute;top:5px;left:10px;color:#EA5504;font-size:2rem;font-weight:bold;text-shadow: 0px 0px 5px black;">最新消息</font>
              <font id="arrow3" style="position:absolute;top:25px;left:10px;color:#EA5504;font-size:2rem;font-weight:bold;text-shadow: 0px 0px 5px black;">→</font>
            </div>
            <div @mouseover="Arrow(4)" @mouseleave="ArrowBack(4)" class="d-flex justify-content-center align-items-center pic ml-0 ml-md-5 mt-5 mt-md-0" style="cursor:pointer;position:relative">
              <img class="imgsize4" style="height:260px;width:255px" src="../assets/world.png">
              <font style="position:absolute;top:5px;left:10px;color:#EA5504;font-size:2rem;font-weight:bold;text-shadow: 0px 0px 5px white;">亞太分佈圖</font>
              <font id="arrow4" style="position:absolute;top:25px;left:10px;color:#EA5504;font-size:2rem;font-weight:bold;text-shadow: 0px 0px 5px white;">→</font>
            </div>
          </div>
        </div>
      </div>
      <Footer-bg style="background-color:#F3F3F3"></Footer-bg>
    </div>
    <div v-if="showvedio" style="position:fixed;top:0;left:0;height:100vh;width:100vw;background-color:black;z-index:2;opacity:0.8">

    </div>
    <div v-if="showvedio" class="d-flex justify-content-center row p-0 m-0" style="position:fixed;top:0;left:0;width:100%;z-index:3">
      <div  class="col-12 col-md-8" style="position:relative;">
        <div @click="ShowVedio(2)" style="position:absolute;top:0;right:15px;font-size:3rem;cursor:pointer;z-index:3;color:white">╳</div>
      </div>
      <iframe class="col-12 col-md-8 p-0 m-0" style="height:100vh;width:100vw;border:0;" src="https://www.youtube.com/embed/So2GnXRadcI?rel=0" title="Kyowa Kirin Corporate Video" allow="autoplay; encrypted-media" allowfullscreen loading="lazy">
      </iframe>
    </div>
  </div>
</template>

<script>
import Footer from './Footer'
export default {
  components: {
    'Footer-bg':Footer
  },
  name: 'Home',
  methods:{
    ToNews(){
      this.$router
      .push({
        path: "News",
      })
      .catch(err => {
        console.log(err)
      })
    },
    Arrow(index){
      if($('#arrow'+index).css('left') == '15px'){
        $('#arrow'+index).animate({left:'30px'},'fast');
      }
    },
    ArrowBack(index){
      $('#arrow'+index).animate({left:'15px'},'fast');
    },
    ShowVedio(index){
      switch(index){
        case 1:
          this.showvedio = true
          this.disabled = 'disabled'
          break;
        case 2:
          this.showvedio = false
          this.disabled = 'disable'
          break; 
      }
    }
  },
  data () {
    return {
      Title:'<font style="font-size:4rem;font-weight:bold;text-shadow: 0px 0px 5px #3e6db3;">與您共同守護<br/>這僅有一次的生命</font><br/><br/>'
      +'<font style="font-size:2rem;text-shadow: 0px 0px 5px #3e6db3;">我們是優秀的團隊，共同為全人類在腫瘤及腎臟學領域追求最高的幸福<br/>您全家的平安快樂就是我們最大的成就</font><br/><br/>'
      +'<div style="font-size:1.5rem;background-color:white;width:260px;height:40px;border-radius:40px;cursor:pointer;color:rgb(234, 85, 4);display: flex;justify-content: center;align-items: center;position:relative;"><font>關於我們</font><font style="position:absolute;right:20px">➝</font></div>',
      NewInformation:'最新資訊',
      NewsListObj:[
        {date:'2020年4月1日',content:'[台灣協和麒麟] 台灣協和麒麟股份有限公司自2020年4月搬遷至新址',detail:'台灣協和麒麟股份有限公司自2020年4月15日起在新址正式營運'},
        {date:'2019年9月1日',content:'[台灣協和麒麟] 台灣協和醱酵麒麟股份有限公司更名爲台灣協和麒麟股份有限公司',detail:'台灣協和醱酵麒麟股份有限公司自2019年9月1日起更名爲台灣協和麒麟股份有限公司'},
        {date:'2018年6月25日',content:'[台灣協和醱酵麒麟] 公司新藥Lumicef「立美西膚皮下注射劑210毫克」',detail:'Lumicef「立美西膚」自2018年6月25日開始於台灣販售。'},
        {date:'2016年3月17日',content:'[新聞澄清] KH NeoChem Co., Ltd. 並非 本公司之日本總公司(KHK)集團的公司。',detail:'1. 近日新聞報導，中油 與 日商KH NeoChem Co., Ltd. 及 兆豐銀簽署合資協議書，共同在高雄臨海工業區投資，成立「曄揚股份有限公司」興建石化工廠，預定108年完工。上述日商KH NeoChem Co., Ltd. 並非 KHK集團的公司。',detail_:'2.KHK原本100%轉投資 Kyowa Chemical Co., Ltd.，但在2011年3月3日已將該公司賣給了KJ Holding Co., Ltd.，而KJ Holding Co., Ltd.於2012年4月1日更名為KH NeoChem Co., Ltd.。因此，KH NeoChem Co., Ltd. 與 KHK集團無任何關係。'},
        {date:'2016年1月25日',content:'[台灣協和醱酵麒麟] 公司已上市藥品-恩沛板注射用凍晶粉末，英文商品名將以Romiplate 取代Nplate 之現有品項。',detail:'1.公司已上市藥品-恩沛板注射用凍晶粉末，英文商品名將以Romiplate 取代Nplate 之現有品項。',detail_:'2.「恩沛板注射用凍晶粉末（Romiplate 250μg injection）」藥品許可證上之英文商品名，更名自2015年4月7日起生效，許可證字號與健保碼均無改變，相關資料請參見「衛生福利部食品藥物管理署」與「衛生福利部中央健康保險署」網站，謝謝。'},
        {date:'2014年8月13日',content:'[台灣協和醱酵麒麟] 公司已上市藥品-耐血比注射劑，將以0.5ml 取代1.0ml 之現有品項。',detail:'1.公司已上市藥品-耐血比注射劑，將以0.5ml 取代1.0ml 之現有品項。',detail_:'2.「耐血比注射劑 20，40，60 微克 / 0.5 毫升（NESP Injection Plastic Syringe 20，40，60 mcg / 0.5 ml）」之健保價自2014年8月1日起生效，相關資料請參見「衛生福利部中央健康保險署」網站，謝謝。'},
        {date:'2013年11月20日',content:'[台灣協和醱酵麒麟] 公司新藥Sancuso「貼固守」上市',detail:'Sancuso「貼固守」自2013年11月18日開始於台灣販售。'},
        {date:'2013年10月31日',content:'[台灣協和醱酵麒麟] 公司新藥Nplate「恩沛板」上市',detail:'Nplate「恩沛板」自2013年10月21日開始於台灣販售。'},
        {date:'2013年8月30日',content:'[台灣協和醱酵麒麟] 公司新藥「貼固守穿皮貼片劑」與「恩沛板」之健保價生效',detail:'1. 本公司新藥「貼固守穿皮貼片劑（Sancuso transdermal patch 3.1mg/24hours）」之健保價自2013年9月1日起生效，相關資料請參見「衛生福利部中央健康保險署」網站，謝謝。',detail_:'2. 本公司新藥「恩沛板 注射用凍晶粉末（Nplate injection）」之健保價自2013年9月1日起生效，相關資料請參見「衛生福利部中央健康保險署」網站，謝謝。'},
        {date:'2013年6月28日',content:'[台灣協和醱酵麒麟] 公司網站即將上線',detail:'台灣協和醱酵麒麟股份有限公司將於2013年6月28日起正式開放公司網站(Kyowa Hakko Kirin Taiwan)。'},
        {date:'2013年6月28日',content:'[台灣協和醱酵麒麟] 公司即將有新藥在台灣推廣上市',detail:'台灣協和醱酵麒麟公司將於近期內上市推廣兩項新藥，分別為(1)中文名:貼固守穿皮貼片劑，英文名:Sancuso transdermal patch 3.1mg/24hour(Granisetron);(2)中文名:恩沛板注射用凍晶粉末，英文名:Nplate injection(Romiplostim)。'
        },
      ],
      ShowNum:5,
      showvedio:false,
      disabled:'disable'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 1025px){
  @keyframes expand {
    from { height: 256px; width: 256px;}
    to { height: 400px; width: 400px;}
  }
  @keyframes tight {
      from { height: 400px;width: 400px;}
      to { height: 256px; width: 256px;}
  }
  .svg_1{
    height: 256px;
    width: 256px;
    position: absolute;
    animation-name: tight;    /*動畫名稱，需與 keyframe 名稱對應*/
    animation-duration: 0.5s;    /*動畫持續時間，單位為秒*/
    animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    font-size: 1.5rem;
  }
  .svg_1:hover{
    height: 400px;
    width: 400px;
    position: absolute;
    animation-name: expand;    /*動畫名稱，需與 keyframe 名稱對應*/
    animation-duration: 0.5s;    /*動畫持續時間，單位為秒*/
    animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    z-index: 1;
    font-size: 2rem;
  }
}
@media (min-width: 769px) and (max-width: 1024px){
  @keyframes expand {
    from { height: 175px; width: 175px;}
    to { height: 300px; width: 300px;}
  }
  @keyframes tight {
      from { height: 300px;width: 300px; }
      to { height: 175px; width: 175px;}
  }
  .svg_1{
    height: 175px;
    width: 175px;
    position: absolute;
    animation-name: tight;    /*動畫名稱，需與 keyframe 名稱對應*/
    animation-duration: 0.5s;    /*動畫持續時間，單位為秒*/
    animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    font-size: 1.5rem;
  }
  .svg_1:hover{
    height: 300px;
    width: 300px;
    position: absolute;
    animation-name: expand;    /*動畫名稱，需與 keyframe 名稱對應*/
    animation-duration: 0.5s;    /*動畫持續時間，單位為秒*/
    animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    z-index: 1;
    font-size: 2rem;
  }
}
/*computer*/
@media (min-width: 769px){
  .vedio_img{
    height: 400px;
    width: 800px;
    background-repeat: no-repeat;
    background-image: url("../assets/video_bg.png");
    cursor: pointer;
  }
  .imgsize1{
    height:260px;
    width:255px;
  }
  .imgsize2{
    height:260px;
    width:520px
  }
  .imgsize3{
    height:260px;
    width:520px
  }
  .imgsize4{
    height:260px;
    width:255px;
  }
  .bg_cp {
    display: flex;
    height: 600px;
    background-position: center;
    background-size: cover;
    background-image: url("../assets/24943497-2.png");
    justify-content: center;
  }
  .bg_mobile {
    height: 600px;
    display: none;
    background-position: center;
    background-size: cover;
    background-image: url("../assets/30093347-2.jpg");
  }
  .font_size{
    font-size: 1.4rem;
  }
  .positioncss_right{
    right:180px;
  }
  .positioncss_left{
    left:180px;
  }
  .margin_{
    margin:80px auto 0 auto;
  }
  .pro_height{
    height:500px;
    width:100vw
  }
}
/*mobile*/
@media (min-width: 320px) and (max-width:768px) {
  .vedio_img{
    height: 400px;
    width: 800px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/video_bg.png");
    cursor: pointer;
  }
  .imgsize1{
    width:90vw !important;
  }
  .imgsize2{
    width:90vw !important;
  }
  .imgsize3{
    width:90vw !important;
  }
  .imgsize4{
    width:90vw !important;
  }
  .pro_height{
    height:350px;
    width:100vw
  }
  .margin_{
    margin:80px auto 0 auto;
  }
  .bg_cp {
    display: none;
    height: 450px;
    background-position: center;
    background-size: cover;
    background-image: url("../assets/24943497-2.png");
  }
  .bg_mobile {
    height: 450px;
    display: flex;
    background-position: center;
    background-size: cover;
    background-image: url("../assets/30093347-2.jpg");
    justify-content: center;
  }
  .positioncss_right{
    right:0px;
  }
  .positioncss_left{
    left:0px;
  }
  .font_size{
    font-size: 1.4rem;
  }
  @keyframes expand {
    from { height: 150px;width: 150px; }
    to { height: 200px; }
  }
  @keyframes tight {
      from { height: 150px; width: 200px;}
      to { height: 100px; }
  }
  .svg_1{
    height: 150px;
    width: 150px;
    position: absolute;
    background-repeat: no-repeat;
    animation-name: tight;    /*動畫名稱，需與 keyframe 名稱對應*/
    animation-duration: 0.5s;    /*動畫持續時間，單位為秒*/
    animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    font-size: 1.5rem;
  }
  .svg_1:hover{
    height: 200px;
    width: 200px;
    position: absolute;
    background-repeat: no-repeat;
    animation-name: expand;    /*動畫名稱，需與 keyframe 名稱對應*/
    animation-duration: 0.5s;    /*動畫持續時間，單位為秒*/
    animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    z-index: 1;
    font-size: 2rem;
  }
}
.pic{overflow:hidden;}
.pic img{transform:scale(1,1);transition: all 1s ease-out;}
.pic img:hover{transform:scale(1.2,1.2);}
.disable{
  pointer-events: initial;
}
.disabled{
  pointer-events: none;
}
.bg_svg_1{
  background-image: url("../assets/kyowa-01.svg");
}
.bg_svg_2{
  background-image: url("../assets/kyowa-02.svg");
}
.bg_svg_3{
  background-image: url("../assets/kyowa-03.svg");
}
.bg_svg_4{
  background-image: url("../assets/kyowa-04.svg");
}
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
