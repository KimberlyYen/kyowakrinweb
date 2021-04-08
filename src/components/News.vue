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
          <div class="list">
            <dt>2020年4月1日</dt>
            <dd>
              <p class="mod-link-text"><font class="arrow">⟶  </font><a class="news-a" href="/csr/fair_operating_practices/compliance_required_pharmaceuticals/index.html">[台灣協和麒麟] 台灣協和麒麟股份有限公司自2020年4月搬遷至新址</a></p>
            </dd>
          </div>
          <div class="list">
            <dt>2019年9月1日</dt>
            <dd>
              <p class="mod-link-text"><font class="arrow">⟶  </font><a class="news-a" href="/csr/fair_operating_practices/compliance_required_pharmaceuticals/index.html">[台灣協和麒麟] 台灣協和醱酵麒麟股份有限公司更名爲台灣協和麒麟股份有限公司</a></p>
            </dd>
          </div>
          <div class="list">
            <dt>2018年6月25日</dt>
            <dd>
              <p class="mod-link-text"><font class="arrow">⟶  </font><a class="news-a" href="/csr/fair_operating_practices/compliance_required_pharmaceuticals/index.html">[台灣協和醱酵麒麟] 公司新藥Lumicef「立美西膚皮下注射劑210毫克」</a></p>
            </dd>
          </div> 
          <div class="list">
            <dt>2016年3月17日</dt>
            <dd>
              <p class="mod-link-text"><font class="arrow">⟶  </font><a class="news-a" href="/csr/fair_operating_practices/compliance_required_pharmaceuticals/index.html">[新聞澄清] KH NeoChem Co., Ltd. 並非 本公司之日本總公司(KHK)集團的公司。</a></p>
            </dd>
          </div>
          <div class="list">
            <dt>2016年1月25日</dt>
            <dd>
              <p class="mod-link-text"><font class="arrow">⟶  </font><a class="news-a" href="/csr/fair_operating_practices/compliance_required_pharmaceuticals/index.html">[台灣協和醱酵麒麟] 公司已上市藥品-恩沛板注射用凍晶粉末，英文商品名將以Romiplate 取代Nplate 之現有品項。</a></p>
            </dd>
          </div>
          <div class="list">
            <dt>2014年8月13日</dt>
            <dd>
              <p class="mod-link-text"><font class="arrow">⟶  </font><a class="news-a" href="/csr/fair_operating_practices/compliance_required_pharmaceuticals/index.html">[台灣協和醱酵麒麟] 公司已上市藥品-耐血比注射劑，將以0.5ml 取代1.0ml 之現有品項。</a></p>
            </dd>
          </div>
          <div class="list">
            <dt>2013年11月20日</dt>
            <dd>
              <p class="mod-link-text"><font class="arrow">⟶  </font><a class="news-a" href="/csr/fair_operating_practices/compliance_required_pharmaceuticals/index.html">[台灣協和醱酵麒麟] 公司新藥Sancuso「貼固守」上市</a></p>
            </dd>
          </div>
          <div class="list">
            <dt>2013年10月31日</dt>
            <dd>
              <p class="mod-link-text"><font class="arrow">⟶  </font><a class="news-a" href="/csr/fair_operating_practices/compliance_required_pharmaceuticals/index.html">[台灣協和醱酵麒麟] 公司新藥Nplate「恩沛板」上市</a></p>
            </dd>
          </div>
          <div class="list">
            <dt>2013年8月30日</dt>
            <dd>
              <p class="mod-link-text"><font class="arrow">⟶  </font><a class="news-a" href="/csr/fair_operating_practices/compliance_required_pharmaceuticals/index.html">[台灣協和醱酵麒麟] 公司新藥「貼固守穿皮貼片劑」與「恩沛板」之健保價生效</a></p>
            </dd>
          </div>
          <div class="list">
            <dt>2013年6月28日</dt>
            <dd>
              <p class="mod-link-text"><font class="arrow">⟶  </font><a class="news-a" href="/csr/fair_operating_practices/compliance_required_pharmaceuticals/index.html">[台灣協和醱酵麒麟] 公司網站即將上線</a></p>
            </dd>
          </div>
          <div class="list">
            <dt>2013年6月28日</dt>
            <dd>
              <p class="mod-link-text"><font class="arrow">⟶  </font><a class="news-a" href="/csr/fair_operating_practices/compliance_required_pharmaceuticals/index.html">[台灣協和醱酵麒麟] 公司即將有新藥在台灣推廣上市</a></p>
            </dd>
          </div>
          <div class="showMore">
            <font> SHOW MORE ﹀ </font>
          </div>
        </dl>
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
  name: 'News',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      NewsListObj:[
        {date:'2020年4月1日',content:'[台灣協和麒麟] 台灣協和麒麟股份有限公司自2020年4月搬遷至新址'},
        {date:'2019年9月1日',content:'[台灣協和麒麟] 台灣協和醱酵麒麟股份有限公司更名爲台灣協和麒麟股份有限公司'},
        {date:'2018年6月25日',content:'[台灣協和醱酵麒麟] 公司新藥Lumicef「立美西膚皮下注射劑210毫克」'},
        {date:'2016年3月17日',content:'[新聞澄清] KH NeoChem Co., Ltd. 並非 本公司之日本總公司(KHK)集團的公司。'},
        {date:'2016年1月25日',content:'[台灣協和醱酵麒麟] 公司已上市藥品-恩沛板注射用凍晶粉末，英文商品名將以Romiplate 取代Nplate 之現有品項。'},
        {date:'2014年8月13日',content:'[台灣協和醱酵麒麟] 公司已上市藥品-耐血比注射劑，將以0.5ml 取代1.0ml 之現有品項。'},
        {date:'2013年11月20日',content:'[台灣協和醱酵麒麟] 公司新藥Sancuso「貼固守」上市'},
        {date:'2013年10月31日',content:'[台灣協和醱酵麒麟] 公司新藥Nplate「恩沛板」上市'},
        {date:'2013年8月30日',content:'[台灣協和醱酵麒麟] 公司新藥「貼固守穿皮貼片劑」與「恩沛板」之健保價生效'},
        {date:'2013年6月28日',content:'[台灣協和醱酵麒麟] 公司網站即將上線'},
        {date:'2013年6月28日',content:'[台灣協和醱酵麒麟] 公司即將有新藥在台灣推廣上市'},
      ]

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
