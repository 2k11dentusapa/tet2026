function ScriptJava() {
  function getIdsElement(h) {
   return document.getElementById(h)
  }
const timeCurrent= new Date();
const timeTet= new Date("2026-02-17 00:00:00");
const timeRemaining= timeTet - timeCurrent;
const ngay= Math.floor(timeRemaining / (1000*60*60*24));
const gio= Math.floor(timeRemaining / (1000*60*60)%24);
const phut= Math.floor(timeRemaining / (1000*60)%60);
const giay= Math.floor(timeRemaining / (1000)%60);
getIdsElement("Js1").innerText=`${ngay}`;
getIdsElement("Js2").innerText=`${gio}`;
getIdsElement("Js3").innerText=`${phut}`;
getIdsElement("Js4").innerText=`${giay}`;
}
setInterval(ScriptJava, 1000);
// Hiệu ứng JavaScript
document.querySelectorAll("#X").forEach(h =>{
  h.addEventListener("mouseover", function(){
this.style.transform="rotate(3deg) scale(1.04)";
                  this.style.filter="brightness(1.01)";
                  this.style.transition="transform 0.35s";
                  this.style.boxShadow="0 12px 24px rgba(0, 0, 0, 0.32)";
});
h.addEventListener("mouseout", function() {
  this.style.transform="rotate(0deg) scale(1.00)"; 
                 this.style.filter="brightness(1.00)";
                 this.style.boxShadow="0 8px 16px rgba(0, 0, 0, 0.3)";
});
});
