<template>
  <div>
      <div class="userh">
          <div>
              <div class="userlogin">
                  <img src="../../static/img/ulogin.png" alt="">
              </div>
              <div class="blogin">
                  登录/注册
              </div>
          </div>
      </div>
      <div class="ulist">
          <div class="cite">我的订单</div>
          <div class="allcite">
              <a href="#">全部订单</a>
          </div>
      </div>
      <ul class="pain">
          <li>
              <div class="pimg"></div>
          </li>
          <li>
              <div class="pimg"></div>
          </li>
          <li>
              <div class="pimg"></div>
          </li>
      </ul>
      <ul class="pain" style="padding:0  .8rem .4rem;">
          <li>
              <span>待付款</span>
          </li>
          <li>
              <span>待收货</span>
          </li>
          <li>
              <span>退换修</span>
          </li>
      </ul>
      <div style="height: 0.06rem;border-bottom: 0.06rem solid rgb(245, 245, 245);background-color: rgb(245, 245, 245);"></div>
      <ul class="btns">
          <li class="member">
              <a href="#">
                  <span>收货地址</span>
              </a>
          </li>
          <li class="wallet">
                <a href="#">
                  <span>我的预约</span>
              </a>
          </li>
          <li class="service">
                <a href="#">
                  <span>我的回收订单</span>
              </a>
          </li>
          <li class="mihome">
                <a href="#">
                  <span>我的NB码</span>
              </a>
          </li>
          <li class="fcode">
                <a href="#">
                  <span>我的流量卡</span>
              </a>
          </li>
          <li class="setting">
                <a href="#">
                  <span>联系客服</span>
              </a>
          </li>
      </ul>
      <Footer></Footer>
  </div>
  
</template>

<script>
import Footer from '../components/footer'
export default {
    components:{Footer}
}
</script>

<style>
.userh{
    background:#e8340e;
    padding: .32rem 0;
}
.userh>div{
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}
.userlogin{
    margin: 0 .16rem 0 .32rem;
    width: .96rem;
    height: .96rem;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 100%;
    border: 3px solid hsla(0,0%,100%,.4);
    text-align: center;
    box-sizing: border-box;
}
.userlogin>img{
    width: 100%;
    height: 100%;
}
.blogin{
    color: #fff;
    font-size: .24rem;
    text-align: left;
}
.ulist{
    background-color: #fff;
    height: .8rem;
    border-bottom: 1px solid rgba(0,0,0,.15);
    color: rgba(0,0,0,.54);
    position: relative;
    padding-right: .56rem;
    margin-bottom: 0.4rem;
}
.ulist::after{
    content: "";
    position: absolute;
    right: 5.12px;
    right: .32rem;
    top: 50%;
    width: .2rem;
    height: .2rem;
    border-left: 1px solid currentColor;
    border-top: 1px solid currentColor;
    transform: translate3d(0,-50%,0) rotate(135deg);
    -webkit-transform: translate3d(0,-50%,0) rotate(135deg);
}
.cite{
    font-size: .24rem;
    padding: 0 0 0 .32rem;
    color: rgba(0,0,0,.87);
    box-sizing: inherit;
    display: inline-block;
    line-height: .8rem;
    float: left;
}
.allcite{
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    display: inline-block;
    float: right;
}
.allcite>a{
    font-size: .20rem;
    color: rgba(0,0,0,.87);
    line-height: .8rem;
}
.pain{
    padding: 0 .8rem;
    background-color: #fff;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}
.pain>li{
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-align-content: space-between;
    align-content: space-between;
    position: relative;
}
.pain>li>div{
    width: .48rem;
    height: .48rem;
    margin: 0 auto .16rem;
    background-size: 100% auto;
}
.pimg{
    background: url('../../static/img/pain.png');
}
.pain>li span{
    color: rgba(0,0,0,.87);
}
.btns{
    background: #fff;
}
.btns li{
    position: relative;
    color: rgba(0,0,0,.54);
    background: no-repeat .32rem;
    background-size: .48rem auto;
    border-bottom: 1px solid rgba(0,0,0,.15);
    line-height: 0;
}
.btns li a{
    display: block;
    padding-right: .56rem;
    padding-left: .4rem;
    height: 0.94rem;
    display: box;
    display: -webkit-box;
    box-align: center;
    -webkit-box-align: center;
    box-pack: justify;
    -webkit-box-pack: justify;
    color: currentColor;
}
.btns li a span{
    font-size: .28rem;
    font-style: normal;
    color: rgba(0,0,0,.87);
}
.btns li::after{
    content: "";
    position: absolute;
    right: 5.12px;
    right: .32rem;
    top: 50%;
    width: 3.2px;
    width: .2rem;
    height: 3.2px;
    height: .2rem;
    border-left: 1px solid currentColor;
    border-top: 1px solid currentColor;
    transform: translate3d(0,-50%,0) rotate(135deg);
    -webkit-transform: translate3d(0,-50%,0) rotate(135deg);
}
</style>
