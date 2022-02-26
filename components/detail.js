import navbar from "./navbar.js"
let nav=document.getElementById("navbar");
nav.innerHTML=navbar();
import footer from "./footer.js"
let foot=document.getElementById("footer");
foot.innerHTML=footer();

var addcart=JSON.parse(localStorage.getItem("cart"))||[];
  var data=JSON.parse(localStorage.getItem("detailprod"));
  var mn=document.getElementById("main");
  appendData(data,mn);


   function appendData(data,target){
     console.log(data)
    
     
  let div = document.createElement("div");
  
  div.id="card";
  let div1 = document.createElement("div");
  div1.id="d1con"
let avatar = document.createElement("img");
    avatar.src = data.image;
  
  let div2 = document.createElement("div");
  div2.id="d2con"
  let tit= document.createElement("h2");

  tit.innerText = data.title ;
  // ${el.last_name}`
  let des = document.createElement("p");
  des.innerText=data.description;
  let div3 = document.createElement("div");
  let int = document.createElement("p");
   int.innerText = `Price:$ ${data.price}`;
   int.id="we"
   div3.id="price"
   div3.appendChild(int)
   div2.append(tit,des,div3);
   div1.appendChild(avatar)
  div.append(div1,div2);
    target.appendChild(div);
  

  // })
}
document.getElementById("bn").addEventListener("click", function(){
localStorage.setItem("buynow",JSON.stringify(data))
  window.location.href="signin.html"
})
document.getElementById("ac").addEventListener("click", function(){
addcart.push(data)
localStorage.setItem("cart",JSON.stringify(addcart))
  window.location.href="addcart.html"
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