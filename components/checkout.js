import navbar from "./navbar.js"
let nav=document.getElementById("navbar");
nav.innerHTML=navbar();
import footer from "./footer.js"
let foot=document.getElementById("footer");
foot.innerHTML=footer();
document.getElementById("sub").addEventListener("click", function(){
  
  window.location.href="orderplaced.html"
})
document.getElementById("navbrand").addEventListener("click", ()=>{
    window.location.href="index.html"
  })
  document.getElementById("logo").addEventListener("click", ()=>{
    window.location.href="index.html"
  })
  document.getElementById("sign").addEventListener("click", ()=>{
    window.location.href="signin.html"
  })
  document.getElementById("icart").addEventListener("click", ()=>{
    window.location.href="addcart.html"
  })