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
    'Sec-Gallery/final-false.gif'] ;

let gIndex = 0 ;

function frontANDback(Id){
    if(Id === 'peB'){
        (gIndex > 0) ? gIndex -= 1 : gIndex = G.length - 1 ;
    } else {
        (gIndex < G.length - 1 ) ? gIndex += 1 : gIndex = 0 ;
    } ;
    var GMain = document.getElementById("g-main").style ;
    GMain.setProperty('background-image', `url(${G[gIndex]})`) ;
}

function imgRandom(){
    gIndex = Math.floor(Math.random() * G.length);
    let GMain = document.getElementById("g-main").style ;
    GMain.setProperty('background-image', `url(${G[gIndex]})`) ;
}