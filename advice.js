const RIGHT_ARROW = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/forward-arrow.png';
const DOWN_ARROW = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/down-arrow.png';

function first(event) {

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


/* de el java bta3et el button f el responsive 3shan lama adghat 3leh yban el nav*/
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

let isVisible = false;


//to cover and un cover the img
const detailToggle = document.querySelector('.show-details');
detailToggle.addEventListener('click', first);

/*-- sec one --*/
var btn=document.getElementsByClassName('btn')[0],
text=document.getElementsByClassName('text')[0],
img =document.getElementsByClassName('imgg')[0];
c = 0;
function coverImage() {
    if(c == 0){
        btn.innerHTML = "cover Image";
        text.style.display = "none";
        img.style.filter="blur(0px)";
        c = 1;
    }
    else{
        btn.innerHTML = "uncover Image";
        text.style.display = "block" ;
        img.style.filter = "blur(10px)"; 
        c = 0;}
}