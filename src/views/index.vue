<script setup>
import { ref } from "vue";

const active = ref(0);
</script>

<template>
  <div class="index">
    <RouterView />
    <van-tabbar v-model="active" route>
      <van-tabbar-item  to="/home"> 
        <span class="material-symbols-outlined"> home </span><br />
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/kline">
        <span class="material-symbols-outlined"> monitoring </span><br />
        <span>行情</span>
      </van-tabbar-item>
      <van-tabbar-item  to="/trade">
        <span class="material-symbols-outlined"> stacked_line_chart </span>
        <br />
        <span>交易</span>
      </van-tabbar-item>
      <van-tabbar-item to="/contract">
        <span class="material-symbols-outlined"> list_alt </span><br />
        <span>合约</span>
      </van-tabbar-item>
      <van-tabbar-item to="/assets">
        <span class="material-symbols-outlined"> account_balance_wallet </span
        ><br />
        <span>钱包</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss" scoped>
.index{
    width: auto;
    height: auto;
    .van-tabbar{
        background: #F5F5F5;
    }
}
</style>