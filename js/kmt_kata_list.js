const MIZU = "水";
const HONOO = "炎";
const KAZE = "風";
const OTO = "音";
const MUSHI = "蟲";
const KOI = "恋";
const HEBI = "蛇";
const KASUMI = "霞";
const IWA = "岩";

const kataNoList = ["壱ノ型","弐ノ型","参ノ型","肆ノ型","伍ノ型","陸ノ型","漆ノ型","捌ノ型","玖ノ型","拾ノ型"]
const kataList = [
    {
      kokyuName: MIZU,
      kataName:["水面斬り","水車","流流舞い","打ち潮","干天の慈雨","ねじれ渦","雫波紋突き","滝壷","水流飛沫","生生流転"]
    },
    {
      kokyuName: HONOO,
      kataName:["不知火","昇り炎天","","盛炎のうねり","炎虎","","","","煉獄"]
    },
    {
      kokyuName: KAZE,
      kataName:["塵旋風・削ぎ","爪々・科戸風","晴嵐風樹","昇上砂塵嵐","木枯らし颪","黒風烟嵐","勁風・天狗風","初烈風斬り"]
    },
    {
      kokyuName: OTO,
      kataName:["轟","","","響斬無間","鳴弦奏々"]
    },
    {
      kokyuName: KOI,
      kataName:["初恋のわななき","懊悩巡る恋","恋猫しぐれ","","揺らめく恋情・乱れ爪","猫足恋風"]
    },
    {
      kokyuName: HEBI,
      kataName:["委蛇斬り","狭頭の毒牙","塒締め","","蜿蜿長蛇"]
    },
    {
      kokyuName: KASUMI,
      kataName:["垂天遠霞","八重霞","霞散の飛沫","移流斬り","霞雲の海","月の霞消","朧"]
    },
    {
      kokyuName: IWA,
      kataName:["蛇紋岩・双極","天面砕き","岩軀の膚","流紋岩・速征","瓦輪刑部"]
    }
  ]


  var vm = new Vue({
    el: '#app',
    data: {
        kataList: kataList,
        kokyuName:"",
        kataNum:1
    },
    filters: {
      changeFormat : function (value) {
        if (!value) {
          return ""
        }
        return "「" + value.toString().replace("：", "　") + "！" + "」"
      }
    },
    computed: {
      hasKataName:function(){
        var ret = ""
        for (kata in this.kataList){
          if (this.kataList[kata].kokyuName == this.kokyuName){
            ret = this.kataList[kata].kataName[this.kataNum-1]
            break
          }
        }
        return ret
      },
      decideKataName:function(){
        var ret = ""
        if (this.hasKataName){
          ret = kataNoList[this.kataNum-1] + "：" + this.hasKataName
        }
        return ret
      }
    }
  })
  window.vm = vm