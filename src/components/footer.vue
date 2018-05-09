<template>
  <footer>
      <div class="foot_wrap">
          <div v-for="item,index in list" @click='jump()'>
            <router-link :to="item.path" :class="{onChoose:item.choose}">
              <i v-if="item.choose==false" :style="{backgroundImage:'url('+item.icon+')'}"></i>
              <i v-if="item.choose==true" :style="{backgroundImage:'url('+item.onIcon+')'}"></i>
              <span>{{item.cont}}</span>
          </router-link>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {
                    path:'/',
                    icon:'../../static/img/home.png',
                    onIcon:'../../static/img/home_on.png',
                    cont:'首页',
                    choose:false
                },
                {
                    path:'cate',
                    icon:'../../static/img/cate.png',
                    onIcon:'../../static/img/cate_on.png',
                    cont:'分类',
                    choose:false
                },
                {
                    path:'cart',
                    icon:'../../static/img/cart.png',
                    onIcon:'../../static/img/cart_on.png',
                    cont:'购物车',
                    choose:false
                },
                {
                    path:'user',
                    icon:'../../static/img/user.png',
                    onIcon:'../../static/img/user_on.png',
                    cont:'我的',
                    choose:false
                },
            ]
        }
    },
    methods:{
        jump(){
            if(this.$route.path=='/'){
                this.list[0].choose=true
            }else if(this.$route.path=='/cate'){
                this.list[1].choose=true
            }else if(this.$route.path=='/cart'){
                this.list[2].choose=true
            }else if(this.$route.path=='/user'){
                this.list[3].choose=true
            }
        }
    },
    mounted(){
        this.jump()
    }
}
</script>

<style>
footer{
    position: fixed;
    z-index: 9999;
    bottom: 0;
    left: 0;
    right: 0;
    height: 52px;
    background: #fff;
    box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
}
.foot_wrap{
    height: 100%;
    -webkit-align-items: center; 
    align-items: center;
    display: flex
}
.foot_wrap>div{
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto
}
.foot_wrap>div>a{
    display: block;
    color: #999;    
}
.foot_wrap a i{
    display: block;
    width: .4rem;
    height: .4rem;
    margin: .05rem auto .05rem;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
}
.foot_wrap .onChoose{
    color: #ff6700;
}

</style>
