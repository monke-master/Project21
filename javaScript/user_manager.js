function getUserByEmail(email) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.email === email);
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('currentUser'));
}