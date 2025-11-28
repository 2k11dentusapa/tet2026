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
