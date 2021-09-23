const G = [
    'biggerThanUs/绿色系.JPG',
    'biggerThanUs/蓝色系2.JPG',
    'biggerThanUs/红色系.JPG',
    'biggerThanUs/猫猫合体.jpeg',
    'biggerThanUs/西瓜瓜.jpeg',
    'biggerThanUs/某少女.jpeg'] ;

var gIndex = 0 ;

function frontANDback(Id){
    if(Id === 'peB'){
        (gIndex > 0) ? gIndex -= 1 : gIndex = G.length - 1 ;
    } else {
        (gIndex < G.length - 1 ) ? gIndex += 1 : gIndex = 0 ;
    } ;
    let GMain = document.getElementById("g-main").style ;
    GMain.setProperty('background-image', `url(${G[gIndex]})`) ;
}