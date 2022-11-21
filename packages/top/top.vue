<template>
  <div class="header">
    <div class="container">
      <div>
        <span class="welcome"
          ><span>
            <span v-if="topInfo.isLogin" :class="topInfo.memberLevel" class="member-img"></span>
            <a
              class="userName"
              :class="topInfo.isLogin ? 'vipserName' : ''"
              :href="topInfo.loginInfo.href"
              >{{ topInfo.loginInfo.text }}</a
            ></span
          >，欢迎来到优质采！</span
        >
        <a
          v-if="!topInfo.isLogin"
          rel="nofollow"
          :href="topInfo.loginUrl"
          class="login"
        >
          登录
        </a>
        <a rel="nofollow" :href="topInfo.resignInfo.href" class="register">{{
          topInfo.resignInfo.text
        }}</a>
      </div>

      <div class="header-nav-right">
        <div class="header-nav-right-item" v-if="topInfo.isLogin">
          <a
            rel="nofollow"
            target="_blank"
            :href="topInfo.userManagerUrl"
            class="user_manager"
            style="
              height: 30px;
              background-color: #f24645;
              width: 120px;
              color: #fff;
              padding: 0;
              text-align: center;
              text-align: center;
              margin: 0;
              line-height: 30px;
            "
            >进入用户管理平台</a
          >
        </div>

        <div class="header-nav-right-item header-nav-wx">
          <a style="border-left: none">微信公众号</a>
          <div class="wx-header-code-box clearfix" style="width: 205px">
            <div style="width: 100px; float: left">
              <img src="./images/headerwxcode.png" alt="" style="width: 81px" />
              <p>关注微信公众号</p>
            </div>
            <div style="width: 100px; float: left">
              <img
                src="./images/headerwxcodesj.png"
                alt=""
                style="width: 81px"
              />
              <p>捕捉最新商机</p>
            </div>
          </div>
        </div>
        <div class="header-nav-right-item">
          <a rel="nofollow" href="/HelpCenter/HelpCenterIndex">帮助中心</a>
        </div>

        <div class="header-nav-right-item header-nav-online-chat">
          <a style="padding-right: 0" onclick="Feedback()">意见反馈</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "uTop",
  props: {
    topInfo: {
      type: Object,
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 30px;
  line-height: 30px;
  min-width: 1200px;
  background-color: #282a35;
  position: fixed;
  top: 0;
  z-index: 10;
}

.container {
  width: 1200px;
  margin: 0 auto;
}

.welcome {
  float: left;
  font-size: 12px;
  color: #bbb;
  > img {
    width: 22px;
    height: 22px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .member-img {
    display: inline-block;
    width: 22px;
    height: 22px;
    background-position: center center;
    background-repeat: no-repeat;
    vertical-align: middle;
  }
  .userName {
    color: #bbb;
  }
}

.header .welcome .vipserName {
  line-height: 30px;
  color: #f17016;
}

.header .welcome .vipserName img {
  float: left;
  width: 18px;
  height: 22px;
  margin-top: 4px;
  margin-right: 5px;
}

.header .login {
  font-size: 12px;
  float: left;
  color: #fff;
  background-color: black;
  display: block;
  height: 19px;
  line-height: 19px;
  padding: 0 10px;
  margin-top: 6px;
  border-left: 1px solid #505a6d;
  margin-left: 48px;
}

.header .register {
  font-size: 12px;
  font-size: 12px;
  float: left;
  color: #cfd0d4;
  display: block;
  height: 19px;
  line-height: 19px;
  padding: 0 10px;
  margin-top: 6px;
  border-left: 1px solid #505a6d;
  border-right: 1px solid #505a6d;
}

.header .register:hover {
  color: #fff;
}

.header-nav-right {
  float: right;
  .header-nav-right-item {
    float: left;
    font-size: 12px;
    position: relative;
    z-index: 1111;
    height: 30px;
  }
  .user_manager {
    height: 30px;
    background-color: #f24645;
    width: 120px;
    color: #fff;
    padding: 0;
    text-align: center;
    text-align: center;
    margin: 0;
    line-height: 30px;
  }
}

.header-nav-right .header-nav-right-item a {
  padding: 0 20px;
  float: left;
  color: #bbbbbb;
  display: block;
  height: 19px;
  line-height: 19px;
  margin-top: 6px;
  border-left: 1px solid #505a6d;
}

.header-nav-right a:hover {
  color: #fff !important;
}

.header-nav-wx:hover {
  .wx-header-code-box {
    display: block;
  }
}
.wx-header-code-box {
  display: none;
  width: 95px;
  height: 111px;
  margin-left: 5px;
  position: absolute;
  z-index: 111 !important;
  top: 30px;
  left: 0;
  background-color: #ffffff;
  border: solid 1px #f0f0f0;
}

.wx-header-code-box img {
  width: 81px;
  float: left;
  margin: 7px;
}

.wx-header-code-box p {
  color: #bbbbbb;
  font-size: 12px;
  width: 100%;
  float: left;
  line-height: 12px;
  text-align: center;
}

.member-Standard {
  background-image: url(./images/gold.png);
}

.member-Senior {
  background-image: url(./images/crown.png);
}

.member-Vip {
  background-image: url(./images/diamond.png);
}

.member-Bronze {
  background-image: url(./images/bronze.png);
}

.member-Vipinvips {
  background-image: url(./images/vipinvips.png);
}
.member-coresupply {
  background-image: url(./images/com-str-icon06.png);
}
</style>
