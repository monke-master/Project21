function getAllArticles() {
    var articles = JSON.parse(localStorage.getItem('articles')) || [];
    articles.sort((a, b) => b.publicationDate - a.publicationDate);
    return articles;  
}

function loadArticles() {
    const containerId = "content"
    const articles = getAllArticles();
    
    for (const index in articles) {
        createArticleElement(articles[index], containerId);
    }
}


loadArticles()