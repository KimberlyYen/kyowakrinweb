<template>
    <div class="Product">
      <div class="bg_cp" >
        <div style="position:relative;top:150px;color:white;max-width:800px;width:100%;height:200px;min-width:350px;text-align:left;"></div>
      </div>
      <div class="d-flex justify-content-center pt-5 pb-4" style="width:100vw">
        <div class="d-flex justify-content-center align-items-center" style="max-width:1000px;min-width:320px;width:100%;color:rgb(234, 85, 4);font-size:5rem;font-weight:bold">專注的領域</div>
      </div>
      <div class="d-flex justify-content-center" style="padding-bottom: 4vh;width:100vw">
        <div class="d-flex justify-content-center align-items-center p-0 pl-5 pr-5 pb-5" style=";max-width:1000px;min-width:320px;width:100%;color:#5D6164;font-size:2rem;">公司的產品專注於血液腫瘤科，腎臟科與免疫科的治療領域。</div>
      </div>
      <div class="d-flex justify-content-center" style="height:55vh;width:100vw">
        <div  style="position:relative;max-width:1200px;min-width:350px;width:100%;">
          <div class="d-flex justify-content-center" style="position:relative;top:140px;width:100%;height:100%">
            <div @click="Click_Title(1)"  style="font-size:1.5rem;background-color:#F3F3F3;width:260px;height:40px;border-radius:40px;cursor:pointer;color:rgb(234, 85, 4);display: flex;justify-content: center;align-items: center;position:relative;"><font>關於我們</font><font style="position:absolute;right:20px">➝</font></div>
          </div>
          <div class="svg_1 bg_svg_1" style="left:0px;top:0"><font style="color:white;position:relative;top:20%;">Nephrology</font></div>
          <div class="svg_1 bg_svg_2 positioncss_left" style="top:180px" ><font style="color:white;position:relative;top:50%;">Oncology</font></div>
          <div class="svg_1 bg_svg_3 positioncss_right" style="top:180px" ><font style="color:white;position:relative;top:20%;">Central nervous<br /> system (CNS)</font></div>
          <div class="svg_1 bg_svg_4" style="right:0px;top:0" ><font style="color:white;position:relative;top:40%;">Immunology <br />& Allergy</font></div>
        </div>
      </div>

      <button v-bind:class="div0_1" style="padding: 5% 5% 10% 13%; text-align: left">
        <div class="box_detail_Layout" style="overflow:scroll; height:100% ; width:80vw"> 
            <font style="color:white">
                <div class="d-flex">    
                    <div class="box_image_detail">
                        <img src="../assets/index_img_slide_crysvita.jpg" alt="GRAN®">
                    </div>
                    <div class="box_text_detail">
                        <div>
                            【劑量一】<br/>
                            <br/>
                            中文品名<br/>
                            
                            惠爾血添注射劑 75<br/>
                            英文品名<br/>
                            
                            Filgrastim Injection 75μg/0.3ml<br/>
                            主成份名<br/>
                            
                            FILGRASTIM<br/>
                            許可證字號<br/>
                            
                            衛署菌疫輸字第 000712 號<br/>
                            
                            藥品仿單(另開衛福部食藥署視窗)<br/>
                            藥品詳細資料(另開衛福部食藥署視窗)<br/>
                            <br/>
                        </div>
                    </div>
                </div>
                <div class="d-flex">    
                    <div class="box_image_detail ">
                        <img src="../assets/index_img_slide_crysvita.jpg" alt="GRAN®">
                    </div>
                    <div class="box_text_detail ">
                        <div>
                            【劑量二】<br/>
                        <br/>
                        中文品名<br/>
                            
                        惠爾血添注射劑 150<br/>
                        英文品名<br/>
                        
                        Filgrastim Injection 150μg/0.6ml<br/>
                        主成份名<br/>
                        
                        FILGRASTIM<br/>
                        許可證字號<br/>
                        
                        衛署菌疫輸字第 000711 號<br/>
                        
                        藥品仿單(另開衛福部食藥署視窗)<br/>
                        藥品詳細資料(另開衛福部食藥署視窗)<br/>
                        <br/>
                        </div>
                    </div>
                </div>
                <div class="d-flex">    
                    <div class="box_image_detail ">
                        <img src="../assets/index_img_slide_crysvita.jpg" alt="GRAN®">
                    </div>
                    <div class="box_text_detail ">
                        <div>
                            【劑量三】<br/>
                            中文品名<br/>
                                
                            惠爾血添 M300<br/>
                            英文品名><br/>
                            
                            Filgrastim Injection M300 300μg/0.7ml<br/>
                            主成份名<br/>
                            
                            FILGRASTIM<br/>
                            許可證字號<br/>
                            
                            衛署菌疫輸字第 000670 號<br/>
                            
                            藥品仿單(另開衛福部食藥署視窗)<br/>
                            藥品詳細資料(另開衛福部食藥署視窗)<br/>
                            <br/>
                        </div>
                    </div>
                </div>
            </font>
        </div>
        <div @click="close_detail" class="d-flex justify-content-center align-items-center mt-5" style="font-size: 14px;height:40px;width:80px;background-color:#EE7736;border-radius: 30px;;color:white;cursor:pointer;">close</div>
        </button>

      <div class="bg_middle_PCmobile">
        <div v-html="Title" style="position:relative;margin-top: 10vh;color:white;width:100%;height:200px;text-align:center;"></div>
      </div>
      <div class="container" style="margin: 0 auto ;padding: 0px;">
         <div class="box-hdg2-wrapper" style="margin: auto;justify-items: center;padding-bottom: 5h;">
             <div class="row">
                <div class="box-image col-md-4">
                    <img src="../assets/index_img_slide_crysvita.jpg" alt="CRYSVITA®">
                </div>
                <div class="box-text col-sm-12 col-md-7 p-5">
                    <h3 @click="show_detail"> CRYSVITA® </h3>
                    <p> 適應症：</p>
                    <p> 性聯遺傳型低磷酸鹽症(X-linked hypophosphatemia，XLH)：適用於1歲以上兒童與青少年，及合併有XLH相關骨骼疾病之成人。</p>
                </div>
            </div>
             <div class="row">
                <div class="box-image col-md-4">
                    <img src="../assets/index_img_slide_gran.jpg" alt="GRAN®">
                </div>
                <div class="box-text col-sm-12 col-md-7 p-5">
                    <h3 class="hdg-lv2-05">GRAN®</h3>
                    <p> (1) 動員造血幹細胞至周邊血中。</p>
                    <p> (2) 促進造血幹細胞移植時嗜中性白血球數的增加。</p>
                    <p> (3) 癌症化學療法所引起之嗜中性白血球減少症。</p>
                    <p> (4) 骨髓發育不良症候群的嗜中性白血球缺乏症。</p>
                    <p> (5) 先天性、特異性嗜中性白血球缺乏症。 </p>
                </div>
            </div>
             <div class="row">
                <div class="box-image col-md-4">
                    <img src="../assets/index_img_slide_lumicef.jpg" alt="LUMICEF®">
                </div>
                <div class="box-text col-sm-12 col-md-7 p-5">
                    <h3 class="hdg-lv2-05">LUMICEF®</h3>
                    <p> 適應症：</p>
                    <p> (1) 治療適合接受全身性治療的中至重度斑塊性乾癬成人病人。</p>
                    <p> (2) 治療適合接受全身性治療的膿疱性乾癬之成人病人。</p>
                    <p> (3) 治療對疾病緩解型抗風濕性藥物(DMARDs)無效或無法耐受的活動性乾癬性關節炎成人病人。</p>
                </div>
            </div>
             <div class="row">
                <div class="box-image col-md-4">
                    <img src="../assets/index_img_slide_espo.jpg" alt="NESP®">
                </div>
                <div class="box-text col-sm-12 col-md-7 p-5">
                    <h3 class="hdg-lv2-05">NESP®</h3>
                    <p> 適應症：</p>
                    <p> 治療與慢性腎臟功能失調有關的貧血症狀或因此而需要輸血的患者，治療與癌症化學治療有關的症狀性貧血。</p>
                </div>
            </div>
             <div class="row">
                <div class="box-image col-md-4">
                    <img src="../assets/index_img_sancuso.jpg" alt="Sancuso®">
                </div>
                <div class="box-text col-sm-12 col-md-7 p-5">
                    <h3 class="hdg-lv2-05">Sancuso®</h3>
                    <p>  適應症：</p>
                    <p>  預防連續5天使用中度及/或高度致吐性化學療法療程的病人所引起的噁心及嘔吐。 </p>
                </div>
            </div>
             <div class="row">
                <div class="box-image col-md-4">
                    <img src="../assets/index_img_slide_regpara.jpg" alt="REGPARA®">
                </div>
                <div class="box-text col-sm-12 col-md-7 p-5">
                    <h3 class="hdg-lv2-05">REGPARA®</h3>
                    <p> 適應症：</p>
                    <p> 治療透析患者的次發性副甲狀腺機能亢進。</p>
                </div>
            </div>
             <div class="row">
                <div class="box-image col-md-4">
                    <img src="../assets/index_img_slide_romiplate.jpg" alt="Romiplate®">
                </div>
                <div class="box-text col-sm-12 col-md-7 p-5">
                    <h3 class="hdg-lv2-05">Romiplate®</h3>
                    <p> 適應症：</p>
                        <p> (1)用於治療在脾臟切除後且對於其他治療(例如:類固醇、免疫球蛋白等)失敗之成年慢性自發性(免疫性)血小板缺乏紫斑症(ITP)患者，或對於不適合進行脾臟切除之成年慢性自發性(免疫性)血小板缺乏紫斑症(ITP)患者之第二線治療。</p>
                        <p> (2)適用在對免疫抑制療法反應不佳的嚴重再生不良性貧血病人。</p>
                </div>
            </div>
             <div class="row">
                <div class="box-image col-md-4">
                    <img src="../assets/index_img_slide_neulasta.jpg" alt="Neulasta®">
                </div>
                <div class="box-text col-sm-12 col-md-7 p-5">
                    <h3 class="hdg-lv2-05">Neulasta®</h3>
                    <p> 適應症：</p>
                    <p> 適用於非骨髓性癌症患者在接受易引起臨床上有顯著發生率的嗜中性白血球減少症合併發燒之骨髓抑制性抗癌藥物治療時，以降低嗜中性白血球減少症合併發燒為表現之感染發生率。 </p>
                </div>
            </div>
             <div class="row">
                <div class="box-image col-md-4">
                    <img src="../assets/index_img_slide_Leunase.jpg" alt="Leunase®">
                </div>
                <div class="box-text col-sm-12 col-md-7 p-5">
                    <h3 class="hdg-lv2-05">Leunase®</h3>
                    <p> 適應症：</p>
                    <p> 適用於非骨髓性癌症患者在接受易引起臨床上有顯著發生率的嗜中性白血球減少症合併發燒之骨髓抑制性抗癌藥物治療時，以降低嗜中性白血球減少症合併發燒為表現之感染發生率。</p>
                </div>
            </div>
         </div> 
      </div>
      <Footer-bg style="background-color:white !important" @Click_Title_trigger="Click_Title2"></Footer-bg>
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
        show_detail () {
            this.div0_1='div1'
        },
        close_detail () {
            this.div0_1='div2'
        },
        ToNews(){
            this.$router
            .push({
                path: "News",
            })
            .catch(err => {
                console.log(err)
            })
        },
        Click_Title2(index){
            this.$emit('Click_Title_trigger', { index: index.index });
        },
        Click_Title(index){
            this.$emit('Click_Title_trigger', { index: index });
        },
    },
    data () {
      return {
        Title:'<font style="font-size:5rem;font-weight:bold;">我們的產品</font><br/><br/>',
        NewInformation:'最新資訊',
        div0_1: 'div0',
      }
    }
  }
  </script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    * {
        font-family: Arial, "微軟正黑體", sans-serif;
    }

    /* <!-- 展品詳細介紹右側展開動畫 ↓ --> */
    .div0 {
    z-index:10000;
    width:50vw;
    height:100%;
    border-radius: 50% 0% 0% 50%;
    outline:0;
    border:0;
    background:#ea5504;
    position:fixed;
    margin: 0px;
    right: -100vw;
    top: 0;
    }
    .div1 {
    z-index: 10000;
    width:50vw;
    height:100%;
    border-radius: 50% 0% 0% 50%;
    outline:0;
    border:0;
    background:#ea5504;
    position:fixed;
    margin: 0px;
    right: 0vw;
    top: 0;
    animation: open 1s 1;
    }
    .div2 {
    z-index:10000;
    width:50vw;
    height:100%;
    border-radius: 50% 0% 0% 50%;
    outline:0;
    border:0;
    background:#ea5504;
    position:fixed;
    margin: 0px;
    right: -100vw;
    top: 0;
    animation: close 2s 1;
    }

    @keyframes open {
    from   {right: -100vw;width:0vw;}
    to     {right: 0px;width:50vw;}
    }
    @keyframes close {
    from   {right: 0px;width:50vw;}
    to     {right: -100vw;width:0vw;}
    }

