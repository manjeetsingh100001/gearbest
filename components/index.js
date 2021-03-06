import navbar from "./navbar.js"
let nav=document.getElementById("navbar");
nav.innerHTML=navbar();
import footer from "./footer.js"
let foot=document.getElementById("footer");
foot.innerHTML=footer();

var array=[

{
  "id": 24,
  "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
  "price": 599,
  "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
  "category": "electronics",
  "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
  
},
{
  "id": 25,
  "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
  "price": 999.99,
  "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
  "category": "electronics",
  "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
  
},
{
  "id": 21,
  "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
  "price": 109,
  "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
  "category": "electronics",
  "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
  
},
{
  "id": 22,
  "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
  "price": 109,
  "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
  "category": "electronics",
  "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
 
},
{
  "id": 23,
  "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
  "price": 114,
  "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
  "category": "electronics",
  "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
  
},
{
      "id": 1,
      "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      "price": 64,
      "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
},

{
  "id": 2,
  "title": "ASUS LAPTOP ",
  "price": 25000,
  "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  "category": "electronics",
  "image": "https://gloimg.gbtcdn.com/soa/gb/desc/6878032086314446848/16425/goods_img-v1/2101876433d1.jpg"
},{
  "id": 3,
  "title": "OXYMETER",
  "price": 64,
  "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  "category": "electronics",
  "image": "https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16388/goods_img-v1/8e4e88499c58.jpg"
},
{
  "id": 4,
  "title": "HUAWEI AIRPODS ",
  "price": 64,
  "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  "category": "electronics",
  "image": "https://gloimg.gbtcdn.com/soa/gb/store/6878399324569661440/16419/goods_img-v5/2bade2f7be7f.jpg"
},{
  "id": 5,
  "title": "TRONXY 3D PRINTER ",
  "price": 64,
  "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  "category": "electronics",
  "image": "https://gloimg.gbtcdn.com/soa/gb/item/6882994787503501312/16426/goods_img-v1/ccfd4012eac4.jpg"
},
{
  "id": 6,
  "title": "3D PRINTER ",
  "price": 64,
  "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  "category": "electronics",
  "image": "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16421/goods_img-v4/a0da751fd8f8.jpg"
},
{
  "id": 7,
  "title": "SMART MOPPING ROBOT",
  "price": 64,
  "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  "category": "electronics",
  "image": "https://gloimg.gbtcdn.com/soa/gb/item/6880475736935952384/16420/goods_img-v1/59bf6346c600.jpg"
},{
  "id": 8,
  "title": "XIOMI AIRDOTS ",
  "price": 64,
  "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  "category": "electronics",
  "image": "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16421/goods_img-v4/a0da751fd8f8.jpg"
},
{
  "id": 9,
  "title": "XIAOMI AIR PUMP ",
  "price": 64,
  "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  "category": "electronics",
  "image": "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16421/goods_img-v3/9077ff9db427.jpg"
},{
  "id": 10,
  "title": "SAMEBIKE 350W ELECTRIC BIKE ",
  "price": 64,
  "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  "category": "electronics",
  "image": "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16433/goods_img-v1/62226933ac9c.jpg"
},{
  "id": 11,
  "title": "XIAOMI ROUTER 3000",
  "price": 64,
  "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  "category": "electronics",
  "image": "https://gloimg.gbtcdn.com/soa/gb/item/6878400698325856256/16415/goods_img-v1/bd06f0e5891e.jpg"
},{
  "id": 12,
  "title": "REALME X7 PRO 8GB ",
  "price": 64,
  "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  "category": "electronics",
  "image": "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16089/goods_img-v2/e2e0bae812a7.jpg"
},{
  "id": 13,
  "title": "YOO BOOK LAPTOP ",
  "price": 64,
  "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  "category": "electronics",
  "image": "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16433/goods_img-v1/78f0e9b9ecce.jpg"
},{
  "id": 14,
  "title": "XIOAMI 360 CAMERA ",
  "price": 64,
  "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  "category": "electronics",
  "image": "https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16430/goods_img-v1/9c81c0dda57d.jpg"
},{
  "id": 15,
  "title": "USB STRONG ",
  "price": 64,
  "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  "category": "electronics",
  "image": "https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16424/goods_img-v4/9cbfc105f812.jpg"
},{
  "id": 16,
  "title": "DRONE QUADROPTER",
  "price": 64,
  "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  "category": "electronics",
  "image": "https://gloimg.gbtcdn.com/soa/gb/item/6878025592978206720/16414/goods_img-v3/66f09d0cac15.jpg"
},{
  "id": 17,
  "title": "MI NOTE 10 GLOBAL VEERSION",
  "price": 64,
  "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  "category": "electronics",
  "image": "https://gloimg.gbtcdn.com/soa/gb/store/6507287161137004544/16418/goods_img-v3/29e552833daa.jpg"
},{
  "id": 18,
  "title": " USB 3.0 ",
  "price": 64,
  "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  "category": "electronics",
  "image": "https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16414/goods_img-v1/b53d913f4d24.jpg"
},{
  "id": 19,
  "title": "3d printer",
  "price": 64,
  "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  "category": "electronics",
  "image": "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16050/goods_img-v3/6f8593ec53ba.jpg"
},{
  "id": 20,
  "title": "mix4 mobile ",
  "price": 64,
  "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  "category": "electronics",
  "image": "https://gloimg.gbtcdn.com/soa/gb/store/6507287161137004544/16417/goods_img-v7/509decfbf454.jpg"
}

]

appendData(array);
  function appendData(array){
      console.log("a",array)
      // let arr=JSON.parse(array)
      // console.log("b",arr)
  array.forEach( (e)=>{
      var target=document.getElementById("container")
  let div = document.createElement("div");
  div.addEventListener("click",function(){
      detailprod(e)
  })
  div.id="card";
let avatar = document.createElement("img");
    avatar.src = e.image;
 avatar.id="prod"
  let name = document.createElement("p");
  let div2 = document.createElement("div");
  div2.innerText = e.title ;
  // ${el.last_name}`
    // div2.appendChild(name)
     div2.id="div2id"
  let int = document.createElement("div");
   int.innerText = e.price
   int.id="div3id"
  div.append(avatar,div2, int)
    target.appendChild(div);
  

  })
}
function detailprod(e){
  console.log(e);
  
  localStorage.setItem("detailprod",JSON.stringify(e))
  window.location.href="detailprod.html"
}   

start()
 var imagesarr=["https://uidesign.gbtcdn.com/GB/image/8823/0PC+1190X420+EN.jpg?imbypass=true","https://uidesign.gbtcdn.com/GB/image/8823/PC+1190X420+1EN.jpg?imbypass=true","https://uidesign.gbtcdn.com/GB/image/8640/2.jpg?imbypass=true","https://uidesign.gbtcdn.com/GB/image/8823/9PC+banner+1190X420+EN.jpg?imbypass=true"]
    var x;
  function start(){
     // let imagesarr=JSON.parse(localStorage.getItem("imageurl"))
      let slideimg=document.getElementById("imgid")
      let i=0;
      x= setInterval(function(){
          if(i==3){
              i=0
          }
          slideimg.src=imagesarr[i];
          i=i+1;
          // console.log("i",i)
      },3000)
      
  }
  
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