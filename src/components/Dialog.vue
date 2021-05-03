<template>
    <div v-if="d_play" class="dialogbg text-left p-5" style="position:relative;color:white;font-size:2rem">
        <img @click="close(index1,index2)" src="@/assets/close_2.png" style="position:absolute;top:10px;right:10px;cursor:pointer;">
        您將要連結至其它網站，<br />點擊「OK」後繼續。
        <div class="d-flex justify-content-center align-items-end" style="width:100%;height:120px">
            <div @click="Ahref()" class="d-flex justify-content-center align-items-center" :style="{'cursor':pointer}" style="border-radius:50px;background-color: white;width:200px;height:40px;color:#EA5504;font-weight:bold">
                <div style="margin-left:40%"> OK </div>
                <img style="margin-left:20%;width: ;" src="@/assets/icon_link.png">
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Dialog',
  props:['url','d_play','index1','index2'],
  data () {
    return {
        pointer:'pointer'
    }
  },
  mounted(){

  },
  watch:{
  },
  methods:{
      close(index1,index2){
          this.$emit('close_trigger', { index1: index1,index2: index2 });
      },
      Ahref(){
        if(this.url == ''){
            this.pointer = 'text'
        }else{
            this.pointer = 'pointer'
            window.open(this.url);
            this.close(this.index1,this.index2)
            //location.href = this.url;
        }
      }
  }
}
</script>
<style scoped>
.dialogbg{
    background-color: #EA5504;
    width: 90%;
    max-width: 660px;
    height: 240px;
    line-height: 2;
}
</style>