
import navbar from "./navbar.js"
let nav=document.getElementById("navbar");
nav.innerHTML=navbar();
import footer from "./footer.js"
let foot=document.getElementById("footer");
foot.innerHTML=footer();
   var addcart=JSON.parse(localStorage.getItem("cart"))||[];
   
appendData(addcart);
  function appendData(array){
      var target=document.getElementById("main")
     target.innerHTML=""
     // console.log("a",array)
      // let arr=JSON.parse(array)
      // console.log("b",arr)
  array.forEach( (e,index)=>{
      console.log(e,index)
  let div = document.createElement("div");
  // div.addEventListener("click",function(){
  //     detailprod(e)
  // })
  div.id="card1";
let avatar = document.createElement("img");
    avatar.src = e.image;
    let div1 = document.createElement("div");
     div1.id="acimg"
  let name = document.createElement("p");

  name.innerText = e.title ;
  let div2 = document.createElement("div");
  div2.id="actit"
  // ${el.last_name}`
  let div3 = document.createElement("div");
  let int = document.createElement("p");
   int.innerText = e.price
   let div4 = document.createElement("div");
    div4.id="del"
  let bttn= document.createElement("button");
  bttn.innerText="delete"
  bttn.addEventListener("click",function(){
      deleteitem(index);
  })
  div1.appendChild(avatar);
  div2.appendChild(name);
  div3.appendChild(int);
  div4.appendChild(bttn);
  div.append(div1,div2,div3,div4)
    target.appendChild(div);
  

  })
}
function deleteitem(index){
  addcart.splice(index,1);
  localStorage.setItem("cart",JSON.stringify(addcart))
  appendData(addcart);
}
var total=addcart.reduce(function(acc,cv){
  return acc+Number(cv.price)
},0)

let tot=document.getElementById("tot");
tot.innerHTML=` Sub Total=Rs ${total}`;
document.getElementById("po").addEventListener("click",function(){
  window.location.href="signin.html"
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