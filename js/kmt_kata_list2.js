Vue.component('kokyu-info',{
  props : {
    kokyuName :{
      type : String
    }
  },
  template : '\
<div>{{ kokyuName }}の呼吸<br>\
  <span v-for="kataName in kataNameList" v-bind:key="kataName">\
    <span v-on:click="changeParentKataNameFull()">{{ kataName }}</span>\
  </span>\
</div>',
  data : function(){
    var kataNameList
    for(kata in kataList){
      if(kataList[kata].kokyuName == this.kokyuName){
        kataNameList = kataList[kata].kataNameList
        break
      }
    }
    return {
      kataNameList : kataNameList
    }
  },
  methods:{
    changeParentKataNameFull : function() {
      this.$emit('testevent')
    }
  }
})

new Vue({
  el : '#app',
  data : {
    kataNameFull : "",
    mizu : MIZU,
    kaze : KAZE
  },
  methods : {
    aaa : function() {
      this.kataNameFull = "aaa"
    }
  }
})