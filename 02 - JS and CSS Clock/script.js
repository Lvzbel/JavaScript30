const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  //picks the object date into now
  const now = new Date();
  // extract only seconds from now
  const seconds = now.getSeconds();
  // this value needs to be offset by 90 because of the CSS class
  // transform: rotate(90deg)
  const secondsDegrees = ((seconds / 60) * 360) + 90
  // Applies a style to rotate the hand
  
  if(seconds === 59 || seconds === 0){
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    secondHand.style.transition = `all 0.00s;`
  } else {
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  }

  // Getting Minutes
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60)* 360) + 90
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // Getting Hours
  const hours = now.getHours();
  // Dividing by 12 hours instead of 60
  const hoursDegrees = ((hours / 12)* 360) + 90
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000);