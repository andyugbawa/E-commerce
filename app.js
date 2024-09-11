let menuIcon = document.getElementById("menu-icon");
let menuBar = document.getElementById("menu-bar");
let allImages = document.querySelectorAll(".images");
let poloShirt = document.querySelectorAll(".polos");
let slevsShirt = document.querySelectorAll(".sleves");
let chinosTrouser = document.querySelectorAll(".chinos");
let shortNickers = document.querySelectorAll(".shorts");
let jeansTrouser = document.querySelectorAll(".jeans");
let leatherShoes = document.querySelectorAll(".shoes");
let sneakerTrainers = document.querySelectorAll(".sneakers");
let bootShoes = document.querySelectorAll(".boots");
const sliderArrival = document.querySelectorAll(".slider-arrival");
const prevBtn =document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
// const tradeSquare = document.querySelectorAll(".trade-square");
const  sliderMove = document.querySelectorAll(".slider");
const backBtn = document.getElementById("back-btn")
const forBtn = document.getElementById("forward-btn");
const aboutUs = document.getElementById("about-us");
const aboutFile = document.getElementById("about");
const contactUs = document.getElementById("contact-us");
const contactFile = document.getElementById("location");
console.log(contactFile)

let imageIndex = 0;
let autoSet;
let introImage = 0;
let autoIntro;


// let setImage = 0;
// let setRoll;

prevBtn.addEventListener("click",preAction);
nextBtn.addEventListener("click",nextAction);

backBtn.addEventListener("click",backAction);
forBtn.addEventListener("click",forAction);


 menuBar.style.maxHeight = "0px";

 menuIcon.addEventListener("click",iconAction);

 function iconAction(){
    if(menuBar.style.maxHeight =="0px"){
        menuBar.style.maxHeight = "400px";
    }else{
        menuBar.style.maxHeight = "0px"; 
    }
    if(menuIcon.classList.contains("fa-bars")){
        menuIcon.classList.replace("fa-bars","fa-x")
      }else{
        menuIcon.classList.replace("fa-x","fa-bars")
      }
   
 }


allImages.forEach(boxes=>{
    boxes.addEventListener("click",event=>{
    document.querySelector(".mix-box").src= event.target.src
    })
});

poloShirt.forEach(polo=>{
    polo.addEventListener("click",event=>{
      document.querySelector(".polo-image").src=event.target.src
    })
})

slevsShirt.forEach(sleve=>{
    sleve.addEventListener("click",event=>{
        document.querySelector(".sleves-image").src=event.target.src
    })
})

chinosTrouser.forEach(chinos=>{
    chinos.addEventListener("click",event=>{
        document.querySelector(".chinos-image").src=event.target.src
    })
})

shortNickers.forEach(shorts=>{
    shorts.addEventListener("click",event=>{
        document.querySelector(".shorts-image").src=event.target.src
    })
})

jeansTrouser.forEach(jeans=>{
    jeans.addEventListener("click",event=>{
        document.querySelector(".jeans-image").src=event.target.src
    })
})

leatherShoes.forEach(shoes=>{
    shoes.addEventListener("click",event=>{
        document.querySelector(".shoe-image").src=event.target.src
    })
})

sneakerTrainers.forEach(sneaker=>{
    sneaker.addEventListener("click",event=>{
        document.querySelector(".sneaker-image").src=event.target.src
    })
})

bootShoes.forEach(boot=>{
    boot.addEventListener("click",event=>{
        document.querySelector(".boot-image").src=event.target.src
    })
})

 sliderArrival.forEach((slider,index)=>{
    slider.style.top = `${index * 100}%`
 })

 function preAction(){
  imageIndex--;
  if(imageIndex < 0){
    imageIndex = sliderArrival.length-1
  }
  loadFile();
  autoreset()
 }

 function nextAction(){
  imageIndex++;
  if(imageIndex  >= sliderArrival.length){
    imageIndex = 0;
  }
  loadFile();
  autoreset()
 }

 function loadFile(){
    sliderArrival.forEach(slider=>{
        slider.style.transform = `translateY(-${imageIndex * 100}%)`
    })
 }

 function autoReel(){
    autoSet = setInterval(nextAction,3000)
 }

 function autoreset(){
    clearInterval(autoSet);
    autoReel()
 }
 autoReel();



 
sliderMove.forEach((sliders,index)=>{
    sliders.style.left = `${index * 100}%`;
});

function backAction(){
   
    introImage--;
    if(introImage < 0){
        introImage = sliderMove.length-1;
    }
    displayimage();
    playAction()
}

function forAction(){
    console.log("HI")
    introImage++;
    if(introImage >= sliderMove.length){
        introImage =0 ;
    }
    displayimage();
    playAction()
}
function displayimage(){
    sliderMove.forEach(slides=>{
        slides.style.transform = `translateX(-${introImage * 100}%)`;
    })
}

function setAction(){
    autoIntro = setInterval(forAction,3000)
}

function playAction(){
    clearInterval(autoIntro)
    setAction();
}
setAction();

aboutUs.addEventListener("click",moveAction);
aboutFile.addEventListener("click",footerAction)
contactUs.addEventListener("click",contactAction)
contactFile.addEventListener("click",contactLocation)

function moveAction(){
    window.location.href = "./index1.html"
    console.log("HELLO")
}

function footerAction(){
    window.location.href = "./index1.html"
    console.log("HELLO")
}

function contactAction(){
    window.location.href = "./index2.html"
    console.log("HELLO")
}

function contactLocation(){
    window.location.href = "./index2.html"
    console.log("HELLO")
}



 
//  tradeSquare.forEach((trade,index)=>{
//     trade.style.left = `${index * 100}%`
//  })

//  function rearAction(){
//     console.log("HI")
//   setImage--;
//   if(setImage < 0){
//     setImage = tradeSquare.length-1
//   }
//   fileLoad();
//   autoFile()
//  }

//  function forAction(){
   
//   setImage++;
//   if(setImage  >= tradeSquare.length){
//     setImage = 0;
//   }
//   fileLoad();
//   autoFile()
//  }

//  function fileLoad(){
//     tradeSquare.forEach(trade=>{
//         trade.style.transform = `translateX(-${setImage * 100}%)`
//     })
//  }

//  function moveReel(){
//     setRoll = setInterval(rearAction,3000)
//  }

//  function autoFile(){
//     clearInterval(setRoll);
//     moveReel()
//  }
//  moveReel();

 


