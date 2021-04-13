<template>
    <div class="Product">
      <div class="bg_cp" >
        <div style="position:relative;top:150px;color:white;max-width:800px;width:100%;height:200px;min-width:350px;text-align:left;"></div>
      <!-- </div>
      <div class="bg_mobile">
        <div style="position:relative;top:80px;color:white;max-width:345px;width:100%;min-width:320px;height:200px;text-align:left;"></div> -->
      </div>
      <div class="d-flex justify-content-center pt-5 pb-4" style="width:100vw">
        <div class="d-flex justify-content-center align-items-center" style="max-width:1000px;min-width:320px;width:100%;color:rgb(234, 85, 4);font-size:5rem;font-weight:bold">專注的領域</div>
      </div>
        <div class="d-flex justify-content-center" style="width:100vw">
        <div class="d-flex justify-content-center align-items-center p-0 pl-5 pr-5" style="max-width:1000px;min-width:320px;width:100%;color:#5D6164;font-size:2rem;">公司的產品專注於血液腫瘤科，腎臟科與免疫科的治療領域。</div>
      </div>
      <div class="d-flex justify-content-center" style="height:600px;width:100vw">
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
      <div class="bg_middle_PCmobile">
        <div v-html="Title" style="position:relative;margin-top: 10vh;color:white;width:100%;height:200px;text-align:center;"></div>
      </div>
      <div class="container" style="margin: 0 auto;">
         <div class="box-hdg2-wrapper" style="margin: auto;justify-items: center; width: 800px;padding-bottom: 5h;">
             <div class="row">
                <div class="box-image col-4">
                    <img src="../assets/index_img_slide_crysvita.jpg" alt="CRYSVITA®">
                </div>
                <div class="box-text col-7 p-5">
                    <h3 class="hdg-lv2-05">CRYSVITA®</h3>
                    <font> 適應症：性聯遺傳型低磷酸鹽症(X-linked hypophosphatemia，XLH)：
                        適用於1歲以上兒童與青少年，及合併有XLH相關骨骼疾病之成人。</font>
                </div>
             </div>
             <div class="row">
                <div class="box-image col-4">
                    <img src="../assets/index_img_slide_crysvita.jpg" alt="CRYSVITA®">
                </div>
                <div class="box-text col-7 p-5">
                    <h3 class="hdg-lv2-05">GRAN®</h3>
                    <p> (1)動員造血幹細胞至周邊血中。</p>
                    <p> (2)促進造血幹細胞移植時嗜中性白血球數的增加。</p>
                    <p> (3)癌症化學療法所引起之嗜中性白血球減少症。</p>
                    <p> (4)骨髓發育不良症候群的嗜中性白血球缺乏症。</p>
                    <p> (5)先天性、特異性嗜中性白血球缺乏症。 </p>
                </div>
             </div>
             <div class="row">
                <div class="box-image col-4">
                    <img src="../assets/index_img_slide_crysvita.jpg" alt="CRYSVITA®">
                </div>
                <div class="box-text col-7 p-5">
                    <h3 class="hdg-lv2-05">LUMICEF®</h3>
                    <p> 適應症：</p>
                    <p> (1)治療適合接受全身性治療的中至重度斑塊性乾癬成人病人。</p>
                    <p> (2)治療適合接受全身性治療的膿疱性乾癬之成人病人。</p>
                    <p> (3)治療對疾病緩解型抗風濕性藥物(DMARDs)無效或無法耐受的</p>
                    <p> 活動性乾癬性關節炎成人病人。</p>
                </div>
             </div>
             <div class="row">
                <div class="box-image col-4">
                    <img src="../assets/index_img_slide_crysvita.jpg" alt="CRYSVITA®">
                </div>
                <div class="box-text col-7 p-5">
                    <h3 class="hdg-lv2-05">NESP®</h3>
                    <p>  適應症：治療與慢性腎臟功能失調有關的貧血症狀或因此而需要輸血的患者，</p>
                    <p>  治療與癌症化學治療有關的症狀性貧血。</p>
                </div>
             </div>
             <div class="row">
                <div class="box-image col-4">
                    <img src="../assets/index_img_slide_crysvita.jpg" alt="CRYSVITA®">
                </div>
                <div class="box-text col-7 p-5">
                    <h3 class="hdg-lv2-05">Sancuso®</h3>
                    <p>  適應症：</p>
                    <p>  預防連續5天使用中度及/或高度致吐性化學療法療程的病人</p>
                    <p>  所引起的噁心及嘔吐。 </p>
                </div>
             </div>
             <div class="row">
                <div class="box-image col-4">
                    <img src="../assets/index_img_slide_crysvita.jpg" alt="CRYSVITA®">
                </div>
                <div class="box-text col-7 p-5">
                    <h3 class="hdg-lv2-05">REGPARA®</h3>
                    <p> 適應症：</p>
                    <p> 治療透析患者的次發性副甲狀腺機能亢進。</p>
                </div>
             </div>
             <div class="row">
                <div class="box-image col-4">
                    <img src="../assets/index_img_slide_crysvita.jpg" alt="CRYSVITA®">
                </div>
                <div class="box-text col-7 p-5">
                    <h3 class="hdg-lv2-05">Romiplate®</h3>
                    <p> 適應症：</p>
                        <p> (1)用於治療在脾臟切除後且對於其他治療(例如:類固醇、免疫球蛋白等)失敗之成年慢性自發性(免疫性)血小板缺乏紫斑症(ITP)患者，或對於不適合進行脾臟切除之成年慢性自發性(免疫性)血小板缺乏紫斑症(ITP)患者之第二線治療。</p>
                        <p> (2)適用在對免疫抑制療法反應不佳的嚴重再生不良性貧血病人。</p>
                </div>
             </div>
             <div class="row">
                <div class="box-image col-4">
                    <img src="../assets/index_img_slide_crysvita.jpg" alt="CRYSVITA®">
                </div>
                <div class="box-text col-7 p-5">
                    <h3 class="hdg-lv2-05">Neulasta®</h3>
                    <font> 適應症：
                        適用於非骨髓性癌症患者在接受易引起臨床上有顯著發生率的嗜中性白血球減少症合併發燒之骨髓抑制性抗癌藥物治療時，以降低嗜中性白血球減少症合併發燒為表現之感染發生率。 </font>
                </div>
             </div>
             <div class="row">
                <div class="box-image col-4">
                    <img src="../assets/index_img_slide_crysvita.jpg" alt="CRYSVITA®">
                </div>
                <div class="box-text col-7 p-5">
                    <h3 class="hdg-lv2-05">Leunase®</h3>
                    <font>適應症：
                        適用於非骨髓性癌症患者在接受易引起臨床上有顯著發生率的嗜中性白血球減少症合併發燒之骨髓抑制性抗癌藥物治療時，以降低嗜中性白血球減少症合併發燒為表現之感染發生率。</font>
                </div>
             </div>
         </div> 
      </div>
      <Footer-bg></Footer-bg>
    </div>
  </template>
  
  <script>
  import Footer from './Footer'
  export default {
      components: {
      'Footer-bg':Footer
    },
    name: 'Product',
    methods:{
      ToNews(){
        this.$router
        .push({
          path: "News",
        })
        .catch(err => {
          console.log(err)
        })
      }
    },
    data () {
      return {
        Title:'<font style="font-size:5rem;font-weight:bold;text-shadow: 0px 0px 5px #3e6db3;">我們的產品</font><br/><br/>'
        // // +'<font style="font-size:2rem;text-shadow: 0px 0px 5px #3e6db3;">我們是優秀的團隊，共同為全人類在腫瘤及腎臟學領域追求最高的幸福<br/>您全家的平安快樂就是我們最大的成就</font><br/><br/>'
        // // +'<div style="font-size:1.5rem;background-color:white;width:260px;height:40px;border-radius:40px;cursor:pointer;color:rgb(234, 85, 4);display: flex;justify-content: center;align-items: center;position:relative;"><font>關於我們</font><font style="position:absolute;right:20px">➝</font></div>',
        // // NewInformation:'最新資訊',
        // NewsListObj:[
        //   {date:'2020年4月1日',content:'[台灣協和麒麟] 台灣協和麒麟股份有限公司自2020年4月搬遷至新址',detail:'台灣協和麒麟股份有限公司自2020年4月15日起在新址正式營運'},
        //   {date:'2019年9月1日',content:'[台灣協和麒麟] 台灣協和醱酵麒麟股份有限公司更名爲台灣協和麒麟股份有限公司',detail:'台灣協和醱酵麒麟股份有限公司自2019年9月1日起更名爲台灣協和麒麟股份有限公司'},
        //   {date:'2018年6月25日',content:'[台灣協和醱酵麒麟] 公司新藥Lumicef「立美西膚皮下注射劑210毫克」',detail:'Lumicef「立美西膚」自2018年6月25日開始於台灣販售。'},
        //   {date:'2016年3月17日',content:'[新聞澄清] KH NeoChem Co., Ltd. 並非 本公司之日本總公司(KHK)集團的公司。',detail:'1. 近日新聞報導，中油 與 日商KH NeoChem Co., Ltd. 及 兆豐銀簽署合資協議書，共同在高雄臨海工業區投資，成立「曄揚股份有限公司」興建石化工廠，預定108年完工。上述日商KH NeoChem Co., Ltd. 並非 KHK集團的公司。',detail_:'2.KHK原本100%轉投資 Kyowa Chemical Co., Ltd.，但在2011年3月3日已將該公司賣給了KJ Holding Co., Ltd.，而KJ Holding Co., Ltd.於2012年4月1日更名為KH NeoChem Co., Ltd.。因此，KH NeoChem Co., Ltd. 與 KHK集團無任何關係。'},
        //   {date:'2016年1月25日',content:'[台灣協和醱酵麒麟] 公司已上市藥品-恩沛板注射用凍晶粉末，英文商品名將以Romiplate 取代Nplate 之現有品項。',detail:'1.公司已上市藥品-恩沛板注射用凍晶粉末，英文商品名將以Romiplate 取代Nplate 之現有品項。',detail_:'2.「恩沛板注射用凍晶粉末（Romiplate 250μg injection）」藥品許可證上之英文商品名，更名自2015年4月7日起生效，許可證字號與健保碼均無改變，相關資料請參見「衛生福利部食品藥物管理署」與「衛生福利部中央健康保險署」網站，謝謝。'},
        //   {date:'2014年8月13日',content:'[台灣協和醱酵麒麟] 公司已上市藥品-耐血比注射劑，將以0.5ml 取代1.0ml 之現有品項。',detail:'1.公司已上市藥品-耐血比注射劑，將以0.5ml 取代1.0ml 之現有品項。',detail_:'2.「耐血比注射劑 20，40，60 微克 / 0.5 毫升（NESP Injection Plastic Syringe 20，40，60 mcg / 0.5 ml）」之健保價自2014年8月1日起生效，相關資料請參見「衛生福利部中央健康保險署」網站，謝謝。'},
        //   {date:'2013年11月20日',content:'[台灣協和醱酵麒麟] 公司新藥Sancuso「貼固守」上市',detail:'Sancuso「貼固守」自2013年11月18日開始於台灣販售。'},
        //   {date:'2013年10月31日',content:'[台灣協和醱酵麒麟] 公司新藥Nplate「恩沛板」上市',detail:'Nplate「恩沛板」自2013年10月21日開始於台灣販售。'},
        //   {date:'2013年8月30日',content:'[台灣協和醱酵麒麟] 公司新藥「貼固守穿皮貼片劑」與「恩沛板」之健保價生效',detail:'1. 本公司新藥「貼固守穿皮貼片劑（Sancuso transdermal patch 3.1mg/24hours）」之健保價自2013年9月1日起生效，相關資料請參見「衛生福利部中央健康保險署」網站，謝謝。',detail_:'2. 本公司新藥「恩沛板 注射用凍晶粉末（Nplate injection）」之健保價自2013年9月1日起生效，相關資料請參見「衛生福利部中央健康保險署」網站，謝謝。'},
        //   {date:'2013年6月28日',content:'[台灣協和醱酵麒麟] 公司網站即將上線',detail:'台灣協和醱酵麒麟股份有限公司將於2013年6月28日起正式開放公司網站(Kyowa Hakko Kirin Taiwan)。'},
        //   {date:'2013年6月28日',content:'[台灣協和醱酵麒麟] 公司即將有新藥在台灣推廣上市',detail:'台灣協和醱酵麒麟公司將於近期內上市推廣兩項新藥，分別為(1)中文名:貼固守穿皮貼片劑，英文名:Sancuso transdermal patch 3.1mg/24hour(Granisetron);(2)中文名:恩沛板注射用凍晶粉末，英文名:Nplate injection(Romiplostim)。'
        //   },
        // ],
        // ShowNum:5
      }
    }
  }
  </script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    * {
        font-family: Arial, "微軟正黑體", sans-serif;
    }
    font,p {
        font-size: 1.8rem;
        line-height: 1.5;
    }
    h3{
        font-size: 2.3rem;
        margin-bottom: 1vh;
        color: #ea5504;
    }
    .row {
        margin: 3vh;
    }
    .box-image{
        margin-right: 20px;
        /* background-color: rgb(181, 253, 203); */
    }
    .box-text {
        text-align: left;
        /* background-color: rgb(242, 255, 182); */
    }

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
    .str-section {
        max-width: 800px;
        margin: 0 auto;
        background-color: blue;
    }
}
/*computer*/
@media (min-width: 769px){
    .bg_cp {
        display: flex;
        height: 600px;
        background-position: center;
        background-size: cover;
        background-image: url("../assets/29595215-2.png");
        justify-content: center;
    }
    .bg_middle_PCmobile {
        min-height: 300px;
        display: flex;
        background-position: center;
        background-size: cover;
        background-image: url("../assets/index_bg_section_blue_01.png");
    }
    .str-section{
        max-width: 800px
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
}
/*mobile*/
    @media (min-width: 320px) and (max-width:768px) {
    .margin_{
        margin:80px auto 0 auto;
    }
    .bg_cp {
        display: flex;
        height: 300px;
        background-position: center;
        background-size: cover;
        background-image: url("../assets/29595215-2.png");
        justify-content: center;
    }
    /* .bg_mobile {
        height: 450px;
        display: flex;
        background-position: center;
        background-size: cover;
        background-image: url("../assets/30093347-2.jpg");
        justify-content: center;
    } */
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
        animation-name: tight;    /*動畫名稱，需與 keyframe 名稱對應*/
        animation-duration: 0.5s;    /*動畫持續時間，單位為秒*/
        animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
        font-size: 1.5rem;
    }
    .svg_1:hover{
        height: 200px;
        width: 200px;
        position: absolute;
        animation-name: expand;    /*動畫名稱，需與 keyframe 名稱對應*/
        animation-duration: 0.5s;    /*動畫持續時間，單位為秒*/
        animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
        z-index: 1;
        font-size: 2rem;
    }
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
    .Product{
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
