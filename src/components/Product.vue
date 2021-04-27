<template>
    <div class="Product">
      <div>      
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
                    <div @click="Click_Title(1)" class="aboutus"  style="font-size:1.5rem;background-color:#F3F3F3;width:260px;height:40px;border-radius:40px;cursor:pointer;color:rgb(234, 85, 4);display: flex;justify-content: center;align-items: center;position:relative;"><font>關於我們</font><font style="position:absolute;right:20px">➝</font></div>
                </div>
                <div class="svg_1 bg_svg_1" style="left:0px;top:0"><font style="color:white;position:relative;top:20%;">Nephrology</font></div>
                <div class="svg_1 bg_svg_2 positioncss_left" style="top:180px" ><font style="color:white;position:relative;top:50%;">Oncology</font></div>
                <div class="svg_1 bg_svg_3 positioncss_right" style="top:180px" ><font style="color:white;position:relative;top:20%;">Central nervous<br /> system (CNS)</font></div>
                <div class="svg_1 bg_svg_4" style="right:0px;top:0" ><font style="color:white;position:relative;top:40%;">Immunology <br />& Allergy</font></div>
                </div>
            </div>
        </div>

        <div class="bg_middle_PCmobile">
            <div v-html="Title" style="position:relative;margin-top: 10vh;color:white;width:100%;height:200px;text-align:center;"></div>
        </div>

        <!-- 展開的產品細節↓ -->
        <button v-bind:class="div0_1" style="text-align: left">
        <div class="box_detail_Layout">
            <div v-if="showimgandclose">  
                <div  v-for="(items,index) in dataram" :key="index" class="row p-0 m-0 w-100" style="color: white;font-size:1.8rem">
                    <div class="col-12 col-sm-7 col-md-5 col-xl-3 p-0 m-0">
                        <img v-bind:src="items.src" alt="CRYListObj">
                    </div>
                    <div class="col-12 col-sm-5 col-md-7 col-xl-9 p-0 m-0 mt-2 mt-md-0" >
                        <div v-html="items.content" style="color: white;"> </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showimgandclose" @click="close_detail" class="d-flex justify-content-center align-items-center mt-2" style="position:relative;top:0;font-size: 14px;height:40px;width:80px;background-color:#EE7736;border-radius: 30px;color:white;cursor:pointer;">close</div>
        </button>
        <!-- 展開的產品細節↑ -->
        
        <div :class="website">
            <div class="container" style="margin: 0 auto ;padding: 0px;color:#5D6164">
                <div class="box-hdg2-wrapper" style="margin: auto;justify-items: center;padding-bottom: 5h;">
                    <div class="row">
                            <div class="box-image col-md-4">
                                <img src="../assets/index_img_slide_crysvita.jpg" alt="CRYSVITA®">
                            </div>
                            <div class="box-text col-sm-12 col-md-7 p-5">
                                <h3 @click="show_detail(0)"> CRYSVITA® </h3>
                                <p> 適應症：</p>
                                <p> 性聯遺傳型低磷酸鹽症(X-linked hypophosphatemia，XLH)：適用於1歲以上兒童與青少年，及合併有XLH相關骨骼疾病之成人。</p>
                            </div>
                        </div>
                    <div class="row">
                        <div class="box-image col-md-4">
                            <img src="../assets/index_img_slide_gran.jpg" alt="GRAN®">
                        </div>
                        <div class="box-text col-sm-12 col-md-7 p-5">
                            <h3 @click="show_detail(1)"> GRAN®</h3>
                            <p> 適應症：</p>
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
                            <h3 @click="show_detail(2)"> LUMICEF®</h3>
                            <p> 適應症：</p>
                            <p> (1) 治療適合接受全身性治療的中至重度斑塊性乾癬成人病人。</p>
                            <p> (2) 治療適合接受全身性治療的膿疱性乾癬之成人病人。</p>
                            <p> (3) 治療對疾病緩解型抗風濕性藥物(DMARDs)無效或無法耐受的活動性乾癬性關節炎成人病人。</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="box-image col-md-4">
                            <img src="../assets/index_img_slide_nesp.jpg" alt="NESP®">
                        </div>
                        <div class="box-text col-sm-12 col-md-7 p-5">
                            <h3 @click="show_detail(3)"> NESP®</h3>
                            <p> 適應症：</p>
                            <p> 治療與慢性腎臟功能失調有關的貧血症狀或因此而需要輸血的患者，治療與癌症化學治療有關的症狀性貧血。</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="box-image col-md-4">
                            <img src="../assets/index_img_sancuso.jpg" alt="Sancuso®">
                        </div>
                        <div class="box-text col-sm-12 col-md-7 p-5">
                            <h3 @click="show_detail(4)"> Sancuso®</h3>
                            <p>  適應症：</p>
                            <p>  預防連續5天使用中度及/或高度致吐性化學療法療程的病人所引起的噁心及嘔吐。 </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="box-image col-md-4">
                            <img src="../assets/index_img_slide_regpara.jpg" alt="REGPARA®">
                        </div>
                        <div class="box-text col-sm-12 col-md-7 p-5">
                            <h3 @click="show_detail(5)"> REGPARA®</h3>
                            <p> 適應症：</p>
                            <p> 治療透析患者的次發性副甲狀腺機能亢進。</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="box-image col-md-4">
                            <img src="../assets/index_img_slide_romiplate.jpg" alt="Romiplate®">
                        </div>
                        <div class="box-text col-sm-12 col-md-7 p-5">
                            <h3 @click="show_detail(6)"> Romiplate®</h3>
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
                            <h3 @click="show_detail(7)"> Neulasta®</h3>
                            <p> 適應症：</p>
                            <p> 適用於非骨髓性癌症患者在接受易引起臨床上有顯著發生率的嗜中性白血球減少症合併發燒之骨髓抑制性抗癌藥物治療時，以降低嗜中性白血球減少症合併發燒為表現之感染發生率。 </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="box-image col-md-4">
                            <img src="../assets/index_img_slide_Leunase.jpg" alt="Leunase®">
                        </div>
                        <div class="box-text col-sm-12 col-md-7 p-5">
                            <h3 @click="show_detail(8)"> Leunase®</h3>
                            <p> 適應症：</p>
                            <p> 適用於非骨髓性癌症患者在接受易引起臨床上有顯著發生率的嗜中性白血球減少症合併發燒之骨髓抑制性抗癌藥物治療時，以降低嗜中性白血球減少症合併發燒為表現之感染發生率。</p>
                        </div>
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
        show_detail (index) {
            this.div0_1='div1'
            this.website='website_disabled'
            this.dataram=this.dataOBJ[index].data
            this.showimgandclose = true
            console.log(this.dataram)
        },
        close_detail () {
            this.div0_1='div2'
            this.website='website'
            this.showimgandclose = false
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
        website:'website',
        showimgandclose:true,
        dataram:[],
        dataOBJ:[
            {
                data://0-CRYSVITA
                [        
                    {   
                        src: require('../assets/Crysvita_1.jpg'),
                        content:'CRYSVITA <br/> 【劑量一】<br/>中文品名<br/>磷平 10毫克注射液<br/>英文品名CRYSVITA 10mg Solution for Injection<br/>主成份名<br/>Burosumab<br/>許可證字號<br/>10mg 衛部罕菌疫輸字第000030號<br/><a href="https://info.fda.gov.tw/mlms/H0001D3.aspx?LicId=72000030">藥品仿單(另開衛福部食藥署視窗)</a><br/><a href="https://info.fda.gov.tw/mlms/H0001D.aspx?Type=Lic&LicId=72000030">藥品詳細資料(另開衛福部食藥署視窗)</a>  <br/><br/>'},
                    {   
                        src: require('../assets/Crysvita_2.jpg'),
                        content:'CRYSVITA <br/>【劑量二】<br/>中文品名<br/>磷平 20毫克注射液<br/>英文品名CRYSVITA 20mg Solution for Injection<br/>主成份名<br/>Burosumab<br/>許可證字號<br/>20mg 衛部罕菌疫輸字第000031號<br/><a href="https://info.fda.gov.tw/mlms/H0001D3.aspx?LicId=72000031">藥品仿單(另開衛福部食藥署視窗)</a><br/><a href="https://info.fda.gov.tw/mlms/H0001D.aspx?Type=Lic&LicId=72000031">藥品詳細資料(另開衛福部食藥署視窗) </a> <br/><br/>'
                    },
                    {   
                        src: require('../assets/Crysvita_3.jpg'),
                        content:'CRYSVITA  <br/> 【劑量三】 <br/> 中文品名 <br/> 磷平 30毫克注射液 <br/> 英文品名CRYSVITA 30mg Solution for Injection <br/> 主成份名 <br/> Burosumab <br/> 許可證字號 <br/> 30mg 衛部罕菌疫輸字第000032號 <br/> <a href="https://info.fda.gov.tw/mlms/H0001D3.aspx?LicId=72000032">藥品仿單(另開衛福部食藥署視窗) </a><br/> <a href="https://info.fda.gov.tw/mlms/H0001D.aspx?Type=Lic&LicId=72000032">藥品詳細資料(另開衛福部食藥署視窗)</a> <br/> <br/> '
                    },

                ],
            },
            {   
                data://1-GRAN
                [        
                    {   
                        src: require('../assets/GRAN_1.jpg'),
                        content:'Filgrastim <br/> 【劑量一】<br/> 中文品名<br/> 惠爾血添注射劑 75<br/> 英文品名<br/> Filgrastim Injection 75μg/0.3ml<br/> 主成份名<br/> FILGRASTIM<br/> 許可證字號<br/> 衛署菌疫輸字第 000712 號<br/> 藥品仿單(另開衛福部食藥署視窗)<br/> 藥品詳細資料(另開衛福部食藥署視窗)<br/> <br/>'
                    },
                    {   
                        src: require('../assets/GRAN_2.jpg'),
                        content:'【劑量二】<br/> 中文品名<br/> 惠爾血添注射劑 150<br/> 英文品名 <br/> Filgrastim Injection 150μg/0.6ml<br/> 主成份名<br/> FILGRASTIM<br/> 許可證字號<br/> 衛署菌疫輸字第 000711 號<br/> 藥品仿單(另開衛福部食藥署視窗)<br/> 藥品詳細資料(另開衛福部食藥署視窗)<br/> <br/>'
                    },
                    {   
                        src: require('../assets/GRAN_3.jpg'),
                        content:'【劑量三】<br/> 中文品名<br/> 惠爾血添 M300<br/> 英文品名><br/> Filgrastim Injection M300 300μg/0.7ml<br/> 主成份名<br/> FILGRASTIM<br/> 許可證字號<br/> 衛署菌疫輸字第 000670 號<br/> 藥品仿單(另開衛福部食藥署視窗)<br/> 藥品詳細資料(另開衛福部食藥署視窗)'
                    },

                ],
                
            },
            {   
                data://2-LUMICEF
                [        
                    {   
                        src: require('../assets/Lumicef.jpg'),
                        content:'Lumicef <br/> 中文品名<br/>立美西膚皮下注射劑210毫克<br/>英文品名<br/>LUMICEF Subcutaneous Injection 210mg Syringe<br/>主成份名<br/>brodalumab<br/>許可證字號<br/>衛部菌疫輸字第 001076 號<br/>藥品仿單(另開衛福部食藥署視窗)<br/>藥品詳細資料(另開衛福部食藥署視窗)<br/>病人用藥說明書(254KB)<br/>正確使用指引-醫護人員專用(13251KB)',
                    },
                ],
                
            },
            {   
                data://3-NESP
                [        
                    {   
                        src: require('../assets/NESP_1.jpg'),
                        content:'【劑量一】<br/> 中文品名<br/>耐血比注射劑 20微克 / 0.5 毫升<br/>英文品名<br/>NESP Injection Plastic Syringe 20mcg / 0.5 ml<br/>主成份名<br/>DARBEPOETIN ALFA <br/> 許可證字號 <br/> 衛部菌疫輸字第 000955 號 <br/> 藥品仿單(另開衛福部食藥署視窗) <br/> 藥品詳細資料(另開衛福部食藥署視窗)<br/>',
                    },
                    {   
                        src: require('../assets/NESP_2.jpg'),
                        content:'【劑量二】<br/> 中文品名 <br/> 耐血比注射劑 40微克 / 0.5 毫升 <br/> 英文品名 <br/> NESP Injection Plastic Syringe 40mcg / 0.5 ml <br/> 主成份名 <br/> DARBEPOETIN ALFA <br/> 許可證字號 <br/> 衛部菌疫輸字第 000953 號 <br/> 藥品仿單(另開衛福部食藥署視窗) <br/> 藥品詳細資料(另開衛福部食藥署視窗)',
                    },
                    {   
                        src: require('../assets/NESP_3.jpg'),
                        content:'【劑量三】<br/>中文品名<br/>惠爾血添 M300<br/>英文品名><br/>Filgrastim Injection M300 300μg/0.7ml<br/>主成份名<br/>FILGRASTIM<br/>許可證字號<br/>衛署菌疫輸字第 000670 號<br/>藥品仿單(另開衛福部食藥署視窗)<br/>藥品詳細資料(另開衛福部食藥署視窗)<br/>',
                    },
                ],
                
            },{   
                data://4-Sancuso
                [        
                    {   
                        src: require('../assets/Sancuso.jpg'),
                        content:'Sancuso<br/>中文品名<br/>貼固守穿皮貼片劑<br/>英文品名<br/>Sancuso transdermal patch 3.1 mg/24hours<br/>主成份名<br/>GRANISETRON<br/>許可證字號<br/>衛署藥輸字第025820號<br/>藥品仿單(另開衛福部食藥署視窗)<br/>藥品詳細資料(另開衛福部食藥署視窗)',
                    },
                ],
                
            },{   
                data://5-REGPARA
                [        
                    {   
                        src: require('../assets/REGPARA.jpg'),
                        content:'REGPARA<br/>中文品名<br/>銳克鈣錠25毫克<br/>英文品名<br/>REGPARA TABLETS 25MG<br/>主成份名<br/>CINACALCET HYDROCHLORIDE<br/>許可證字號<br/>衛署藥輸字第 025141 號<br/>藥品仿單(另開衛福部食藥署視窗)<br/>藥品詳細資料(另開衛福部食藥署視窗)',
                    },
                ],
                
            },{   
                data://6-Romiplate
                [        
                    {   
                        src: require('../assets/Romiplate.jpg'),
                        content:'Lumicef <br/>中文品名<br/>立美西膚皮下注射劑210毫克<br/>英文品名<br/>LUMICEF Subcutaneous Injection 210mg Syringe<br/>主成份名<br/>brodalumab<br/>許可證字號<br/>衛部菌疫輸字第 001076 號<br/>藥品仿單(另開衛福部食藥署視窗)<br/>藥品詳細資料(另開衛福部食藥署視窗)<br/>病人用藥說明書(254KB)<br/>正確使用指引-醫護人員專用(13251KB)',
                    },
                ],
                
            },{   
                data://7-Neulasta
                [        
                    {   
                        src: require('../assets/Neulasta_1.jpg'),
                        content:'Neulasta<br/>中文品名<br/>倍血添注射劑<br/>英文品名<br/>Neulasta<br/>主成份名<br/>Pegfilgrastim<br/>許可證字號<br/>衛署菌疫輸字第 000919 號<br/>藥品仿單(另開衛福部食藥署視窗)<br/>藥品詳細資料(另開衛福部食藥署視窗)',
                    },
                ],
                
            },{   
                data://8-Leunase
                [        
                    {   
                        src: require('../assets/Leunase.jpg'),
                        content:'Leunase<br/>中文品名<br/>樂拿舒注射劑 10,000K.U.<br/>英文品名<br/>Leunase Injection (10,000K.U.)<br/>主成份名<br/>L-ASPARAGINASE<br/>許可證字號<br/>衛署藥輸字第 021032 號<br/>藥品仿單(另開衛福部食藥署視窗)<br/>藥品詳細資料(另開衛福部食藥署視窗)',
                    },
                ],},],}
        },

    }
  </script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    * {
    font-family: Arial, "微軟正黑體", sans-serif;
    }
    a {
        color:#3a4a9d;
    }
    .aboutus:hover{
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2) !important;
    }
    /* <!-- 展品詳細介紹右側展開動畫 ↓ --> */
    .div0 {
    z-index:10000;
    width:70vw;
    height:100%;
    border-radius: 45% 0% 0% 45%;
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
    width:70vw;
    height:100%;
    border-radius: 45% 0% 0% 45%;
    outline:0;
    border:0;
    background:#ea5504;
    position:fixed;
    margin: 0px;
    padding: 5% 5% 10% 13%;
    right: 0vw;
    top: 0;
    animation: open 1s 1;
    }
    .div2 {
    z-index:10000;
    width:70vw;
    height:100%;
    border-radius: 45% 0% 0% 45%;
    outline:0;
    border:0;
    background:#ea5504;
    position:fixed;
    margin: 0px;
    right: -100vw;
    top: 0;
    animation: close 1s 1;
    }

    @keyframes open {
    from   {right: -100vw;width:0vw;}
    to     {right: 0px;width:70vw;}
    }
    @keyframes close {
    from   {right: 0px;width:70vw;}
    to     {right: -100vw;width:0vw;}
    }

