/*
var v = new Vue({
    el: '.app', // class=appの要素にマウントする。
    data:{
        data1 : "data1_test",
        data2 : "data2_test"
    }
})
*/

var v = new Vue({
    data:{
        data1 : "data1_test",
        data2 : "data2_test"
    }
})
v.$mount(".app")