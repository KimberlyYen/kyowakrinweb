<template>
  <div class="OurAsiaPacificOffices">
    <div :class="divdisabled" >
        <div class="d-flex justify-content-center" style="width:100vw;padding-bottom: 18vh;">
            <div  style="position:relative;max-width:55%;min-width:375px;width:100%;">
                <img style="width:100%" src="../assets/index_bg_mainsection_contact_map.png">
                <div @click="Clickpoint(1)" class="point1"></div>
                <div @click="Clickpoint(2)" class="point2"></div>
                <div @click="Clickpoint(3)" class="point3"></div>
                <div @click="Clickpoint(4)" class="point4"></div>
                <div @click="Clickpoint(5)" class="point5"></div>
                <div @click="Clickpoint(6)" class="point6"></div>
                <div @click="Clickpoint(7)" class="point7"></div>
                <div @click="Clickpoint(8)" class="point8"></div>
                <font class="fontsize" style="position:absolute;top:70%;left:20px;color:#EA5504;font-weight:bold">亞太分佈圖
                    <p style="font-size: 3rem;color:#5d6164;font-weight:bold">Asia Pacific network</p>
                </font>
                
            </div>
        </div>
        <img class="img101_pc" style="width:100vw" src="@/assets/index_img_taipei_01.png">
        <img class="img101_mb" style="width:100vw" src="@/assets/index_img_taipei_02.png">
        <div class="d-flex justify-content-center pt-5 pb-4" style="width:100vw">
            <div class="d-flex justify-content-center align-items-center" style="max-width:1200px;min-width:320px;width:100%;color:rgb(234, 85, 4);font-size:5rem;font-weight:bold">Taiwan office</div>
        </div>
        <div class="d-flex justify-content-center divtop mb-5" style="width:100vw;left:0;">
            <div style="max-width:80%;min-width:250px;width:100%;background-color:white;">
                <div class="row p-0 m-0 mb-5 div_country" style="position:relative">
                    <!-- <div @click="CloseCountry()" style="background-color:#ea5504;width:40px;height:40px;border-radius:50%;position:absolute;color:white;font-size:3rem;top:10px;right:10px;z-index:2">╳</div> -->
                    <div class="pic col-12 col-md-5 col-xl-4 p-0 m-0 d-flex justify-content-start" >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.581590149636!2d121.5220404292319!3d25.056925313887643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96c523d96c9%3A0xe7929a0300ee1e2c!2z5Y-w54Gj5Y2U5ZKM6bqS6bqf6IKh5Lu95pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1618285029986!5m2!1szh-TW!2stw" width="600" height="270" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>

                    <div class="row col-12 col-md-7 col-xl-8 m-0 " style="height:270px;padding:10px;">
                        <div class="col-12" style="color:#EA5504;font-weight: 1000;;width:100%;text-align:left;font-size: 2rem;">台灣協和麒麟股份有份公司</div>
                        <div class="col-12 col-md-6">
                            <div v-html="countryobj[3].data2"></div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div v-html="countryobj[3].data"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer-bg style="background-color:white" @Click_Title_trigger="Click_Title2"></Footer-bg>
    </div>
    <div v-if="showcard" class="d-flex justify-content-center divtop" style="width:100vw;position:fixed;left:0;cursor:pointer">
        <div class="card" style="box-shadow:1px 1px 1px 1px #BEBEBE;max-width:700px;min-width:250px;width:100%;background-color:white;">
            <div class="row p-0 m-0 div_country" style="position:relative">
                <img @click="CloseCountry()" src="../assets/close_map.png" style="background-color:#ea5504;width:40px;height:40px;border-radius:50%;position:absolute;color:white;font-size:3rem;top:10px;right:10px;z-index:2">
                <div class="pic col-12 col-md-5 col-xl-4 p-0 m-0 d-flex justify-content-start" >
                    <iframe v-if="countryindex == 3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.581590149636!2d121.5220404292319!3d25.056925313887643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96c523d96c9%3A0xe7929a0300ee1e2c!2z5Y-w54Gj5Y2U5ZKM6bqS6bqf6IKh5Lu95pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1618285029986!5m2!1szh-TW!2stw" width="600" height="270" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    <img v-else :src="countryobj[countryindex].src" class="countryimg">
                </div>
                <div class="row col-12 col-md-7 col-xl-8 m-0 " style="height:270px;cursor:pointer;padding:32px;overflow:auto">
                    <div calss="col">
                        <div v-html="countryobj[countryindex].title" class="text-left" style="font-size: 1.6rem;color: #ea5504;display: block;margin-bottom: 10px;font-weight: 600;"></div>
                        <div v-html="countryobj[countryindex].fulltitle" class="text-left" style="font-size: 1.6rem;color: #5d6164;display: block;margin-bottom: 10px;font-weight: 600;"></div>
                        <div v-html="countryobj[countryindex].address" class="text-left" style="font-size: 1.4rem;color: #5d6164;margin-top: 10px;margin-bottom: 15px;"></div>
                        <div v-html="countryobj[countryindex].visitwebsite" class="text-left" style="font-size: 1.4rem;color: #ea5504;"></div>
                    </div>
                    <div v-if="countryindex == 7" calss="col">
                        <div v-html="countryobj[countryindex].data"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Footer from './Footer'
