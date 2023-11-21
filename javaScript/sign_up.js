function signUp(username, email, password) {
    const user = {
        username: username,
        email: email,
        password: password,
        articles: []
    };

    localStorage.setItem('currentUser', JSON.stringify(user));
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

function checkUsername() {
    let username = document.getElementById('edit_txt_username').value;
    if (username === "") {
        alert("Введите ник!");
        return false;
    } else 
        return username;       
}

function checkEmail() {
    let email = document.getElementById('edit_txt_email').value;
    if (email === "") {
        alert("Введите email!");
        return false;
    } else
        return email;       
}


function checkPassword() {
    let password = document.getElementById('edit_txt_psw').value;
    let passwordRepeated = document.getElementById('edit_txt_psw_repeat').value;
    if (password === "") {
        alert("Введите пароль!");
        return false;
    } else if (password != passwordRepeated) {
        alert("Пароли не совпадают!");
        return false;
    }
     else 
        return password;       
}


document.getElementById("sign_in_btn").addEventListener('click', function() {
    window.location = '../html/sign_in.html'
})

document.getElementById("sign_up_btn").addEventListener('click', function() {
    let username = checkUsername();
    let email = checkEmail();
    let password = checkPassword();
    if (username && email && password) {
        signUp(username, email, password);
        window.location = '../html/account.html';
    }
})