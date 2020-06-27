

//playing with cat//
document.addEventListener('keydown', logKey);
let step=10;

function logKey(e) {
  const dragon = document.getElementById('cat');
  if(e.code==='ArrowRight'){
  step = step + 10;  
  dragon.src="GameImg/game12.png";
    dragon.style.transform = 'translateX('+step+'px)';
  

  } else  if(e.code==='ArrowLeft'){
  step = step - 10;
  dragon.src="GameImg/game11.png";
  dragon.style.transform = 'translateX('+step+'px)';

  }
}
//end playing with cat//


//************************************************************************//

//opening the present//
function openPresent(event) {
    const image = event.currentTarget;
    image.id
    image.src = 'GameImg/present2.gif';
    const header = document.getElementById('2');
    header.textContent = "Hiiiiii !!"
  }
  
  const image = document.getElementById('present');
  image.addEventListener('click', openPresent);
  //ending the present//


  /* hena 3shan lama ados 3la zorar el media tezhar el hagat el f elnav tahtaha f el responsive*/
const linksBtn=document.getElementById("btn");
linksBtn.addEventListener('click',displayMenue);
function displayMenue() {
const links = document.getElementById("links");
if (links.className == "non-visible") {
  links.className = "visible";
} else {
  links.className = "non-visible";
}
}