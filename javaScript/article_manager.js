function getArticlesList() {
    return JSON.parse(localStorage.getItem('articles')) || [];
}

function getRandomArticleId() {
    const articles = getArticlesList();
    const randomIndex = Math.floor(Math.random() * (articles.length));
    return articles[randomIndex].id;
}