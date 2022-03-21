const c = document.getElementById("playground");        //gets playground element
var ctx = c.getContext("2d");                           //gives context


// loads the image onto the canvas
function draw() {
  const c = document.getElementById("playground");        //gets playground element
  var ctx = c.getContext("2d");                           //gives context
  var img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 0, 0);
  };
  img.src = 'holes.png';
}

draw()

const start = document.getElementById("startGame");     //gets start game button
const scoreBoard = document.getElementById("score");    //gets score button
let lastHole;                                           //the last hole(prevents repeats)
let timeUp = false;                                     //checks if time is up
let score = 0;                                          //score of the user
var requestID;








var mole = new Image(50, 50);
mole.src = "mole.jpeg";

var holes = new Image(c.width, c.height);
holes.src = "holes.png";


var clear = (e) => {
  console.log("clear invoked...")
  ctx.clearRect(0, 0, c.width, c.height);
  // YOUR CODE HERE
};
let x, y;

let moleButton = document.getElementById("spawnMole");


let setHole = (e) => {
  hole = randomHole(holeObj);
  x = hole.xcord;
  y = hole.ycord;
  window.cancelAnimationFrame(requestID);
  moleSpawn();
}



let moleSpawn = () => {
  console.log("mole Spawned");
  console.log(requestID);
  window.cancelAnimationFrame(requestID);
  
  clear();
  ctx.beginPath();
  ctx.drawImage(mole, x, y, mole.width, mole.height);
  ctx.rotate(Math.PI / 2);
 
  if (whack) {
    stopIt();
  }

  requestID = window.requestAnimationFrame(moleSpawn);
};

var stopIt = () => {
  console.log("stopIt invoked...")
  console.log( requestID );
  window.cancelAnimationFrame(requestID);
};

moleButton.addEventListener("click", setHole);





















let holeObj = [
  {
    "name": "hole1",
    "xcord": 125,
    "ycord": 250
  },
  {
    "name": "hole2",
    "xcord": 250,
    "ycord": 250
  },
  {
    "name": "hole3",
    "xcord": 375,
    "ycord": 250
  }
  ]


function randomTime(min, max) {                         //function for random time
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes){                             //function for random hole
    const index  = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    if (hole === lastHole){
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}



function startGame() {                                //starts the game, resets stats
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  // attempting to draw the holes
  
  ctx.drawImage(holes, 0, 0);

  peep();
  setTimeout(() => timeUp = true, 10000)
}

function whack() {                                    //adds score if clicked
  score++;
  scoreBoard.textContent = score;
  console.log("whacked!")
}


c.addEventListener( "click", whack);
start.addEventListener( "click", startGame);
