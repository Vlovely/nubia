<template>
  <div class="home">
    <header>
      <div class="h_left">
        <a href="">
          <span>
            <img style="width:100%;" src="../../static/img/logo.png" alt="">
          </span>
        </a>
      </div>
      <div class="h_right">
        <a href="/login">
          <i class="icon user"></i>登录
        </a>
      </div>
    </header>
    <Remmon></Remmon>
    <div class="show_big">
      <div class="bigleft">
        <img :src="imglink+homeList[502][0].small_image" alt="">
      </div>
      <div class="bigright">
        <img :src="imglink+homeList[503][0].small_image" alt="">
        <img :src="imglink+homeList[504][0].small_image" alt="">
      </div>
    </div>
    <div class="hotlist">
      <div class="hottitle">热销机型</div>
      <div class="hotshow">
        <img :src="imglink+homeList[507][0].small_image" alt="">
      </div>
      <div class="hotitems">
        <div class="hotitem" v-for="item in homeList[506]">
          <div class="itemimg">
            <img :src="imglink+item.small_image" alt="">
          </div>
          <div class="circle"><span>{{item.block_products.sale_point.block_image_icon.text}}</span></div>
          <p class="phone">{{item.title}}</p>
          <p class="price">￥{{item.block_products.price}}</p>
        </div>

      </div>
      <div class="more">
        <a href="#/cate">
          <span>查看更多商品></span>
        </a>
      </div>
      
    </div>
    <div class="hotlist">
      <div class="hottitle">精选配件</div>
      <div class="hotshow">
        <img :src="imglink+homeList[508][0].small_image" alt="">
      </div>
      <div class="hotitems">
        <div class="hotitem" v-for="item in homeList[505]">
          <div class="itemimg">
            <img :src="imglink+item.small_image" alt="">
          </div>
          <p class="phone">{{item.title}}</p>
          <p class="price">￥{{item.block_products.price}}</p>
        </div>

      </div>
      <div class="more">
        <a href="#/accessory">
          <span>查看更多商品></span>
        </a>
      </div>
      
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/footer'
import Remmon from '../components/remmon'
import axios from 'axios'
export default {
  data(){
    return{
      homeList:[],
      imglink:'//oss.static.nubia.cn/'
    }
  },
  components:{Footer,Remmon},
  mounted(){
    axios({
      url:'https://www.easy-mock.com/mock/5aebc0f6f431190f676d6a28/nubiya/home',
      method:'GET',
    }).then(res=>{
      console.log(res.data.data[502][0])
      this.homeList=res.data.data
    })
  }
}
</script>

<style>
.home{
    padding-bottom: 52px;
    max-width: 720px;
    margin: 0 auto;
    font-family: "Microsoft Yahei","微软雅黑",Arial,Helvetica,sans-serif;
}
.home header{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 99;
    border-bottom: none;
    background: #282828;
}
.h_left{
    position: absolute;
    top: 0;
    left: 0;
    height: 60px;
    overflow: hidden;
}
.h_right{
    height: 60px;
    line-height: 60px;
    width: 1.3rem;
    text-align: center;
    background: #e0523a;
    margin-right: 0.2rem;
    padding: 0;
    position: absolute;
    top: 0;
    right: 0;
}
.h_left a{
    display: table-cell;
    height: 20px;
    vertical-align: middle;
    padding: 20px 20px;
}
.h_left a>span{
    display: inline-block;
    width: 2.4rem;
}
.h_right a{
    color: #fff;
    display: block;
    line-height: 60px;
}
.icon{
  display: inline-block;
  width: 0.2rem;
  height: .2rem;
  background-size: cover;
}
.user{
  background-image: url('../../static/img/person.png');
}
.show_big{
  width: 100%;
  border-top: 2px solid #fff;
  overflow: hidden;
}
.bigleft,.bigright,.hotitem{
  width: 50%;
}
.bigleft,.hotitem{
  float: left;
  border-right: 2px solid #fff;
  box-sizing: border-box;
}
.bigright{
  float: right;
}
.hotitem.bigright img:nth-of-type(2){
  border-top: 2px solid #fff;
}
.hotitems{
  overflow: hidden;
}
.hotitem{
  width: 50%;
  background: #f4f3ef;
  border-top: 2px solid #fff;
  position: relative;
}
.phone{
  color: #000;
  font-size: .22rem;
  text-align: center;
}
.price{
  color: #ef4f3d;
  line-height: .8rem;
  font-size: .28rem;
  font-weight: 600;
}
.circle{
  width: .7rem;
  height: .7rem;
  border-radius: 50%;
  background: #ef4f3d;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
}
.circle span{
  position: absolute;
  top: 50%;
  left: .1rem;
  transform: translateY(-50%)
}
.more>a{
  color: #ef4f3d;
}
</style>
