
const nextButton = document.querySelector(".next-button");

//svg mazes 
const levelOne = document.querySelector('.level-one');
const levelTwo = document.querySelector('.level-two');

//UI messages 
const uiMessages = document.querySelector('.ui-message');
const uiLevel = document.querySelector('.ui-level');

//End of game 
const largeMarge = document.querySelector('.large-marge');
const spookySound = document.querySelector('.spooky-sound');
const accidentSound = document.querySelector('.you-lose-sound');

const reStartButton = document.querySelector('.restart-button');

function messageBox(msg,duration)
{
 let el = document.createElement("div");
 el.className = 'you-lose-message';
 el.setAttribute("style"
 ,"position:fixed;top:25%;left:25%;background-color:black;border-radius:20px");
 el.innerHTML = msg;
  setTimeout(function(){
  el.parentNode.removeChild(el);
 },duration);
   document.body.appendChild(el);
 }


 function margePopup(duration)
{
 let wrapper = document.createElement('div');
 let img = document.createElement('div');
 let margeComplete = wrapper.appendChild(img);
 margeComplete.setAttribute("style" ,"position:absolute;bottom:28%;right:35%;background-image:url('./large-marge-disapproves.png');object-fit:cover;background-repeat:no-repeat");
 margeComplete.className = 'large-marge-disapproves'
 setTimeout(function(){
    margeComplete.parentNode.removeChild(margeComplete);
   },duration);
     document.body.appendChild(margeComplete);
}




const collisionCheck = (value) => {
    if(value === 'maze-border') {
        accidentSound.play();
        messageBox("WHO SENT YOU?? TRY AGAIN, OLD FART!",5000);
        margePopup(5000);
        
    }
    if(value ==='finish') {
        nextButton.style.opacity = 1;
        nextButton.style.pointerEvents = "all";
        levelOne.style.pointerEvents = "none"; 
    }
    if(value ==='end-game'){
        spookySound.play();
        largeMarge.style.display = "block";
        // document.body.style.background = "black";

        setTimeout(function()
        { reStartButton.style.opacity = 1;  
            largeMarge.style.display = "none";
            levelTwo.style.display = "none";
            levelOne.style.display = "none";
            reStartButton.style.pointerEvents = "all";
              levelTwo.style.pointerEvents = "none"; 
              uiMessages.textContent = " ";
              uiLevel.textContent = " ";
        }, 5000);

    }
};


window.addEventListener('mousemove', (e) => {
    let check = e.target.classList.value;
    collisionCheck(check);
});

nextButton.addEventListener('click', () => {
    levelOne.style.display = "none";
    levelTwo.style.display = "block";
    nextButton.style.opacity = 0;
    nextButton.style.pointerEvents = "none";
    uiLevel.textContent = 'Level 2'
    uiMessages.textContent = 'One more to go...';
});

reStartButton.addEventListener('click', () => {
    levelOne.style.display = "block";
    levelTwo.style.display = "none";
    reStartButton.style.opacity = 0;
    reStartButton.style.pointerEvents = "none";
    uiLevel.textContent = 'Level 1'
    uiMessages.textContent = 'Make it to the finish...';
});