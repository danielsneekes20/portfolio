window.onload = function(){
let h2change= document.getElementById("id1");
console.log(h2change);

const timer = ms => new Promise(res => setTimeout(res, ms));
async function change2(){
        h2change.innerHTML="Waiter";
        await timer(1000);
        h2change.innerHTML="Student ICT";
        await timer(1000);
        h2change.innerHTML="Gamer";
        await timer(1000);
        h2change.innerHTML="Football fan";
        await timer(1000);
        h2change.innerHTML="Music lover";
        await timer(1000);
        change2();
}
change2();
const arrowFront1= document.getElementById("1");
const arrowFront2= document.getElementById("2");
const arrowFront3= document.getElementById("3");
const data1= document.getElementById("a1");
const data2= document.getElementById("a2");
const data3= document.getElementById("a3");

console.log(arrowFront1.childNodes[1]);

arrowFront1.addEventListener('click', function(){
        if(arrowFront1.childNodes[1].className=="fas fa-angle-up") arrowFront1.childNodes[1].className="fas fa-angle-down" , data1.style.display="none" ;
        else arrowFront1.childNodes[1].className="fas fa-angle-up",  data1.style.display="block";
})
arrowFront2.addEventListener('click', function(){
        if(arrowFront2.childNodes[1].className=="fas fa-angle-up") arrowFront2.childNodes[1].className="fas fa-angle-down", data2.style.display="none";
        else arrowFront2.childNodes[1].className="fas fa-angle-up", data2.style.display="block";
})
arrowFront3.addEventListener('click', function(){
        if(arrowFront3.childNodes[1].className=="fas fa-angle-up") arrowFront3.childNodes[1].className="fas fa-angle-down", data3.style.display="none";
        else arrowFront3.childNodes[1].className="fas fa-angle-up", data3.style.display="block";
})



// data= document.getElementsByClassName("shit");
// console.log(arrowFront)
// for (var i=0; i< arrowFront.length;i++){
//         let selected= arrowFront[i];
//         console.log(selected);
//         selected.addEventListener('click', function(){
//                 if( selected.className=="fas fa-angle-up"){
//                         selected.className="fas fa-angle-down";
//                 }
//                 if( selected.className=="fas fa-angle-down"){
//                         selected.className="fas fa-angle-up";
//                 }
                                                 
// })
// }

var element = document.getElementById('box');
var elementHeight = element.clientHeight;

// listen for scroll event and call animate function
document.addEventListener('scroll', animate);

// check if element is in view
function inView() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
  var elementPositionminus= elementPosition -70;
  var elementPositionplus= elementPosition + window.screen.availHeight;

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPositionminus && scrollPosition < elementPositionplus) {
    return true;
    
  }
  
  
  
  return false;
}

// animate element when it is in view
function animate() {
  // is element in view?
  if (inView()) {
      // element is in view, add class to element
      element.classList.replace("h","animate");
      balkjes= document.getElementsByClassName("in html");
      for (var i=0; i< balkjes.length;i++){
        if (balkjes[i].className =="in html html--90 h") balkjes[i].classList.replace("h","animate2");
        if (balkjes[i].className =="in html html--60 h") balkjes[i].classList.replace("h","animate3");
                
        }
      
      
  }
  else{
        element.classList.replace("animate","h");
        console.log("hii");
        balkjes= document.getElementsByClassName("in html");
        for (var i=0; i< balkjes.length;i++){
                if (balkjes[i].className =="in html html--90 animate2") balkjes[i].classList.replace("animate2","h");
                if (balkjes[i].className =="in html html--60 animate3") balkjes[i].classList.replace("animate3","h");
                }
  }
}



const board= document.getElementById("boardid");
const buttonPlay= document.getElementById("play");
buttonPlay.addEventListener("click", play);
let off= true;
function play(){
        if(off ==true){
        board.style.visibility="visible";
        console.log("fd")
        buttonPlay.innerHTML=("End game");
        off= false;
        }
        else{
                board.style.visibility="hidden";
                buttonPlay.innerHTML=("Play a game");   
                off= true; 
        }
}




function flipCard(card) {
        
        console.log(card);
        card.classList.add('visible');
}
                // 
                // if(this.cardToCheck){
                //         this.checkForCardMatch(card);
                //  }
                // else{
                //         this.cardToCheck= card;


function cardMatch(card1, card2){
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add("matched"); // optioneeel
}
function cardMisMatch(card){
                card1.classList.remove('visible');
                card2.classList.remove('visible');

}

function checkForCardMatch(card){
        if(this.getCardType(card)=== this.getCardType(this.cardToCheck))
                this.cardMatch(card, this.cardToCheck);
        else
                this.cardMisMatch(card, this.cardToCheck);
        this.cardToCheck= null;
}
function getCardType(card){
}
const cards = document.querySelectorAll(".kaart");
console.log(cards);
cards.forEach(card => card.addEventListener('click', flipCard(card)));
matchedCards=[];

function kaartenschudden(){
        for(let i = this.cardsArray.length -1; i>0; i--){
                let randIndex = Math.floor(Math.random()* (i+1))
                this.cardsArray[randIndex].style.order=i;
                this.cardsArray[i].style.order=randIndex;
        }
}


function checkForCardMatch(card) {
        if(this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        else 
            this.cardMisMatch(card, this.cardToCheck);
}
function match(card1, card2){
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
}
function mismatch(card1, card2){
        setTimeout(() => {
                card1.classList.remove('visible');
                card2.classList.remove('visible');
            }, 1000);
}
this.cardsArray = cards;

}