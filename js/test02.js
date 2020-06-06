var vm1 = new Vue({
    el: '#app1', // id=app1の要素にマウントする。
    data:{
        message : "",
        messageOver : "「いらっしゃいませ！」",
        messageLeave : ""
    },
    methods:{
        mouseover :  function(){
            this.message = this.messageOver
        },
        mouseleave :  function(){
            this.message = this.messageLeave
        }
    }
})

var vm2 = new Vue({
    el: '#app2', // id=app2の要素にマウントする。
    data:{
        vegeList : [
            {name:"にんじん", price:100, num:0},
            {name:"ごぼう", price:210, num:0},
            {name:"だいこん", price:201, num:0}
        ],
        discountCondition : 1000
    },
    computed:{
        totalPrice :  function(){
            return this.vegeList.reduce(
                function(sum, vege){
                    return sum + (vege.price * vege.num) 
                },
                0
            )
        },
        isNextDiscount :  function(){
            return this.totalPrice >= this.discountCondition
        }
    },
    filters:{
        threeDigitComma : function(value){
            return value.toLocaleString()
        }
    }
})