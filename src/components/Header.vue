<template>
  <div class="Header">
      <div class="header_ row p-0 m-0" style="z-index:3">
        <div class="col-6 col-md-3 col-xl-6 p-0 m-0 pl-0 d-flex justify-content-start align-items-center"> 
          <img class="logo_pc" @click="Click_Title(0)" style="width:350px;height:26px;cursor:pointer" src="../assets/logo_header_01.png">
          <img class="logo_mb" @click="Click_Title(0)" style="width:280px;height:45px;cursor:pointer;position:absolute;left:-30px" src="../assets/logo_header_02.png">
        </div>
        <div class="col-6 col-md-9 col-xl-6 row p-0 m-0 d-flex justify-content-end">
          <div @click="Click_Title(0)" class="display_title justify-content-center align-items-center headtitle" v-bind:class="headtitle[0]" > 
            首頁
          </div>
          <div @click="Click_Title(1)" class="display_title justify-content-center align-items-center headtitle" v-bind:class="headtitle[1]"> 
            關於我們
          </div>
          <div @click="Click_Title(2)" class="display_title justify-content-center align-items-center headtitle" v-bind:class="headtitle[2]"> 
            我們的產品
          </div>
          <div @click="Click_Title(3)" class="display_title justify-content-center align-items-center headtitle" v-bind:class="headtitle[3]"> 
            最新消息
          </div>
          <div @click="Click_Title(4)" class="display_title justify-content-center align-items-center headtitle" v-bind:class="headtitle[4]"> 
            亞太分佈圖
          </div>
          <!-- <div class="d-flex justify-content-center align-items-center" style="width:52px"> 
            <img style="width:26px;height:26px" src="../assets/icon_search_01.png">
          </div> -->
          <div @click="GotoMail()" class="d-flex justify-content-center align-items-center MailClick"> 
            <img style="width:26px;height:17px;" src="../assets/icon_mail_01.png">
          </div>
          <!--(這個是新加坡的版本Menu)-->
          <!-- <div @click="EarthClickForSingapore()" class="d-flex justify-content-center align-items-center" :class="Earth_bg_form" style="width:52px;border-left: 1px solid #c9c9c9;cursor: pointer;"> 
            <img :class="Earthsize" :src="Earthsrc">
          </div> -->
          <!--(這個是日本的版本Menu)-->
          <div @click="EarthClick()" class="d-flex justify-content-center align-items-center" :class="Earth_bg_form" style="width:52px;border-left: 1px solid #c9c9c9;cursor: pointer;"> 
            <img :class="Earthsize" :src="Earthsrc">
          </div>
          <div @click="MenuClick()" class="display_hamburger justify-content-center align-items-center " :class="bg_form" style="position:relative;width:52px;border-left: 1px solid #c9c9c9;cursor: pointer;"> 
            <img :class="menusize" :src="Menusrc">
          </div>
        </div>
      </div>
      <div :class="menulist" :style="{'z-index':z_index_menulist}">
        <img style="width:100vw;height:72.5vh;position:absolute" src="../assets/bg_header_sp_01.png">
        <div class="text-left" style="position:absolute">
          <div v-for="(items,index) in MenuListObj" :key="index" class="menulistitem" @click="Click_Title(items.index,true)">
            {{items.name}}
          </div>
        </div>
      </div>
      <div :class="Earthlist" :style="{'z-index':z_index_Earth}" style="max-height:calc(100vh + -52px);overflow:auto">
        <div class="CP_Earthlist">
          <div class="button_form d-flex align-items-center "><font style="font-size:1.78rem;font-weight:bold">Kyowa Kirin Worldwide</font></div>
        </div>
        <div class="Mobile_Earthlist">
          <div class="button_form d-flex align-items-center "><font style="font-size:2rem;font-weight:bold">Kyowa Kirin Worldwide</font></div>
        </div>
        <div class="CP_Earthlist">
          <div class="row p-0 pl-4 pb-5 m-0" style="width:100vw;background-color:white;line-height:26px">
            <div class="col p-0 m-0 text-left" style="border-right:1px solid #E0E0E0">
              <div class="mb-3" style="font-size:1.78rem;font-weight:bold">{{ContentObj[0].name}}</div>
              <li class="m-0">Kyowa Kirin Co., Ltd. ( <a href="https://www.kyowakirin.co.jp/index.html" class="text-link-sub" target="_blank" style="color:#ea5504">日本語</a> )</li>
              <li class="m-0">FUJIFILM KYOWA KIRIN BIOLOGICS Co., Ltd. ( <a href="http://fujifilmkyowakirin-biologics.com/ja/index.html" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">日本語</a> / <a href="http://fujifilmkyowakirin-biologics.com/en/index.html" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">English</a> )</li>
              <li class="m-0">Kyowa Kirin plus Co., Ltd. ( <a href="http://www.kyowakirinplus.co.jp/" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">日本語</a> )</li>
              <li class="m-0">Kyowa Kirin Frontier Co., Ltd. ( <a href="https://www.kyowa-kirin-frontier.com/" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">日本語</a> )</li>
              <div class="mb-3 mt-3" style="font-size:1.78rem;font-weight:bold">{{ContentObj[1].name}}</div>
              <li class="m-0">Kyowa Kirin USA Holdings, Inc.  ( <a href="https://kkna.kyowakirin.com/" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">English</a> )</li>
              <li class="m-0">BioWa, Inc.  ( <a href="/biowa/index.html" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">English</a> )</li>
              <li class="m-0">Kyowa Kirin Pharmaceutical Development, Inc.  ( <a href="https://kkna.kyowakirin.com/" target="_blank" class="text-link-sub outBoundModalLink" style="color:#ea5504">English</a> )</li>
              <li class="m-0">Kyowa Kirin Pharmaceutical Research, Inc.  ( <a href="https://kkna.kyowakirin.com/" target="_blank" class="text-link-sub outBoundModalLink" style="color:#ea5504">English</a> )</li>
              <li class="m-0">Kyowa Kirin, Inc.  ( <a href="https://kkna.kyowakirin.com/" target="_blank" class="text-link-sub outBoundModalLink" style="color:#ea5504">English</a> )</li>
            </div>
            <div class="col p-0 pl-5 m-0 text-left" style="border-right:1px solid #E0E0E0">
              <div class="mb-3" style="font-size:1.78rem;font-weight:bold">{{ContentObj[2].name}}</div>
              <li class="m-0">Kyowa Kirin Asia Pacific Pte. Ltd.  ( <a href="https://www.kyowakirin.com/asiapacific/index.html" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">English</a> )</li>
              <li class="m-0">Kyowa Kirin China Pharmaceutical Co., Ltd.( <a href="https://www.kyowa-kirin.com.cn/" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">中文</a> )</li>
              <li class="m-0">Kyowa Kirin Korea Co., Ltd.  ( <a href="/kr/index.html" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">한국어</a> )</li>
              <li class="m-0">Kyowa Kirin Taiwan Co., Ltd.  ( <a href="/tw/index.html" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">中文</a> )</li>
              <li class="m-0">Kyowa Kirin Hong Kong Co., Limited  ( <a href="/hk/cn/index.html" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">中文</a> / <a href="/hk/index.html" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">English</a> )</li>
              <li class="m-0">Kyowa Kirin (Thailand) Co., Ltd. ( <a href="/thailand/index.html" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">ภาษาไทย</a> )</li>
              <li class="m-0">Kyowa Kirin Australia Pty Ltd. ( <a href="/australia/index.html" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">English</a> )</li>
              <li class="m-0">Kyowa Kirin Malaysia Sdn. Bhd. ( <a href="/malaysia/index.html" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">English</a> )</li>
            </div>
            <div class="col p-0 pl-5 m-0 text-left">
              <div class="mb-3" style="font-size:1.78rem;font-weight:bold">{{ContentObj[3].name}}</div>
              <li class="m-0">Kyowa Kirin International plc  ( <a href="http://www.international.kyowa-kirin.com/index.html" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">English</a> )</li>
              <li class="m-0">Kyowa Kirin Ltd.  ( <a href="http://www.international.kyowa-kirin.com/uk/index.html" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">English</a> )</li>
              <li class="m-0">Kyowa Kirin Pharma SAS ( <a href="#outBoundModal-exception-02" class="text-link-sub outBoundModalLink" style="color:#ea5504">français</a> )</li>
              <li class="m-0">Kyowa Kirin Farmaceutica, S.L.U.  ( <a href="http://www.international.kyowa-kirin.com/es/index.html" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">Español</a> )</li>
              <li class="m-0">Kyowa Kirin GmbH  ( <a href="http://www.international.kyowa-kirin.com/de/index.html" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">Deutsch</a> )</li>
              <li class="m-0">Kyowa Kirin Pharma B.V. - Netherlands  ( <a href="http://www.international.kyowa-kirin.com/nl/index.html" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">Nederlands</a> )</li>
              <li class="m-0">Kyowa Kirin Pharma B.V. - Belgium &amp; Luxembourg  ( <a href="http://international.kyowa-kirin.com/belux/index.html" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">English</a> )</li>
              <li class="m-0">Kyowa Kirin S.r.l.  - Italia ( <a href="http://www.international.kyowa-kirin.com/it/index.html" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">Italiano</a> )</li>
              <li class="m-0">Kyowa Kirin AB - Sweden  ( <a href="http://www.international.kyowa-kirin.com/se/index.html" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">Svenska</a> )</li>
              <li class="m-0">Kyowa Kirin AB - Norway  ( <a href="http://www.international.kyowa-kirin.com/no/index.html" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">English</a> )</li>
              <li class="m-0">Kyowa Kirin AB - Finland  ( <a href="http://www.international.kyowa-kirin.com/fi/index.html" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">English</a> )</li>
              <li class="m-0">Kyowa Kirin AB - Denmark  ( <a href="http://www.international.kyowa-kirin.com/dk/index.html" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">English</a> )</li>
            </div>
          </div>
        </div>
        <div class="Mobile_Earthlist">
          <div class="accordion" id="accordionExample">
            <Expansion-Obj v-for="(items,index) in ContentObj" :status="items.status" :key="index" :index="index" :name="items.name" :content="items.content" @ListClick_trigger="ListClick"></Expansion-Obj>
          </div>
        </div>
      </div>
      <div @click="scrollToTop()" class="scrollToTop-btn d-flex justify-content-center align-items-center">↑</div>
      <!-- <font style="font-size:5rem !important">112334896</font> -->
      <div :style="{'opacity':OpacityNum_Earth}">
        <router-view style="overflow:auto" :style="{'opacity':OpacityNum}" @Click_Title_trigger="Click_Title_"/>
      </div>
  </div>
</template>

<script>
import Expansion from './Expansion'
export default {
  name: 'Header',
  components: {
    'Expansion-Obj':Expansion
  },
  data () {
    return {
      headtitle:['headtitle','headtitle','headtitle','headtitle','headtitle'],
      Menusrc:require('@/assets/icon_menu_sp_01.png'),
      Earthsrc:require('@/assets/icon_global_01.png'),
      menusize:'menusize',
      Earthsize:'Earthsize',
      bg_form:'bg_form_w',
      menulist:'menulist_default',
      Earthlist:'Earth_default',
      OpacityNum:1,
      OpacityNum_Earth:1,
      Earth_bg_form:'Earth_bg_form_w',
      z_index_Earth:1,
      z_index_menulist:2,
      ContentObj:
      [
        {name:'JAPAN',
        status:false,
        content:'<div style="width:100vw;text-align:left"><font>Kyowa Kirin Co., Ltd. ( <a href="https://www.kyowakirin.co.jp/index.html" class="text-link-sub" target="_blank" style="color:#ea5504">日本語</a> )</font></div>'
        +'<div style="width:100vw;text-align:left"><font>FUJIFILM KYOWA KIRIN BIOLOGICS Co., Ltd. ( <a href="http://fujifilmkyowakirin-biologics.com/ja/index.html" class="text-link-sub outBoundModalLink" target="_blank"style="color:#ea5504">日本語</a> / <a href="http://fujifilmkyowakirin-biologics.com/en/index.html" class="text-link-sub outBoundModalLink" target="_blank"style="color:#ea5504">English</a> )</font></div>'
        +'<div style="width:100vw;text-align:left"><font>Kyowa Kirin plus Co., Ltd. ( <a href="http://www.kyowakirinplus.co.jp/" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">日本語</a> )</font></div>'
        +'<div style="width:100vw;text-align:left"><font>Kyowa Kirin Frontier Co., Ltd. ( <a href="https://www.kyowa-kirin-frontier.com/" class="text-link-sub outBoundModalLink" target="_blank" style="color:#ea5504">日本語</a> )</font></div>'},
        {name:'NORTH AMERICA',status:false,content:'<div style="width:100vw;text-align:left">Kyowa Kirin USA Holdings, Inc.  ( <a href="https://kkna.kyowakirin.com/" class="text-link-sub outBoundModalLink" target="_blank"style="color:#ea5504">English</a> )</div>'
	      +'<div style="width:100vw;text-align:left">BioWa, Inc.  ( <a href="/biowa/index.html" class="text-link-sub outBoundModalLink" target="_blank"style="color:#ea5504">English</a> )</div>'
        +'<div style="width:100vw;text-align:left">Kyowa Kirin Pharmaceutical Development, Inc.  ( <a href="https://kkna.kyowakirin.com/" target="_blank" class="text-link-sub outBoundModalLink"style="color:#ea5504">English</a> )</div>'
	      +'<div style="width:100vw;text-align:left">Kyowa Kirin Pharmaceutical Research, Inc.  ( <a href="https://kkna.kyowakirin.com/" target="_blank" class="text-link-sub outBoundModalLink"style="color:#ea5504">English</a> )</div>'
        +'<div style="width:100vw;text-align:left">Kyowa Kirin, Inc.  ( <a href="https://kkna.kyowakirin.com/" target="_blank" class="text-link-sub outBoundModalLink"style="color:#ea5504">English</a> )</div>'},
        {name:'ASIA PACIFIC',status:false,content:'<div style="width:100vw;text-align:left">Kyowa Kirin Asia Pacific Pte. Ltd.  ( <a href="https://www.kyowakirin.com/asiapacific/index.html" class="text-link-sub outBoundModalLink" target="_blank"style="color:#ea5504">English</a> )</div>'
        +'<div style="width:100vw;text-align:left">Kyowa Kirin China Pharmaceutical Co., Ltd.( <a href="https://www.kyowa-kirin.com.cn/" class="text-link-sub outBoundModalLink" target="_blank"style="color:#ea5504">中文</a> )</div>'
        +'<div style="width:100vw;text-align:left">Kyowa Kirin Korea Co., Ltd.  ( <a href="/kr/index.html" class="text-link-sub outBoundModalLink" target="_blank"style="color:#ea5504">한국어</a> )</div>'
        +'<div style="width:100vw;text-align:left">Kyowa Kirin Taiwan Co., Ltd.  ( <a href="/tw/index.html" class="text-link-sub outBoundModalLink" target="_blank"style="color:#ea5504">中文</a> )</div>'
        +'<div style="width:100vw;text-align:left">Kyowa Kirin Hong Kong Co., Limited  ( <a href="/hk/cn/index.html" class="text-link-sub outBoundModalLink" target="_blank"style="color:#ea5504">中文</a> / <a href="/hk/index.html" class="text-link-sub outBoundModalLink" target="_blank"style="color:#ea5504">English</a> )</div>'
        +'<div style="width:100vw;text-align:left">Kyowa Kirin (Thailand) Co., Ltd. ( <a href="/thailand/index.html" class="text-link-sub outBoundModalLink" target="_blank"style="color:#ea5504">ภาษาไทย</a> )</div>'
        +'<div style="width:100vw;text-align:left">Kyowa Kirin Australia Pty Ltd. ( <a href="/australia/index.html" class="text-link-sub outBoundModalLink" target="_blank"style="color:#ea5504">English</a> )</div>'
        +'<div style="width:100vw;text-align:left">Kyowa Kirin Malaysia Sdn. Bhd. ( <a href="/malaysia/index.html" class="text-link-sub outBoundModalLink" target="_blank"style="color:#ea5504">English</a> )</div>'},
        {name:'EMEA',status:false,content:'<div style="width:100vw;text-align:left">Kyowa Kirin International plc  ( <a href="http://www.international.kyowa-kirin.com/index.html" class="text-link-sub outBoundModalLink" target="_blank"style="color:#ea5504">English</a> )</div>'
        +'<div style="width:100vw;text-align:left">Kyowa Kirin Ltd.  ( <a href="http://www.international.kyowa-kirin.com/uk/index.html" class="text-link-sub outBoundModalLink" target="_blank"style="color:#ea5504">English</a> )</div>'
        +'<div style="width:100vw;text-align:left">Kyowa Kirin Pharma SAS ( <a href="#outBoundModal-exception-02" class="text-link-sub outBoundModalLink"style="color:#ea5504">français</a> )</div>'
        +'<div style="width:100vw;text-align:left">Kyowa Kirin Farmaceutica, S.L.U.  ( <a href="http://www.international.kyowa-kirin.com/es/index.html" class="text-link-sub outBoundModalLink" target="_blank"style="color:#ea5504">Español</a> )</div>'
        +'<div style="width:100vw;text-align:left">Kyowa Kirin GmbH  ( <a href="http://www.international.kyowa-kirin.com/de/index.html" class="text-link-sub outBoundModalLink" target="_blank"style="color:#ea5504">Deutsch</a> )</div>'
        +'<div style="width:100vw;text-align:left">Kyowa Kirin Pharma B.V. - Netherlands  ( <a href="http://www.international.kyowa-kirin.com/nl/index.html" class="text-link-sub outBoundModalLink" target="_blank"style="color:#ea5504">Nederlands</a> )</div>'
        +'<div style="width:100vw;text-align:left">Kyowa Kirin Pharma B.V. - Belgium &amp; Luxembourg  ( <a href="http://international.kyowa-kirin.com/belux/index.html" class="text-link-sub outBoundModalLink" target="_blank"style="color:#ea5504">English</a> )</div>'
        +'<div style="width:100vw;text-align:left">Kyowa Kirin S.r.l.  - Italia ( <a href="http://www.international.kyowa-kirin.com/it/index.html" class="text-link-sub outBoundModalLink" target="_blank"style="color:#ea5504">Italiano</a> )</div>'
        +'<div style="width:100vw;text-align:left">Kyowa Kirin AB - Sweden  ( <a href="http://www.international.kyowa-kirin.com/se/index.html" class="text-link-sub outBoundModalLink" target="_blank"style="color:#ea5504">Svenska</a> )</div>'
        +'<div style="width:100vw;text-align:left">Kyowa Kirin AB - Norway  ( <a href="http://www.international.kyowa-kirin.com/no/index.html" class="text-link-sub outBoundModalLink" target="_blank"style="color:#ea5504">English</a> )</div>'
        +'<div style="width:100vw;text-align:left">Kyowa Kirin AB - Finland  ( <a href="http://www.international.kyowa-kirin.com/fi/index.html" class="text-link-sub outBoundModalLink" target="_blank"style="color:#ea5504">English</a> )</div>'
        +'<div style="width:100vw;text-align:left">Kyowa Kirin AB - Denmark  ( <a href="http://www.international.kyowa-kirin.com/dk/index.html" class="text-link-sub outBoundModalLink" target="_blank"style="color:#ea5504">English</a> )</div>'},
      ],
      MenuListObj:[
        {name:'首頁',index:0},
        {name:'關於我們',index:1},
        {name:'我們的產品',index:2},
        {name:'最新消息',index:3},
        {name:'亞太分佈圖',index:4}
      ],
      scrollTop: null,
      isScrollTop: false
    }
  },
  mounted(){
    var lang = (window.navigator.userLanguage || window.navigator.language).toLowerCase();
    var url = location.origin
    var location_ = location.href.toString().split(url)[1]
    if(lang == 'zh-tw'){
      lang = '/zh'
      var newurl = location.origin + lang + location_
      if(location.href.toString().split('#')[0].split(url)[1] == lang + '/'){

      }else{
        location.href = newurl
      }
    }else{
      lang = '/en'
      var newurl = location.origin + lang + location_
      if(location.href.toString().split('#')[0].split(url)[1] == lang){

      }else{
        location.href = newurl
      }
    }
    window.addEventListener('scroll', () => {
      this.scrollTop = document.documentElement.scrollTop;
      if (this.scrollTop > 150) {
        this.isScrollTop = true;
      } else {
        this.isScrollTop = false;
      }
    }, true);
  },
  methods:{
    scrollToTop() {
      let $this = this;
      setTimeout(function animation() {
        if ($this.scrollTop > 0) {
          setTimeout(() => {
            $this.scrollTop = $this.scrollTop - 30;
            document.documentElement.scrollTop = $this.scrollTop - 30;
            animation();
          }, 1);
        }
      }, 1);
    },
    EarthClickForSingapore(){
      location.href = 'https://www.kyowakirin.com/index.html#anc-global-network'
    },
    ToProduct(){
      this.$router
      .push({
        path: "Product",
      })
      .catch(err => {
        console.log(err)
      })
    },
    ToAboutUs(){
      this.$router
      .push({
        path: "AboutUs",
      })
      .catch(err => {
        console.log(err)
      })
    },
    GoHome(){
      this.$router
      .push({
        path: "Home",
      })
      .catch(err => {
        console.log(err)
      })
    },
    GoOurAsiaPacificOffices(){
      this.$router
      .push({
        path: "OurAsiaPacificOffices",
      })
      .catch(err => {
        console.log(err)
      })
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
    ListClick(obj){
      for(var i=0 ; i <this.ContentObj.length ; i++){
          this.ContentObj[i].status = false
      }
       this.ContentObj[obj.index].status = true
    },
    GotoMail(){
      location.href = 'https://faq.kirin.co.jp/form/kkc_18_cn.html#_ga=2.267408327.85928623.1616483882-769985277.1576133350'
    },
    Change_Title_Css(index){
      if(index == -1){
        for(var i=0 ; i<this.headtitle.length ; i++){
          this.$set(this.headtitle, i, 'headtitle');
        }
        return
      }
      for(var i=0 ; i<this.headtitle.length ; i++){
        if(i!=index){
          this.$set(this.headtitle, i, 'headtitle');
        }else{
          this.$set(this.headtitle, i, 'headtitle_2');
        }
      }
    },
    EarthClick(){
      if(this.Earthsrc == require('@/assets/icon_close_01.png')){
        this.OpacityNum_Earth = 1
        this.Earthsrc = require('@/assets/icon_global_01.png')
        this.Earthsize = 'Earthsize'
        this.Earth_bg_form = 'Earth_bg_form_w'
        this.Earthlist = 'Earth_Up'
        var lo = this
        // setTimeout(function(){
        //   lo.Earthlist = 'Earth_default'
        // },500)
      }else{
        this.OpacityNum_Earth = 0.5
        this.Earthsrc = require('@/assets/icon_close_01.png')
        this.Earthsize = 'Earthsize_x'
        this.Earth_bg_form = 'Earth_bg_form_g'
        this.Earthlist = 'Earth_Down'
        this.z_index_Earth = 2
        this.z_index_menulist = 1
      }
    },
    MenuClick(){
      if(this.Menusrc == require('@/assets/icon_menu_sp_01.png')){
        this.OpacityNum = 0.5
        this.Menusrc = require('@/assets/icon_menu_sp_02.png')
        this.menusize = 'menusize_x'
        this.bg_form = 'bg_form_o'
        this.menulist = 'menulist'
        this.z_index_menulist = 2
        this.z_index_Earth = 1
      }else{
        this.OpacityNum = 1
        this.Menusrc = require('@/assets/icon_menu_sp_01.png')
        this.menusize = 'menusize'
        this.bg_form = 'bg_form_w'
        this.menulist = 'menulist_Up'
        var lo = this
        setTimeout(function(){
          lo.menulist = 'menulist_default'
        },350)
      }
    },
    Click_Title_(obj){
      switch (obj.index){
        case -1:
          this.Change_Title_Css(obj.index)
          break;
        case 0:
          this.Change_Title_Css(obj.index)
          this.GoHome()
          break;
        case 1:
          this.Change_Title_Css(obj.index)
          console.log(obj.index)
          this.ToAboutUs()
          break;
        case 2:
          this.Change_Title_Css(obj.index)
          this.ToProduct()
          break;
        case 3:
          this.Change_Title_Css(obj.index)
          this.ToNews()
          break;
        case 4:
          this.Change_Title_Css(obj.index)
          this.GoOurAsiaPacificOffices()
          break;        
      }
    },
    Click_Title(index,menuitem){
      if(menuitem){
        this.MenuClick()
      }
      switch (index){
        case -1:
          this.Change_Title_Css(index)
          break;
        case 0:
          this.Change_Title_Css(index)
          this.GoHome()
          break;
        case 1:
          this.Change_Title_Css(index)
          this.ToAboutUs()
          break;
        case 2:
          this.Change_Title_Css(index)
          this.ToProduct()
          break;
        case 3:
          this.Change_Title_Css(index)
          this.ToNews()
          break;
        case 4:
          this.Change_Title_Css(index)
          this.GoOurAsiaPacificOffices()
          break;        
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scrollToTop-btn{
  position:fixed;background-color:#ea5504;cursor:pointer;width:50px;height:50px;border-radius:50%;color:white;font-size:3rem;bottom:20px;right:20px;z-index:2;
  font-family: Arial, Helvetica, sans-serif;
}
.scrollToTop-btn:hover{
  position:fixed;background-color:#ea5504;cursor:pointer;width:50px;height:50px;border-radius:50%;color:white;font-size:3rem;bottom:20px;right:20px;z-index:2;box-shadow: 1px 1px 1px 1px #8b8b8b;
}
/*computer*/
  @media (min-width: 769px) {
    .logo_pc{
      display: flex;
    }
    .logo_mb{
      display: none;
    }
    .header_{
        width: 99vw;
        height:52px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        opacity: 1;
        position: fixed;
    }
    .display_title{
      display: flex !important;
    }
    .display_hamburger{
      display: none !important;
    }
    .menulist_default{
      display: none;
      top:-75vh;
      left:0;
    }
    .menulist{
      display: none;
    }
    .menulist_Up{
      display: none;
    }
    .Earth_default{
      position:fixed;
      top:-150vh;
      left:0;
      width:100vw;
      box-shadow:1px 2px 2px #d1d2d2
    }
    .Earth_Down{
      position:fixed;
      top:52px;
      left:0;
      background-color: transparent;
      animation-name: MoveToDown;    /*動畫名稱，需與 keyframe 名稱對應*/
      animation-duration: 0.35s;    /*動畫持續時間，單位為秒*/
      animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/
      width:100vw;
      box-shadow:1px 2px 2px #d1d2d2
    }
    .Earth_Up{
      position:fixed;
      top:-150vh;
      left:0;
      background-color: transparent;
      animation-name: MoveToUp;    /*動畫名稱，需與 keyframe 名稱對應*/
      animation-duration: 0.35s;    /*動畫持續時間，單位為秒*/
      animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
      width:100vw;
      box-shadow:1px 2px 2px #d1d2d2
    }
    .CP_Earthlist{
      display: block;
    }
    .Mobile_Earthlist{
      display: none;
    }
  }
/*mobile*/
  @media (min-width: 320px) and (max-width:768px) {
    .logo_pc{
      display: none;
    }
    .logo_mb{
      display: flex;
    }
    .header_{
        width: 100vw;
        height:52px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        opacity: 1;
        position: fixed;
    }
    .display_title{
      display: none !important;
    }
    .display_hamburger{
      display: flex !important;
    }
    .menulist_default{
      display: none;
      top:-75vh;
      left:0;
    }
    .menulist{
      position:fixed;
      top:52px;
      left:0;
      animation-name: MoveToDown;    /*動畫名稱，需與 keyframe 名稱對應*/
      animation-duration: 0.35s;    /*動畫持續時間，單位為秒*/
      animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    }
    .menulist_Up{
      position:fixed;
      top:-75vh;
      left:0;
      animation-name: MoveToUp;    /*動畫名稱，需與 keyframe 名稱對應*/
      animation-duration: 0.35s;    /*動畫持續時間，單位為秒*/
      animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    }
    .Earth_default{
      position:fixed;
      top:-150vh;
      left:0;
      width:100vw;
      box-shadow:1px 2px 2px #d1d2d2
    }
    .Earth_Down{
      position:fixed;
      top:52px;
      left:0;
      background-color: transparent;
      animation-name: MoveToDown;    /*動畫名稱，需與 keyframe 名稱對應*/
      animation-duration: 0.35s;    /*動畫持續時間，單位為秒*/
      animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/
      width:100vw;
      box-shadow:1px 2px 2px #d1d2d2
    }
    .Earth_Up{
      position:fixed;
      top:-150vh;
      left:0;
      background-color: transparent;
      animation-name: MoveToUp;    /*動畫名稱，需與 keyframe 名稱對應*/
      animation-duration: 0.35s;    /*動畫持續時間，單位為秒*/
      animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
      width:100vw;
      box-shadow:1px 2px 2px #d1d2d2
    }
    .CP_Earthlist{
      display: none;
    }
    .Mobile_Earthlist{
      display: block;
    }
  }
  /* 關鍵影格(@keyframe) */
  @keyframes MoveToDown {
      from { top: -150vh; }
      to { top: 52px; }
  }
  @keyframes MoveToUp {
      from { top: 52px; }
      to { top: -150vh; }
  }
.button_form{
  z-index: 1;
  background-color: white;
  width: 100%;
  height: 62px;
  border: 0;
  border-top: 1px solid #d1d2d2;
  position:relative;
  text-align: left;
  padding-left: 15px;
}
.menulistitem{
  width:100vw;
  border-top: 1px solid rgba(255, 255, 255, .4);
  font-size: calc(4.4rem/2);color: #fff;
  padding-top: 22px;
  padding-right: 15px;
  padding-bottom: 22px;
  padding-left: 15px;
  font-weight: bold;
  cursor: pointer;
}
.menulistitem:active{
  background-color: #6b9693;
  opacity: 0.7;
}
.bg_form_o{
  background-color: #ea5504;
}
.bg_form_w{
  background-color: white;
}
.Earth_bg_form_g{
  background-color: #dfdfdf;
}
.Earth_bg_form_w{
  background-color: white;
}
.menusize{
  width:20px;
  height:16px;
  cursor: pointer;
}
.menusize_x{
  width:20px;
  height:20px;
  cursor: pointer;
}
.Earthsize{
  width:31px;
  height:36px;
  cursor: pointer;
}
.Earthsize_x{
  width:20px;
  height:20px;
  cursor: pointer;
}
.MailClick{
  width:52px;
  border-left: 1px solid #c9c9c9;
  cursor: pointer;
}
.MailClick:active{
  width:52px;
  border-left: 1px solid #c9c9c9;
  cursor: pointer;
  background-color: #65C1ED;
  opacity: 0.5;
}
.headtitle{
  padding:0px 15px 0px 15px;
  cursor: pointer;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
}
.headtitle_2{
  padding:0 15px;
  cursor: pointer;
  border-top: 5px solid #ea5504;
  border-bottom: 5px solid transparent;
  color: #ea5504;
}
.headtitle:hover{
  padding:0 15px;
  cursor: pointer;
  border-top: 5px solid #ea5504;
  border-bottom: 5px solid transparent;
  color: #ea5504;
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
<style>

</style>
