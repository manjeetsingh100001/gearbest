import navbar from "./navbar.js"
let nav=document.getElementById("navbar");
nav.innerHTML=navbar();
import footer from "./footer.js"
let foot=document.getElementById("footer");
foot.innerHTML=footer();
let regbbtn=document.getElementById("regbttn");
regbbtn.addEventListener("click",()=>{
  Register()
})
let signbttn=document.getElementById("signbttn");
signbttn.addEventListener("click",()=>{
  signin()
})

let Register=async ()=>{
  try{
      let register_data={
          name:document.getElementById("name").value,
          email:document.getElementById("email").value,
          password:document.getElementById("pass").value,
          username:document.getElementById("user").value,
          mobile:document.getElementById("mob").value,
          description:"pagal"
      }
      register_data=JSON.stringify(register_data);
      console.log(register_data);
    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/register",{
        method:"POST",
        body:register_data,
        headers:{
          "Content-Type":"application/json"
        },
        
    });
       let data=await res.json();
       console.log(data)
  }
  catch(error){
      console.log("error",error)
  }
}



  let signin=async ()=>{
  try{
      let signin_data={
         
         username:document.getElementById("suser").value,
         password:document.getElementById("spass").value,
          }
      let sdata=JSON.stringify(signin_data);
      console.log(signin_data);
    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
        method:"POST",
        body:sdata,
        headers:{
          "Content-Type":"application/json"
        },
        
    });
       let data=await res.json();
       getuser(signin_data.username,data.token)
      
  }
  catch(error){
      console.log("error",error)
  }
}
let getuser=async (username,token)=>{
  try{
      let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
       
          headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${token}`,
        },
        
    });
       let data=await res.json();
       console.log("return",data,data.name)
       localStorage.setItem("userName",data.name)
       alert(`hi ${data.name} Your Sign Success`)
       window.location.href="checkout.html"
  }catch(error){
      console.log(error);
  }
};