/* <!-- 背景白色 ↑ --> */
    .website{
        opacity: 1;
        /* pointer-events: initial; */
    }
    .website_disabled{
        opacity: 0.5;
        /* pointer-events: none; */
    }
/* <!-- 展品詳細介紹右側展開動畫 ↑ --> */

    p {
        font-size: 2rem;
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
        overflow:auto;
        height:100% ;
        width:80vw;
    }
    .box_image_detail {
        width: 20%;
    }
    .box_text_detail {
        width: 20%;
        padding-bottom: 5vh;
        font-size: 1.8rem;
    }

@media (min-width: 1025px){
    @keyframes expand {
        from { height: 256px; width: 256px;font-size: 1.5rem;}
        to { height: 400px; width: 400px;font-size: 2rem;}
    }
    @keyframes tight {
        from { height: 400px;width: 400px;font-size: 2rem;}
        to { height: 256px; width: 256px;font-size: 1.5rem;}
    }
    .svg_1{
        height: 256px;
        width: 256px;
        position: absolute;
        animation-name: tight;    /*動畫名稱，需與 keyframe 名稱對應*/
        animation-duration: 1s;    /*動畫持續時間，單位為秒*/
        animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
        font-size: 1.5rem;
    }
    .svg_1:hover{
        height: 400px;
        width: 400px;
        position: absolute;
        animation-name: expand;    /*動畫名稱，需與 keyframe 名稱對應*/
        animation-duration: 1s;    /*動畫持續時間，單位為秒*/
        animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
        z-index: 1;
        font-size: 2rem;
    }
}

