<template>
  <div id="AboutUs">
    <div  :class="website">
        <div class="bg_cp_AboutUs" >
        </div>
        <div class="d-flex justify-content-center pt-5 pb-4" style="width:100vw">
            <div class="d-flex justify-content-center align-items-center" style="max-width:1200px;min-width:320px;width:100%;color:rgb(234, 85, 4);font-size:5rem;font-weight:bold">公司發展歷史</div>
        </div>
        <div class="d-flex justify-content-center pt-5 pb-4 pl-3 pr-3 pl-md-0 pr-md-0" style="width:100vw">
            <table style="width:80vw;max-width:900px;font-size:2rem">
                <tbody>
                    <tr class="text-left" style="border-bottom:1px solid black;border-top:1px solid black;">
                        <td class="pl-3" style="background-color:#F3F2F1;width:20%">1907年</td>
                        <td class="pl-3" style="width:80%">麒麟啤酒株式會社在日本設立</td>
                    </tr>
                    <tr class="text-left" style="border-bottom:1px solid black;">
                        <td class="pl-3" style="background-color:#F3F2F1;width:20%">1982年</td>
                        <td class="pl-3" style="width:80%">麒麟啤酒株式會社跨足進入醫藥事業領域，開始生化醫藥之硏究開發</td>
                    </tr>
                    <tr class="text-left" style="border-bottom:1px solid black;">
                        <td class="pl-3" style="background-color:#F3F2F1;width:20%">1984年</td>
                        <td class="pl-3" style="width:80%">KIRIN-AMGEN公司之設立</td>
                    </tr>
                    <tr class="text-left" style="border-bottom:1px solid black;">
                        <td class="pl-3" style="background-color:#F3F2F1;width:20%">1987年</td>
                        <td class="pl-3" style="width:80%">在日本、美國開始FILGRASTIM (G-CSF)之臨床試驗</td>
                    </tr>
                    <tr class="text-left" style="border-bottom:1px solid black;">
                        <td class="pl-3" style="background-color:#F3F2F1;width:20%">1991年</td>
                        <td class="pl-3" style="width:80%">FILGRASTIM在曰本、美國[食品暨藥物管理局(Food & Drug Administration, FDA)]、加拿大、 歐洲、澳洲取得製造販賣之許可</td>
                    </tr>
                    <tr class="text-left" style="border-bottom:1px solid black;">
                        <td class="pl-3" style="background-color:#F3F2F1;width:20%">1991年</td>
                        <td class="pl-3" style="width:80%">在台成立麒麟藥品股份有限公司</td>
                    </tr>
                    <tr class="text-left" style="border-bottom:1px solid black;">
                        <td class="pl-3" style="background-color:#F3F2F1;width:20%">1992年</td>
                        <td class="pl-3" style="width:80%">FILGRASTIM在台灣開始販賣</td>
                    </tr>
                    <tr class="text-left" style="border-bottom:1px solid black;">
                        <td class="pl-3" style="background-color:#F3F2F1;width:20%">2001年</td>
                        <td class="pl-3" style="width:80%">KIRIN公司在台灣開始ARANESP® (Darbepoetin alfa)之臨床試驗</td>
                    </tr>
                    <tr class="text-left" style="border-bottom:1px solid black;">
                        <td class="pl-3" style="background-color:#F3F2F1;width:20%">2004年</td>
                        <td class="pl-3" style="width:80%">ARANESP®在台灣開始販賣</td>
                    </tr>
                    <tr class="text-left" style="border-bottom:1px solid black;">
                        <td class="pl-3" style="background-color:#F3F2F1;width:20%">2008年</td>
                        <td class="pl-3" style="width:80%">日本麒麟集團醫藥部門與日本協和發酵工業株式會社合倂，麒麟藥品股份有限公司正式更名爲台灣協和醱酵麒麟股份有限公司</td>
                    </tr>
                    <tr class="text-left" style="border-bottom:1px solid black;">
                        <td class="pl-3" style="background-color:#F3F2F1;width:20%">2009年</td>
                        <td class="pl-3" style="width:80%">NESP®在台灣開始販賣</td>
                    </tr>
                    <tr class="text-left" style="border-bottom:1px solid black;">
                        <td class="pl-3" style="background-color:#F3F2F1;width:20%">2010年</td>
                        <td class="pl-3" style="width:80%">REGPARA在台灣開始販賣</td>
                    </tr>
                    <tr class="text-left" style="border-bottom:1px solid black;">
                        <td class="pl-3" style="background-color:#F3F2F1;width:20%">2011年</td>
                        <td class="pl-3" style="width:80%">由台灣協和麒麟股份有限公司取回MITOMYCIN-C 10MG、LEUNASE 5,000K.U.在台灣之販賣權</td>
                    </tr>
                    <tr class="text-left" style="border-bottom:1px solid black;">
                        <td class="pl-3" style="background-color:#F3F2F1;width:20%">2012年</td>
                        <td class="pl-3" style="width:80%">NEULASTA在台灣開始販賣</td>
                    </tr>
                    <tr class="text-left" style="border-bottom:1px solid black;">
                        <td class="pl-3" style="background-color:#F3F2F1;width:20%">2013年</td>
                        <td class="pl-3" style="width:80%">Nplate在台灣開始販賣</td>
                    </tr>
                    <tr class="text-left" style="border-bottom:1px solid black;">
                        <td class="pl-3" style="background-color:#F3F2F1;width:20%">2013年</td>
                        <td class="pl-3" style="width:80%">Sancuso在台灣開始販賣</td>
                    </tr>
                    <tr class="text-left" style="border-bottom:1px solid black;">
                        <td class="pl-3" style="background-color:#F3F2F1;width:20%">2014年</td>
                        <td class="pl-3" style="width:80%">NESP Injection Plastic Syringe在台灣開始販賣</td>
                    </tr>
                    <tr class="text-left" style="border-bottom:1px solid black;">
                        <td class="pl-3" style="background-color:#F3F2F1;width:20%">2015年</td>
                        <td class="pl-3" style="width:80%">LEUNASE 10,000K.U.在台灣開始販賣</td>
                    </tr>
                    <tr class="text-left" style="border-bottom:1px solid black;">
                        <td class="pl-3" style="background-color:#F3F2F1;width:20%">2015年</td>
                        <td class="pl-3" style="width:80%">ROMIPLATE在台灣開始販賣</td>
                    </tr>
                    <tr class="text-left" style="border-bottom:1px solid black;">
                        <td class="pl-3" style="background-color:#F3F2F1;width:20%">2018年</td>
                        <td class="pl-3" style="width:80%">ROMIPLATE在台灣開始販賣</td>
                    </tr>
                    <tr class="text-left" style="border-bottom:1px solid black;">
                        <td class="pl-3" style="background-color:#F3F2F1;width:20%">2019年</td>
                        <td class="pl-3" style="width:80%">台灣協和醱酵麒麟股份有限公司更名爲台灣協和麒麟股份有限公司</td>
                    </tr>
                    <tr class="text-left" style="border-bottom:1px solid black;">
                        <td class="pl-3" style="background-color:#F3F2F1;width:20%">2020年</td>
                        <td class="pl-3" style="width:80%">台灣協和麒麟股份有限公司自2020年4月搬遷至新址</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="d-flex justify-content-center pt-5 pb-4" style="width:100vw">
            <div class="d-flex justify-content-center align-items-center" style="max-width:1200px;min-width:320px;width:100%;color:rgb(234, 85, 4);font-size:5rem;font-weight:bold">公司目標</div>
        </div>
        <div class="d-flex justify-content-center pt-5 pb-4 pl-3 pr-3 pl-md-0 pr-md-0" style="width:100vw">
            <div class="d-flex justify-content-center align-items-center" style="color:#5D6164;font-size:2rem">日本麒麟控股集團下所屬協和麒麟公司，是一個以研究為基礎的生命科學事業體，<br/>且專精於生物技術。我們不斷致力於尖端生物技術領域的發展，並使用於製藥流程當中，<br/>以期望能研發出更符合患者所需的藥品，改善病患的生活品質。</div>
        </div>
        <div class="d-flex justify-content-center pt-5 pb-4" style="width:100vw">
            <div class="d-flex justify-content-center align-items-center" style="max-width:1200px;min-width:320px;width:100%;color:rgb(234, 85, 4);font-size:5rem;font-weight:bold">我們的願景</div>
        </div>
        <div class="d-flex justify-content-center pt-5 pb-4 pl-3 pr-3 pl-md-0 pr-md-0" style="width:100vw">
            <div class="d-flex justify-content-center align-items-center" style="color:#5D6164;font-size:2rem" v-html="content[0].content"></div>
            
        </div>
        <div class="d-flex justify-content-center pt-5 pb-4 pl-3 pr-3 pl-md-0 pr-md-0" style="width:100vw">
            <div v-if="show" class="d-flex justify-content-center align-items-center" style="color:#5D6164;font-size:2rem" v-html="content[1].content"></div>
        </div>
        <div @click="SHOW_MORE_click()" style="width:100vw;font-weight: 600;color:#5d6164;height:25px;cursor:pointer;font-size:2rem;padding-bottom: 120px;" class="row d-flex justify-content-center ">SHOW MORE<div :class="expand" class="ml-4 mt-1" style="color:#5d6164;"></div></div>
        <div class="displayM" style="max-width:1500px;position:relative;width:100%;height:800px;overflow:hidden">
            <img class="Fourcss displayC" style="top:0;left:0;" src="../assets/index_img_corevalue_01.png">
            <img class="displayM" style="height:400px;top:0;left:0" src="../assets/index_img_corevalue_01_M.png">
            <img @mouseover="Hovercorevalue()" @mouseleave="Hovercorevalue()" class="Fourcss" :src="corevalue_src" style="top:350px;right:0">
            <img @mouseover="Hovercorevalue03()" @mouseleave="Hovercorevalue03()" class="Fourcss corevalue03" :src="corevalue03_src" style="bottom:100px;left:-50px">
            <img @mouseover="Hovercorevalue04()" @mouseleave="Hovercorevalue04()" class="Fourcss" :src="corevalue04_src" style="bottom:0px;right:-25px">
        </div>
        <div class="bg_child_AboutUs" >
            <div class="displayC" style="max-width:1500px;position:relative;width:100%;">
                <img class="Fourcss displayC" style="top:0;left:10%" src="../assets/index_img_corevalue_01.png">
                <img class="Fourcss displayM" style="top:0;left:0" src="../assets/index_img_corevalue_01_M.png">
                <img @mouseover="Hovercorevalue()" @mouseleave="Hovercorevalue()" class="Fourcss" :src="corevalue_src" style="top:100px;right:0">
                <img @mouseover="Hovercorevalue03()" @mouseleave="Hovercorevalue03()" class="Fourcss corevalue03" :src="corevalue03_src" style="bottom:100px;left:10%">
                <img @mouseover="Hovercorevalue04()" @mouseleave="Hovercorevalue04()" class="Fourcss" :src="corevalue04_src" style="bottom:0px;right:150px">
            </div>
        </div>
        <div class="d-flex justify-content-center pt-5 pb-4" style="width:100vw">
            <div class="d-flex justify-content-center align-items-center" style="max-width:1200px;min-width:320px;width:100%;color:rgb(234, 85, 4);font-size:5rem;font-weight:bold">總經理的話</div>
        </div>
        <div class="d-flex justify-content-center pt-5 pb-5" style="width:100vw">
            <div @click="ShowExtraContent()" class="row p-0 m-0 d-flex justify-content-center"  style="position:relative;max-width:1200px;min-width:350px;width:100%;cursor:pointer">
                <div class="pic col-11 col-md-4 p-0">
                    <img class="p-0 m-0 w-100" src="../assets/gm.png">
                    <p class="p-3 m-0" style="background-color: #EA5504;color: white;font-size: 2rem;font-weight: bold;">總經理：古谷健二</p>
                </div>
                <div class="col-11 col-md-8 p-5 pt-md-3 pb-md-3 pt-xl-5 pb-xl-5 m-0 font_size_content" style="background-color:#EA5504;color:white;line-height:30px;text-align:justify">
                    您好:<br/>我是台灣協和麒麟公司總經理 古谷健二，歡迎你們的到訪。 敝公司是日本麒麟控股集團下所屬協和麒麟公司的海外子公司，於1991年成立於台北市，另分別於台中市與高雄市設立辦公室。公司的產品專注於血液腫瘤科與腎臟科的治療領域。2019年度我們即將拓展到皮膚科的領域。 公司的願景是追求生命科學與技術的進步，透過創造新價值對台灣人之健康與安泰帶來貢獻。<br />
                    <div @click="ShowExtraContent()">→ English Version</div>
                </div>
            </div>
        </div>
        <!-- <div class="d-flex justify-content-center pt-5 pb-4" style="width:100vw">
            <div class="d-flex justify-content-center align-items-center" style="max-width:1200px;min-width:320px;width:100%;color:rgb(234, 85, 4);font-size:5rem;font-weight:bold">公司發展史</div>
        </div> -->
        <!-- <table class="table table-hover" style="max-width:1200px;min-width:350px;width:100%">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table> -->
        <Footer-bg class="mt-5" style="background-color:white" @Click_Title_trigger="Click_Title2"></Footer-bg>
    </div>
    <div :class="extra_content" style="padding:10%;text-align:left;font-size:1.5rem;">
        <div style="overflow:auto;height:60vh;color:white;text-align:justify;"> 
            Welcome to visit our official website. I am Kenji Furuya, General Manager of Kyowa Kirin (Taiwan) Co., Ltd.<br/>which is one of subsidiary companies of Kyowa Kirin (Japan) Co., Ltd.<br/>under Kirin Holdings, (Japan) Co., Ltd. We established in Taipei since 1991, located two branches in Taichung City and Kaohsiung City.<br/>Our products focusing on two major category treatment fields, including oncology and nephrology.<br/>In 2019 we will expand the field of dermatology.<br/>We strive to contribute to the health and well-being of people in Taiwan by creating new value through the pursuit of advances in life sciences and technologies.
            <div @click="CloseExtraContent()" class="d-flex justify-content-center align-items-center mt-5" style="font-size: 14px;height:40px;width:80px;background-color:#EE7736;border-radius: 30px;;color:white;cursor:pointer;">close</div>
        </div>
    </div>
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
        if(this.show){
            this.show = false
            this.expand = 'expand'
        }else{
            this.show = true
            this.expand = 'unexpand'
        }
    },
    Hovercorevalue(){
        if(this.corevalue_src == require('@/assets/index_img_corevalue_05.png')){
            this.corevalue_src = require('@/assets/index_img_corevalue_02.png')
        }else{
            this.corevalue_src = require('@/assets/index_img_corevalue_05.png')
        }
    },
    Hovercorevalue03(){
        if(this.corevalue03_src == require('@/assets/index_img_corevalue_06.png')){
            this.corevalue03_src = require('@/assets/index_img_corevalue_03.png')
        }else{
            this.corevalue03_src = require('@/assets/index_img_corevalue_06.png')
        }
    },
    Hovercorevalue04(){
        if(this.corevalue04_src == require('@/assets/index_img_corevalue_07.png')){
            this.corevalue04_src = require('@/assets/index_img_corevalue_04.png')
        }else{
            this.corevalue04_src = require('@/assets/index_img_corevalue_07.png')
        }
    },
    ShowExtraContent(){
        this.extra_content = 'extra_content_open'
        this.website='website_disabled'
    },
    CloseExtraContent(){
        this.extra_content = 'extra_content_close'
        this.website='website'
    }
  },
  data(){
      return{
          content:[
            {content:'在我們的周遭有無數珍貴的生命，<br/>是在祝福中誕生，在關愛中成長，<br/>心中充滿著夢想並追求著幸福的生命。<br/>我們是為了地球上所有最珍貴的生命而工作—<br/>我們深切的了解並銘記在心。<br/>正因為如此，製藥企業對我們而言就是代表無限大的可能。'}
          ,{content:'<br/>請相信我們自己，相信我們的力量，相信我們自己所積累的寶貴經驗。<br/>我們雖然不是大型企業，但我們有著不輸給任何大型企業的許多特質。<br/>我們可引以為傲的無可比擬的悠久歷史、<br/>無可取代的技術，還有別處所沒有的優秀人材。<br/>讓我們擁有不懼困難的勇氣，擁有勇於突破常識的熱情。<br/>革新並不是指單純的成長，而是飛躍式的，插上了雙翼的成長。<br/>不過，這對雙翼永遠不會屬於滿足現狀的人。<br/>我們不要只是生產藥品，更要讓人們露出微笑，為他們的生命帶來光亮。<br/>作為一個人，有著多麼強烈的求生欲望，<br/>每個人都是被摯愛的人多麼深切的關愛著。<br/>醫療從事人員又是多麼期望能夠挽救一條生命。<br/>保持接納的態度，使你的感受更為敏銳。<br/>我們要成為世界第一關愛生命的企業。<br/>拯救世界不僅只需要強大，更需要的是關愛的心。<br/><br/><br/>讓我們成為最優秀的團隊。無論是多麼優秀的人材，<br/>如果只有一個人的話，就會顯得多麼薄弱無力，並難免出差錯。<br/>眾人齊心協力就會創造出卓越的成果。<br/>我們要向世界展示這團結合作的力量。<br/>我們要加緊腳步—無需過於匆促，但我們一定不能停止不動。<br/>無論何時保持真誠—願此成為我們的誓言。<br/>我們生產藥品，我們與人們的生命共行。<br/>我們的工作會給人們帶來幸福，請時刻不要忘記這一點。<br/>我們各自出生在不同之處、有著不同的經歷，猶如奇蹟一般，<br/>與這個工作、與這團隊、與這個公司相逢。請為此感到喜悅。<br/>心存感謝那些你所擁有的，在你所被賦予的使命中傾注心血，<br/>為你的工作感到驕傲，那是拯救珍貴生命的工作。<br/><br/><br/>這就是我們全體成員所組成的協和麒麟。<br/><br/><br/>與您共同守護 這僅有一次的生命<br/><br/>'}
          ],
          show:false,
          extra_content:'extra_content',
          website:'website',
          expand:'expand',
          corevalue_src:require('@/assets/index_img_corevalue_02.png'),
          corevalue03_src:require('@/assets/index_img_corevalue_03.png'),
          corevalue04_src:require('@/assets/index_img_corevalue_04.png'),
      }
  }
}
</script>

