let username = '';
let password = '';

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.carousel').children;
const totalImages = images.length;
let index = 0;

prev.addEventListener('click', () => {
  nextImage('next');
})

next.addEventListener('click', () => {
  nextImage('prev');
})

function nextImage(direction) {
  if(direction == 'next') {
    index++;
    if(index == totalImages) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('main');
  }
  images[index].classList.add('main');
}




function signin() {
    username = prompt("Username?");
    password = prompt("Password?")
    if(username != 'RP', password != '12345'){
        alert('Iniviled User');
        document.getElementById("user").innerHTML = " (T-T)";
    } else {
        alert("Hello, " + username);
        document.getElementById("user").innerHTML = " Welcome Back! " + username;
    }
    
}


let userRating = "";
let rateStar = "";

function rateing(){
  userRating = prompt("Would you like to leave a review? y/n");
  if(userRating == "n"){
    alert("no need to rush");
  }
  else{
    rateStar = prompt("how did we do 1-5");
    rateComment = prompt("what can we improve?");
  }
alert("Thank you for your time!");
siteRate();


}




function siteRate(){
  for (let x = 0; x <= rateStar; x += 1) {
     {
      document.getElementById("rate").innerHTML += '<img id="rate" src="images/star.png"></img>';
    }
    
  }
  document.getElementById("Crate").innerHTML +=  rateComment;
}