
///**********************************************************////
//why choose section//
const RIGHT_ARROW = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/forward-arrow.png';
const DOWN_ARROW = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/down-arrow.png';

function toggleVisibility(event) {

  console.log('event.target is: ' + event.target.tagName);
  console.log('event.currentTarget is: ' + event.currentTarget.tagName);
  
  const details = document.querySelector('.details');
  const image = event.currentTarget.querySelector('.choose');
  const text = event.currentTarget.querySelector('.sp');
  
  isVisible = !isVisible;
  if (isVisible) {
    details.classList.remove('hidden');
    image.src = DOWN_ARROW;
    text.textContent = 'Hide details';
  } else {
    details.classList.add('hidden');
    image.src = RIGHT_ARROW;
    text.textContent = 'Show details';
  }
}

let isVisible = false;

const detailToggle = document.querySelector('.show-details');
detailToggle.addEventListener('click', toggleVisibility);

//ending choosing section//


let i = 0; 			// Start Point
let images = [];	// Images Array
let time = 3000;	// Time Between Switch

// Image List
images[0] = "ClinicImg/c24.jpg";
images[1] = "ClinicImg/c2.jpg";
images[2] = "ClinicImg/c3.jpg";


// Change Image
function changeImg(){
document.getElementById("d").style.backgroundImage ="linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("+images[i]+")" ;

// Check If Index Is Under Max
if(i < images.length - 1){
  // Add 1 to Index
  i++; 
} else { 
  // Reset Back To O
  i = 0;
}

// Run function every x seconds
setTimeout("changeImg()", time);
}

// Run function when page loads
changeImg();



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