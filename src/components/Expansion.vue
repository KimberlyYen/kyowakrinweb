<template>
  <!-- <div class="Expansion">
     <button @click="ListClick()" class="button_form" type="button">
        <font style="font-size:2rem;font-weight:bold">{{name}}</font>
        <img style="position:absolute;top:23px;right:15px;width:13px;" :src="Expansionsrc">
    </button>
    <div :class="content_Css">
        {{content}}
    </div> -->
    <div class="card p-0">
        <div class="card-header p-0" :id="'heading'+index">
            <button @click="ListClick(index)" class="btn button_form" type="button" data-toggle="collapse" :data-target="'#collapse'+index" aria-expanded="false" :aria-controls="'collapse'+index">
            <font style="font-size:2rem;font-weight:bold">{{name}}</font>
            <img style="position:absolute;top:23px;right:15px;width:13px;" :src="Expansionsrc">
            </button>                
        </div>

        <div :id="'collapse'+index" class="collapse" :aria-labelledby="'heading'+index" data-parent="#accordionExample">
        <div class="card-body" v-html="content">
        </div>
        </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'Expansion',
  props:['name','content','index','status'],
  data () {
    return {
        Expansionsrc:require('@/assets/icon_arrow_bottom_01.png'),
        content_Css:'content_default',
        this_:this,
    }
  },
  mounted(){

  },
  watch:{
    'this_.status':function(){
        //console.log('1')
        if(this.status == true){
            this.Expansionsrc = require('@/assets/icon_close_02.png')
        }else{
            this.Expansionsrc = require('@/assets/icon_arrow_bottom_01.png')
        }
    }
  },
  methods:{
    ListClick(index){
        //console.log($('#collapse'+index)[0].attributes[4].nodeValue)
        if($('#collapse'+index)[0].attributes[4].nodeValue == 'collapse'){
            this.$emit('ListClick_trigger', { index: index });
            this.Expansionsrc = require('@/assets/icon_close_02.png')
            
        }else if($('#collapse'+index)[0].attributes[4].nodeValue == 'collapse show'){
            this.Expansionsrc = require('@/assets/icon_arrow_bottom_01.png')
        }
        // if(this.Expansionsrc == require('@/assets/icon_close_02.png')){
        //     this.Expansionsrc = require('@/assets/icon_arrow_bottom_01.png')
        //     this.content_Css ='content_default'
        //     // var lo = this
        //     // setTimeout(function(){
        //     //     lo.content_Css = 'content_default'
        //     // },500)
        // }else{
        //     this.Expansionsrc = require('@/assets/icon_close_02.png')
        //     this.content_Css ='content_Down'
        // }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@keyframes MoveToDown {
    from { top: -62px; }
    to { top: 0; }
}
@keyframes MoveToUp {
    from { top: 0; }
    to { top: -62px; }
}
.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition: height .15s ease;
       -o-transition: height .15s ease;
          transition: height .15s ease;
}
.content_default{
    display: none;
    position: relative;
    top:-62px;
    z-index: 0;
    width:100%;
    background-color: white;
}
/* .content_Up{
    display: block;
    position: relative;
    top:-62px;
    z-index: 0;
    width:100%;
    animation-name: MoveToUp;    
    animation-duration: 0.5s;    
    animation-iteration-count: 1;    
    background-color: white;
} */
.content_Down{
    display: block;
    position: relative;
    top:0px;
    z-index: 0;
    width:100%;
    /* animation-name: MoveToDown;  
    animation-duration: 0.5s;   
    animation-iteration-count: 1;    */
    background-color: white;
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
.button_form:active{
    background-color: #c6e9fa;
    width: 100%;
    height: 62px;
    border: 0;
    position:relative;
    text-align: left;
    padding-left: 15px;
}
.button_form:focus{
    width: 100%;
    height: 62px;
    border: 2px solid rgb(226, 147, 0);
    border-radius: 2.5px;
    position:relative;
    text-align: left;
    padding-left: 15px;
}
</style>
