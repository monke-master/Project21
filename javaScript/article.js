function getArticleId() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('articleId');
}

function getArticleById(id) {
    const articles = JSON.parse(localStorage.getItem('articles')) || [];
    return articles.find(article => article.id === id);
}


function initArticleData(article) {
    document.getElementById("hdr_title").innerText = article.title;
    document.getElementById("text_event_date").innerText = `Дата события: ${article.eventDate}`;
    document.getElementById("text_publish_date").innerText = `Опубликовано ${formatDate(article.publicationDate)}`;
    document.getElementById("img_article").src = article.photoPath;
    document.getElementById("text_article").innerText = article.text;
}


initArticleData(getArticleById(getArticleId()));


