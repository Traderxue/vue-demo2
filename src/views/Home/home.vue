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
        background="#FFF"
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
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: auto;
  height: auto;
  padding: 15px;
  .header {
    width: auto;
    height: 25px;
    text-align: center;
    line-height: 25px;
    position: relative;
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
  .btc{
    display: flex;
    justify-content: space-around;
    margin: 15px 0px;
    div{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        text-align: center;
        font-weight: 600;
        font-size: 15px;
        height: 90px;
        .span1{
            color: #555;
        }
        .span2{
            color: #E00E53;
            font-size: 17px;
        }
        .span3{
            color: #E00E53;
            font-size: 12px;
        }
        .span4{
            color: #CCC;
            font-size: 13px;
        }
    }
  }
}
</style>