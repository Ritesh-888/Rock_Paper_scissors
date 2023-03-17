// console.log("hello i am a js")
 
const popup = document.getElementById("popup");
const rulebutton = document.getElementById("rulebutton");
const cutbutton = document.getElementById("cutbutton");

const userS=document.getElementById("zeror");
const compS=document.getElementById("zerol");
const x=document.getElementById("x-");

const l1=document.getElementById("l1");
const l2=document.getElementById("l2");
const l3=document.getElementById("l3");
const rect2=document.getElementById("rect2");

const f4rule=document.getElementById("f4rule");
const g1e1=document.getElementById("g1e1");
const g1e2=document.getElementById("g1e2");

const g2e1=document.getElementById("g2e1");
const g2e2=document.getElementById("g2e2");

const g3e1=document.getElementById("g3e1");
const g3e2=document.getElementById("g3e2");

const g4e1=document.getElementById("g4e1");

const rockButton=document.getElementById("fist");
const paperButton=document.getElementById("hand");
const sisButton=document.getElementById("fing");

let youPicked=document.getElementById("youpicked");
let pcPicked=document.getElementById("pcpicked");
let youwin=document.getElementById("youwin");
let againstpc=document.getElementById("againstpc");

let youlost=document.getElementById("youlost");
let againstpcforlose=document.getElementById("againstpcforlose");

let tieup=document.getElementById("tieup");

const e1=document.getElementById("e1");

rulebutton.addEventListener('click',function(){
   popup.style.visibility='visible';
   cutbutton.style.visibility='visible';
})
cutbutton.addEventListener('click',function(){
   popup.style.visibility='hidden';
   cutbutton.style.visibility='hidden';
})

let userScore=0;
let compScore=0;
//localStorage.setItem("userScore",JSON.stringify(userScore));
 
userScore=JSON.parse(localStorage.getItem("userScore")) || 0;
 

function randomCompchoice(){
    const ch=["fist","hand","fing"];
    const randomNumber= Math.floor(Math.random()*3);
    //console.log(randomNumber);
    return ch[randomNumber];

}
function rem(){
    //x.remove();
    l1.remove();
    l2.remove();
    l3.remove();
    //f4rule.remove();
    g1e1.remove();
    g1e2.remove();

    g2e1.remove();
    g2e2.remove();

    g3e1.remove();
    g3e2.remove();
    //g4e1.remove();

    rockButton.remove();
    paperButton.remove();
    sisButton.remove();
}

