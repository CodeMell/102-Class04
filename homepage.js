let username = '';
let password = '';



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


