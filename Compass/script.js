var xx = 1;
var yy = 1;

if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', function(e) {
    var x = Math.round(e.beta);
    var y = Math.round(e.gamma);
    var z = Math.round(e.alpha);
    devOrient(x, y, z);
  });
}

document.onclick = function (e) {
   if (e.clientX < window.innerWidth/2) {
       xx*=-1;
   } else if (e.clientX >= window.innerWidth/2) {
      yy*=-1;
   }
}

function devOrient(x, y, z) {
    
if (Math.abs(x) < 5 && Math.abs(y) < 5) {
    box3.style.backgroundColor = "#0f0";
    box3.style.opacity = "1";
} else {
    box3.style.backgroundColor = "#fff";
    box3.style.opacity = 1-((Math.abs(x)/180)+(Math.abs(y)/90));
}

if (xx === 1 && yy === 1) {
    box.style.transform =
  "rotateX("+ (-x) +"deg) rotateY("+ (y)+"deg) rotateZ("+ (z) +"deg)";
  
document.getElementById("info").innerHTML =
  "     beta: "+ (-x) +"        gamma: "+ (y)+"       alpha: "+ (z);
  
  } else if (xx === -1 && yy === 1) {
    box.style.transform =
  "rotateX("+ (0) +"deg) rotateY("+ (y)+"deg) rotateZ("+ (z) +"deg)";
  
  document.getElementById("info").innerHTML =
  "     beta: "+ (0) +"        gamma: "+ (y)+"       alpha: "+ (z);
  
  } else if (xx === 1 && yy === -1) {
    box.style.transform =
  "rotateX("+ (-x) +"deg) rotateY("+ (0)+"deg) rotateZ("+ (z) +"deg)";
  
  document.getElementById("info").innerHTML =
  "     beta: "+ (-x) +"        gamma: "+ (0)+"       alpha: "+ (z);
  
  } else {
    box.style.transform =
  "rotateX("+ (0) +"deg) rotateY("+ (0)+"deg) rotateZ("+ (z) +"deg)";
  
  document.getElementById("info").innerHTML =
  "     beta: "+ (0) +"        gamma: "+ (0)+"       alpha: "+ (z);
  
  }
}