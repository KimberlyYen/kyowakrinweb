<template>
  <div class="ContactUs">
    <div class="inner" >
      <div class="mod-heading-l1">
        <p class="title">最新消息</p>
      </div>
    </div>
    <div class="str-outer">
      <div class="str-inner">
        <dl class="mod-list-description">
          <div v-for="(items,index) in NewsListObj" :key="index" class="list">
            <div v-if="index < ShowNum">
              <dt>{{items.date}}</dt>
              <dd>
                <p class="mod-link-text"><font class="arrow">⟶  </font><a class="news-a" style="font-weight:bold" href="/csr/fair_operating_practices/compliance_required_pharmaceuticals/index.html">{{items.content}}</a></p>
                <p class="ml-5" style="color:#a5a5a5">{{items.detail}}</p>
                <p class="ml-5" style="color:#a5a5a5">{{items.detail_}}</p>
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
    <div @click="SHOW_MORE_click()" style="font-weight: 500;color:#5d6164;height:25px;cursor:pointer;font-size:2rem;" class="row d-flex justify-content-center p-0 m-0">SHOW MORE<div class="expand ml-4 mt-1" style="color:#5d6164;"></div></div>
    <Footer-bg></Footer-bg>
  </div>
</template>

<script>
import Footer from './Footer'
export default {
  components: {
    'Footer-bg':Footer
  },
  name: 'News',
  mounted(){
  },
  methods:{
    SHOW_MORE_click(){
      if(this.ShowNum < this.NewsListObj.length){
        this.ShowNum += 5
      }
    }
  },
  data () {
    return {
      NewsListObj:[
        {date:'2020年4月1日',content:'[台灣協和麒麟] 台灣協和麒麟股份有限公司自2020年4月搬遷至新址',detail:'台灣協和麒麟股份有限公司自2020年4月15日起在新址正式營運'},
        {date:'2019年9月1日',content:'[台灣協和麒麟] 台灣協和醱酵麒麟股份有限公司更名爲台灣協和麒麟股份有限公司',detail:'台灣協和醱酵麒麟股份有限公司自2019年9月1日起更名爲台灣協和麒麟股份有限公司'},
        {date:'2018年6月25日',content:'[台灣協和醱酵麒麟] 公司新藥Lumicef「立美西膚皮下注射劑210毫克」',detail:'Lumicef「立美西膚」自2018年6月25日開始於台灣販售。'},
        {date:'2016年3月17日',content:'[新聞澄清] KH NeoChem Co., Ltd. 並非 本公司之日本總公司(KHK)集團的公司。',detail:'1. 近日新聞報導，中油 與 日商KH NeoChem Co., Ltd. 及 兆豐銀簽署合資協議書，共同在高雄臨海工業區投資，成立「曄揚股份有限公司」興建石化工廠，預定108年完工。上述日商KH NeoChem Co., Ltd. 並非 KHK集團的公司。',detail_:'2.KHK原本100%轉投資 Kyowa Chemical Co., Ltd.，但在2011年3月3日已將該公司賣給了KJ Holding Co., Ltd.，而KJ Holding Co., Ltd.於2012年4月1日更名為KH NeoChem Co., Ltd.。因此，KH NeoChem Co., Ltd. 與 KHK集團無任何關係。'},
        {date:'2016年1月25日',content:'[台灣協和醱酵麒麟] 公司已上市藥品-恩沛板注射用凍晶粉末，英文商品名將以Romiplate 取代Nplate 之現有品項。',detail:'1.公司已上市藥品-恩沛板注射用凍晶粉末，英文商品名將以Romiplate 取代Nplate 之現有品項。',detail_:'2.「恩沛板注射用凍晶粉末（Romiplate 250μg injection）」藥品許可證上之英文商品名，更名自2015年4月7日起生效，許可證字號與健保碼均無改變，相關資料請參見「衛生福利部食品藥物管理署」與「衛生福利部中央健康保險署」網站，謝謝。'},
        {date:'2014年8月13日',content:'[台灣協和醱酵麒麟] 公司已上市藥品-耐血比注射劑，將以0.5ml 取代1.0ml 之現有品項。',detail:'1.公司已上市藥品-耐血比注射劑，將以0.5ml 取代1.0ml 之現有品項。',detail_:'2.「耐血比注射劑 20，40，60 微克 / 0.5 毫升（NESP Injection Plastic Syringe 20，40，60 mcg / 0.5 ml）」之健保價自2014年8月1日起生效，相關資料請參見「衛生福利部中央健康保險署」網站，謝謝。'},
        {date:'2013年11月20日',content:'[台灣協和醱酵麒麟] 公司新藥Sancuso「貼固守」上市',detail:'Sancuso「貼固守」自2013年11月18日開始於台灣販售。'},
        {date:'2013年10月31日',content:'[台灣協和醱酵麒麟] 公司新藥Nplate「恩沛板」上市',detail:'Nplate「恩沛板」自2013年10月21日開始於台灣販售。'},
        {date:'2013年8月30日',content:'[台灣協和醱酵麒麟] 公司新藥「貼固守穿皮貼片劑」與「恩沛板」之健保價生效',detail:'1. 本公司新藥「貼固守穿皮貼片劑（Sancuso transdermal patch 3.1mg/24hours）」之健保價自2013年9月1日起生效，相關資料請參見「衛生福利部中央健康保險署」網站，謝謝。',detail_:'2. 本公司新藥「恩沛板 注射用凍晶粉末（Nplate injection）」之健保價自2013年9月1日起生效，相關資料請參見「衛生福利部中央健康保險署」網站，謝謝。'},
        {date:'2013年6月28日',content:'[台灣協和醱酵麒麟] 公司網站即將上線',detail:'台灣協和醱酵麒麟股份有限公司將於2013年6月28日起正式開放公司網站(Kyowa Hakko Kirin Taiwan)。'},
        {date:'2013年6月28日',content:'[台灣協和醱酵麒麟] 公司即將有新藥在台灣推廣上市',detail:'台灣協和醱酵麒麟公司將於近期內上市推廣兩項新藥，分別為(1)中文名:貼固守穿皮貼片劑，英文名:Sancuso transdermal patch 3.1mg/24hour(Granisetron);(2)中文名:恩沛板注射用凍晶粉末，英文名:Nplate injection(Romiplostim)。'
        },
      ],
      ShowNum:5
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*computer*/

*{
  font-family: Arial, sans-serif;
  }
.expand{
  height:12.5px;
  width:12.5px;
  transform:rotate(45deg);
  border-right:1px solid black;
  border-bottom:1px solid black;
}
.ContactUs {
  height:100vh;
  padding-top: 52px;
  padding-bottom: 100px;
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
  //border:#0000FF 5px solid;
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
  padding-bottom: 100px;
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
    .str-outer {
        position: relative;
        min-height: 250px;
        padding-right: calc(46px/2);
        padding-left: calc(46px/2);
    }
  }

</style>