<style>
.pic{overflow:hidden;}
.pic img{transform:scale(1,1);transition: all 1s ease-out;}
.pic img:hover{transform:scale(1.2,1.2);}
.website{
    opacity: 1;
    pointer-events: initial;
}
.website_disabled{
    opacity: 0.75;
    pointer-events: none;
}
.expand{
  height:12.5px;
  width:12.5px;
  transform:rotate(45deg);
  border-right: 2px solid #5d6164;
  border-bottom: 2px solid #5d6164;
}
.unexpand{
  height:12.5px;
  width:12.5px;
  position: relative;
  top: 10px;
  transform:rotate(225deg);
  border-right: 2px solid #5d6164;
  border-bottom: 2px solid #5d6164;
}
/*computer*/
@media (min-width: 769px){
    .corevalue03{
        left: 0;
    }
    .displayC{
        display: block;
    }
    .displayM{
        display: none;
    }
    .Fourcss{
        position: absolute;
        height: 300px;
        animation-name: Fourcssunhover;    /*動畫名稱，需與 keyframe 名稱對應*/
        animation-duration: 0.5s;    /*動畫持續時間，單位為秒*/
        animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    }
    .Fourcss:hover{
        position: absolute;
        height: 400px;
        animation-name: Fourcsshover;    /*動畫名稱，需與 keyframe 名稱對應*/
        animation-duration: 0.5s;    /*動畫持續時間，單位為秒*/
        animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    }
    @keyframes Fourcsshover {
        from { height: 300px; }
        to { height: 400px; }
    }
    @keyframes Fourcssunhover {
        from { height: 400px; }
        to { height: 300px; }
    }
    .font_size_content{
        font-size: 2rem;
    }
    .bg_cp_AboutUs {
        display: flex;
        height: 400px;
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
        position: relative;
    }
    .extra_content_open{
        position:fixed;
        top:0;
        right: 0vw;
        animation-name: MoveLeft;
        z-index:3;
        height:100vh;
        width:50vw;
        background-color:#ea5504;
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
        animation-name: MoveLeft;    /*動畫名稱，需與 keyframe 名稱對應*/
        animation-duration: 0.5s;    /*動畫持續時間，單位為秒*/
        animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    }
    .extra_content{
        position:fixed;
        top:0;
        right: -50vw;
        z-index:3;
        height:100vh;
        width:50vw;
        background-color:#ea5504;
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
    }
    .extra_content_close{
        position:fixed;
        top:0;
        right: -50vw;
        z-index:3;
        height:100vh;
        width:50vw;
        background-color:#ea5504;
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
        animation-name: MoveRight;    /*動畫名稱，需與 keyframe 名稱對應*/
        animation-duration: 0.5s;    /*動畫持續時間，單位為秒*/
        animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    }
}
/*mobile*/
@media (min-width: 320px) and (max-width:768px) {
    .corevalue03{
        left: -50px;
    }
    .displayC{
        display: none;
    }
    .displayM{
        display: block;
    }
    .Fourcss{
        position: absolute;
        height: 175px;
        animation-name: Fourcssunhover;    /*動畫名稱，需與 keyframe 名稱對應*/
        animation-duration: 0.5s;    /*動畫持續時間，單位為秒*/
        animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    }
    .Fourcss:hover{
        position: absolute;
        height: 225px;
        animation-name: Fourcsshover;    /*動畫名稱，需與 keyframe 名稱對應*/
        animation-duration: 0.5s;    /*動畫持續時間，單位為秒*/
        animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    }
    @keyframes Fourcsshover {
        from { height: 175px; }
        to { height: 225px; }
    }
    @keyframes Fourcssunhover {
        from { height: 225px; }
        to { height: 175px; }
    }
    .font_size_content{
        font-size: 2rem;
    }
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
    .extra_content_open{
        position:fixed;
        top:0;
        right: 0vw;
        z-index:3;
        height:100vh;
        width:90vw;
        background-color:#ea5504;
        animation-name: MoveLeft_Mobile;    /*動畫名稱，需與 keyframe 名稱對應*/
        animation-duration: 0.5s;    /*動畫持續時間，單位為秒*/
        animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    }
    .extra_content{
        position:fixed;
        top:0;
        right: -90vw;
        z-index:3;
        height:100vh;
        width:90vw;
        background-color:#ea5504;
    }
    .extra_content_close{
        position:fixed;
        top:0;
        right: -90vw;
        z-index:3;
        height:100vh;
        width:90vw;
        background-color:#ea5504;
        animation-name: MoveRight_Mobile;    /*動畫名稱，需與 keyframe 名稱對應*/
        animation-duration: 0.5s;    /*動畫持續時間，單位為秒*/
        animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    }
}
@keyframes MoveLeft {
    from { right: -50vw; }
    to { right: 0vw; }
}
@keyframes MoveRight {
    from { right: 0vw; }
    to { right: -50vw; }
}
@keyframes MoveLeft_Mobile {
    from { right: -90vw; }
    to { right: 0vw; }
}
@keyframes MoveRight_Mobile {
    from { right: 0vw; }
    to { right: -90vw; }
}

#AboutUs {
    padding-top: 52px;
}
</style>
