let clap = document.querySelector('.clap'),   hithat = document.querySelector('.hithat'),
    kick = document.querySelector('.kick'),   openhat = document.querySelector('.openhat'),
    boom = document.querySelector('.boom'),   ride = document.querySelector('.ride'),
    snare = document.querySelector('.snare'), tom = document.querySelector('.tom'),
    tink = document.querySelector('.tink');
    
function clapFun(){
  const audio = new Audio('../assets/sounds/clap.wav');
  audio.play();

  clap.classList.toggle('keyActive');
  setTimeout(()=>{
    clap.classList.toggle('keyActive');
  },100)
} 
function hihatFun(){
  const audio = new Audio('../assets/sounds/hihat.wav');
  audio.play();

  hithat.classList.toggle('keyActive');
  setTimeout(()=>{
    hithat.classList.toggle('keyActive');
  },100)
} 
function kickFun(){
  const audio = new Audio('../assets/sounds/kick.wav');
  audio.play();

  kick.classList.toggle('keyActive');
  setTimeout(()=>{
    kick.classList.toggle('keyActive');
  },100)
} 
function openhatFun(){
  const audio = new Audio('../assets/sounds/openhat.wav');
  audio.play();

  openhat.classList.toggle('keyActive');
  setTimeout(()=>{
    openhat.classList.toggle('keyActive');
  },100)
} 
function boomFun(){
  const audio = new Audio('../assets/sounds/boom.wav');
  audio.play();

  boom.classList.toggle('keyActive');
  setTimeout(()=>{
    boom.classList.toggle('keyActive');
  },100)
} 
function rideFun(){
  const audio = new Audio('../assets/sounds/ride.wav');
  audio.play();

  ride.classList.toggle('keyActive');
  setTimeout(()=>{
    ride.classList.toggle('keyActive');
  },100)
} 
function snareFun(){
  const audio = new Audio('../assets/sounds/snare.wav');
  audio.play();

  snare.classList.toggle('keyActive');
  setTimeout(()=>{
    snare.classList.toggle('keyActive');
  },100)
} 
function tomFun(){
  const audio = new Audio('../assets/sounds/tom.wav');
  audio.play();

  tom.classList.toggle('keyActive');
  setTimeout(()=>{
    tom.classList.toggle('keyActive');
  },100)
} 
function tinkFun(){
  const audio = new Audio('../assets/sounds/tink.wav');
  audio.play();

  tink.classList.toggle('keyActive');
  setTimeout(()=>{
    tink.classList.toggle('keyActive');
  },100)
} 

clap.addEventListener('click', clapFun);

hithat.addEventListener('click', hihatFun);

kick.addEventListener('click', kickFun);

openhat.addEventListener('click', openhatFun);

boom.addEventListener('click', boomFun);

ride.addEventListener('click', rideFun);

snare.addEventListener('click', snareFun);

tom.addEventListener('click', tomFun);

tink.addEventListener('click', tinkFun);


document.addEventListener('keydown', function(event) {
  switch(event.keyCode){
    case 65:
      clapFun();
      break;
    case 83:
      hihatFun();
      break;
    case 68:
      kickFun();
      break;
    case 70:
      openhatFun();
      break;
    case 71:
      boomFun();
      break;
    case 72:
      rideFun();
      break;
    case 74:
      snareFun();
      break;
    case 75:
      tomFun();
      break;
    case 76:
      tinkFun();
      break;
  }
});