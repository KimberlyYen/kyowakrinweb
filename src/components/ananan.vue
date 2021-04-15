<template>
    <div class="News">
      <div class="str-outer">
        <div class="str-inner">
          <dl class="mod-list-description">
  
            <!-- <Button @click="open" style="background-color: rgb(255, 94, 0);"> 法律聲明 </Button>
            <h1 @click="open" class="hdg-lv1-02" v-bind:class="ABC"> 法律聲明 </h1> -->
            <h1 @click="show_detail"> 法律聲明 </h1>
            <button @click="close_detail" v-bind:class="div0_1" style="color: black"> 第一條 </button>

          </dl>
        </div>
      </div>
      <Footer-bg style="background-color:white;padding-top: 50vh;" @Click_Title_trigger="Click_Title2"></Footer-bg>
    </div>
  </template>
  
  <script>
    import Footer from './Footer'
    export default {
      components: {
        'Footer-bg':Footer
      },
      name: 'law',
      data () {
        return {
          msg: 'Welcome to Your Vue.js App',
          div0_1: 'div0',
        }
      },
      methods:{
        show_detail () {
        this.div0_1='div1'
        },
        close_detail () {
        this.div0_1='div2'
        },
      }
    }
    </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  /*ani*/
.div0 {
width:100px;
height:200px;
background:#ea5504;
position:absolute;
margin: 0px;
right: -100px;
}
.div1 {
width:200px;
height:200px;
background:#ea5504;
position:absolute;
margin: 0px;
right: 0px;
animation: open 3s 1;
}
.div2 {
width:100px;
height:200px;
background:#ea5504;
position:absolute;
margin: 0px;
right: -100px;
animation: close 3s 1;
}

@keyframes open {
  from   {right: -100px;width:100px;}
  to     {right: 0px;width:200px;}
}
@keyframes close {
  from   {right: 0px;width:200px;}
  to     {right: -100px;width:100px;}
}


  /*computer*/
  
  * {
    font-family: Arial, sans-serif;
    text-justify:inter-ideograph;
  }
  .expand{
    height:12.5px;
    width:12.5px;
    transform:rotate(45deg);
    border-right:1px solid black;
    border-bottom:1px solid black;
  }
  
    h1,h2,h3,h4 {
        font-weight: 600;
        margin-bottom: 18px;
    }
  
    h1:hover {
        color: chocolate;
        text-decoration: underline;
        cursor: pointer; 
    }
  
  .hdg-lv1-02 {
    font-size: 4.8rem;
    line-height: 1.125;
    margin-top: 55px;
    margin-bottom: 42px;
    color: #ea5504;
  }
  
  .hdg-lv3-01 {
    font-size: 2.5rem;
    margin-top: 3vh;
    color: #ea5504;
  }
  
  .hdg-lv4-01 {
    font-size: 2rem;
    color: #5D6164;
    margin-top: 3.5vh;
    margin-bottom: 2vh;
    margin-left: 2vw;
  }
  
  .intro_p {
    color:#a5a5a5;
    font-size: 1.8rem;
    margin-left: 0%;
    margin-bottom: 3%;
  }
  
  p {
    color:#a5a5a5;
    font-size: 1.8rem;
    margin-left: 4%;
    margin-bottom: 3%;
  }
  
  .News {
    height:100vh;
    padding-top: 52px;
  }  
  .inner {
    z-index:-100;
    position: relative;
    min-height: 250px;
    background-color: #fef3ed;
  }
  .arrow {
    font-weight: bold;
    color: #ea5504;
  }
  .mod-heading-l1 {
    text-align: center;
    max-width: 980px;
    width: 100%;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
  .title {
    top: 50%;
    right: 50%;
    width: 100%;
    font-size: 5rem;
    font-weight: bold;
    text-align: center;
    color: #ea5504;
  }
  .str-outer {
    margin-top: 100px;
  }
  .str-inner {
    max-width: 1000px;
    margin: 0 auto;
  }
  .mod-list-description {
    text-align: left;
    line-height: 1.8;    
  }
  dt {
    font-size: 2rem;
    color: #ea5504;
  }
  dd {
    font-size: 1.8rem;
    }
  .news-a {
    color: #5D6164;
  }
  .showMore {
    font-weight: 7
    
    
    00;
    font-size: 1.8rem;
    text-align: center;
    padding: 5% 5% 0% 5%;
  }
  
  /*mobile*/
    @media (min-width: 320px) and (max-width:768px) {
      * {
        text-align: justify;
        text-justify:inter-ideograph;
      }
      .str-outer {
        position: relative;
        min-height: 250px;
        padding-right: calc(46px/2);
        padding-left: calc(46px/2);
      }
    }
  
  </style>
  