document.getElementById("submit").onclick = function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === 'Denmarc' && password === 'ICCT') {
        window.location.href = "2nd page.html";
    } else {
        window.alert("Username is incorrect.");
    }
};