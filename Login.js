let username = '';
let password = '';



function signin() {
    username = prompt("What is your name?");
    password = prompt("Password?")
    if(username != 'RP', password != '12345'){
        alert('Iniviled User');
    } else {
        alert("Hello, " + username);
        document.getElementById("user").innerHTML = "Welcome Back! " + username;
    }
    
}


signin();