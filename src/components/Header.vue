<template>
  <div class="Header">
      <div class="header_ row p-0 m-0" style="z-index:3">
        <div class="col-6 col-md-3 col-xl-6 p-0 m-0 pl-5 d-flex justify-content-start align-items-center"> 
          <img @click="GoHome()" style="width:153px;height:26px" src="../assets/logo_header_01.png">
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
          <div @click="EarthClick()" class="d-flex justify-content-center align-items-center" :class="Earth_bg_form" style="width:52px;border-left: 1px solid #c9c9c9;cursor: pointer;"> 
            <img :class="Earthsize" :src="Earthsrc">
          </div>
          <div @click="MenuClick()" class="display_hamburger justify-content-center align-items-center " :class="bg_form" style="position:relative;width:52px;border-left: 1px solid #c9c9c9;cursor: pointer;"> 
            <img :class="menusize" :src="Menusrc">
          </div>
        </div>
      </div>
      <div :class="menulist">
        <img style="width:100vw;height:75vh;" src="../assets/bg_header_sp_01.png">
      </div>
      <div :class="Earthlist">
        <div class="accordion" id="accordionExample">
        <Expansion-Obj v-for="(items,index) in ContentObj" :status="items.status" :key="index" :index="index" :name="items.name" :content="items.content" @ListClick_trigger="ListClick"></Expansion-Obj>
        </div>
      </div>
      <!-- <font style="font-size:5rem !important">112334896</font> -->
      <router-view :style="{'opacity':OpacityNum}"/>
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
      Earth_bg_form:'Earth_bg_form_w',
      ContentObj:[
        {name:'日本',status:false,content:'鮭魚很好吃鮭魚很好吃鮭魚很好吃'},
        {name:'美國',status:false,content:'牛肉很好吃牛肉很好吃牛肉很好吃'},
        {name:'馬來西亞',status:false,content:'椰子水好喝椰子水好喝椰子水好喝'}
      ]
    }
  },
  methods:{
    GoHome(){
      this.$router
      .push({
        path: "Home",
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
        this.OpacityNum = 1
        this.Earthsrc = require('@/assets/icon_global_01.png')
        this.Earthsize = 'Earthsize'
        this.Earth_bg_form = 'Earth_bg_form_w'
        this.Earthlist = 'Earth_Up'
        var lo = this
        // setTimeout(function(){
        //   lo.Earthlist = 'Earth_default'
        // },500)
      }else{
        this.OpacityNum = 0.5
        this.Earthsrc = require('@/assets/icon_close_01.png')
        this.Earthsize = 'Earthsize_x'
        this.Earth_bg_form = 'Earth_bg_form_g'
        this.Earthlist = 'Earth_Down'
      }
    },
    MenuClick(){
      if(this.Menusrc == require('@/assets/icon_menu_sp_01.png')){
        this.OpacityNum = 0.5
        this.Menusrc = require('@/assets/icon_menu_sp_02.png')
        this.menusize = 'menusize_x'
        this.bg_form = 'bg_form_o'
        this.menulist = 'menulist'
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
    Click_Title(index){
      switch (index){
        case 0:
          this.Change_Title_Css(index)
          break;
        case 1:
          this.Change_Title_Css(index)  
          break;
        case 2:
          this.Change_Title_Css(index)
          break;
        case 3:
          this.Change_Title_Css(index)
          break;
        case 4:
          this.Change_Title_Css(index)
          break;        
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*computer*/
  @media (min-width: 769px) {
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
      display: none;
    }
    .Earth_Down{
      display: none;
    }
    .Earth_Up{
      display: none;
    }
  }
/*mobile*/
  @media (min-width: 320px) and (max-width:768px) {
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
      z-index: 2;
      animation-name: MoveToDown;    /*動畫名稱，需與 keyframe 名稱對應*/
      animation-duration: 0.35s;    /*動畫持續時間，單位為秒*/
      animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    }
    .menulist_Up{
      position:fixed;
      top:-75vh;
      left:0;
      z-index: 2;
      animation-name: MoveToUp;    /*動畫名稱，需與 keyframe 名稱對應*/
      animation-duration: 0.35s;    /*動畫持續時間，單位為秒*/
      animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
    }
    .Earth_default{
      position:fixed;
      top:-75vh;
      left:0;
      width:100vw;
      box-shadow:1px 2px 2px #d1d2d2
    }
    .Earth_Down{
      position:fixed;
      top:52px;
      left:0;
      z-index: 1;
      background-color: transparent;
      animation-name: MoveToDown;    /*動畫名稱，需與 keyframe 名稱對應*/
      animation-duration: 0.35s;    /*動畫持續時間，單位為秒*/
      animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/
      width:100vw;
      box-shadow:1px 2px 2px #d1d2d2
    }
    .Earth_Up{
      position:fixed;
      top:-75vh;
      left:0;
      z-index: 1;
      background-color: transparent;
      animation-name: MoveToUp;    /*動畫名稱，需與 keyframe 名稱對應*/
      animation-duration: 0.35s;    /*動畫持續時間，單位為秒*/
      animation-iteration-count: 1;    /*動畫次數，infinite 為無限次*/ 
      width:100vw;
      box-shadow:1px 2px 2px #d1d2d2
    }
  }
  /* 關鍵影格(@keyframe) */
  @keyframes MoveToDown {
      from { top: -75vh; }
      to { top: 52px; }
  }
  @keyframes MoveToUp {
      from { top: 52px; }
      to { top: -75vh; }
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
