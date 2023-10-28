<script setup>
import { ref } from "vue";

const boxData = ref([
  {
    type: "BTC",
    price: "29453.2",
    parcent: "+1.25%",
    up: 0,
  },
  {
    type: "ETH",
    price: "1782.3",
    parcent: "+2.21%",
    up: 0,
  },
  {
    type: "APE",
    price: "1.231",
    parcent: "-0.21%",
    up: 0,
  },
  {
    type: "BTC",
    price: "29453.2",
    parcent: "+1.25%",
    up: 1,
  },
  {
    type: "ETH",
    price: "1782.3",
    parcent: "+2.21%",
    up: 1,
  },
  {
    type: "APE",
    price: "1.231",
    parcent: "-0.21%",
    up: 0,
  },
]);
</script>

<template>
  <div class="zf">
    <div class="box_main" v-for="(item, index) in boxData" :key="index">
      <span
        >{{ item.type }}
        <p>/USDT</p></span
      >
      <span class="mid" :class="item.up == 1 ? 'up' : 'down'">{{
        item.price
      }}</span>
      <span class="right" :class="item.up == 1 ? 'up_price' : 'down_price'">{{
        item.parcent
      }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box_main {
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: #333;
  margin: 5px 0px;
  span {
    width: 33%;
  }
  p {
    display: inline-block;
    color: #888;
  }
  .mid {
    text-align: left;
  }
  .right {
    text-align: right;
    width: 70px;
    height: 35px;
    background: #ff5f56;
    text-align: center;
    line-height: 35px;
    color: #fff;
    font-size: 13px;
  }
  .down {
    color: #ff5f56;
  }
  .up {
    color: #1cad90;
  }
  .down_price {
    background: #ff5f56;
  }
  .up_price {
    background: #1cad90;
  }
}
</style>