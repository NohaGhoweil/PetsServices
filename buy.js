/*when i click in btn el media tezhar el hagat el f elnav tahtaha f el responsive*/
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





//to shown the giff//
/*
function onStreamProcessed(text) {
  const urls = text.split('\n');
  let h = document.createElement("H1")          
  let t = document.createTextNode("My Gallery");      
  h.appendChild(t); 
  document.body.append(h);
  for (const url of urls) {
    const image = document.createElement('img');
    image.src = url;
    document.body.append(image);
  }
}

function onSuccess(response) {
  document.getElementById("loading").style.display = "none";
  response.text().then(onStreamProcessed)
}
function onError(error) {
  console.log('Error: ' + error);
}

fetch('images2.txt').then(onSuccess, onError);*/