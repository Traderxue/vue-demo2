<script setup>
import { ref } from "vue";

const value = ref(100);
</script>

<template>
  <div class="contract">
    <div class="title">
      <span>合约</span>
    </div>
    <div class="header">
      <span>BTC/USDT</span>
      <P>+0.05%</P>
    </div>
    <div class="main">
      <div class="left">
        <div class="btn">
          <button class="buy">买入</button><button class="sell">卖出</button>
        </div>
        <div class="limit">
          <select class="limit_sel">
            <option value="10x">10x</option>
            <option value="50x">50x</option>
            <option value="100x">100x</option>
            <option value="200x">200x</option>
          </select>
        </div>
        <van-stepper v-model="value" step="1000" />
        <p class="canuse">可用额度 0.000USDT</p>
        <div class="btn_bottom">
          <button class="buy">买入做多</button>
          <button class="sell">卖出做空</button>
        </div>
      </div>
      <div class="right">
        <div class="top">
          <span>价格(USDT)</span>
          <span>数量(USDT)</span>
        </div>
        <div class="right_main">
          <div class="up">
            <div><span>27649.26</span><span>0.03</span></div>
            <div><span>27349.26</span><span>0.23</span></div>
            <div><span>16462.26</span><span>0.46</span></div>
            <div><span>16462.26</span><span>0.46</span></div>
          </div>
          <span class="mid">27951.65</span>
          <div class="down">
            <div><span>12649.26</span><span>0.13</span></div>
            <div><span>23349.26</span><span>0.63</span></div>
            <div><span>16452.26</span><span>0.56</span></div>
            <div><span>16462.26</span><span>0.46</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="current">
      <div class="current_top">
        <span class="span1">当前委托(0)</span>
        <div>
          <span class="material-symbols-outlined"> summarize </span>
          <span class="all">全部</span>
        </div>
      </div>
      <div class="current_main">
        <van-empty description="暂无内容" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contract {
  width: auto;
  height: auto;
  padding: 15px;
  .title {
    text-align: center;
    font-size: 15px;
  }
  .header {
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    span {
      color: #555;
    }
    p {
      padding-left: 12px;
      color: #12b886;
    }
  }
  .main {
    display: flex;
    justify-content: space-between;
    margin: 0px 5px;
    .left {
      width: 50%;
      padding: 5px 10px;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      height: 300px;
      .btn {
        display: flex;
        justify-content: space-around;
        button {
          width: 50%;
          height: 35px;
          border: 0;
          color: #fff;
          font-size: 15px;
        }
        .buy {
          background: #12b886;
        }
        .sell {
          background: #ff5f56;
        }
      }
      .limit {
        width: 100%;
        height: 35px;
        .limit_sel {
          width: 100%;
          height: 35px;
          outline: none;
          padding-left: 15px;
        }
      }
      ::v-deep(.van-stepper__input) {
        width: 50%;
        height: 35px;
        margin: 0;
      }
      ::v-deep(.van-stepper__plus) {
        width: 25%;
        height: 35px;
      }
      ::v-deep(.van-stepper__minus) {
        width: 25%;
        height: 35px;
      }
      .canuse {
        font-size: 13px;
        color: #555;
        margin: 10px 0px;
      }
      .btn_bottom {
        width: auto;
        height: 85px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        button {
          border: 0;
          width: 100%;
          height: 35px;
          font-size: 14px;
          color: #fff;
        }
        .buy {
          background: #12b886;
        }
        .sell {
          background: #ff5f56;
        }
      }
    }
    .right {
      width: 50%;
      height: 300px;
      padding: 10px 0px;
      .top {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        padding: 0px 10px;
        height: 5%;
      }
      .right_main {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: 90%;
        padding: 0px 10px;
        padding-top: 10px;
        .mid {
          font-weight: 600;
          font-size: 18px;
        }
        .up {
          width: auto;
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          color: #12b886;
          font-weight: 600;
          div {
            display: flex;
            justify-content: space-between;
            padding: 5px 0px;
          }
        }
        .down {
          width: auto;
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          color: #ff5f56;
          font-weight: 600;
          div {
            display: flex;
            justify-content: space-between;
            padding: 5px 0px;
          }
        }
      }
    }
  }
  .current{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin-top: 15px;
    font-size: 14px;
    padding: 10px;
    .current_top{
        display: flex;
        justify-content: space-between;
        .span1{
            font-weight: 600;
            font-size: 15px;
            color: #333;
        }
        div{
            display: flex;
            justify-content: space-around;
            align-items: center;
            .all{
                display: inline-block;
                padding-left: 5px;
            }
        }
    }
    .current_main{
        width: auto;
        height: auto;
    }
  }
}
</style>