export default {
components: {
    'Footer-bg':Footer
  },
  name: 'OurAsiaPacificOffices',
  methods:{
    Clickpoint(index){
        this.countryindex = index
        this.showcard = true
        this.divdisabled = 'divdisabled'
    },
    CloseCountry(){
        this.showcard = false
        this.divdisabled = 'divNdisabled'
    },
    Click_Title2(index){
    this.$emit('Click_Title_trigger', { index: index.index });
    },
    Click_Title(index){
    this.$emit('Click_Title_trigger', { index: index });
    },
  },
  mounted(){ 
  },
  data () {
    return {
        countryobj:[
            {
                title:'',
                fulltitle:'',
                address:'',
                visitwebsite:'',
                src:''
            },
            {
                title:'KOREA',
                fulltitle:'Kyowa Kirin Korea Co., Ltd. ',
                address:'11F, Asia Tower<br /> 430, Nonhyeon-ro,Gangnam-gu<br /> Seoul, 06223,Rep. of Korea',
                visitwebsite:'VISITWEBSITE',
                src:require('@/assets/index_img_regionalnetwork_panel_korea_01.jpg')
            },
            {
                title:'CHINA',
                fulltitle:'Kyowa Kirin China Pharmaceutical Co., Ltd.',
                address:'970 Longdong Road<br />Pudong New Area<br />Shanghai, 201203, China<br />Tel. +86-021-5080-0909',
                visitwebsite:'VISITWEBSITE',
                src:require('@/assets/index_img_regionalnetwork_panel_china_01.jpg')
            },
            {
                title:'TAIWAN',
                fulltitle:'Kyowa Kirin Taiwan Co., Ltd.',
                address:'9th floor, No. 68, Section 2<br />Zhongshan North Road, Zhongshan District<br /> Taipei City, Taiwan 10448<br /> 富邦中山大樓9F<br /> 中山北路二段68號',
                visitwebsite:'VISITWEBSITE',
                data:'<div style="text-align:left;margin-top:15px"><div style="font-size: 1.8rem;color: #5d6164;display: block;margin-bottom: 10px;font-weight: 1000;">Address </div><div style="color:#5d6164;font-size:1.4rem">9F., No.68, Sec. 2, Chung Shan<br /> North Road, Taipei 10448, Taiwan</div></div>',
                data2:'<div style="text-align:left;margin-top:15px"><div style="font-size: 1.8rem;color: #5d6164;display: block;margin-bottom: 10px;font-weight: 1000;">營業地址 </div><div style="color:#5d6164;font-size:1.4rem">10448台北市中山區中山北路二段<br/>68號9樓<br/><br/>電話<br/>(02)2564-2800<br/>傳真<br/>(02)2560-1667</div></div>',
                src:require('@/assets/index_img_regionalnetwork_panel_taiwan_01.jpg')
            },
            {
                title:'HONG KONG',
                fulltitle:'Kyowa Kirin Hong Kong Co., Ltd ',
                address:'Unit B, 13/F., 169 Electric Road<br />North Point, Hong Kong',
                visitwebsite:'VISITWEBSITE',
                src:require('@/assets/index_img_regionalnetwork_panel_hongkong_01.jpg')
            },
            {
                title:'THAILAND',
                fulltitle:'Kyowa Kirin (Thailand) Co., Ltd. ',
                address:'323 United Center Building 20th<br /> floor, room 2003B<br />Silom road, Silom, Bangrak<br />Bangkok 10500 Thailand<br />Tel. +662 6312126-8<br />Fax. +662 6312125',
                visitwebsite:'VISITWEBSITE',
                src:require('@/assets/index_img_regionalnetwork_panel_thailand_01.jpg')
            },
            {
                title:'MALAYSIA',
                fulltitle:'Kyowa Kirin Malaysia Sdn Bhd <br /><small style="font-style:oblique">(formerly known as Kyowa Hakko Kirin (Malaysia) Sdn Bhd)</small>',
                address:'A501 West Wing<br />Wisma Consplant 2<br />Jalan SS 16/1, Subang Jaya<br />47500 Selangor, Malaysia',
                visitwebsite:'VISITWEBSITE',
                src:require('@/assets/index_img_regionalnetwork_panel_malaysia_01.jpg')
            },
            {
                title:'Kyowa Kirin Asia Pacific Pte. Ltd.',
                fulltitle:'Address in operation &emsp;&emsp;',
                address:'Address: 801 Toa Payoh Lorong 7 <br /> #06-06 Wearnes Building <br /> Singapore 319319.<br /><br/>Phone : +65-6253 2938<br/>Fax: +65 6836 3928<br />E-mail: Info-KKAP@kyowakirin.com',
                visitwebsite:'VISITWEBSITE',
                data:'<div style="text-align:left;margin-top:30px"><div style="font-size: 1.6rem;color: #5d6164;display: block;margin-bottom: 10px;font-weight: 600;">Distributor: Steward Cross Pte Ltd </div><div style="color:#5d6164;font-size:1.4rem">Address: 801 Toa Payoh Lorong 7<br /> #06-06 Wearnes Building<br /> Singapore 319319.<br />Phone : +65-6253 2938</div></div>',
                src:require('@/assets/index_img_regionalnetwork_panel_singapore_01.jpg')
            },
            {
                title:'AUSTRALIA',
                fulltitle:'Kyowa Kirin Australia Pty Ltd',
                address:'68 York Street<br />Sydney<br />NSW 2000, Australia',
                visitwebsite:'VISITWEBSITE',
                src:require('@/assets/index_img_regionalnetwork_panel_australia_01.jpg')
            },
        ],
        showcard:false,
        divdisabled:'divNdisabled',
        countryindex:1,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pic{overflow:hidden;}
.pic img{transform:scale(1,1);transition: all 1s ease-out;}
.pic img:hover{transform:scale(1.2,1.2);}
/* width */
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px transparent; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: transparent; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: grey; 
}
.OurAsiaPacificOffices{
  padding-top: 52px;
}
.divdisabled{
    opacity:0.5;
    pointer-events:none
}
.divNdisabled{
    opacity:1;
    pointer-events:initial
}
@media (min-width: 769px){
    .countryimg{
        height: 270px;
        width: auto;
    }
    .divtop{
        top:35%
    }
    .fontsize{
        font-size: 5rem;
    }
    .img101_pc{
        display: block;
    }
    .img101_mb{
        display: none;
    }
    .card{
        max-width:60%;
    }
}
/*mobile*/
@media (min-width: 320px) and (max-width:768px) {
    .img101_mb{
        display: block;
    }
    .img101_pc{
        display: none;
    }
    .countryimg{
        width: 100%;
        height: auto;
    }
    .divtop{
        top:10%
    }
    .fontsize{
        font-size: 3.5rem;
        padding-top: 25%;
        padding-left: 10%;
    }
    .card{
        max-width:350px;
    }
}
.point1{
    position: absolute;
    width: 2.9%;
    height: 4.55%;
    left: 61.7%;
    top: 6.2%;
    z-index: 2;
    cursor: pointer;
}
.point2{
    position: absolute;
    left: 58.5%;
    top: 11.1%;
    width: 2.9%;
    height: 4.55%;
    cursor: pointer;
}
.point3{
    position: absolute;
    left: 59.9%;
    top: 19.8%;
    width: 2.9%;
    height: 4.55%;
    cursor: pointer;
}
.point4{
    position: absolute;
    left: 54.1%;
    top: 22.0%;
    width: 2.9%;
    height: 4.55%;
    cursor: pointer;
}
.point5{
    position: absolute;
    left: 46.6%;
    top: 31.4%;
    width: 2.9%;
    height: 4.55%;
    cursor: pointer;
}
.point6{
    position: absolute;
    left: 47.0%;
    top: 40.8%;
    width: 2.9%;
    height: 4.55%;
    cursor: pointer;
}
.point7{
    position: absolute;
    left: 49.4%;
    top: 43.0%;
    width: 2.9%;
    height: 4.55%;
    cursor: pointer;
}
.point8{
    position: absolute;
    left: 78%;
    top: 81.3%;
    width: 2.9%;
    height: 4.55%;
    cursor: pointer;
}
</style>