/* <!-- 展品詳細介紹右側展開動畫 ↑ --> */

    font,p {
        font-size: 1.8rem;
        line-height: 1.5;
    }
    .p_btn {
        color:white;
        text-align: left;
    }
    h3{
        font-size: 2.4rem;
        font-weight: bold;
        margin-bottom: 1vh;
        color: #ea5504;
    }
    h3:hover {
        color:black;
        text-decoration: underline;
        cursor: pointer;
    }
    .row {
        margin: 3vh;
    }

    /* box設定 */
    .box-image{
        margin-right: 20px;
    }
    .box-text {
        text-align: left;
        margin-bottom: 4vh;
    }

    /* 展開Box設定 */
    .box_detail_Layout {
        overflow:scroll;
        height:100% ;
        width:80vw;
    }
    .box_image_detail {
        width: 20%;
    }
    .box_text_detail {
        width: 80%;
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
    .box-image{
        margin: 0 auto;
        /* background-color: rgb(181, 253, 203); */
    }
    .row {
        margin: 0px;
    }
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
    .bg_middle_PCmobile {
        min-height: 100px;
        height: 220px;
        display: flex;
        margin-bottom: 5vh;
        background-position: center;
        background-size: cover;
        background-image: url("../assets/index_bg_section_blue_01.png");
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
