<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const active = ref("涨幅榜")

const navData = ref([
  {
    title:"涨幅榜",
    path:"/up"
  },
  {
    title:"成交额榜",
    path:"/deal"
  },
  {
    title:"新币榜",
    path:"/newcoin"
  },
])

const goTab = (item) =>{
  active.value = item.title
  router.push(item.path)
}
</script>

<template>
  <div class="home">
    <div class="header">
      <span class="material-symbols-outlined header_left">
        account_circle
      </span>
      <span>首页</span>
    </div>
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="http://127.0.0.1:5173/banner1.png" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://127.0.0.1:5173/banner2.png" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://127.0.0.1:5173/banner3.png" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="notice">
      <van-notice-bar
        left-icon="volume-o"
        background="#F5F5F5"
        color="#555"
        text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
      />
    </div>
    <div class="btc">
      <div>
        <span class="span1">BTC/USDT</span>
        <span class="span2">9394.16</span>
        <span class="span3">-1.81%</span>
        <span class="span4">65748.07￥</span>
      </div>
      <div>
        <span class="span1">BTC/USDT</span>
        <span class="span2">9394.16</span>
        <span class="span3">-1.81%</span>
        <span class="span4">65748.07￥</span>
      </div>
      <div>
        <span class="span1">BTC/USDT</span>
        <span class="span2">9394.16</span>
        <span class="span3">-1.81%</span>
        <span class="span4">65748.07￥</span>
      </div>
    </div>
    <div class="card">
      <div class="left">
        <p>快捷买币</p>
        <span>支持BTC、USDT、ETH等</span>
        <img src="@/assets/bg_2.png" alt="" />
      </div>
      <div class="right">
        <div>
          <span class="material-symbols-outlined"> paid </span>
          <span>快速充币</span>
        </div>
        <div>
          <span class="material-symbols-outlined"> quiz </span>
          <span>帮助中心</span>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="top">
        <span v-for="(item,index) in navData" :key="index" :class="item.title==active?'active':''" @click="goTab(item)">{{item.title}}</span>
      </div>
      <div class="box">
        <div class="box_top">
          <span>名称</span>
          <span>最新价</span>
          <span>涨跌幅</span>
        </div>
        <RouterView/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: auto;
  height: auto;
  padding: 15px;
  padding-bottom: 70px;
  .header {
    width: auto;
    height: 25px;
    text-align: center;
    line-height: 25px;
    position: relative;
    font-size: 15px;
    .header_left {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .banner {
    width: auto;
    height: 180px;
    margin: 20px 0px;
    border-radius: 5px;
    overflow: hidden;
    img {
      width: 100%;
      height: 180px;
    }
  }
  .btc {
    display: flex;
    justify-content: space-between;
    margin: 15px 0px;
    div {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      text-align: center;
      font-weight: 600;
      font-size: 15px;
      height: 90px;
      background: #f5f5f5;
      padding: 15px;
      border-radius: 5px;

      .span1 {
        color: #555;
      }
      .span2 {
        color: #FF5F56;
        font-size: 17px;
      }
      .span3 {
        color: #FF5F56;
        font-size: 12px;
      }
      .span4 {
        color: #ccc;
        font-size: 13px;
      }
    }
  }
  .notice {
    border-radius: 5px;
  }
  .card {
    width: auto;
    height: 140px;
    margin: 15px 0px;
    display: flex;
    justify-content: space-between;
    .left {
      width: 70%;
      box-sizing: border-box;
      padding: 15px;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      position: relative;
      background: #f5f5f5;
      border-radius: 5px;
      p {
        font-weight: 600;
        font-size: 18px;
        color: #333;
        margin: 0;
      }
      span {
        font-weight: 600;
        font-size: 12px;
        color: #555;
      }
      img {
        position: absolute;
        right: 15px;
        top: 50%;
        width: 60px;
        height: 60px;
        transform: translateY(-50%);
      }
    }
    .right {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width: 40%;
      box-sizing: border-box;
      padding-left: 5px;
      div {
        height: 40%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        font-size: 12px;
        padding: 5px 20px;
        background: #f5f5f5;
        border-radius: 5px;
      }
    }
  }
  .nav {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin: 25px 0px;
    background: #f5f5f5;
    padding: 20px 10px;
    border-radius: 5px;
    .top {
      display: flex;
      justify-content: space-around;
      font-weight: 600;
      font-size: 14px;
      color: #333;
      .active{
        color: #1A73E8;
      }
    }
    .box{
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      .box_top{
        color: #666;
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
        font-size: 14px;
      }
      .box_main{
        color: #000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        color: #333;
        margin: 5px 0px;
        span{
          width: 33%;

        }
        p{
          display: inline-block;
          color: #888;
        }
        .mid{
          text-align: left;
        }
        .right{
          text-align: right;
          width: 70px;
          height: 35px;
          background: #FF5F56;
          text-align: center;
          line-height: 35px;
          color: #FFF;
          font-size: 13px;
        }
        .down{
          color: #FF5F56;
        }
        .up{
          color: #1CAD90;
        }
        .down_price{
          background: #FF5F56;
        }
        .up_price{
          background: #1CAD90;
        }
      }
    }
  }
}
</style>