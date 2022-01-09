var tensDisplay = document.getElementById("tens");
var secondsDisplay = document.getElementById("seconds");

var Interval =0;
var tens = 0 ;
var seconds = 0 ;


function startTimer(){
clearInterval(Interval)
Interval = setInterval(setTimer, 100);

}
function resetTimer(){
  tens = 0;
  seconds = 0;
  tensDisplay.innerHTML = "0" + tens;
  secondsDisplay.innerHTML = "0" + seconds;
  clearInterval(Interval)
}




function stopTimer(){
  clearInterval(Interval)
}

function setTimer(){
  tens++;
  if(tens <= 9){
    tensDisplay.innerHTML = "0" + tens;
  }
  
  else if (tens > 9 && tens < 99){
    tensDisplay.innerHTML = tens;
    
  } 
  
  else if (tens > 99) {
    console.log("seconds");
    seconds++;
    secondsDisplay.innerHTML = "0" + seconds;
    tens = 0;
    tensDisplay.innerHTML = "0" + 0;
  }
 else if (seconds > 9){
    secondsDisplay.innerHTML = seconds;
  }
}






















// window.onload = function () {
  
//     var seconds = 00; 
//     var tens = 00; 
//     var appendTens = document.getElementById("tens")
//     var appendSeconds = document.getElementById("seconds")
//     var buttonStart = document.getElementById('button-start');
//     var buttonStop = document.getElementById('button-stop');
//     var buttonReset = document.getElementById('button-reset');
//     var Interval ;
  
//     buttonStart.onclick = function() {
      
//       clearInterval(Interval);
//        Interval = setInterval(startTimer, 10);
//     }
    
//       buttonStop.onclick = function() {
//          clearInterval(Interval);
//     }
    
  
//     buttonReset.onclick = function() {
//        clearInterval(Interval);
//       tens = "00";
//         seconds = "00";
//       appendTens.innerHTML = tens;
//         appendSeconds.innerHTML = seconds;
//     }
    
     
    
//     function startTimer () {
//       tens++; 
      
//       if(tens <= 9){
//         appendTens.innerHTML = "0" + tens;
//       }
      
//       if (tens > 9){
//         appendTens.innerHTML = tens;
        
//       } 
      
//       if (tens > 99) {
//         console.log("seconds");
//         seconds++;
//         appendSeconds.innerHTML = "0" + seconds;
//         tens = 0;
//         appendTens.innerHTML = "0" + 0;
//       }
      
//       if (seconds > 9){
//         appendSeconds.innerHTML = seconds;
//       }
    
//     }
    
  
//   }