<template>
  <header class="header">
      <div class="headleft">
          <a href="#/">&lt;</a>
      </div>
      <div class="headtitle">{{title}}</div>
      <div class="headright" @click="show">
          <img v-if="!check" src="../../static/img/menu.png" alt="">
          <span v-if="check">X</span>
      </div>
      <div v-if="check" class="headlist" id="menu">
          <a class="headitem" href="#/">
              <div><img src="../../static/img/home.png" alt=""></div>
              <span>首页</span>
          </a>
          <a class="headitem" href="#/cart">
              <div><img src="../../static/img/cart.png" alt=""></div>
              <span>购物车</span>
          </a>
          <a class="headitem" href="#/user">
              <div><img src="../../static/img/user.png" alt=""></div>
              <span>用户</span>
          </a>
      </div>
  </header>
</template>

<script>
export default {
    data(){
        return{
            title:'',
            ele:'',
            check:false
        }
    },
    methods:{
        show(){
            this.check=!this.check;
        }
    },
    mounted(){
        console.log(this.$route.path)
        if(this.$route.path=='/cate'){
            this.title='商品分类'
        }else{
            this.title='购物车'
        }
    }
}
</script>

<style>
.header{
    position: relative;
    background-color: #fff;
    z-index: 99;
    height: 1rem;
    width: 100%;
}
.headleft{
    position: absolute;
    top: 0;
    left: 0;
    line-height: 1rem;
    text-align: center;
    font-size: .52rem;
    padding:0 .3rem;
}
.headleft>a{
    color: #2c2c2c;
}
.headtitle{
    line-height: 1rem;
    font-size: .32rem;
    border-bottom: 1px solid #d9d9d9;
}
.headright{
    width: 0.5rem;
    height: .75rem;
    padding-top: .25rem;
    position: absolute;
    top: 0;
    right: 0;
    padding-right: .5rem;
    font-size: .52rem;
}
.headlist{
    height: 0.8rem;
    display: flex;
    background: #fff;
}
.headitem{
    display: block;
    flex: 1;
    padding-top: .1rem;
    color: #2c2c2c;
}
.headitem>div{
    width: 20%;
    height: 0.4rem;
    margin: 0 auto;
}
</style>
