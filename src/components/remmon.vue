<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in dataList[501]" :style="{backgroundImage:'url('+imglink+item.small_image+')'}">
            <!-- <img :src="dataList+item.img_url" alt=""> -->
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
</template>

<script>
import axios from 'axios'
import Swiper from 'swiper'
import  '../../node_modules/swiper/dist/css/swiper.css'
export default {
    data(){
        return{
            dataList:[],
            imglink:'//oss.static.nubia.cn/'
        }
    },
    mounted(){
        axios.get('https://www.easy-mock.com/mock/5aebc0f6f431190f676d6a28/nubiya/home')
        .then(res=>{
            this.dataList=res.data.data
        })
    },
    updated(){
        var mySwiper = new Swiper ('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
            },
        }) 
    }
}
</script>

<style>
.swiper-container {
    width: 100%;
    height: 9rem;
} 
.swiper-slide{
    background-size: cover;
}
</style>
