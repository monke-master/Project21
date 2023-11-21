function signOut() {
    localStorage.setItem('currentUser', null);
}


function initElements(user) {
    document.getElementById("sign_out_btn").addEventListener('click', function() {
        signOut();
        window.location = '../html/sign_up.html'
    })
    setUserData(user);
}

function setUserData(user) {
    document.getElementById("hdr_username").innerText = user.username;
}


function checkLoginStatus() {
    const userDataString = localStorage.getItem('currentUser');
    const user = JSON.parse(userDataString);
    if (user == null) {
        window.location = '../html/sign_up.html';
    } else {
        document.getElementById('content').style.display = 'block';
        initElements(user);
    }
}

checkLoginStatus()
