function myFunction() {
    let username = document.getElementById("usernamefunc").value;
    let password = document.getElementById("passwordfunc").value;
    if (username == "mastertech" && password == "mastertech") {
        location.href = 'indexx.html';
    }
    else {
        alert('Wrong Username or Password!');
    }

}