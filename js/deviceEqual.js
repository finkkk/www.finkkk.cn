const deviceData = [
  {
    title: "Valve Index",
    desc: "PCVR的主流选择！".repeat(1),
    imgUrl: "img/device/index.jpg",
    resolution: "1440x1600",
    screenType: "RGB排列LCD",
    lensType: "双晶透镜",
    freq: "80/90/120/144HZ",
    fov: "115°-130°",
    ppd: "13.5",
    ipd: "58-70MM",
    trackSys: "V社灯塔定位",
    weight: "809g",
    price: "全套二手约4000-5000",
    type: "PCVR",
    time: "2019-06",
    lh: "支持",
    soc: "—", //时间排序得遵循yyyy-mm-dd hh:mm:ss格式  用空格分开
  },
  {
    title: "Oculus Rift CV1",
    desc: "定位效果天花板".repeat(1),
    imgUrl: "img/device/rift cv1.png",
    resolution: "1080x1200",
    screenType: "三星P排OLED",
    lensType: "菲涅尔",
    freq: "90HZ",
    fov: "接近90°",
    ppd: "10.3",
    ipd: "58-70MM",
    trackSys: "OC基站定位",
    weight: "470g",
    price: "全套二手约600-800",
    type: "PCVR",
    time: "2016-04",
    lh: "不支持",
    soc: "—",
  },
  {
    title: "Oculus Rifts",
    desc: "PCVR入门款".repeat(1),
    imgUrl: "img/device/rifts.png",
    resolution: "1280x1440",
    screenType: "RGB排列LCD",
    lensType: "菲涅尔",
    freq: "80HZ",
    fov: "接近90°",
    ppd: "15.3",
    ipd: "61.5-65.5MM",
    trackSys: "OC内向外定位",
    weight: "500g",
    price: "全套二手大约1000元&nbsp;",
    type: "PCVR",
    time: "2019-05",
    lh: "不支持",
    soc: "—",
  },
  {
    title: "HTC vive初代",
    desc: "&nbsp;".repeat(1),
    imgUrl: "img/device/vive1.png",
    resolution: "1080x1200",
    screenType: "三星P排OLED",
    lensType: "菲涅尔",
    freq: "90HZ",
    fov: "实测约100°",
    ppd: "9.3",
    ipd: "63MM",
    trackSys: "V社灯塔定位",
    weight: "550g",
    price: "国行全套4888,二手约2000",
    type: "PCVR",
    time: "2016-04",
    lh: "支持",
    soc: "—",
  },
  {
    title: "HTC VIVE Pro2",
    desc: "&nbsp;".repeat(1),
    imgUrl: "img/device/pro2.jpg",
    resolution: "2448x2448",
    screenType: "RGB排列LCD",
    lensType: "菲涅尔",
    freq: "90/120HZ",
    fov: "宣称120°实测约96°",
    ppd: "27.4",
    ipd: "57-72MM",
    trackSys: "V社灯塔定位",
    weight: "622g",
    price: "单头官价6888",
    type: "PCVR",
    time: "2021-05",
    lh: "支持",
    soc: "—",
  },
  {
    title: "大朋E4",
    desc: "&nbsp;".repeat(1),
    imgUrl: "img/device/e4.png",
    resolution: "1832x1920",
    screenType: "RGB排列LCD",
    lensType: "菲涅尔",
    freq: "72/90/120HZ",
    fov: "实测约96°",
    ppd: "19.1",
    ipd: "54-74MM",
    trackSys: "DP内向外定位",
    weight: "525g",
    price: "国行官方定价3199",
    type: "PCVR",
    time: "2022-12",
    lh: "不支持",
    soc: "—",
  },
  {
    title: "小派8KX",
    desc: "&nbsp;".repeat(1),
    imgUrl: "img/device/8kx.png",
    resolution: "3840x2160",
    screenType: "RGB排列LCD",
    lensType: "菲涅尔",
    freq: "75/90HZ",
    fov: "约180°",
    ppd: "22.9",
    ipd: "55-75MM",
    trackSys: "V社灯塔定位",
    weight: "暂无数据",
    price: "单头二手约4000-5000",
    type: "PCVR",
    time: "2020-05",
    lh: "支持",
    soc: "—",
  },
  {
    title: "Varjo Aero",
    desc: "&nbsp;".repeat(1),
    imgUrl: "img/device/aero.png",
    resolution: "2880x2720",
    screenType: "MiniLED(LCD)",
    lensType: "非球面",
    freq: "90HZ",
    fov: "宣称115°",
    ppd: "31",
    ipd: "57-73MM",
    trackSys: "V社灯塔定位",
    weight: "717g",
    price: "单头官方价1999美元",
    type: "PCVR",
    time: "2021-12",
    lh: "支持",
    soc: "—",
  },
  {
    title: "Oculus Quest1",
    desc: "&nbsp;".repeat(1),
    imgUrl: "img/device/quest1.png",
    resolution: "1440x1600",
    screenType: "三星P排OLED",
    lensType: "菲涅尔",
    freq: "72HZ",
    fov: "接近90°",
    ppd: "13.8",
    ipd: "58-70MM",
    trackSys: "OC内向外定位",
    weight: "571g",
    price: "二手约600-800元",
    type: "VR一体机",
    time: "2019-05",
    lh: "—",
    soc: "骁龙835",
  },
  {
    title: "Oculus Quest2",
    desc: "入门级推荐".repeat(1),
    imgUrl: "img/device/quest2.jpg",
    resolution: "1832x1920",
    screenType: "RGB排列LCD",
    lensType: "菲涅尔",
    freq: "72/90/120HZ",
    fov: "接近90°",
    ppd: "21.9",
    ipd: "58/63/68MM",
    trackSys: "OC内向外定位",
    weight: "503g",
    price: "原价$299 二手约1300",
    type: "VR一体机",
    time: "2020-10",
    lh: "—",
    soc: "高通XR2",
  },
  {
    title: "Meta Quest3",
    desc: "最佳入门推荐".repeat(1),
    imgUrl: "img/device/q3.webp",
    resolution: "2064x2208",
    screenType: "RGB排列LCD",
    lensType: "Pancake",
    freq: "72/80/90/120HZ",
    fov: "96°-110°",
    ppd: "22-25",
    ipd: "58-70MM",
    trackSys: "OC内向外定位",
    weight: "515g",
    price: "原价$399 二手约3k",
    type: "VR一体机",
    time: "2023-10",
    lh: "—",
    soc: "XR2 gen2",
  },
  {
    title: "Meta Quest Pro",
    desc: "&nbsp;".repeat(1),
    imgUrl: "img/device/qp.jpg",
    resolution: "1800x1920",
    screenType: "MiniLED(LCD)",
    lensType: "Pancake",
    freq: "72/90/120HZ",
    fov: "95°-110°",
    ppd: "17.6",
    ipd: "55-75MM",
    trackSys: "OC自追踪定位",
    weight: "722g",
    price: "原价$999 二手约6-7k",
    type: "VR一体机",
    time: "2022-10",
    lh: "—",
    soc: "XR2 gen1",
  },
  {
    title: "Pico neo3",
    desc: "超高性价比入门款".repeat(1),
    imgUrl: "img/device/pico neo3.jpeg",
    resolution: "1832x1920",
    screenType: "RGB排列LCD",
    lensType: "菲涅尔",
    freq: "72/90/120HZ",
    fov: "约90°",
    ppd: "21.9",
    ipd: "58/63.5/69MM",
    trackSys: "pico内向外定位",
    weight: "620g",
    price: "原价1899 二手约900",
    type: "VR一体机",
    time: "2021-05",
    lh: "—",
    soc: "高通XR2",
  },
  {
    title: "PICO4",
    desc: "入门级推荐".repeat(1),
    imgUrl: "img/device/pico4.jpg",
    resolution: "2160x2160",
    screenType: "RGB排列LCD",
    lensType: "Pancake",
    freq: "72/90HZ",
    fov: "约105°",
    ppd: "20.6",
    ipd: "62-72MM",
    trackSys: "pico内向外定位",
    weight: "586g",
    price: "原价2499，二手约1700",
    type: "VR一体机",
    time: "2022-09",
    lh: "—",
    soc: "高通XR2",
  },
  {
    title: "PICO4",
    desc: "入门级推荐".repeat(1),
    imgUrl: "img/device/pico4.jpg",
    resolution: "2160x2160",
    screenType: "RGB排列LCD",
    lensType: "Pancake",
    freq: "72/90HZ",
    fov: "约105°",
    ppd: "20.6",
    ipd: "62-72MM",
    trackSys: "pico内向外定位",
    weight: "586g",
    price: "原价3999，二手约2700",
    type: "VR一体机",
    time: "2023-04",
    lh: "—",
    soc: "高通XR2",
  },
  {
    title: "创维Pancake 1C",
    desc: "&nbsp;".repeat(1),
    imgUrl: "img/device/cw.png",
    resolution: "1600x1600",
    screenType: "RGB排列LCD",
    lensType: "Pancake",
    freq: "90HZ",
    fov: "宣称95°-105°",
    ppd: "17.2",
    ipd: "59-68MM",
    trackSys: "创维内向外定位",
    weight: "436g",
    price: "国行官方价格999",
    type: "VR一体机",
    time: "2022-07",
    lh: "—",
    soc: "高通XR2",
  },
  {
    title: "YVR2",
    desc: "&nbsp;".repeat(1),
    imgUrl: "img/device/yvr2.png",
    resolution: "1600x1600",
    screenType: "RGB排列LCD",
    lensType: "Pancake",
    freq: "90HZ",
    fov: "宣称95°",
    ppd: "17.2",
    ipd: "63MM",
    trackSys: "YVR内向外定位",
    weight: "635g",
    price: "国行官方价格2999",
    type: "VR一体机",
    time: "2023-01",
    lh: "—",
    soc: "高通XR2",
  },
  {
    title: "HTC VIVE focus3",
    desc: "&nbsp;".repeat(1),
    imgUrl: "img/device/focus3.png",
    resolution: "2448x2448",
    screenType: "RGB排列LCD",
    lensType: "菲涅尔",
    freq: "90HZ",
    fov: "宣称120°",
    ppd: "27.4",
    ipd: "57-72MM",
    trackSys: "HTC内向外定位",
    weight: "785g",
    price: "国行官方价格9888",
    type: "VR一体机",
    time: "2021-05",
    lh: "—",
    soc: "高通XR2",
  },
  {
    title: "PSVR1",
    desc: "&nbsp;".repeat(1),
    imgUrl: "img/device/psvr1.webp",
    resolution: "960x1080",
    screenType: "索尼RGB OLED",
    lensType: "菲涅尔",
    freq: "90HZ",
    fov: "宣称100°",
    ppd: "11.5",
    ipd: "63MM",
    trackSys: "可见光图像定位",
    weight: "约600g",
    price: "国行官方价格9888",
    type: "PCVR",
    time: "2016-10",
    lh: "—",
    soc: "—",
  },
  {
    title: "PSVR2",
    desc: "&nbsp;".repeat(1),
    imgUrl: "img/device/PSVR2.png",
    resolution: "2000x2040",
    screenType: "索尼RGB OLED",
    lensType: "菲涅尔",
    freq: "90/120HZ",
    fov: "宣称110°",
    ppd: "约21",
    ipd: "58-72MM",
    trackSys: "索尼内向外定位",
    weight: "约600g",
    price: "国行官方价格3499",
    type: "PCVR",
    time: "2023-02",
    lh: "—",
    soc: "—",
  },
];
//字段

