function start(){
window.location="login.html";
} 

function googleLogin() {
    alert("Google Sign-In Successful (Demo)");
    window.location.href = "dashboard.html";
}

function facebookLogin() {
    alert("Facebook Sign-In Successful (Demo)");
    window.location.href = "dashboard.html";
}



function logout() {
    alert("Logged out successfully!");
    window.location.href = "login.html";
}