// ========== HÀM THỜI GIAN ĐẾM NGƯỢC ========= //
 function getIdsElement(h) {
   return document.getElementById(h)
  }
function ScriptJava() {
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
// ======== HIỆU ỨNG MOUSEOVER VÀ MOUSEOUT CHO 4 THẺ DIV ====== //
document.querySelectorAll("#X").forEach(h =>{
    const dx= h.style;
  h.addEventListener("mouseover", function(){
dx.transform="rotate(3deg) scale(1.04)";
                  dx.filter="brightness(1.01)";
                  dx.transition="transform 0.35s";
                  dx.boxShadow="0 12px 24px rgba(0, 0, 0, 0.32)";
});
h.addEventListener("mouseout", function() {
  dx.transform="rotate(0deg) scale(1.00)"; 
                 dx.filter="brightness(1.00)";
                 dx.boxShadow="0 8px 16px rgba(0, 0, 0, 0.3)";
});
});
// ======== VÔ HIỆU HÓA COPY ======== //
function Disablet(event) {
  event.preventDefault();
}
getIdsElement("noidung1").addEventListener("copy", Disablet);
getIdsElement("noidung2").addEventListener("copy", Disablet);