const slideList = [
  "Valve Index",
  "Oculus Rift CV1",
  "Oculus Rifts",
  "HTC vive初代",
  "HTC VIVE Pro2",
  "大朋E4",
  "小派8KX",
  "Varjo Aero",
  "Oculus Quest1",
  "Oculus Quest2",
  "Oculus Quest3",
  "Meta Quest Pro",
  "Pico neo3",
  "PICO4",
  "PICO4Pro",
  "创维Pancake 1C",
  "YVR2",
  "HTC VIVE Focus3",
  "PSVR1",
  "PSVR2",
];
//滑动的选择列表

let equalListIndex = [0, 0, 0];
//比较的列表对应的下标

const originData = JSON.parse(JSON.stringify(deviceData));
//初始数据

let showData = JSON.parse(JSON.stringify(originData));
//展示的数据(需要进行深拷贝)

const renderList = () => {
  let str = "<ul>";
  slideList.forEach((item, index) => {
    str += `<li data-index='${index}'>${item}</li>`;
  });
  str += "</ul>";

  $.each($(".slideList"), function (indexInArray, item) {
    $(item).html(str);
  });
};
renderList();

$(".button").click(() => {
  $(".dataItem").slideUp();
  $.each($(".equalDataItem .arrow"), (index, item) => {
    console.log(index);
    if ((index + 1) % 2 === 0) {
      $(item).hide();
    } else {
      $(item).show();
    }
  });
});
/*
按照顺序去修改dom就行
*/
const renderInfo = () => {
  const totalStr = ` 
<div class="equalDataItem">
  <div class="header">
    <div class="title">
      <h2>屏幕参数</h2>
          <svg t="1687683520462" class="arrow" style="display:none"  viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="2356" >
                <path
                d="M517.688889 796.444444c-45.511111 0-85.333333-17.066667-119.466667-51.2L73.955556 381.155556c-22.755556-22.755556-17.066667-56.888889 5.688888-79.644445 22.755556-22.755556 56.888889-17.066667 79.644445 5.688889l329.955555 364.088889c5.688889 5.688889 17.066667 11.377778 28.444445 11.377778s22.755556-5.688889 34.133333-17.066667l312.888889-364.088889c22.755556-22.755556 56.888889-28.444444 79.644445-5.688889 22.755556 22.755556 28.444444 56.888889 5.688888 79.644445L637.155556 739.555556c-28.444444 39.822222-68.266667 56.888889-119.466667 56.888888 5.688889 0 0 0 0 0z"
                fill="#222222" p-id="2357"></path>
          </svg>
          <svg t="1687683672619" class="arrow"  viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="2496" width="200" height="200">
                <path
                d="M910.222222 796.444444c-17.066667 0-34.133333-5.688889-45.511111-17.066666L551.822222 409.6c-11.377778-5.688889-17.066667-11.377778-34.133333-11.377778-5.688889 0-22.755556 5.688889-28.444445 11.377778l-329.955555 364.088889c-22.755556 22.755556-56.888889 22.755556-79.644445 5.688889-22.755556-22.755556-22.755556-56.888889-5.688888-79.644445l329.955555-364.088889c28.444444-34.133333 73.955556-51.2 119.466667-51.2s85.333333 22.755556 119.466666 56.888889l312.888889 364.088889c22.755556 22.755556 17.066667 56.888889-5.688889 79.644445-11.377778 5.688889-28.444444 11.377778-39.822222 11.377777z"
                fill="#2c2c2c" p-id="2497"></path>
          </svg>

    </div>
  </div>
  <div class="dataItem">
    <div class="row dataInfo">
        <div class="col-12 col-sm-4 col-lg-3">屏幕类型</div>
        <div class="col-6 col-sm-4 col-lg-3">${
          deviceData[equalListIndex[0]].screenType
        }</div>
        <div class="col-6 col-sm-4 col-lg-3">${
          deviceData[equalListIndex[1]].screenType
        }</div>
        <div class="col-6 col-sm-5 col-lg-3 last">${
          deviceData[equalListIndex[2]].screenType
        }</div>
    </div>
    <div class="row dataInfo">
        <div class="col-12 col-sm-4 col-lg-3">单眼分辨率</div>
        <div class="col-6 col-sm-4 col-lg-3">${
          deviceData[equalListIndex[0]].resolution
        }</div>
        <div class="col-6 col-sm-4 col-lg-3">${
          deviceData[equalListIndex[1]].resolution
        }</div>
        <div class="col-6 col-sm-5 col-lg-3 last">${
          deviceData[equalListIndex[2]].resolution
        }</div>
     
    </div>
    <div class="row dataInfo">
        <div class="col-12 col-sm-4 col-lg-3">刷新率</div>
        <div class="col-6 col-sm-4 col-lg-3">${
          deviceData[equalListIndex[0]].freq
        }</div>
        <div class="col-6 col-sm-4 col-lg-3">${
          deviceData[equalListIndex[1]].freq
        }</div>
        <div class="col-6 col-sm-5 col-lg-3 last">${
          deviceData[equalListIndex[2]].freq
        }</div>
    </div>
  </div>

<div class="header">
    <div class="title">
        <h2>VR观感参数、透镜</h2>
        <svg t="1687683520462" class="arrow"style="display:none"  viewBox="0 0 1024 1024" version="1.1"
        xmlns="http://www.w3.org/2000/svg" p-id="2356" >
        <path
            d="M517.688889 796.444444c-45.511111 0-85.333333-17.066667-119.466667-51.2L73.955556 381.155556c-22.755556-22.755556-17.066667-56.888889 5.688888-79.644445 22.755556-22.755556 56.888889-17.066667 79.644445 5.688889l329.955555 364.088889c5.688889 5.688889 17.066667 11.377778 28.444445 11.377778s22.755556-5.688889 34.133333-17.066667l312.888889-364.088889c22.755556-22.755556 56.888889-28.444444 79.644445-5.688889 22.755556 22.755556 28.444444 56.888889 5.688888 79.644445L637.155556 739.555556c-28.444444 39.822222-68.266667 56.888889-119.466667 56.888888 5.688889 0 0 0 0 0z"
            fill="#222222" p-id="2357"></path>
    </svg>
        <svg t="1687683672619" class="arrow"    viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="2496" width="200" height="200">
            <path
                d="M910.222222 796.444444c-17.066667 0-34.133333-5.688889-45.511111-17.066666L551.822222 409.6c-11.377778-5.688889-17.066667-11.377778-34.133333-11.377778-5.688889 0-22.755556 5.688889-28.444445 11.377778l-329.955555 364.088889c-22.755556 22.755556-56.888889 22.755556-79.644445 5.688889-22.755556-22.755556-22.755556-56.888889-5.688888-79.644445l329.955555-364.088889c28.444444-34.133333 73.955556-51.2 119.466667-51.2s85.333333 22.755556 119.466666 56.888889l312.888889 364.088889c22.755556 22.755556 17.066667 56.888889-5.688889 79.644445-11.377778 5.688889-28.444444 11.377778-39.822222 11.377777z"
                fill="#2c2c2c" p-id="2497"></path>
        </svg>
   
    </div>
</div>
<div class="dataItem">

   <div class="row dataInfo">
        <div class="col-12 col-sm-4 col-lg-3">视场角</div>
        <div class="col-6 col-sm-4 col-lg-3">${
          deviceData[equalListIndex[0]].fov
        }</div>
        <div class="col-6 col-sm-4 col-lg-3">${
          deviceData[equalListIndex[1]].fov
        }</div>
        <div class="col-6 col-sm-5 col-lg-3 last">${
          deviceData[equalListIndex[2]].fov
        }</div>
     
   </div>



   <div class="row dataInfo">
       <div class="col-12 col-sm-4 col-lg-3">透镜类型</div>
       <div class="col-6 col-sm-4 col-lg-3">${
         deviceData[equalListIndex[0]].lensType
       }</div>
       <div class="col-6 col-sm-4 col-lg-3">${
         deviceData[equalListIndex[1]].lensType
       }</div>
       <div class="col-6 col-sm-5 col-lg-3 last">${
         deviceData[equalListIndex[2]].lensType
       }</div>


   </div> 
    

   <div class="row dataInfo">
       <div class="col-12 col-sm-4 col-lg-3">PPD</div>
       <div class="col-6 col-sm-4 col-lg-3">${
         deviceData[equalListIndex[0]].ppd
       }</div>
       <div class="col-6 col-sm-4 col-lg-3">${
         deviceData[equalListIndex[1]].ppd
       }</div>
       <div class="col-6 col-sm-5 col-lg-3 last">${
         deviceData[equalListIndex[2]].ppd
       }</div>

 
   </div>
</div>
<div class="header">
    <div class="title">
        <h2>头显属性、类型、IPD</h2>
        <svg t="1687683520462" class="arrow"style="display:none"  viewBox="0 0 1024 1024" version="1.1"
        xmlns="http://www.w3.org/2000/svg" p-id="2356" >
        <path
            d="M517.688889 796.444444c-45.511111 0-85.333333-17.066667-119.466667-51.2L73.955556 381.155556c-22.755556-22.755556-17.066667-56.888889 5.688888-79.644445 22.755556-22.755556 56.888889-17.066667 79.644445 5.688889l329.955555 364.088889c5.688889 5.688889 17.066667 11.377778 28.444445 11.377778s22.755556-5.688889 34.133333-17.066667l312.888889-364.088889c22.755556-22.755556 56.888889-28.444444 79.644445-5.688889 22.755556 22.755556 28.444444 56.888889 5.688888 79.644445L637.155556 739.555556c-28.444444 39.822222-68.266667 56.888889-119.466667 56.888888 5.688889 0 0 0 0 0z"
            fill="#222222" p-id="2357"></path>
    </svg>
        <svg t="1687683672619" class="arrow"    viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="2496" width="200" height="200">
            <path
                d="M910.222222 796.444444c-17.066667 0-34.133333-5.688889-45.511111-17.066666L551.822222 409.6c-11.377778-5.688889-17.066667-11.377778-34.133333-11.377778-5.688889 0-22.755556 5.688889-28.444445 11.377778l-329.955555 364.088889c-22.755556 22.755556-56.888889 22.755556-79.644445 5.688889-22.755556-22.755556-22.755556-56.888889-5.688888-79.644445l329.955555-364.088889c28.444444-34.133333 73.955556-51.2 119.466667-51.2s85.333333 22.755556 119.466666 56.888889l312.888889 364.088889c22.755556 22.755556 17.066667 56.888889-5.688889 79.644445-11.377778 5.688889-28.444444 11.377778-39.822222 11.377777z"
                fill="#2c2c2c" p-id="2497"></path>
        </svg>
   
    </div>
</div>
<div class="dataItem">

   <div class="row dataInfo">
        <div class="col-12 col-sm-4 col-lg-3">追踪系统</div>
        <div class="col-6 col-sm-4 col-lg-3">${
          deviceData[equalListIndex[0]].trackSys
        }</div>
        <div class="col-6 col-sm-4 col-lg-3">${
          deviceData[equalListIndex[1]].trackSys
        }</div>
        <div class="col-6 col-sm-5 col-lg-3 last">${
          deviceData[equalListIndex[2]].trackSys
        }</div>
     
   </div>



   <div class="row dataInfo">
       <div class="col-12 col-sm-4 col-lg-3">瞳距范围</div>
       <div class="col-6 col-sm-4 col-lg-3">${
         deviceData[equalListIndex[0]].ipd
       }</div>
       <div class="col-6 col-sm-4 col-lg-3">${
         deviceData[equalListIndex[1]].ipd
       }</div>
       <div class="col-6 col-sm-5 col-lg-3 last">${
         deviceData[equalListIndex[2]].ipd
       }</div>


   </div> 
    

   <div class="row dataInfo">
       <div class="col-12 col-sm-4 col-lg-3">类型</div>
       <div class="col-6 col-sm-4 col-lg-3">${
         deviceData[equalListIndex[0]].type
       }</div>
       <div class="col-6 col-sm-4 col-lg-3">${
         deviceData[equalListIndex[1]].type
       }</div>
       <div class="col-6 col-sm-5 col-lg-3 last">${
         deviceData[equalListIndex[2]].type
       }</div>

 
   </div>


  <div class="row dataInfo">
       <div class="col-12 col-sm-4 col-lg-3">发布时间</div>
       <div class="col-6 col-sm-4 col-lg-3">${
         deviceData[equalListIndex[0]].time
       }</div>
       <div class="col-6 col-sm-4 col-lg-3">${
         deviceData[equalListIndex[1]].time
       }</div>
       <div class="col-6 col-sm-5 col-lg-3 last">${
         deviceData[equalListIndex[2]].time
       }</div>


  </div>
</div>



<div class="header">
    <div class="title">
        <h2>重量、价格</h2>
        <svg t="1687683520462" class="arrow"style="display:none"  viewBox="0 0 1024 1024" version="1.1"
        xmlns="http://www.w3.org/2000/svg" p-id="2356" >
        <path
            d="M517.688889 796.444444c-45.511111 0-85.333333-17.066667-119.466667-51.2L73.955556 381.155556c-22.755556-22.755556-17.066667-56.888889 5.688888-79.644445 22.755556-22.755556 56.888889-17.066667 79.644445 5.688889l329.955555 364.088889c5.688889 5.688889 17.066667 11.377778 28.444445 11.377778s22.755556-5.688889 34.133333-17.066667l312.888889-364.088889c22.755556-22.755556 56.888889-28.444444 79.644445-5.688889 22.755556 22.755556 28.444444 56.888889 5.688888 79.644445L637.155556 739.555556c-28.444444 39.822222-68.266667 56.888889-119.466667 56.888888 5.688889 0 0 0 0 0z"
            fill="#222222" p-id="2357"></path>
    </svg>
        <svg t="1687683672619" class="arrow"    viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="2496" width="200" height="200">
            <path
                d="M910.222222 796.444444c-17.066667 0-34.133333-5.688889-45.511111-17.066666L551.822222 409.6c-11.377778-5.688889-17.066667-11.377778-34.133333-11.377778-5.688889 0-22.755556 5.688889-28.444445 11.377778l-329.955555 364.088889c-22.755556 22.755556-56.888889 22.755556-79.644445 5.688889-22.755556-22.755556-22.755556-56.888889-5.688888-79.644445l329.955555-364.088889c28.444444-34.133333 73.955556-51.2 119.466667-51.2s85.333333 22.755556 119.466666 56.888889l312.888889 364.088889c22.755556 22.755556 17.066667 56.888889-5.688889 79.644445-11.377778 5.688889-28.444444 11.377778-39.822222 11.377777z"
                fill="#2c2c2c" p-id="2497"></path>
        </svg>
   
    </div>
</div>
<div class="dataItem">

   <div class="row dataInfo">
        <div class="col-12 col-sm-4 col-lg-3">重量</div>
        <div class="col-6 col-sm-4 col-lg-3">${
          deviceData[equalListIndex[0]].weight
        }</div>
        <div class="col-6 col-sm-4 col-lg-3">${
          deviceData[equalListIndex[1]].weight
        }</div>
        <div class="col-6 col-sm-5 col-lg-3 last">${
          deviceData[equalListIndex[2]].weight
        }</div>
     
   </div>



   <div class="row dataInfo">
       <div class="col-12 col-sm-4 col-lg-3">价格</div>
       <div class="col-6 col-sm-4 col-lg-3">${
         deviceData[equalListIndex[0]].price
       }</div>
       <div class="col-6 col-sm-4 col-lg-3">${
         deviceData[equalListIndex[1]].price
       }</div>
       <div class="col-6 col-sm-5 col-lg-3 last">${
         deviceData[equalListIndex[2]].price
       }</div>


   </div>
</div>
<div class="header">
    <div class="title">
        <h2>其他参数</h2>
        <svg t="1687683520462" class="arrow"style="display:none"  viewBox="0 0 1024 1024" version="1.1"
        xmlns="http://www.w3.org/2000/svg" p-id="2356" >
        <path
            d="M517.688889 796.444444c-45.511111 0-85.333333-17.066667-119.466667-51.2L73.955556 381.155556c-22.755556-22.755556-17.066667-56.888889 5.688888-79.644445 22.755556-22.755556 56.888889-17.066667 79.644445 5.688889l329.955555 364.088889c5.688889 5.688889 17.066667 11.377778 28.444445 11.377778s22.755556-5.688889 34.133333-17.066667l312.888889-364.088889c22.755556-22.755556 56.888889-28.444444 79.644445-5.688889 22.755556 22.755556 28.444444 56.888889 5.688888 79.644445L637.155556 739.555556c-28.444444 39.822222-68.266667 56.888889-119.466667 56.888888 5.688889 0 0 0 0 0z"
            fill="#222222" p-id="2357"></path>
    </svg>
        <svg t="1687683672619" class="arrow"    viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="2496" width="200" height="200">
            <path
                d="M910.222222 796.444444c-17.066667 0-34.133333-5.688889-45.511111-17.066666L551.822222 409.6c-11.377778-5.688889-17.066667-11.377778-34.133333-11.377778-5.688889 0-22.755556 5.688889-28.444445 11.377778l-329.955555 364.088889c-22.755556 22.755556-56.888889 22.755556-79.644445 5.688889-22.755556-22.755556-22.755556-56.888889-5.688888-79.644445l329.955555-364.088889c28.444444-34.133333 73.955556-51.2 119.466667-51.2s85.333333 22.755556 119.466666 56.888889l312.888889 364.088889c22.755556 22.755556 17.066667 56.888889-5.688889 79.644445-11.377778 5.688889-28.444444 11.377778-39.822222 11.377777z"
                fill="#2c2c2c" p-id="2497"></path>
        </svg>
   
    </div>
</div>
<div class="dataItem">

   <div class="row dataInfo">
        <div class="col-12 col-sm-4 col-lg-3">SOC</div>
        <div class="col-6 col-sm-4 col-lg-3">${
          deviceData[equalListIndex[0]].soc
        }</div>
        <div class="col-6 col-sm-4 col-lg-3">${
          deviceData[equalListIndex[1]].soc
        }</div>
        <div class="col-6 col-sm-5 col-lg-3 last">${
          deviceData[equalListIndex[2]].soc
        }</div>
     
   </div>



   <div class="row dataInfo">
       <div class="col-12 col-sm-4 col-lg-3">灯塔生态</div>
       <div class="col-6 col-sm-4 col-lg-3">${
         deviceData[equalListIndex[0]].lh
       }</div>
       <div class="col-6 col-sm-4 col-lg-3">${
         deviceData[equalListIndex[1]].lh
       }</div>
       <div class="col-6 col-sm-5 col-lg-3 last">${
         deviceData[equalListIndex[2]].lh
       }</div>


   </div> 
    

</div> 
     



 
</div>`;
  $(".equalData").html(totalStr);
};

