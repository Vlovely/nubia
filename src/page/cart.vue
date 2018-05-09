<template>
  <div class="cart">
      <Headle></Headle>
      <div class="cartnull">
          <div class="cartinput">
              <div class="cartimg">
                  <h3>购物车还是空的</h3>
                  <p>现在就去选购吧</p>
              </div>
              <div class="cartbtn">
                  <a href="#/" class="button">去逛逛</a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Headle from '../components/header'
export default {
    components:{Headle},
}
</script>

<style>
.cart{
    height: 100%;
}
.cartnull{
    background: rgb(236, 236, 236);
    height: 100%;
    margin-top: -1rem;
}
.cartimg::before{
    display: block;
    content: '';
    width: 6rem;
    height: 5rem;
    background: url('../../static/img/emptycart.png') 0 0 no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
.cartimg h3{
    font-size: .28rem;
    color: #50555b;
    margin-bottom: .44118em;
}
.cartimg p{
    font-size: .24rem;
    color: #87888c;
}
.button{
    width: 3rem;
    height: .8rem;
    color: #515459;
    font-size: .30rem;
    display: block;
    font-weight: 700;
    text-align: center;
    line-height: .8rem;
    border: 1px solid #dadbdd;
    -webkit-border-radius: .2rem;
    -moz-border-radius: .2rem;
    -ms-border-radius: .2rem;
    -o-border-radius: .2rem;
    border-radius: .2rem;
    margin: 0 auto;
    margin-top: 1rem;
}
</style>
