function ScriptJava() {
const timeCurrent= new Date();
const timeTet= new Date("2026-02-17 00:00:00");
const timeRemaining= timeTet - timeCurrent;
const ngay= Math.floor(timeRemaining / (1000*60*60*24));
const gio= Math.floor(timeRemaining / (1000*60*60)%24);
const phut= Math.floor(timeRemaining / (1000*60)%60);
const giay= Math.floor(timeRemaining / (1000)%60);
document.getElementById("JavaScript").innerText=`${ngay} ngày ${gio} giờ ${phut} phút ${giay} giây`;
}
setInterval(ScriptJava, 1000);
