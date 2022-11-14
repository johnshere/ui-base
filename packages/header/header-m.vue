<template>
  <div class="u-header-wrap">
    <div class="search-box">
      <div class="yzc-logo">
        <a href="/">
          <img src="./images/navlogo.png" alt="" />
        </a>
      </div>
      <div class="search-lists-box">
        <div class="search-nav">
          <ul>
            <li
              v-for="item in navList"
              :key="item.code"
              :val="item.code"
              :class="item.code === currentSearchVal ? 'addClass' : ''"
              @click="handleTab(item.code)"
            >
              {{ item.name }}<em v-show="item.code !== '3'"></em
              ><img class="triangleNav" src="./images/trianglenav.jpg" alt="" />
            </li>
          </ul>
        </div>
        <div class="search-input-content">
          <select
            class="search-select-companytype"
            ref="searchcompanytype"
            v-show="currentSearchVal === '3'"
          >
            <option value="1" selected>供应商</option>
            <option value="2">采购人</option>
          </select>
          <input
            type="text"
            class="classification-input"
            ref="inputValue"
            :placeholder="currentPlace"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='请输入'"
          />
          <a class="seachBtn" @click="Search">
            <img src="./images/searchicon.png" alt="" />
            <span>搜索</span>
          </a>
          <a
            v-show="currentSearchVal === '1'"
            class="wholeSeachBtn"
            @click="BusinessSearch"
            ><span style="font-size: 14px">搜索全国</span
            ><img src="./images/referral.png" alt=""
          /></a>
          <div class="login-prompt" style="display: none">
            <img src="./images/prompt.png" alt="" /><span
              >登录后搜索更多相关项目</span
            ><a href="https://passport.youzhicai.com" class="login-prompt-btn"
              >登录</a
            >
          </div>
        </div>
        <input type="hidden" id="hidslttabval" value="1" />
        <input type="hidden" id="hidisautocomplete" value="0" />
      </div>
      <div class="contact-us-service">
        <img src="./images/phoneicon.png" alt="" />
        <p class="phone-num">400-0099-555</p>
        <p class="contact-us-words">客服咨询<br />客户服务</p>
      </div>
    </div>
    <!-- 菜单 -->
    <div class="item-block-box nav-box">
      <div style="width: 1200px; margin: 0 auto">
        <ul>
          <li class="nav-box-first-nav">
            <a href="/" class="addClass"> 首页</a>
          </li>
          <li class="nav-box-line">|</li>
          <li class="nav-box-first-nav nav-red-color">
            <a
              href="/IndustrialInternet/Index"
              title="彩云追月工业互联网平台"
              style="position: relative"
              >工业互联网<img
                src="./images/cyzy.png"
                style="position: absolute; top: -12px; left: 0px"
            /></a>
          </li>
          <li class="nav-box-first-nav nav-red-color">
            <a href="/MScene/MTender" class="">招标投标</a>
          </li>
          <li class="nav-box-first-nav nav-red-color">
            <a href="/supply/index" class=""> 云采购</a>
          </li>
          <li class="nav-box-first-nav nav-red-color">
            <a href="//www.youzhicai.com/ycsc"> 优采商城</a>
          </li>
          <li
            class="platform-services-nav"
            style="width: 108px"
            :class="purchaseArea ? 'platform-active' : ''"
          >
            <a
              style="color: red"
              @mouseover="purchaseArea = true"
              @mouseleave="purchaseArea = false"
            >
              采购专区</a
            >
            <img
              src="./images/trianglenavdown.png"
              alt=""
              style="margin-left: 10px; vertical-align: middle"
              :style="{ transform: purchaseArea ? 'rotate(-180deg)' : '' }"
              @mouseover="purchaseArea = true"
              @mouseleave="purchaseArea = false"
            />
            <ul
              class="platform-services-nav-lists"
              style="width: 108px; height: 130px"
              v-show="purchaseArea"
              @mouseover="purchaseArea = true"
              @mouseleave="purchaseArea = false"
            >
              <li>
                <a href="//chem.youzhicai.com/"
                  >化工采购</a
                >
              </li>
              <li>
                <a href="//hosp.youzhicai.com">医疗采购</a>
              </li>
              <li>
                <a href="//sd.youzhicai.com">山东专区</a>
              </li>
              <li>
                <a href="//nmeng.youzhicai.com">内蒙专区</a>
              </li>
            </ul>
          </li>
          <li class="nav-box-line">|</li>
          <li
            class="platform-services-nav"
            style="width: 105px"
            :class="bidService ? 'platform-active' : ''"
          >
            <a @mouseover="bidService = true" @mouseleave="bidService = false">
              <img src="./images/fire.png" style="width: 20px" />投标通</a
            >
            <img
              src="./images/trianglenavdown.png"
              alt=""
              style="margin-left: 10px; vertical-align: middle"
              :style="{ transform: bidService ? 'rotate(-180deg)' : '' }"
              @mouseover="bidService = true"
              @mouseleave="bidService = false"
            />
            <ul
              class="platform-services-nav-lists"
              style="height: auto; width: 105px"
              v-show="bidService"
              @mouseover="bidService = true"
              @mouseleave="bidService = false"
            >
              <li>
                <a href="//shangji.youzhicai.com"
                  >投标通商机</a
                >
              </li>
              <li>
                <a href="/members/membersindex">投标通服务</a>
              </li>
              <li>
                <a onclick="BiddingClearMenu_Click();" href="/Members/Glodon"
                  >清标工具</a
                >
              </li>
              <li>
                <a href="/Members/MemberUniPay">服务开通</a>
              </li>
            </ul>
          </li>
          <li
            class="platform-services-nav"
            :class="platService ? 'platform-active' : ''"
          >
            <a
              @mouseover="platService = true"
              @mouseleave="platService = false"
            >
              平台服务</a
            >
            <img
              src="./images/trianglenavdown.png"
              alt=""
              style="margin-left: 10px; vertical-align: middle"
              :style="{ transform: platService ? 'rotate(-180deg)' : '' }"
              @mouseover="platService = true"
              @mouseleave="platService = false"
            />
            <ul
              class="platform-services-nav-lists"
              style="width: 160px; height: auto"
              v-show="platService"
              @mouseover="platService = true"
              @mouseleave="platService = false"
            >
              <li>
                <a href="/Mscene/SignatureTheme">平台基础服务</a>
              </li>
              <li>
                <a href="/zhuanti/flowBid/problem.html"
                  >电子招标投标</a
                >
              </li>
              <li>
                <a href="/purservice/index">采购商服务</a>
              </li>
              <li>
                <a href="/SupService/index">供应商服务</a>
              </li>

              <li>
                <a href="//yingshang.youzhicai.com">营商环境评价信息系统</a>
              </li>
              <li>
                <a href="/ActivityTopic/AdvertisingPosition">广告服务</a>
              </li>
              <li>
                <a href="http://www.ahcycx.com/">政策服务</a>
              </li>
            </ul>
          </li>

          <li class="nav-box-first-nav">
            <a href="https://ketang.youzhicai.com">优采课堂</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "uHead",
  data() {
    return {
      navList: [
        { code: "1", name: "找项目", placeholder: "请输入项目名称或编号" },
        { code: "5", name: "找物资", placeholder: "请输入物资名称" },
        { code: "3", name: "找企业", placeholder: "请输入企业名称" },
      ],
      currentSearchVal: "1",
      inputValue: "",
      purchaseArea: false,
      bidService: false,
      platService: false,
    };
  },
  computed: {
    currentPlace() {
      return this.navList.find((item) => item.code === this.currentSearchVal)
        .placeholder;
    },
  },
  methods: {
    handleTab(code) {
      this.currentSearchVal = code;
    },
    Search() {
      const sltcontent = this.$refs.inputValue.value;
      const searchcompanytype = this.$refs.searchcompanytype.value;
      let redirecturl = "";
      switch (this.currentSearchVal) {
        case "1":
          redirecturl =
            "https://www.youzhicai.com/s/0_0_0_0_.html?key=" + sltcontent;
          break;
        case "3":
          redirecturl =
            "https://www.youzhicai.com/s/3.html?key=" +
            sltcontent +
            "&type=" +
            searchcompanytype;
          break;
        case "5":
          redirecturl = "//shangji.youzhicai.com/s/5.html?key=" + sltcontent;
          break;
      }
      window.location.href = redirecturl;
    },

    BusinessSearch() {
      let sltcontent = this.$refs.inputValue.value;
      sltcontent = sltcontent.replace(/<[^>]+>/g, "");
      sltcontent = sltcontent.replace(/</g, "");
      sltcontent = encodeURI(sltcontent);
      window.open(
        "//shangji.youzhicai.com/subhome/searchnotices?kw=" + sltcontent
      );
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  color: #333333;
  text-decoration: none;
}

a:hover {
  color: #333333;
}

.u-header-wrap {
  width: 100%;
  height: 100px;
  position: fixed;
  z-index: 200;
  top: 30px;
  left: 50%;
  transform: translate(-50%);
  background: #fff;
  .search-box-fixed,
  .search-box {
    width: 1200px;
    height: 100px;
    padding: 0;
    box-sizing: content-box;
    width: 1200px;
    margin: 0 auto;
  }

  .wholeSeachBtn {
    float: left;
    box-sizing: border-box;
    margin-left: 5px;
    width: 96px;
    height: 40px;
    border: solid 1px #e5301e;
    color: #e5301e;
    text-align: center;
    line-height: 40px;
  }

  .search-box-fixed .yzc-logo {
    height: 50px;
    float: left;
    margin-top: 10px;
  }

  .search-box-fixed .yzc-logo img {
    height: 65px;
    float: left;
  }

  .search-box-fixed-title {
    width: 84px;
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    border: solid 1px #e5e5e5;
    position: absolute;
    text-indent: 15px;
    border-right: none;
    left: -84px;
    top: 0;
    z-index: 111111;
    cursor: pointer;
  }

  .search-box-fixed .contact-us-service {
    margin-top: 35px;
  }

  .search-box-fixed .search-nav {
    margin-top: 10px;
  }

  .search-box-fixed .search-input-content input {
    height: 32px;
    line-height: 32px;
  }

  .search-box-fixed .search-input-content .seachBtn {
    height: 32px;
    line-height: 32px;
    width: 80px;
  }

  .search-box-fixed .search-input-content .seachBtn img {
    margin-top: 8px;
    margin-left: 15px;
  }

  .search-box-fixed .search-input-content .seachBtn span {
    height: 32px;
    line-height: 32px;
    width: 70px;
  }

  .search-box-fixed .wholeSeachBtn {
    height: 32px;
    line-height: 30px;
    width: 80px;
  }
  .search-lists-box {
    float: left;
    margin-left: 30px;
    width: 600px;
    height: 80px;
  }

  .search-box .yzc-logo {
    float: left;
    margin-top: 15px;
    width: 321px;
    height: 81px;
  }
  .search-lists-box {
    float: left;
    margin-left: 30px;
    width: 600px;
    height: 80px;
  }
  .search-nav {
    float: left;
    margin-top: 20px;
    width: 100%;
  }
  .contact-us-service {
    float: right;
    margin-top: 60px;
    margin-right: 10px;
  }
  .search-input-content input {
    position: relative;
    z-index: 1;
    float: left;
    box-sizing: border-box;
    width: 400px;
    height: 40px;
    border: solid 1px #e5301e;
    background-color: #fff;
    line-height: 40px;
  }
  .search-nav ul li {
    position: relative;
    float: left;
    padding: 0 10px;
    cursor: pointer;
    em {
      height: 10px;
      width: 1px;
      position: absolute;
      top: 6px;
      right: 0;
      background: #999;
    }
  }
  .contact-us-service img {
    float: left;
  }
  .phone-num {
    float: left;
    margin-left: 5px;
    padding-right: 10px;
    border-right: 1px solid #d8d8d8;
    color: #41465a;
    font-weight: 600;
    font-size: 16px;
  }
  .contact-us-words {
    float: left;
    margin-top: -10px;
    margin-left: 10px;
  }
  .search-input-content .seachBtn {
    float: left;
    width: 96px;
    height: 40px;
    background-color: #e5301e;
    color: #fff;
    font-size: 14px;
    line-height: 40px;
    cursor: pointer;
  }
  .search-input-content .seachBtn img {
    float: left;
    margin-top: 12px;
    margin-left: 22px;
    color: #fff;
  }
  .wholeSeachBtn {
    float: left;
    box-sizing: border-box;
    margin-left: 5px;
    width: 96px;
    height: 40px;
    border: solid 1px #e5301e;
    color: #e5301e;
    text-align: center;
    line-height: 40px;
  }
  .search-nav .addClass {
    color: #e5301e;
  }
  .search-input-content input {
    position: relative;
    z-index: 1;
    float: left;
    box-sizing: border-box;
    width: 400px;
    height: 40px;
    border: solid 1px #e5301e;
    background-color: #fff;
    line-height: 40px;
  }
  .search-input-content {
    position: relative;
    z-index: 10;
    float: left;
    margin-top: 10px;
    width: 100%;
  }
  .search-nav .triangleNav {
    position: absolute;
    bottom: -12px;
    left: 50%;
    z-index: 11;
    display: none;
    margin-left: -7px;
    width: 13px;
  }
  .search-nav .addClass .triangleNav {
    display: block !important;
  }
  .classification-input {
    text-indent: 15px;
    outline: none;
  }
  .wholeSeachBtn span {
    float: left;
    margin-left: 16px;
  }
  .wholeSeachBtn img {
    float: left;
    margin-top: 8px;
    width: 20px;
    height: 20px;
  }
  .search-box-fixed .wholeSeachBtn span {
    margin-left: 6px;
  }
  .search-box-fixed .wholeSeachBtn img {
    margin-top: 6px;
    width: 16px;
    height: 16px;
  }
  .search-select-companytype {
    float: left;
    height: 40px;
    border: solid 1px #e5301e;
    border-right: none;
    outline: none;
    box-sizing: border-box;
  }
  .search-box-fixed .search-input-content .search-select-companytype {
    height: 32px;
  }
  .login-prompt {
    float: left;
    display: none;
    width: 402px;
    height: 60px;
    border: 1px solid #f5f5f5;
    border-radius: 0 0 4px 4px;
    background: #fff;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.06);
    color: #333;
    font-size: 14px;
    line-height: 60px;
  }
  .login-prompt img {
    position: relative;
    top: 2px;
    margin-right: 6px;
    margin-left: 20px;
  }
  .login-prompt a {
    display: inline-block;
    margin-left: 30px;
    width: 60px;
    height: 28px;
    border: 1px solid #e5301e;
    border-radius: 4px;
    color: #e5301e;
    text-align: center;
    font-size: 14px;
    line-height: 28px;
  }
}

.item-block-box {
  float: left;
  padding-top: 70px;
  width: 100%;
  min-width: 1200px;
  background: #fff;
}

.nav-box {
  padding-top: 20px;
}

.nav-box ul li {
  cursor: pointer;
  float: left;
  line-height: 36px;
  padding: 0 10px;
  margin: 0 18px;
  position: relative;
  font-size: 16px;
}

.platform-services-nav {
  width: 108px;
  padding: 0 !important;
  border: 1px solid #fff;
  border-bottom: none;
  height: 40px;
}

.platform-active {
  border: 1px solid #d9d9d9;
  border-bottom: 0;
}

.platform-services-nav a {
  text-indent: 10px;
}

.platform-services-nav-lists {
  width: 108px;
  height: 135px;
  background-color: #ffffff;
  position: absolute;
  z-index: 111;
  top: 36px;
  left: -1px;
  border: solid 1px #d9d9d9;
  border-top: none;
}

.platform-services-nav-lists li {
  float: left !important;
  width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}

.platform-services-nav-lists li a {
  font-size: 14px;
  color: #41465a;
  line-height: 32px !important;
  text-indent: 10px;
  display: block;
}

// .platform-services-nav-lists .secondAddClass {
//   color: #e5301e !important;
// }

.platform-services-nav-lists li:hover a {
  color: #e5301e !important;
}

.nav-box ul li a {
  line-height: 36px;
  display: block;
  float: left;
}

.nav-box .addClass {
  border-bottom: 4px solid #e5301e;
}

.transform-180deg {
  transition: 0.25s;
  transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -o-transform: rotate(180deg);
}
.nav-box ul .nav-box-line {
  padding: 0;
  margin: 0 8px;
  color: #969696;
}
.nav-box ul .nav-red-color a {
  color: #e5301e;
}
.nav-box ul li {
  margin: 0 6px;
}
</style>
