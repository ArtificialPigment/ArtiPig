Noty.overrideDefaults({
  timeout: 5000,
  layout: 'topRight',
  theme: 'relax',
  type: 'info',
})

function footnote1(){
    new Noty({
      theme: 'semanticui',
      type: 'alert',
      text: '<div style="text-align:center;"><img src="pic/hdl-1.png" alt="游骑图"><br><span style="font-size: 1.7vh; font-weight: bold; opacity: .5;">北宋｜佚名｜游骑图｜现藏故宫博物馆</span></div>',
      closeWith: ['click', 'button'],
      timeout: false,
    }).show();
  }

function footnote2(){
    new Noty({
        text: '语出杨牧《味吉尔》',
    }).show();
  }

  function footnoteHJes1(){
    new Noty({
        text: 'De "Virgil" de Yang Mu',
    }).show();
  }

  // 以上为 hdl - [回家.md] 所调用。

  function footnoteHD1(){
    new Noty({
        text: '成都地名，位于双流区，金桥客运站附近',
    }).show();
  }

  function footnoteHD2(){
    new Noty({
        text: '成都地名，位于侯武区，3号线、5号线在此换乘',
    }).show();
  }

  function footnoteHD3(){
    new Noty({
        text: '出自迪迦奥特曼中文版片尾曲《永远的奥特曼》<br> 🎶看那蔚蓝色的星球，是我们永远的守候🎶',
    }).show();
  }

  function footnoteHD4(){
    new Noty({
        text: '出自大衛鮑伊《Space Oddity》<br> 🎶Planet Earth is blue, and there’s nothing I can do🎶',
    }).show();
  }

    // 以上为 yx - [红灯.md] 所调用。

  function secretToSec(){
    new Noty({
        text: '我爱你',
    }).show();
  }

    // 以上为 yx - [狐狸.md] 所调用。

    function footnoteFSS(){
      new Noty({
        theme: 'semanticui',
        type: 'alert',
        text: '<div style="text-align:center;"><img style="max-height:50vh;" src="pic/RinkoKawauchi.png" alt="RinkoKawauchi"><br><span style="font-size: 1.7vh; font-weight: bold; opacity: .5;"> 川が私を受け入れてくれた | Rinko Kawauchi | 2016 </span></div>',
        closeWith: ['click', 'button'],
        timeout: false,
      }).show();
    }