
let hurray=document.getElementById("hurray");
let youwonthegame=document.getElementById("youwonthegame");
const popup = document.getElementById("popup");
const rulebutton = document.getElementById("rulebutton");
const cutbutton = document.getElementById("cutbutton");

   hurray.textContent="HURRAY!!"
    youwonthegame.innerText= "YOU WON THE GAME";
 

    let btn = document.createElement("button");
    btn.innerHTML = "PLAY AGAIN";
    btn.id="playagainbutton"
    document.body.append(btn); 
    
    btn.addEventListener('click',function(){
        window.location.href = "index.html";
     })
    
     

    const rect = document.createElement("div");
     rect.id="rect"
     document.body.append(rect);

   //   let btnr = document.createElement("button");
   //  btnr.innerHTML = "RULES";
   //  btnr.id="btnr"
   //  document.body.append(btnr); 
    
   //  const rectr = document.createElement("div");
   //   rectr.id="rectr"
   //   document.body.append(rectr);
     
   const rulerect = document.createElement("div");
     rulerect.id="rulerect";
     document.body.append(rulerect);

     let rulebtn = document.createElement("button");
     rulebtn.innerHTML = "RULES";
     rulebtn.id="rulebtn"
     document.body.append(rulebtn); 

     rulebtn.addEventListener('click',function(){
      popup.style.visibility='visible';
      cutbutton.style.visibility='visible';
     })
     cutbutton.addEventListener('click',function(){
      popup.style.visibility='hidden';
      cutbutton.style.visibility='hidden';
   })

     const v = document.createElement("div");
     v.id="group5"
     document.body.append(v);

    
 