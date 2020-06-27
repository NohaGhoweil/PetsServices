///////to show the images from the file////// 
function StreamProcessed(text) {
    const urls = text.split('\n');
    let h = document.createElement("H1")          
    let t = document.createTextNode("Animals to adapting from shelter");
    h.style.color="white";      
    h.style.padding="20px";      
    h.style.backgroundColor="grey";      
    h.style.borderRadius="15px";      
    h.appendChild(t); 
    document.body.append(h);

    var css='img:hover{transparent=0.5;}'
    for (const url of urls) {
      const image = document.createElement('img');
      image.src = url;
      image.style.width="30%";
      image.style.height="330px";
      image.style.margin="10px";
      document.body.append(image);
    }
  }

  function Success(response) {
    document.getElementById("loading").style.display ="none";
    response.text().then(StreamProcessed)
  }
  function onError(error) {
    console.log('Error: ' + error);
  }
  fetch('img.txt').then(Success,onError);
  //ending of showing images in sec 1//

/***************************************************************************************/

  //starting showing images in sec2//
  function onStreamProcessed(text) {
    const urls = text.split('\n');
    let h = document.createElement("H1")          
    let t = document.createTextNode("Animals to adapting from other client home");
    //styling of h1
    h.style.color="white";      
    h.style.padding="20px";      
    h.style.backgroundColor="grey";      
    h.style.borderRadius="15px";   
    
    h.appendChild(t); 
    document.body.append(h);
    for (const url of urls) {
      const images = document.createElement('img');
      images.src = url;
      images.style.width="30%";
      images.style.height="330px";
      images.style.margin="10px";

      document.body.append(images);
    }
  }
  function onSuccess(response) {
    document.getElementById("loading").style.display ="none";
    response.text().then(onStreamProcessed)
  }
  function onError(error) {
    console.log('Error: ' + error);
  }
  fetch('images.txt').then(onSuccess,onError);
  //ending of sec 2//


  /* hena 3shan lama ados 3la zorar el media tezhar el hagat el f elnav tahtaha f el responsive*/
const linksBtn=document.getElementById("btn");
function displayMenue() {
const links = document.getElementById("links");
if (links.className == "non-visible") {
  links.className = "visible";
} else {
  links.className = "non-visible";
}
}
linksBtn.addEventListener('click',displayMenue);