const reListenDom = () => {
  $(".equalDataItem .header .title").unbind();
  $.each($(".equalDataItem .header .title"), (index, item) => {
    $(item).click(() => {
      $($(".dataItem")[index]).slideToggle();
      $($(".title .arrow")[index === 0 ? index : index * 2]).toggle();
      $($(".title .arrow")[index === 0 ? index + 1 : index * 2 + 1]).toggle();
    });
  });
};

$(() => {
  renderInfo();
  reListenDom();
  $.each($(".click"), function (index, item) {
    $(item).click(() => {
      $($(".slideList")[index]).slideToggle();
      $($(".click .arrow")[index === 0 ? index : index * 2]).toggle();
      $($(".click .arrow")[index === 0 ? index + 1 : index * 2 + 1]).toggle();
    });
  });

  $.each($(".click .slideList ul li"), function (index, item) {
    $(item).click(() => {
      const getIndex = Number($(item).attr("data-index"));
      const fatherIndex = Number($($(item).parents()[2]).attr("data-index"));
      equalListIndex[fatherIndex] = getIndex;
      $($($(item).parents()[2]).find("span")).text(slideList[getIndex]);
      $($($($($(item).parents()))[3]).find("img")).attr(
        "src",
        deviceData[getIndex].imgUrl
      );
      $($(item).parents()[1]).slideDown();
      console.log(equalListIndex);
      renderInfo();
      reListenDom();
    });
  });
});