function addforwin(u,c){
       
     youPicked.textContent="YOU PICKED"
     pcPicked.innerText= "PC PICKED";
     youwin.innerText= "YOU WIN";
     againstpc.innerText= "AGAINST PC";
     
     let btn = document.createElement("button");
     btn.innerHTML = "PLAY AGAIN";
     btn.id="playagainbutton"
     document.body.append(btn); 

     btn.addEventListener('click',function(){
        document.location.reload();
     })
       
      rulebutton.remove();
      rect2.remove();
     
     const rect = document.createElement("div");
     rect.id="rect"
     document.body.append(rect);

     const nextrect = document.createElement("div");
     nextrect.id="nextrect";
     document.body.append(nextrect);

     let nxtbtn = document.createElement("button");
     nxtbtn.innerHTML = "NEXT";
     nxtbtn.id="nextbutton"
     document.body.append(nxtbtn); 

     nxtbtn.addEventListener('click',function(){
        window.location.href = "celebrationpage.html";
     })
     
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
     

      
     //logo
     if(u=="fist"){
        //let btn = document.createElement("button");
        const img1 = document.createElement("img");
        img1.src = "icons8-fist-67 1.png";
        img1.id="fistimg"
        document.body.append(img1); 
        
        //document.body.append();
        //e1
        const elp1 = document.createElement("div");
        elp1.id="e1"
        document.body.append(elp1);
         //e2
         const elp2 = document.createElement("div");
        elp2.id="e2"
        document.body.append(elp2); 
        //e3
        const elp3 = document.createElement("div");
        elp3.id="e3"
        document.body.append(elp3); 
         //e4
         const elp4 = document.createElement("div");
        elp4.id="e4"
        document.body.append(elp4);

         //e5
         const elp5 = document.createElement("div");
        elp5.id="e5"
        document.body.append(elp5);

        //pcpicked
        const imgsis = document.createElement("img");
        imgsis.src = "17911 1.png";
        imgsis.id="sisimg2"
        document.body.append(imgsis); 
        
        //document.body.append();
        //e1
        const siselp1 = document.createElement("div");
        siselp1.id="siselp1"
        document.body.append(siselp1);
         //e2
         const siselp2 = document.createElement("div");
        siselp2.id="siselp2"
        document.body.append(siselp2);

         

        
         
     }else if(u=="hand"){
        const img2 = document.createElement("img");
        img2.src = "icons8-hand-64 1.png";
        img2.id="handimg"
        document.body.append(img2); 

        //e1
        const elp1 = document.createElement("div");
        elp1.id="e1"
        document.body.append(elp1);
         //e2
        const fistelp2 = document.createElement("div");
        fistelp2.id="fiste2"
        document.body.append(fistelp2); 
        //e3
        const elp3 = document.createElement("div");
        elp3.id="e3"
        document.body.append(elp3); 
         //e4
         const elp4 = document.createElement("div");
        elp4.id="e4"
        document.body.append(elp4);

         //e5
         const elp5 = document.createElement("div");
        elp5.id="e5"
        document.body.append(elp5);

        //pcpicked
        const fistimg = document.createElement("img");
        fistimg.src = "icons8-fist-67 1.png";
        fistimg.id="fistimghand";
        document.body.append(fistimg); 
        
        //document.body.append();
        //e1
        const siselp1 = document.createElement("div");
        siselp1.id="siselp1"
        document.body.append(siselp1);
         //e2
         const fisthandelp2 = document.createElement("div");
        fisthandelp2.id="fisthandelp2"
        document.body.append(fisthandelp2);

        
     }
     else{
        const img3 = document.createElement("img");
        img3.src = "17911 1.png";
        img3.id="sisimg"
        document.body.append(img3);

         //e1
         const elp1 = document.createElement("div");
         elp1.id="e1"
         document.body.append(elp1);
          //e2
         const siselp2 = document.createElement("div");
         siselp2.id="sise2"
         document.body.append(siselp2); 
         //e3
         const elp3 = document.createElement("div");
         elp3.id="e3"
         document.body.append(elp3); 
          //e4
          const elp4 = document.createElement("div");
         elp4.id="e4"
         document.body.append(elp4);
 
          //e5
          const elp5 = document.createElement("div");
         elp5.id="e5"
         document.body.append(elp5);
 
         //pcpicked
         const handimg = document.createElement("img");
         handimg.src = "icons8-hand-64 1.png";
         handimg.id="handimgsis";
         document.body.append(handimg); 
         
         //document.body.append();
         //e1
         const siselp1 = document.createElement("div");
         siselp1.id="siselp1"
         document.body.append(siselp1);
          //e2
          const fisthandelp2 = document.createElement("div");
         fisthandelp2.id="fisthandelp2"
         document.body.append(fisthandelp2);
 
     }
     
}

function win(user,comp){
  // userS.innerHTML=userScore; 
   userScore++;
   userS.innerHTML=userScore;
   localStorage.setItem("userScore",JSON.stringify(userScore));
    console.log("win");
     rem();

     addforwin(user,comp); 
      
 
}
userS.innerHTML=userScore;
 
 
 

