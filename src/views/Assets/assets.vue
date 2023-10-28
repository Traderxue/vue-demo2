<template>
  <div class="assets">
    <div class="top">
      <img src="@/assets/avator.png" alt="" />
      <p>ID: 108564</p>
      <p>信用分: 100</p>
      <span class="material-symbols-outlined setting"> settings </span>
    </div>
    <div class="main">
      <div class="main_box">
        <div>
          <img src="@/assets/img/资产认证.png" alt="" />
          <span>资产认证</span>
        </div>
        <div>
          <span>未认证</span>
          <span class="material-symbols-outlined"> arrow_forward_ios </span>
        </div>
      </div>
      <div class="main_box">
        <div>
          <img src="@/assets/img/身份证认证.png" alt="" />
          <span>身份认证</span>
        </div>
        <div>
          <span>未认证</span>
          <span class="material-symbols-outlined"> arrow_forward_ios </span>
        </div>
      </div>
      <div class="main_box">
        <div>
          <img src="@/assets/img/客服.png" alt="" />
          <span>在线客服</span>
        </div>
        <div>
          <span class="material-symbols-outlined"> arrow_forward_ios </span>
        </div>
      </div>
      <div class="main_box">
        <div>
          <img src="@/assets/img/认证.png" alt="" />
          <span>保证金</span>
        </div>
        <div>
          <span class="material-symbols-outlined"> arrow_forward_ios </span>
        </div>
      </div>
      <div class="main_box">
        <div>
          <img src="@/assets/img/运单.png" alt="" />
          <span>充值记录</span>
        </div>
        <div>
          <span class="material-symbols-outlined"> arrow_forward_ios </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.assets {
  width: auto;
  height: auto;
  .top {
    width: auto;
    height: 220px;
    background: url("@/assets/mine.png");
    text-align: center;
    box-sizing: border-box;
    padding: 40px 0px;
    position: relative;
    color: #555;
    font-weight: 600;
    font-size: 15px;
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    .setting {
      position: absolute;
      right: 15px;
      top: 15px;
      color: #555;
    }
  }
  .main {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 15px ;
    padding-bottom: 50px;
    .main_box{
        margin: 10px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 10px;
        div{
            display: flex;
            justify-content: space-around;
            align-items: center;
            img{
                width: 25px;
                height: 25px;
            }
            span{
                padding-left: 5px;
                font-size: 15px;
            }
        }
    }
  }
}
</style>