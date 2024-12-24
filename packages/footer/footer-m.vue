<template>
  <div class="footer-box">
    <div class="Container">
      <div class="footer-nav-list">
        <ul class="footer-nav-ul" style="margin-left: 0">
          <li class="firstNav">
            <img src="./images/footernavicon01.png" alt="">
            <a href="/MScene/MTender">招标投标</a>
          </li>
          <li>
            <a href="/sn/11122E858978-A7C0-4D99-A602-967A31FB4828.html">工程招标</a>
          </li>
          <li>
            <a href="/sn/11222E858978-A7C0-4D99-A602-967A31FB4828.html">货物招标</a>
          </li>
          <li>
            <a href="/sn/11322E858978-A7C0-4D99-A602-967A31FB4828.html">服务招标</a>
          </li>
        </ul>
        <ul class="footer-nav-ul">
          <li class="firstNav">
            <img src="./images/footernavicon02.png" alt="">
            <a href="/supply/index">云采购</a>
          </li>
          <li>
            <a href="/sn/1102.html">招标采购</a>
          </li>
          <li>
            <a href="/sn/2102.html">询比采购</a>
          </li>
          <li>
            <a href="/sn/4102.html">竞价采购</a>
          </li>
          <li>
            <a href="/sn/3102.html">招募采购</a>
          </li>
        </ul>
        <ul class="footer-nav-ul">
          <li class="firstNav">
            <img src="./images/footernavicon03.png" alt="">
            <a href="//www.ycaimall.com">优采商城</a>
          </li>
          <li>
            <a href="//www.ycaimall.com/">优选物资</a>
          </li>
          <li>
            <a href="//www.ycaimall.com/article/1558943287192">供应商入驻</a>
          </li>
          <li>
            <a href="">专业采购服务</a>
          </li>
        </ul>

        <ul class="footer-nav-ul">
          <li class="firstNav">
            <img src="./images/footernavicon05.png" alt="">
            <a href="/zhuanti/flowBid/problem.html">平台服务</a>
          </li>
          <li>
            <a href="/zhuanti/flowBid/problem.html">电子招标投标</a>
          </li>
          <li>
            <a href="/purservice/index">采购商服务</a>
          </li>
          <li>
            <a href="/SupService/index">供应商服务</a>
          </li>

          <li>
            <a href="/members/membersindex">投标通</a>
          </li>

        </ul>

      </div>
      <div class="friendship-nav-list">
        <div class="friendship-nav-list-nav">
          <ul>
            <li v-for="(item, index) in friendshiplist" :key="index" :class="{'first-child': index === 0, 'addClass': currentList === index + 1}" @mouseenter="changeList(index)"><a><img v-if="index === 0" src="./images/friendshiplinkicon.png" alt="">{{ item }}</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-comprehensive-info-box" style="position: relative;">
        <!-- footer-comprehensive-info-box 左边栏目-->
        <div class="footer-comprehensive-info-left-box">
          <div v-show="currentList === 1" ref="friendshipRefOne" class="friendship-list-content">
            <ul>
              <li>
                <a href="https://www.ycaimall.com/index/">优采商城</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rn/340000340001.html">安徽招标信息网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rn/340000340001.html">合肥招标信息网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/MScene/SiteMap">今日招标采购</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rn/340000340016.html">宣城招标网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rn/340000340015.html">池州招标网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rn/340000340014.html">亳州招标网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rn/340000340013.html">六安招标网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rn/340000340012.html">宿州招标网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rn/340000340011.html">阜阳招标网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rn/340000340010.html">滁州招标网</a>
              </li>
              <li>
                <a href=" http://www.youzhicai.com/rn/340000340009.html">黄山招标网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rn/340000340003.html">蚌埠招标网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rn/340000340004.html">淮南招标网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rn/340000340005.html">马鞍山招标网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rn/340000340006.html">淮北招标网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rn/340000340007.html">铜陵招标网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rn/340000340008.html">安庆招标网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rn/340000340002.html">芜湖招标网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rpu/340000340001.html">合肥采购网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rpu/340000340002.html">芜湖采购网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rpu/340000340003.html">蚌埠采购网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rpu/340000340004.html">淮南采购网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rpu/340000340005.html">马鞍山采购网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rpu/340000340006.html">淮北采购网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rpu/340000340007.html">铜陵采购网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rpu/340000340008.html">安庆采购网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rpu/340000340009.html">黄山采购网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rpu/340000340010.html">滁州采购网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rpu/340000340011.html">阜阳采购网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rpu/340000340012.html">宿州采购网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rpu/340000340013.html">六安采购网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rpu/340000340014.html">亳州采购网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rpu/340000340015.html">池州采购网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rpu/340000340016.html">宣城采购网</a>
              </li>
              <li>
                <a href="http://hosp.youzhicai.com/">医疗招标采购网</a>
              </li>
              <li>
                <a href="http://chem.youzhicai.com/">化工招标采购网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/pc/01010100.html">工程招标网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rn/220000220001.html">长春招投标网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rn/210000210001.html">沈阳招投标网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rn/620000620001.html">兰州招投标网</a>
              </li>
              <li>
                <a href="http://www.youzhicai.com/rn/630000630001.html">西宁招投标网</a>
              </li>

            </ul>
            <a class="moreBtn" @click="handleMore">
              <span>{{ isCollpse ? '更多' : '收起' }}</span>
              <img src="./images/morebtndown.png" alt="">
            </a>
          </div>
          <div v-show="currentList === 2" ref="friendshipRefTwo" class="friendship-list-content">
            <ul>
              <li>
                <a href="/pn/110000.html">北京招标网</a>
              </li>
              <li>
                <a href="/pn/120000.html">天津招标网</a>
              </li>
              <li>
                <a href="/pn/130000.html">河北招标网</a>
              </li>
              <li>
                <a href="/pn/140000.html">山西招标网</a>
              </li>
              <li>
                <a href="/pn/150000.html">内蒙古招标网</a>
              </li>
              <li>
                <a href="/pn/210000.html">辽宁招标网</a>
              </li>
              <li>
                <a href="/pn/220000.html">吉林招标网</a>
              </li>
              <li>
                <a href="/pn/230000.html">黑龙江招标网</a>
              </li>
              <li>
                <a href="/pn/310000.html">上海招标网</a>
              </li>
              <li>
                <a href="/pn/320000.html">江苏招标网</a>
              </li>
              <li>
                <a href="/pn/330000.html">浙江招标网</a>
              </li>
              <li>
                <a href="/pn/340000.html">安徽招标网</a>
              </li>
              <li>
                <a href="/pn/350000.html">福建招标网</a>
              </li>
              <li>
                <a href="/pn/360000.html">江西招标网</a>
              </li>
              <li>
                <a href="/pn/370000.html">山东招标网</a>
              </li>
              <li>
                <a href="/pn/410000.html">河南招标网</a>
              </li>
              <li>
                <a href="/pn/420000.html">湖北招标网</a>
              </li>
              <li>
                <a href="/pn/430000.html">湖南招标网</a>
              </li>
              <li>
                <a href="/pn/510000.html">重庆招标网</a>
              </li>
              <li>
                <a href="/pn/520000.html">四川招标网</a>
              </li>
              <li>
                <a href="/pn/530000.html">贵州招标网</a>
              </li>
              <li>
                <a href="/pn/540000.html">云南招标网</a>
              </li>
              <li>
                <a href="/pn/550000.html">西藏招标网</a>
              </li>
              <li>
                <a href="/pn/610000.html">陕西招标网</a>
              </li>
              <li>
                <a href="/pn/620000.html">甘肃招标网</a>
              </li>
              <li>
                <a href="/pn/630000.html">青海招标网</a>
              </li>
              <li>
                <a href="/pn/640000.html">宁夏招标网</a>
              </li>
              <li>
                <a href="/pn/650000.html">新疆招标网</a>
              </li>
              <li>
                <a href="/pn/710000.html">广东招标网</a>
              </li>
              <li>
                <a href="/pn/720000.html">广西招标网</a>
              </li>
              <li>
                <a href="/pn/730000.html">海南招标网</a>
              </li>

            </ul>
            <a class="moreBtn" @click="handleMore">
              <span>{{ isCollpse ? '更多' : '收起' }}</span>
              <img src="./images/morebtndown.png" alt="">
            </a>
          </div>
          <div v-show="currentList === 3" ref="friendshipRefThree" class="friendship-list-content">
            <ul class="substations-list">
              <li class="SeoProstyle"><span><a href="/rn/150000150002.html" class="sub-link pl0">包头招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/620000620004.html" class="sub-link pl0">白银招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/340000340003.html" class="sub-link pl0">蚌埠招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/110000110003.html" class="sub-link pl0">崇文区招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/330000330003.html" class="sub-link pl0">温州招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/650000650012.html" class="sub-link pl0">伊犁招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/510000510009.html" class="sub-link pl0">北碚区招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/230000230008.html" class="sub-link pl0">佳木斯招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/120000120005.html" class="sub-link pl0">河北区招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/510000510023.html" class="sub-link pl0">丰都县招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/510000510011.html" class="sub-link pl0">双挢区招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/110000110016.html" class="sub-link pl0">怀柔区招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/530000530002.html" class="sub-link pl0">六盘水招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/330000330004.html" class="sub-link pl0">嘉兴招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/220000220008.html" class="sub-link pl0">白城招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/140000140011.html" class="sub-link pl0">吕梁招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/520000520009.html" class="sub-link pl0">内江招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/510000510038.html" class="sub-link pl0">合川区招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/430000430002.html" class="sub-link pl0">株洲招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/130000130002.html" class="sub-link pl0">唐山招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/120000120016.html" class="sub-link pl0">蓟县招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/550000550001.html" class="sub-link pl0">拉萨招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/410000410008.html" class="sub-link pl0">焦作招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/620000620011.html" class="sub-link pl0">定西招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/540000540002.html" class="sub-link pl0">曲靖招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/540000540005.html" class="sub-link pl0">昭通招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/310000310010.html" class="sub-link pl0">闵行区招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/650000650014.html" class="sub-link pl0">阿勒泰招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/110000110017.html" class="sub-link pl0">密云县招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/720000720008.html" class="sub-link pl0">贵港招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/550000550003.html" class="sub-link pl0">山南招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/410000410018.html" class="sub-link pl0">济源招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/420000420006.html" class="sub-link pl0">鄂州招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/420000420007.html" class="sub-link pl0">荆门招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/510000510005.html" class="sub-link pl0">江北区招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/140000140001.html" class="sub-link pl0">太原招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/130000130011.html" class="sub-link pl0">衡水招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/540000540008.html" class="sub-link pl0">临沧招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/710000710020.html" class="sub-link pl0">揭阳招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/410000410003.html" class="sub-link pl0">洛阳招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/530000530006.html" class="sub-link pl0">黔西南招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/360000360010.html" class="sub-link pl0">抚州招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/320000320011.html" class="sub-link pl0">镇江招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/630000630008.html" class="sub-link pl0">梅西招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/710000710012.html" class="sub-link pl0">梅州招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/320000320009.html" class="sub-link pl0">盐城招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/520000520015.html" class="sub-link pl0">达川招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/510000510024.html" class="sub-link pl0">垫江县招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/410000410010.html" class="sub-link pl0">许昌招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/520000520003.html" class="sub-link pl0">攀枝花招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/130000130004.html" class="sub-link pl0">邯郸招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/120000120003.html" class="sub-link pl0">河西区招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/420000420003.html" class="sub-link pl0">十堰招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/520000520020.html" class="sub-link pl0">甘孜招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/340000340008.html" class="sub-link pl0">安庆招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/550000550007.html" class="sub-link pl0">林芝招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/420000420016.html" class="sub-link pl0">天门招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/540000540007.html" class="sub-link pl0">普洱招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/720000720014.html" class="sub-link pl0">崇左招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/530000530009.html" class="sub-link pl0">黔南招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/370000370005.html" class="sub-link pl0">东营招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/720000720005.html" class="sub-link pl0">北海招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/650000650004.html" class="sub-link pl0">哈密招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/310000310017.html" class="sub-link pl0">青浦区招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/210000210012.html" class="sub-link pl0">铁岭招标网</a></span></li>
              <li class="SeoProstyle"><span><a href="/rn/540000540004.html" class="sub-link pl0">保山招标网</a></span></li>
            </ul>
            <a class="moreBtn" @click="handleMore">
              <span>{{ isCollpse ? '更多' : '收起' }}</span>
              <img src="./images/morebtndown.png" alt="">
            </a>
          </div>
          <div class="comprehensive-service-nav">
            <a href="/qiye/1/">企业名录</a>
            <a href="/SeoSite/WebsiteMap">网站地图</a>
            <a href="/ActivityTopic/AdvertisingPosition">广告服务</a>
          </div>
          <div class="contact-information-box">
            <div class="contact-information-title">
              <img src="./images/companyicon.png" alt="">
              <p>联系方式</p>
            </div>
            <div class="contact-information-list">
              <ul>
                <li>
                  <a>客服热线：400-0099-555</a>
                </li>

                <li>
                  <a>Email：service@youzhicai.com</a>
                </li>
                <li>
                  <a>地址：安徽省合肥市滨湖新区金融港A11栋1-2楼</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-wx-code">
          <img src="./images/wxCode.jpg" alt="" style="width:112px;">
          <p>

            优质采官方微信
          </p>
        </div>
        <div class="footer-wx-code" style="">
          <img src="./images/wxcodesj.png" alt="" style="width:112px;">
          <p>

            商机标讯   一键直达
          </p>
        </div>
        <!-- footer-comprehensive-info-box 左边栏目-->
      </div>
      <div class="footer-tips">
            <p style="width:100%;">建议浏览器内核在IE9以上，分辨率1280*800以上</p>
            <p>Copyright©2016安徽省优质采科技发展有限责任公司</p>
            <p style="margin-left: 40px;"> 版权所有 <a href="//beian.miit.gov.cn" target="_blank">皖ICP备18021510号</a></p><img src="./images/nationalemblemicon.png" alt="">
            
            <p style="margin-left: 40px;"><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=34011102001571" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="./images/nationalemblemicon.png" style="float:left;" /><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">皖公网安备 34011102001571号</p></a></p>
            <p class="beImg" style="margin-right:10px;">
                <!--可信网站图片LOGO安装开始-->
                <!-- <script src="//kxlogo.knet.cn/seallogo.dll?sn=e170320110106670225hpg000000&amp;size=1" rel="nofollow"></script> -->
                <!--可信网站图片LOGO安装结束-->
            </p>
            <a target="cyxyv" href="https://v.yunaq.com/certificate?domain=www.youzhicai.com&from=label&code=90030"> <img src="./images/label_lg_90030.png" style="width: 70px;"></a>
            <a target="cyxyv" href="/images/mscene/BusinessLicense.jpg">
                <img src="./images/businesslicensemark.png" style="width: 70px;">

            </a>
            <a href="https://www.youzhicai.com/HelpCenter/HelpCenterIndex" target="_blank" style="margin-left:10px; vertical-align: sub;">规则中心</a>
            <a href="https://cdn.youzhicai.com/Bscene/file/隐私协议.pdf" target="_blank" style="margin-left:10px; vertical-align: sub;">隐私协议</a>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      isCollpse: true,
      friendshiplist: ['友情链接', '省份招标网', '市招标网'],
      currentList: 1
    }
  },
  methods: {
    handleMore() {
      if (this.isCollpse) {
        this.$refs.friendshipRefOne.style.height = 'auto'
        this.$refs.friendshipRefTwo.style.height = 'auto'
        this.$refs.friendshipRefThree.style.height = 'auto'
        this.isCollpse = !this.isCollpse
      } else {
        this.$refs.friendshipRefOne.style.height = '40px'
        this.$refs.friendshipRefTwo.style.height = '40px'
        this.$refs.friendshipRefThree.style.height = '40px'
        this.isCollpse = !this.isCollpse
      }
    },
    changeList(index) {
      this.currentList = index + 1
    }
  }
}
</script>
<style lang="less" scoped>
body,dd,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,html,img,legend,li,ol,p,ul {
    margin: 0;
    padding: 0
}

