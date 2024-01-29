console.log("WelCome to My Tic Tac Toe Game")
let gamemusic = new Audio ("music.mp3")
let audioTurn = new Audio ("ting.mp3")
let gameover = new Audio ("gameover.mp3")

let turn = "X"
let isgameover = false;

// function to change the turn
const changeTurn = ()=> {
    return turn === "X"?"O": "X"
}

// Function to check for the Winner
const checkWin = ()=> {
    let boxtext = document.getElementsByClassName('boxtext');

    let wins = [
        [0,1,2, 27.79, 4.93,0],
        [3,4,5, 27.79,14.93,0],
        [6,7,8, 27.79,24.93,0],
        [0,3,6, 17.79,14.93,90],
        [1,4,7, 27.79,14.93,90],
        [2,5,8, 37.79,14.93,90],
        [0,4,8, 27.79,14.93,45],
        [2,4,6, 27.79,14.93,135],
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText !== "" ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";  
            isgameover = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="250px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = "20vw";
            gameover.play();


        }
    })
}

//  Main Logic of Game
gamemusic.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(Element => {
    let boxtext = Element.querySelector('.boxtext');
    Element.addEventListener('click', ()=>{
        if (boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Add oneClick listener to reset button
reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(Element => {
        Element.innerText = ""
    });
    turn = "X"
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="0";
    document.querySelector(".line").style.width = "0vw";

})
