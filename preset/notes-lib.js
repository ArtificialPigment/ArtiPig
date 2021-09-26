Noty.overrideDefaults ({
    timeout: 5000,
    layout: 'topRight',
    theme: 'relax',
    type: 'info',
})

// 以下为 羊须 & yx & Yang'xu 的 Footnotes

const yxFootnotesArrOne = [
    '成都地名，位于双流区，金桥客运站附近',
    '成都地名，位于侯武区，3号线、5号线在此换乘',
    '出自迪迦奥特曼中文版片尾曲《永远的奥特曼》<br> 🎶看那蔚蓝色的星球，是我们永远的守候🎶',
    '出自大衛鮑伊《Space Oddity》<br> 🎶Planet Earth is blue, and there’s nothing I can do🎶', ];

const yxFootnotesArrTwo = [
    '题仿王子瓜“游戏之夜”系列',
    '「踩着时间的底线，也踩着虚无的底线<br>蓝，突然向我们凹过来」<br> —— 臧棣《人在朱家角入门》',];

const yxFootnotesArrThree = [
    '法文，发音为娜娜，女孩儿的通俗说法',
    '语出簌弦《早餐》',
    '仙林大学城内的两片商业区',
    '法文，直译为一口气到头<br>戈达尔 (Jean-Luc Godard) 有同名电影，译为《精疲力竭》', ];

const yxGlobalArrs = [yxFootnotesArrOne, yxFootnotesArrTwo, yxFootnotesArrThree, ];

function footnoteFSS(){
    new Noty({
      theme: 'semanticui',
      type: 'alert',
      text: '<div style="text-align:center;"><img style="max-height:50vh;" src="pic/RinkoKawauchi.png" alt="RinkoKawauchi"><br><span style="font-size: 1.7vh; font-weight: bold; opacity: .5;"> 川が私を受け入れてくれた | Rinko Kawauchi | 2016 </span></div>',
      closeWith: ['click', 'button'],
      timeout: 6000,
    }).show();
  }

// 以下为 哈德良 & hdl & Hadrien 的 Footnotes

const hdlFootnotesArrOne = [
    '语出杨牧《味吉尔》',];

const hdlFootnotesArrTwo = [
    '原诗写于1947年。',
    '原文<strong>cerebrotonic</strong><br>指智力发达、身体瘦弱、善于自制的气质类型。',
    '加图指小加图，罗马共和国元老院议员，奉行斯多葛学派，反对凯撒的帝国化并因此而战死。',
    '据传罗马元老院三分之一议员的妻子都和凯撒私通。',
    '原文<strong>scarlet</strong><br>这种颜色常“罪恶”联系在一起。', ];

const hdlFootnotesArrThree = [
    '原詩寫於1947年。',
    '原文<strong>cerebrotonic</strong><br>指智力發達、身體瘦弱、善於自製的氣質類型。',
    '加圖指小加圖，羅馬共和國元老院議員，奉行斯多葛學派，反對凱撒的帝國化並因此而戰死。',
    '據傳羅馬元老院三分之一議員的妻子都和凱撒私通。',
    '原文<strong>scarlet</strong><br>這種顏色常「罪惡」聯繫在一起。', ];

const hdlGlobalArrs = [hdlFootnotesArrOne, hdlFootnotesArrTwo, hdlFootnotesArrThree, ];

function footnote1(){
    new Noty({
      theme: 'semanticui',
      type: 'alert',
      text: '<div style="text-align:center;"><img src="pic/hdl-1.png" alt="游骑图"><br><span style="font-size: 1.7vh; font-weight: bold; opacity: .5;">北宋｜佚名｜游骑图｜现藏故宫博物馆</span></div>',
      closeWith: ['click', 'button'],
      timeout: 6000,
    }).show();
  }

  function footnoteHJes1(){
    new Noty({
        text: 'De "Virgil" de Yang Mu',
    }).show();
  }

// 以下为 Sec 的作品列表以及翻看功能；

  const G = [
    'https://z3.ax1x.com/2021/09/23/4w0i2q.jpg',
    'Sec-Gallery/绿色系.JPG',
    'Sec-Gallery/蓝色系2.JPG',
    'Sec-Gallery/红色系.JPG',
    'Sec-Gallery/猫猫合体.jpeg',
    'Sec-Gallery/西瓜瓜.jpeg',
    'Sec-Gallery/某少女.jpeg',
    'Sec-Gallery/元元-原图.jpeg',
    'Sec-Gallery/普鲁士蓝.jpeg',
    'Sec-Gallery/Core.JPG',
    'Sec-Gallery/Green Moon.jpeg',
    'Sec-Gallery/Lemon.jpeg',
    'Sec-Gallery/Letter.jpeg',
    'Sec-Gallery/Simon.jpeg',
    'Sec-Gallery/Summer Night.jpeg',
    'Sec-Gallery/final-false.gif', ];

let gIndex = 0 ;

function frontANDback(Id){
  if(Id === 'peB'){ (gIndex > 0) ? gIndex -= 1 : gIndex = G.length - 1 ;}
  else { (gIndex < G.length - 1 ) ? gIndex += 1 : gIndex = 0 ; } ;
  let GMain = document.getElementById("g-main").style ;
  GMain.setProperty('background-image', `url(${G[gIndex]})`) ;
};

function imgRandom(){
  gIndex = Math.floor(Math.random() * G.length);
  let GMain = document.getElementById("g-main").style ;
  GMain.setProperty('background-image', `url(${G[gIndex]})`) ;
};