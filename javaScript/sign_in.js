function getUserByEmail(email) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  return users.find(user => user.email === email);
}

function signIn(email, password) {
  
  const user = getUserByEmail(email);
  if (user == null) {
    alert("Пользователя с такой почтой не существует!");
  } else if (user.password != password) {
    alert("Неправильный пароль!");
  } else {
    localStorage.setItem('currentUser', JSON.stringify(user));
    window.location = '../html/account.html'
  }
}

function checkEmail() {
  let email = document.getElementById('edit_text_email').value;
  if (email === "") {
      alert("Введите email!");
      return false;
  } else
      return email;       
}

function checkPassword() {
  let password = document.getElementById('edit_text_psw').value;
  if (password === "") {
      alert("Введите пароль!");
      return false;
  } else 
      return password;       
}

document.getElementById("sign_up_btn").addEventListener('click', function() {
  window.location = '../html/sign_up.html'
})

document.getElementById("sign_in_btn").addEventListener('click', function() {
  let email = checkEmail();
  let password = checkPassword();
  if (email && password) {
    signIn(email, password);
  }
  
})

