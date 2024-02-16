
let randomnumber;
let computerMove = ``;
let result = ``;

function rock(){
    randomnumber = Math.random();

    document.getElementById("view").textContent = randomnumber;
    if(randomnumber >= 0 && randomnumber < 1/3){
        computerMove = `Rock`;
        document.getElementById("view2").textContent = computerMove;
    }else if(randomnumber >= 1/3 && randomnumber < 2/3){
        computerMove = `Paper`;
        document.getElementById("view2").textContent = computerMove;
    }else if(randomnumber >= 2/3 && randomnumber < 1){
        computerMove = `Scissors`;
        document.getElementById("view2").textContent = computerMove;
    }

  if(computerMove === `Rock`){
    result = `Tie`;
  }else if(computerMove === `Paper`){
    result = `You lose.`;
  }else if(computerMove === `Scissors`){
   result = `You win.`;
  }

document.getElementById("view5").textContent = `You picked Paper. Computer picked ${computerMove}. ${result}`;

}


function paper(){
    randomnumber = Math.random();

    document.getElementById("view").textContent = randomnumber;
    if(randomnumber >= 0 && randomnumber < 1/3){
        computerMove = `Rock`;
        document.getElementById("view2").textContent = computerMove;
    }else if(randomnumber >= 1/3 && randomnumber < 2/3){
        computerMove = `Paper`;
        document.getElementById("view2").textContent = computerMove;
    }else if(randomnumber >= 2/3 && randomnumber < 1){
        computerMove = `Scissors`;
        document.getElementById("view2").textContent = computerMove;
    }

  if(computerMove === `Rock`){
    result = `You win`;
  }else if(computerMove === `Paper`){
    result = `Tie.`;
  }else if(computerMove === `Scissors`){
   result = `You lose.`;
  }

  document.getElementById("view5").textContent = `You picked Paper. Computer picked ${computerMove}. ${result}`;

}



function scissors(){
    randomnumber = Math.random();

    document.getElementById("view").textContent = randomnumber;
    if(randomnumber >= 0 && randomnumber < 1/3){
        computerMove = `Rock`;
        document.getElementById("view2").textContent = computerMove;
    }else if(randomnumber >= 1/3 && randomnumber < 2/3){
        computerMove = `Paper`;
        document.getElementById("view2").textContent = computerMove;
    }else if(randomnumber >= 2/3 && randomnumber < 1){
        computerMove = `Scissors`;
        document.getElementById("view2").textContent = computerMove;
    }

  if(computerMove === `Rock`){
    result = `You lose`;
  }else if(computerMove === `Paper`){
    result = `You win.`;
  }else if(computerMove === `Scissors`){
   result = `Tie.`;
  }

 document.getElementById("view5").textContent = `You picked Scissors. Computer picked ${computerMove}. ${result}`;
}