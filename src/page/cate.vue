<template>
  <div>
      <Headle></Headle>
      <div class="catelist">
          <div class="hottitle">手机</div>
          <div class="cateitems">
              <div v-for="item in phonelist">
                  <img :src="imglink+item.image_id" alt="">
                  <p class="catename">{{item.product_name}}</p>
              </div>
          </div>
          <div class="hottitle">配件</div>
          <div class="cateitems">
              <div v-for="item in acclist">
                  <img :src="imglink+item.image_id" alt="">
                  <p class="catename">{{item.cate_name}}</p>
              </div>
          </div>
          <div class="hottitle">周边产品</div>
          <div class="cateitems">
              <div v-for="item in zblist">
                  <img :src="imglink+item.image_id" alt="">
                  <p class="catename">{{item.product_name}}</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Headle from '../components/header'
import axios from 'axios'
export default {
  components:{Headle},
  data(){
    return{
      phonelist:[],
      acclist:[],
      zblist:[],
      imglink:'//oss.static.nubia.cn/'
    }
  },
  mounted(){
    axios({
      url:'https://www.easy-mock.com/mock/5aebc0f6f431190f676d6a28/nubiya/phone',
      method:'GET',
    }).then(res=>{
      this.phonelist=res.data.data.result
    })
    axios({
      url:'https://www.easy-mock.com/mock/5aebc0f6f431190f676d6a28/nubiya/acc',
      method:'GET',
    }).then(res=>{
      this.acclist=res.data.data.result
    })
    axios({
      url:'https://www.easy-mock.com/mock/5aebc0f6f431190f676d6a28/nubiya/zb',
      method:'GET',
    }).then(res=>{
      this.zblist=res.data.data.result
    })
  }
}
</script>

<style>
.cateitems{
    overflow: hidden;
}
.cateitems>div{
    margin-top:.5rem;
    width: 25%;
    float: left;
}
.catename{
    font-size: .18rem;
    color: #333;
    line-height: .6rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.catelist .hottitle{
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
}
.catelist .hottitle:nth-of-type(1){
    border-top: none;
}
</style>
