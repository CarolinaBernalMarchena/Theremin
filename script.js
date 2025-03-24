import { Theremin } from "./Theremin.js";



async function comienzo() {
  try {
    const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
    const video = document.createElement("video");
    video.srcObject = mediaStream;
  
    video.addEventListener("loadeddata", () => {
      video.play();     
    
      const myCanvas = document.getElementById("myCanvas");
      myCanvas.width = video.videoWidth;
      myCanvas.height = video.videoHeight;
   
      new Theremin(myCanvas,video)
    })
        
    
    
  } catch (err) {
    alert(err);
  }
}

comienzo()