function addforlose(u,c){
       //console.log("i am add for lose");
    youPicked.textContent="YOU PICKED"
    pcPicked.innerText= "PC PICKED";
    youlost.innerText= "YOU LOST";
    againstpcforlose.innerText= "AGAINST PC";
    
    let btn = document.createElement("button");
    btn.innerHTML = "PLAY AGAIN";
    btn.id="playagainbutton"
    document.body.append(btn); 

    btn.addEventListener('click',function(){
        document.location.reload();
     })
    
     const rect = document.createElement("div");
     rect.id="rect"
     document.body.append(rect);
    // //logo
    if(u=="fist"){
       //let btn = document.createElement("button");
       const img1 = document.createElement("img");
       img1.src = "icons8-fist-67 1.png";
       img1.id="fistimg"
       document.body.append(img1); 
       
    //    //document.body.append();
    //    //e1
       const elp1 = document.createElement("div");
       elp1.id="e1"
       document.body.append(elp1);
    //     //e2
        const elp2 = document.createElement("div");
       elp2.id="e2"
       document.body.append(elp2); 
    // 

       //pcpicked
       const imghand = document.createElement("img");
       imghand.src = "icons8-hand-64 1.png";
       imghand.id="handimg2";
       document.body.append(imghand); 
       
       //document.body.append();
       //e1
       const siselp1 = document.createElement("div");
       siselp1.id="handelp1f"
       document.body.append(siselp1);
        //e2
        const siselp2 = document.createElement("div");
       siselp2.id="handelp2f"
       document.body.append(siselp2);
     

    const elp3lost = document.createElement("div");
       elp3lost.id="elp3lost"
       document.body.append(elp3lost); 
    //     //e4
        const elp4lost = document.createElement("div");
       elp4lost.id="elp4lost"
       document.body.append(elp4lost);

    //     //e5
        const elp5lost = document.createElement("div");
       elp5lost.id="elp5lost"
       document.body.append(elp5lost);

       
        
    }else if(u=="hand"){
        const img2 = document.createElement("img");
        img2.src = "icons8-hand-64 1.png";
        img2.id="handimg"
        document.body.append(img2); 

    //    //e1
       const elp1 = document.createElement("div");
       elp1.id="e1"
       document.body.append(elp1);
    //     //e2
       const fistelp2 = document.createElement("div");
       fistelp2.id="fiste2"
       document.body.append(fistelp2); 
    //    //e3
    //     

    //    //pcpicked
       const fistimg = document.createElement("img");
       fistimg.src = "17911 1.png";
       fistimg.id="sisimgh";
       document.body.append(fistimg); 
       
    //    //document.body.append();
    //    //e1
       const siselp1 = document.createElement("div");
       siselp1.id="siselp1"
       document.body.append(siselp1);
    //     //e2
        const fisthandelp2 = document.createElement("div");
       fisthandelp2.id="siselp2h"
       document.body.append(fisthandelp2);

       const elp3lost = document.createElement("div");
       elp3lost.id="elp3lost"
       document.body.append(elp3lost); 
    //     //e4
        const elp4lost = document.createElement("div");
       elp4lost.id="elp4lost"
       document.body.append(elp4lost);

    //     //e5
        const elp5lost = document.createElement("div");
       elp5lost.id="elp5lost"
       document.body.append(elp5lost);

       
     }
    else{
       const img3 = document.createElement("img");
       img3.src = "17911 1.png";
       img3.id="sisimg"
       document.body.append(img3);

        //e1
        const elp1 = document.createElement("div");
        elp1.id="e1"
        document.body.append(elp1);
         //e2
        const siselp2 = document.createElement("div");
        siselp2.id="sise2"
        document.body.append(siselp2); 
     

    //     //pcpicked
        const handimg = document.createElement("img");
        handimg.src = "icons8-fist-67 1.png";
        handimg.id="handimgsis";
        document.body.append(handimg); 
        
        //document.body.append();
        //e1
            const siselp1 = document.createElement("div");
            siselp1.id="siselp1"
            document.body.append(siselp1);
            //e2
            const fisthandelp2 = document.createElement("div");
            fisthandelp2.id="fistelp2s"
            document.body.append(fisthandelp2);

            const elp3lost = document.createElement("div");
            elp3lost.id="elp3lost"
            document.body.append(elp3lost); 
            //     //e4
            const elp4lost = document.createElement("div");
            elp4lost.id="elp4lost"
            document.body.append(elp4lost);

            //     //e5
            const elp5lost = document.createElement("div");
            elp5lost.id="elp5lost"
            document.body.append(elp5lost)

    }
    
}
 
compScore=JSON.parse(localStorage.getItem("compScore")) || 0;
function lose(user,comp){
    compScore++;
    localStorage.setItem("compScore",JSON.stringify(compScore));
    compS.innerHTML=compScore;
    console.log("lost")
    rem();
    addforlose(user,comp);
}
compS.innerHTML=compScore;
 