body {
    color: #a0a0a0;
    word-wrap: break-word;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}

a,a:hover {
    color: #555;
}

img {
    display: inline-block;
    vertical-align: middle;
}

a img,fieldset {
    border: 0;
}

em,i {
    font-style: normal;
}

b,h1,h2,h3,h4,h5,h6,strong,th {
    font-weight: 100;
}

button,input,select,textarea {
    outline: none;
    border: 0;
    padding: 0;
}

table {
    border-collapse: collapse;
}

.cu {
    cursor: pointer;
}

.over {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.czdq {
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
}

.ind2 {
    text-indent: 2em;
}
.left {
    float: left;
}

.right {
    float: right;
}
.clear { zoom:1 }

.clear:after {
    content: "";
    clear: both;
    display: block;
    height: 0;
    overflow: hidden;
    visibility: hidden
}

  .footer-box {
      width: 100%;
      background-color: #282a35;
      float: left;
      min-width: 1200px;
      padding-bottom: 15px;
      font-size:14px;
      /* position: fixed;
      bottom: 0; */
  }

  .footer-box  .Container {
    position: relative;
    margin: 0 auto;
    width: 1200px;
}
      .footer-box a {
          color: #7c7f8c;
      }

  .footer-nav-ul {
      width: 150px;
      float: left;
      margin-left: 150px;
      margin-top: 35px;
  }

      .footer-nav-ul li {
          width: 100%;
          float: left;
      }

          .footer-nav-ul li img {
              width: 32px;
              float: left;
          }

          .footer-nav-ul li a {
              color: #7c7f8c;
              float: left;
              margin-left: 52px;
              line-height: 22px;
          }

      .footer-nav-ul .firstNav a {
          color: #cfd0d4;
          font-size: 16px;
          line-height: 34px;
          margin-left: 20px;

      }

      .footer-nav-ul li a:hover {
          color: #edf0fb !important;
      }

  .friendship-nav-list {
      width: 100%;
      float: left;
      margin-top: 15px;
  }

      .friendship-nav-list a {
          color: #7c7f8c;
          margin-left: 5px;
      }

  .friendship-nav-list-nav {
      width: 100%;
      float: left;
  }

      .friendship-nav-list-nav .first-child img {
          width: 22px;
          float: left;
      }

      .friendship-nav-list-nav .first-child {
          border-left: 0;
          padding-left: 0
      }

      .friendship-nav-list-nav .addClass a {
          color: #edf0fb !important;
      }

      .friendship-nav-list-nav li {
          padding: 0 10px;
          border-left: 1px solid #414454;
          float: left;
      }

  .footer-comprehensive-info-box {
      width: 100%;
      float: left;
  }

  .footer a:hover {
      color: #edf0fb !important;
  }

  .footer-comprehensive-info-box a:hover {
      color: #edf0fb !important;
  }

  .footer-comprehensive-info-left-box {
      width: 880px;
      float: left;
  }

  .friendship-list-content {
      width: 100%;
      float: left;
      height: 40px;
      overflow: hidden;
      border-bottom: 1px solid #414454;
      border-top: 1px solid #414454;
      box-sizing: border-box;
      margin-top: 10px;
  }

      .friendship-list-content ul {
          width: 790px;
          float: left;
      }

          .friendship-list-content ul li {
              float: left;
              margin-left: 15px;
          }

              .friendship-list-content ul li a {
                  height: 40px;
                  line-height: 40px;
                  color: #7c7f8c;
              }

      .friendship-list-content .moreBtn {
          height: 40px;
          line-height: 40px;
          float: right;
          margin-right: 30px;
          color: #7c7f8c;
      }

          .friendship-list-content .moreBtn img {
              width: 10px;
          }

  .comprehensive-service-nav {
      width: 100%;
      float: left;
      margin-top: 10px;
  }

      .comprehensive-service-nav a:first-child {
          margin-left: 0
      }

      .comprehensive-service-nav a {
          float: left;
          margin-left: 15px;
      }

  .contact-information-box {
      width: 100%;
      float: left;
  }

      .contact-information-box .contact-information-title {
          width: 100%;
          float: left;
          margin-top: 25px;
      }

          .contact-information-box .contact-information-title img {
              height: 20px;
              float: left;
          }

          .contact-information-box .contact-information-title p {
              line-height: 20px;
              margin-left: 10px;
              float: left;
              color: #7c7f8c;
          }

  .contact-information-list {
      width: 100%;
      float: left;
      margin-top: 10px;
  }

      .contact-information-list p {
          color: #7c7f8c;
      }

      .contact-information-list ul li:first-child {
          margin-left: 0
      }

      .contact-information-list ul li {
          float: left;
          margin-left: 45px;
      }

  .footer-wx-code {
      width: 145px;
      float: right;
  }

      .footer-wx-code img {
          width: 112px;
          float: right;
          margin-right: 20px;
      }

      .footer-wx-code p {
          color: #ffffff;
          width: 100%;
          float: left;
          letter-spacing: -1px;
          text-align: center;
          margin-top: 5px;
      }

  .footer-tips {
      width: 100%;
      float: left;
      margin-top: 25px;
  }

      .footer-tips p {
          float: left;
          line-height: 24px;
          color: #adaeb4;
          font-size:13px;
      }

      .footer-tips img {
          float: left;
          margin-left: 10px;
      }

  .right-nav-box {
      position: fixed;
      width: 58px;
      top: 250px;
      right: 0
  }

      .right-nav-box p {
          width: 100%;
          text-align: center;
          margin-top: 5px;
          font-size: 12px;
          color: #747474;
      }

      .right-nav-box img {
          width: 20px;
          margin-top: 15px;
          margin-left: 19px;
      }

  .online-service p {
      color: #e5301e;
  }

  .online-service {
      width: 100%;
      height: 72px;
      background-color: #ffffff;
      border-radius: 2px;
      border: solid 1px #ececec;
  }

  .right-nav-box ul {
      width: 58px;
      margin-top: 15px;
      height: 290px;
      background-color: #ffffff;
      border-radius: 2px;
      border: solid 1px #ececec;
  }

      .right-nav-box ul li {
          width: 100%;
          height: 58px;
          float: left;
          cursor: pointer;
      }

          .right-nav-box ul li a {
              width: 100%;
              height: 58px;
              display: block;
          }

          .right-nav-box ul li img {
              margin-top: 10px;
          }

          .right-nav-box ul li p {
              line-height: 12px;
          }

  .return-top img {
      width: 52px;
      float: right;
  }

  /* .cloud-procurement .cloud-procurement-project-li:after {
      content: "...";
      position: absolute;
      bottom: 0;
      right: 0;
      background: #FFF;
      padding-left: 0.2em;
  } */

  /*智能客服 */

  .online-con {
      display: none;
      position: absolute;
      right: 59px;
      top: 0;
      padding: 10px;
      width: 211px;
      overflow: hidden;
      height: 174px;
      background: #fff;
      box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.26);
  }

  .smartServer {
      background: ur;
  }

  .icon_kf {
      color: #333 !important;
      background: url('./images/icon_service.png') no-repeat 0 0;
      text-align: left !important;
      padding-left: 34px;
      clear: both;
  }

  .online-con p {
      text-align: left !important;
  }

  .server_btnicon {
      width: 64px !important;
      height: 24px;
      background-color: #e5301e;
      border-radius: 2px;
      margin-left: 34px;
      color: #ffffff !important;
      line-height: 24px;
      padding-left: 25px;
      font-size: 12px;
      cursor: pointer;
  }

  .server_btnicon01 {
      background-position: 2px -120px;
      color: #fff;
  }

  .server_btnicon02 {
      background-position: 2px -153px;
      color: #fff;
      margin-left: 0;
      display: inline-block;
  }

  .icon_qqkf {
      background-position: 2px -41px;
  }

  .icon_tit {
      height: 24px;
      line-height: 24px;
      margin-top: 8px;
      margin-bottom: 3px;
  }

  .phone_tit {
      letter-spacing: 0px;
      color: #235699;
      font-size: 14px;
      font-weight: bold;
      margin-left: 34px;
      text-align: left;
  }

  .qrcode-con {
      width: 290px !important;
      background: #e4e4e4;
      color: #333;
      position: absolute;
      right: 64px;
      bottom: 35px;
  }

      .qrcode-con img {
          width: 75px;
          float: left;
      }

      .qrcode-con .qrcode-title {
          margin-top: 20px;
          font-weight: 700;
          font-size: 16px;
          float: left;
          width: 150px;
          text-align: left;
          margin-left: 25px;
      }

  .qrcode-textCon {
      float: left;
      width: 195px;
  }

  .qrcode-list {
      width: 130px !important;
      border: none !important;
      list-style-type: disc;
      height: auto !important;
      float: left;
      background: none !important;
      margin-top: 5px;
      margin-left: 45px;
  }

  .qrcode-item {
      background: none !important;
      list-style-type: disc;
      width: 100%;
      float: left;
      text-align: left;
      height: 24px !important;
  }

  /* 快捷询价 */

  .inquiry-open {
      width: 213px;
      height: auto;
      background: #fff;
      border: 1px solid #ededed;
      position: fixed;
      top: 375px;
      right: 59px;
      z-index: 99999;
      padding-bottom: 15px;
  }

      .inquiry-open h3 {
          width: 213px;
          height: 34px;
          line-height: 34px;
          color: #666;
          font-size: 15px;
          font-weight: normal;
          background: #e7eaed;
          text-indent: 8px;
      }

          .inquiry-open h3 span {
              display: block;
              float: right;
              width: 22px;
              height: 22px;
              background: url("./images/close1.png") no-repeat;
              text-indent: -9999px;
              cursor: pointer;
              margin-top: 6px;
              margin-right: 6px;
          }

              .inquiry-open h3 span:hover {
                  background: url("./images/close2.png") no-repeat;
              }

      .inquiry-open form {
          width: 194px;
          margin: 0 auto;
      }

  .open-ul li {
      margin-top: 10px;
  }

  .div_up {
      display: none;
  }

  .biao {
      font-size: 13px;
      color: #333;
      margin-bottom: 6px;
      overflow: hidden;
  }

  .open_input1 {
      width: 192px;
      height: 32px;
      border: 1px solid #e8e8e8;
      text-indent: 10px;
      font-family: "Microsoft Yahei",Verdana, sans-serif;
  }

  .open_input2 {
      padding-left: 10px;
      width: 182px;
      max-width: 182px;
      height: 58px;
      border: 1px solid #e8e8e8;
      font-family: "Microsoft Yahei",Verdana, sans-serif;
  }

  .open_lable {
      width: 85px;
      height: 18px;
      line-height: 18px;
      float: left;
      vertical-align: middle;
  }

      .open_lable input {
          width: 14px;
          height: 14px;
          line-height: 18px;
          vertical-align: middle;
      }

  .open_shangchuan {
      display: block;
      width: 196px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 15px;
      background: #f2f2f2;
      border: 1px solid #e8e8e8;
      color: #666;
      margin-top: 15px;
  }

      .open_shangchuan:hover {
          background: #3988c9;
          color: #fff;
      }

  .open_p {
      color: #888;
      padding-top: 8px;
  }

  .a3 {
      display: block;
      width: 196px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      font-size: 16px;
      background: #d6202e;
      border: 1px solid #d6202e;
      color: #fff;
      margin-top: 10px;
  }

      .a3:hover {
          background: red;
      }

  .tabBox-inner-tender .project-list .tabs-inner-moreBtn {
      position: absolute;
      right: 15px;
      top: -35px;
  }

  .tabBox-inner-tender .cloud-procurement .tabs-inner-moreBtn {
      position: absolute;
      right: 288px;
      top: 80px;
  }

  .tabBox-inner-tender .project-list {
      position: relative;
  }

  .popular-classification-list .second-nav {
      text-indent: 0 !important;
      margin-left: 5px;
  }

  .popular-classification-list .addClass .second-nav,
  .popular-classification-list .addClass .first-nav {
      color: #e5301e;
  }

  .popular-classification-list a:hover {
      font-weight: 700
  }
</style>

