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
    desc: "&nbsp;".repeat(1),
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
    price: "原价$199 二手约1300",
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
    price: "原价3999，二手约2700",
    type: "VR一体机",
    time: "2023-04",
    lh: "—",
    soc: "高通XR2",
  },
  {
    title: "PICO4Pro",
    desc: "最佳眼追脸追入门".repeat(1),
    imgUrl: "img/device/p4p.png",
    resolution: "2160x2160",
    screenType: "RGB排列LCD",
    lensType: "Pancake",
    freq: "72/90HZ",
    fov: "约105°",
    ppd: "20.6",
    ipd: "62-72MM",
    trackSys: "pico内向外定位",
    weight: "586g",
    price: "原价2499，二手约1600",
    type: "VR一体机",
    time: "2022-09",
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
    imgUrl: "img/device/psvr1.png",
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

const originData = new Array(1).fill(deviceData).flat();

//初始数据

let showData = JSON.parse(JSON.stringify(originData));
//展示的数据(需要进行深拷贝)

let activeIndex = 0;

//排序按钮
const sortBtn = document.querySelectorAll(".listItem");

//清空类名
const clearClass = () => {
  sortBtn.forEach((item) => {
    item.classList.remove("active");
  });
};

$.each($(".listItem"), (index, item) => {
  $(item).click(() => {
    clearClass();
    $(item).addClass("active");
    showData = JSON.parse(JSON.stringify(originData));
    switch (index) {
      case 0:
        showData = JSON.parse(JSON.stringify(originData));
        renderData();
        break;
      case 1:
        showData.sort((a, b) => {
          const aTime = new Date(a.time).getTime();
          const bTime = new Date(b.time).getTime();
          return aTime - bTime;
        });
        renderData();
        break;
      case 2:
        showData.sort((a, b) => a.title.localeCompare(b.title));
        renderData();
        break;
      case 3:
        showData = originData.filter((item) => item.type === "PCVR");
        renderData();
        break;
      case 4:
        showData = originData.filter((item) => item.type === "VR一体机");
        renderData();
        break;
    }
  });
});

const reListenDoms = () => {
  const moreInfo = $(".moreInfo");
  $.each($(".more"), (index, item) => {
    $(item).unbind();
    $(item).click(() => {
      $(moreInfo[index]).slideToggle("slow");
      const arrow = $(".more .arrow");
      console.log(arrow[index], arrow[index + 1]);
      $(arrow[index === 0 ? index : index * 2]).toggle();
      $(arrow[index === 0 ? index + 1 : index * 2 + 1]).toggle();
    });
  });
};

const renderData = () => {
  const vrData = showData.map(
    (item) => `
    <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-3 dataItem">
        <div class="imgItem">
            <img src="${item.imgUrl}" alt="">
        </div>

        <div class="textItem">
            <p class="title">
            ${item.title}
            </p>
            <p class="desc text-justify">
            ${item.desc}
            </p>
            <div class="more">

                <a href="javascript:void(0)" style="text-decoration: none;" class="liaojie">了解更多</a>
                <svg t="1687683520462" class="arrow" style="display:none" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="2356">
                    <path d="M910.222222 796.444444c-17.066667 0-34.133333-5.688889-45.511111-17.066666L551.822222 409.6c-11.377778-5.688889-17.066667-11.377778-34.133333-11.377778-5.688889 0-22.755556 5.688889-28.444445 11.377778l-329.955555 364.088889c-22.755556 22.755556-56.888889 22.755556-79.644445 5.688889-22.755556-22.755556-22.755556-56.888889-5.688888-79.644445l329.955555-364.088889c28.444444-34.133333 73.955556-51.2 119.466667-51.2s85.333333 22.755556 119.466666 56.888889l312.888889 364.088889c22.755556 22.755556 17.066667 56.888889-5.688889 79.644445-11.377778 5.688889-28.444444 11.377778-39.822222 11.377777z"
                    fill="#2c2c2c" p-id="2497"
                        ></path>
                </svg>
                <svg t="1687683672619" class="arrow"  viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="2496" width="200" height="200">
                    <path
                        d="M517.688889 796.444444c-45.511111 0-85.333333-17.066667-119.466667-51.2L73.955556 381.155556c-22.755556-22.755556-17.066667-56.888889 5.688888-79.644445 22.755556-22.755556 56.888889-17.066667 79.644445 5.688889l329.955555 364.088889c5.688889 5.688889 17.066667 11.377778 28.444445 11.377778s22.755556-5.688889 34.133333-17.066667l312.888889-364.088889c22.755556-22.755556 56.888889-28.444444 79.644445-5.688889 22.755556 22.755556 28.444444 56.888889 5.688888 79.644445L637.155556 739.555556c-28.444444 39.822222-68.266667 56.888889-119.466667 56.888888 5.688889 0 0 0 0 0z"
                        fill="#222222" p-id="2357"></path>
                </svg>
            </div>
            <div class="moreInfo " style="display:none;">
                <div class="moreItem">
                    <span>单眼分辨率</span>
                    <span>${item.resolution}</span>
                </div>
                <div class="moreItem">
                    <span>屏幕类型</span>
                    <span>${item.screenType}</span>
                </div>
                <div class="moreItem">
                    <span>镜片类型</span>
                    <span>${item.lensType}</span>
                </div>

                <div class="moreItem">
                <span>刷新率</span>
                <span>${item.freq}</span>
                </div>

                <div class="moreItem">
                <span>视场角</span>
                <span>${item.fov}</span>
                </div>

                <div class="moreItem">
                <span>PPD</span>
                <span>${item.ppd}</span>
                </div>

                <div class="moreItem">
                <span>追踪系统</span>
                <span>${item.trackSys}</span>
                </div>

                <div class="moreItem">
                <span>瞳距范围</span>
                <span>${item.ipd}</span>
                </div>

                <div class="moreItem">
                <span>重量</span>
                <span>${item.weight}</span>
                </div>

                <div class="moreItem">
                <span>价格</span>
                <span>${item.price}</span>
                </div>

                <div class="moreItem">
                <span>发布时间</span>
                <span>${item.time}</span>
                </div>

                <div class="moreItem">
                <span>类型</span>
                <span>${item.type}</span>
                </div>

                <div class="moreItem">
                <span>灯塔生态</span>
                <span>${item.lh}</span>
                </div>

                <div class="moreItem">
                <span>SOC</span>
                <span>${item.soc}</span>
                </div>
            </div>
        </div>
    </div>`
  );
  $(".dataCnt").html(vrData);
  reListenDoms();
};

renderData();
reListenDoms();
