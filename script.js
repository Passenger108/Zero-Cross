console.log("Welcome to Zero Cross");

let boxes = Array.from(document.getElementsByClassName("box"));
let samples = Array.from(document.getElementsByClassName("boxText"));
let turn = "X";
let detail = document.getElementById("gameDetail");
let isGameOver = false;
let prints =0;
let button = document.getElementById("rest");
let gif = document.querySelector(".gameInfo img");
let line = document.getElementsByClassName("line")[0];
// functions

const changeTurn = ()=> turn==="X"?"0":"X";

const checkGame = ()=>{
    let win =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    win.forEach((item,i)=>{
        if(!isGameOver&&(samples[item[0]].textContent!=="")&&(samples[item[0]].textContent === samples[item[1]].textContent)&&(samples[item[1]].textContent === samples[item[2]].textContent)){
            isGameOver =true;
            drawLine(i);
        }
    });
};

const draw = () => {
    detail.textContent ="Draw!!";
    setTimeout(resetButton,1000);
}

const resetButton = () => {
    detail.textContent ="turn for X";
    prints =0;
    isGameOver = false;
    turn ="X";
    samples.forEach((element)=>{
        element.textContent ="";
    })
    gif.style.width = 0 ;

    line.style.borderColor = "white";
    line.style.width="0";
    line.style.height="0";
    line.style.transform ="";
}

const drawLine = (i) => {
    line.style.borderColor = "red";
    switch(i){
        case 0 :line.style.transform = "translateY(5vw)";
                line.style.width = "100%";
        break;
        case 1 :line.style.transform = "translateY(15vw)";
                line.style.width = "100%";
        break;
        case 2 :line.style.transform = "translateY(25vw)";
                line.style.width = "100%";
        break;
        case 3 :line.style.transform = "translateX(5vw)";
                line.style.height = "100%";
        break;
        case 4 :line.style.transform = "translateX(15vw) ";
                line.style.height = "100%";
        break;
        case 5 :line.style.transform = "translateX(25vw) ";
                line.style.height="100%";
        break;
        case 6 :line.style.transformOrigin = "0% 50%";
        line.style.transform ="rotate(45deg)";
        line.style.width = "140%";
        break;
                
        case 7: line.style.transformOrigin = "0% 50%";
                line.style.transform ="translateX(30vw) rotate(135deg)";
                line.style.width = "140%";
                break;
    }
    
}

//events

boxes.forEach((element)=>{
    element.addEventListener('click',()=>{
        let boxText = element.querySelector("span");
        if(boxText.innerText === ""){
            boxText.innerText = turn;
            prints++;

            checkGame();
            if(isGameOver){
                detail.textContent = `Hurray! ${turn} Won`;
                gif.style.width= 200 + "px";
            }
            else{
                if(prints ==9) 
                    draw();
                else{
                    turn = changeTurn();
                    detail.textContent = `turn for ${turn}`;
                }
            }
            


        }
    })
})

button.addEventListener('click',resetButton);