@media (min-width: 769px) and (max-width: 1024px){
    @keyframes expand {
        from { height: 175px; width: 175px;font-size: 1.5rem;}
        to { height: 300px; width: 300px;font-size: 2rem;}
    }
    @keyframes tight {
        from { height: 300px;width: 300px;font-size: 2rem; }
        to { height: 175px; width: 175px;font-size: 1.5rem;}
    }
    .box_detail_Layout {
        height: 65vh;
    }
    .svg_1{
        height: 175px;
        width: 175px;
        position: absolute;
        animation-name: tight;    /*動畫名稱，需與 keyframe 名稱對應*/
        animation-duration: 1s;    /*動畫持續時間，單位為秒*/
        animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
        font-size: 1.5rem;
    }
    .svg_1:hover{
        height: 300px;
        width: 300px;
        position: absolute;
        animation-name: expand;    /*動畫名稱，需與 keyframe 名稱對應*/
        animation-duration: 1s;    /*動畫持續時間，單位為秒*/
        animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
        z-index: 1;
        font-size: 2rem;
    }
    .str-section {
        max-width: 800px;
        margin: 0 auto;
    }
    .box_text_detail{
        width: 50%;
        padding-right: 30%;
        margin-left: -150px;
        margin-top: 22vh;
    }
    .box_image_detail{
        margin-right: 100px;
    }
}