function forDraw(u){
    youPicked.textContent="YOU PICKED"
    pcPicked.innerText= "PC PICKED";

    tieup.innerHTML="TIE UP";

    let btn = document.createElement("button");
    btn.innerHTML = "REPLAY";
    btn.id="playagainbutton"
    document.body.append(btn); 
    
    btn.addEventListener('click',function(){
        document.location.reload();
     })

    const rect = document.createElement("div");
     rect.id="rect"
     document.body.append(rect);

    if(u=="fist"){
       const img1 = document.createElement("img");
       img1.src = "icons8-fist-67 1.png";
       img1.id="fistimg"
       document.body.append(img1); 

       const elp1 = document.createElement("div");
       elp1.id="e1"
       document.body.append(elp1);
    //     //e2
        const elp2 = document.createElement("div");
       elp2.id="e2"
       document.body.append(elp2); 

       //pcpicked
       const handimg = document.createElement("img");
       handimg.src = "icons8-fist-67 1.png";
       handimg.id="handimgsis";
       document.body.append(handimg); 
       
       const siselp1 = document.createElement("div");
        siselp1.id="siselp1"
        document.body.append(siselp1);
            //e2
        const fisthandelp2 = document.createElement("div");
        fisthandelp2.id="fistelp2s"
        document.body.append(fisthandelp2);

    }else if(u=="hand"){
        const img2 = document.createElement("img");
        img2.src = "icons8-hand-64 1.png";
        img2.id="handimg"
        document.body.append(img2); 

    //    //e1
       const elp1 = document.createElement("div");
       elp1.id="e1"
       document.body.append(elp1);
    //     //e2
       const fistelp2 = document.createElement("div");
       fistelp2.id="fiste2"
       document.body.append(fistelp2); 

       const imghand = document.createElement("img");
       imghand.src = "icons8-hand-64 1.png";
       imghand.id="handimg2";
       document.body.append(imghand); 
       
       //document.body.append();
       //e1
       const siselp1 = document.createElement("div");
       siselp1.id="handelp1f"
       document.body.append(siselp1);
        //e2
        const siselp2 = document.createElement("div");
       siselp2.id="handelp2f"
       document.body.append(siselp2);

    }else{
        const img3 = document.createElement("img");
       img3.src = "17911 1.png";
       img3.id="sisimg"
       document.body.append(img3);

        //e1
        const elp1 = document.createElement("div");
        elp1.id="e1"
        document.body.append(elp1);
         //e2
        const siselp2 = document.createElement("div");
        siselp2.id="sise2"
        document.body.append(siselp2); 

        const fistimg = document.createElement("img");
       fistimg.src = "17911 1.png";
       fistimg.id="sisimgh";
       document.body.append(fistimg); 
       
    //    //document.body.append();
    //    //e1
       const siselp1 = document.createElement("div");
       siselp1.id="siselp1"
       document.body.append(siselp1);
    //     //e2
        const fisthandelp2 = document.createElement("div");
       fisthandelp2.id="siselp2h"
       document.body.append(fisthandelp2);

    }


}

function draw(user,comp){
    console.log("draw")
    rem();
    forDraw(user);
}

function rpsGame(userChoice){
    //console.log("user choice is ",userChoice);
     
    const computerChoice= randomCompchoice();
    //console.log("computer's choice");
    //console.log("Computer choice",computerChoice);
    //console.log(userChoice+computerChoice);
    switch(userChoice + computerChoice){
        case "fistfing":
        case "handfist":
        case "finghand":
            //console.log("user wins!!");
            win(userChoice,computerChoice);
            break;
        case "fisthand":
        case "handfing":
        case "fingfist":
            //console.log("user looses!!");
            lose(userChoice,computerChoice);
            break;
        case "fistfist":
        case "handhand":
        case "fingfing":
           // console.log("its a tie!!");
           draw(userChoice,computerChoice);
            break;
    }
    

}

function main(){

rockButton.addEventListener('click',function(){
   rpsGame("fist");
})

paperButton.addEventListener('click',function(){
   rpsGame("hand");
})

sisButton.addEventListener('click',function(){
     rpsGame("fing");
})
}

main();