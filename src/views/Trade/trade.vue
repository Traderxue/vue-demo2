<script setup>
import { ref } from "vue";
import { init, dispose } from "klinecharts";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const active = ref("1M");

const chartData = ref([
  {
    time: "1M",
    data: [
      {
        close: 4976.16,
        high: 4977.99,
        low: 4970.12,
        open: 4972.89,
        timestamp: 1587660000000,
        volume: 204,
      },
      {
        close: 4977.33,
        high: 4979.94,
        low: 4971.34,
        open: 4973.2,
        timestamp: 1587660060000,
        volume: 194,
      },
      {
        close: 4977.93,
        high: 4977.93,
        low: 4974.2,
        open: 4976.53,
        timestamp: 1587660120000,
        volume: 197,
      },
      {
        close: 4966.77,
        high: 4968.53,
        low: 4962.2,
        open: 4963.88,
        timestamp: 1587660180000,
        volume: 28,
      },
    ],
  },
  {
    time: "5M",
    data: [
      {
        close: 4968.93,
        high: 4972.7,
        low: 4964.55,
        open: 4966.96,
        timestamp: 1587660360000,
        volume: 105,
      },
      {
        close: 4979.31,
        high: 4979.61,
        low: 4973.99,
        open: 4977.06,
        timestamp: 1587660420000,
        volume: 35,
      },
      {
        close: 4977.02,
        high: 4981.66,
        low: 4975.14,
        open: 4981.66,
        timestamp: 1587660480000,
        volume: 135,
      },
      {
        close: 4985.09,
        high: 4988.62,
        low: 4980.3,
        open: 4986.72,
        timestamp: 1587660540000,
        volume: 76,
      },
    ],
  },
  {
    time: "15M",
    data: [
      {
        close: 4976.16,
        high: 4977.99,
        low: 4970.12,
        open: 4972.89,
        timestamp: 1587660000000,
        volume: 204,
      },
      {
        close: 4977.33,
        high: 4979.94,
        low: 4971.34,
        open: 4973.2,
        timestamp: 1587660060000,
        volume: 194,
      },
      {
        close: 4977.93,
        high: 4977.93,
        low: 4974.2,
        open: 4976.53,
        timestamp: 1587660120000,
        volume: 197,
      },
      {
        close: 4966.77,
        high: 4968.53,
        low: 4962.2,
        open: 4963.88,
        timestamp: 1587660180000,
        volume: 28,
      },
    ],
  },
  {
    time: "30M",
    data: [
      {
        close: 4976.16,
        high: 4977.99,
        low: 4970.12,
        open: 4972.89,
        timestamp: 1587660000000,
        volume: 204,
      },
      {
        close: 4977.33,
        high: 4979.94,
        low: 4971.34,
        open: 4973.2,
        timestamp: 1587660060000,
        volume: 194,
      },
      {
        close: 4977.93,
        high: 4977.93,
        low: 4974.2,
        open: 4976.53,
        timestamp: 1587660120000,
        volume: 197,
      },
      {
        close: 4966.77,
        high: 4968.53,
        low: 4962.2,
        open: 4963.88,
        timestamp: 1587660180000,
        volume: 28,
      },
    ],
  },
  {
    time: "1H",
    data: [
      {
        close: 4976.16,
        high: 4977.99,
        low: 4970.12,
        open: 4972.89,
        timestamp: 1587660000000,
        volume: 204,
      },
      {
        close: 4977.33,
        high: 4979.94,
        low: 4971.34,
        open: 4973.2,
        timestamp: 1587660060000,
        volume: 194,
      },
      {
        close: 4977.93,
        high: 4977.93,
        low: 4974.2,
        open: 4976.53,
        timestamp: 1587660120000,
        volume: 197,
      },
      {
        close: 4966.77,
        high: 4968.53,
        low: 4962.2,
        open: 4963.88,
        timestamp: 1587660180000,
        volume: 28,
      },
    ],
  },
  {
    time: "4H",
    data: [
      {
        close: 4976.16,
        high: 4977.99,
        low: 4970.12,
        open: 4972.89,
        timestamp: 1587660000000,
        volume: 204,
      },
      {
        close: 4977.33,
        high: 4979.94,
        low: 4971.34,
        open: 4973.2,
        timestamp: 1587660060000,
        volume: 194,
      },
      {
        close: 4977.93,
        high: 4977.93,
        low: 4974.2,
        open: 4976.53,
        timestamp: 1587660120000,
        volume: 197,
      },
      {
        close: 4966.77,
        high: 4968.53,
        low: 4962.2,
        open: 4963.88,
        timestamp: 1587660180000,
        volume: 28,
      },
    ],
  },
]);

let chart;

onMounted(() => {
  chart = init("chart");
  chart.applyNewData(chartData.value[0].data);
  chart.createIndicator("VOL");
});

const tabTime = (item) => {
  active.value = item.time;
  chart.applyNewData(item.data);
};

const goContract = () => {
    router.push('/contract')
}
</script>

<template>
  <div class="trade">
    <div class="header">
      <div class="top">
        <div>
          <span class="material-symbols-outlined"> menu </span>
          <span class="list_btc">BTC/USDT</span>
        </div>
        <span class="list">持仓列表</span>
      </div>
      <div class="current_price">
        <div>
          <span>当前价</span>
          <span class="up">27641.35</span>
          <span class="down">+0.03%</span>
        </div>
        <div>
          <span>24H最高</span>
          <span>24H最低</span>
          <span>24H成交额</span>
        </div>
        <div class="right">
          <span>27943.36</span>
          <span>25643.63</span>
          <span>1364</span>
        </div>
      </div>
    </div>
    <div class="chart_box">
      <div class="time">
        <span
          v-for="(item, index) in chartData"
          :key="index"
          @click="tabTime(item)"
          :class="active == item.time ? 'active' : ''"
          >{{ item.time }}</span
        >
      </div>
      <div id="chart" style="width: 100%; height: 450px" />
    </div>
    <div class="btn">
      <button class="buy" @click="goContract">买入</button>
      <button class="sell" @click="goContract">卖出</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.trade {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  box-sizing: border-box;
  padding: 15px;
  padding-bottom: 70px;
  .header {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    font-size: 15px;
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 600;
      div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .list_btc {
          padding-left: 5px;
        }
      }
      .list {
        font-weight: 500;
      }
    }
    .current_price {
      display: flex;
      justify-content: space-between;
      padding: 15px 0px;
      div {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        text-align: center;
        color: #555;
        span {
          display: inline-block;
          padding: 3px 0px;
        }
        .up {
          font-weight: 600;
          color: #02c289;
        }
        .down {
          color: #02c289;
          font-weight: 600;
        }
      }
      .right {
        font-weight: 600;
      }
    }
  }
  .chart_box {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    .time {
      display: flex;
      justify-content: space-around;
      font-size: 14px;
      margin: 15px 0px;
      .active {
        color: #1a73e8;
        font-weight: 600;
      }
    }
  }
  .btn {
    width: auto;
    height: auto;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    button {
      width: 40%;
      height: 35px;
      border: 0;
      color: #fff;
      border-radius: 2px;
    }
    .buy {
      background: #02c289;
    }
    .sell {
      background: #cd4e65;
    }
  }
}
</style>