/*computer*/
@media (min-width: 769px){
    .bg_cp {
        display: flex;
        height: 400px;
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
    .div1 {
        padding: 5% 5% 50% 13%;
    }

    .div0,.div1,.div2 {
        border-radius: 0%;
        width: 95vw;
    }
    @keyframes open {
    from   {right: -100vw;width:0vw;}
    to     {right: 0px;width:95vw;}
    }
    @keyframes close {
    from   {right: 0px;width:95vw;}
    to     {right: -100vw;width:0vw;}
    }

    .box_image_detail {
        width: 0%;
    }
    .box_text_detail {
        width: 100vw;
        margin-top: 60%;
        padding: 1vh 15vw 4vh 0vw;
    }
    .box_detail_Layout {
        height: 80vh;
    }
    .box-image{
        margin: 0 auto;
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
        from { height: 150px;width: 150px; font-size: 1.5rem;}
        to { height: 200px; font-size: 2rem;}
    }
    @keyframes tight {
        from { height: 200px; width: 200px; font-size: 2rem;}
        to { height: 150px; font-size: 1.5rem;}
    }
    .svg_1{
        height: 150px;
        width: 150px;
        position: absolute;
        background-repeat: no-repeat;
        animation-name: tight;    /*動畫名稱，需與 keyframe 名稱對應*/
        animation-duration: 1s;    /*動畫持續時間，單位為秒*/
        animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
        font-size: 1.5rem;
    }
    .svg_1:hover{
        height: 200px;
        width: 200px;
        position: absolute;
        background-repeat: no-repeat;
        animation-name: expand;    /*動畫名稱，需與 keyframe 名稱對應*/
        animation-duration: 1s;    /*動畫持續時間，單位為秒*/
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
    color: #3a4a9d;    
}
</style>
