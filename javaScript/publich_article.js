function generateId() {
    return Math.random().toString(36) // Generates a random string ID
}


const photosPath = [
    'protests.jpg',
    'war.jpg',
    'pandemia.jpg',
    'teract.jpg',
    "ai.jpg",
    "science.jpg",
    "racket.jpg",
    "earth.jpg",
    "war2.jpg",
    "archeology.jpg",
    "books.jpg"
]

var pickedPhotoPath = ""

function initPhotos(images) {
    const galleryContainer = document.querySelector('.image-gallery');

    images.forEach(image => {
      // Создание контейнера
      const imgContainer = document.createElement('div');
      imgContainer.classList.add('image-container');

      // Создание изображения
      const imgElement = document.createElement('img');
      imgElement.src = "../res/drawable/" + image;
      imgElement.classList.add('gallery-image');

      // Выделение изображения при выборе
      imgElement.addEventListener('click', function() {
        document.querySelectorAll('.gallery-image').forEach(img => img.classList.remove('selected'));   
        imgElement.classList.add('selected');
        pickedPhotoPath = imgElement.src;
      });
  
      // Добавление элемента в документ
      imgContainer.appendChild(imgElement);
      galleryContainer.appendChild(imgContainer);
    });
}

function checkTitle() {
    let text = document.getElementById('edit_text_title').value;
    if (text === "") {
        alert("Слишком короткое название для хорошей статьи!");
        return false;
    } else
        return text;    
}

function checkDate() {
  let date = document.getElementById('edit_text_date').value;
  if (date === "") {
      alert("Выберите дату!");
      return false;
  } else
      return date;    
}


function checkDescription() {
    let text = document.getElementById('edit_text_descr').value;
    if (text === "") {
        alert("Слишком короткое описание для хорошей статьи!");
        return false;
    } else
        return text;    
}

function checkText() {
    let text = document.getElementById('edit_text_event').value;
    if (text === "") {
        alert("Слишком мало текста для хорошей статьи!");
        return false;
    } else
        return text;    
}

function createArticle(date, text, description, title) {
    const userDataString = localStorage.getItem('currentUser');
    const author = JSON.parse(userDataString);
    const article = {
        id: generateId(),
        title: title,
        photoPath: pickedPhotoPath,
        eventDate: date,
        text: text, 
        description: description,
        publicationDate: (new Date()).getTime(),
        authorEmail: author.email,
        likes: 0,
        comments: []
    }

    // Добавление статьи в список статей пользователя
    author.articles.push(article);
    localStorage.setItem('currentUser', JSON.stringify(author));


    // Добавление статьи в список статей сайта
    const articles = JSON.parse(localStorage.getItem('articles')) || [];
    articles.push(article);
    localStorage.setItem('articles', JSON.stringify(articles));


    // Обновление списка пользователей
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const authorIndex = users.findIndex(user => user.email === author.email);
    users[authorIndex] = author;

}

document.getElementById("send_btn").addEventListener('click', function() {
    let date = checkDate();
    let text = checkText();
    let description = checkDescription();
    let title = checkTitle();
    if (pickedPhotoPath === "")
        alert("Вы не выбрали фото!")
    else if (date && text && description && title) {
      createArticle(date, text, description, title);
      window.location = '../html/main.html';
    }
   
})

function checkUser() {
    if (getCurrentUser() == null) {
        window.location.href = "../html/sign_up.html";
    }
    else {
        document.getElementById("content").style.display = "block";
    }
}

checkUser();

initPhotos(photosPath);
