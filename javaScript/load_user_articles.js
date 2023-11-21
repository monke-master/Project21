function getAllArticles() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || [];
    const articles = currentUser.articles;
    articles.sort((a, b) => b.publicationDate - a.publicationDate);
    return articles;  
}

function loadArticles() {
    const containerId = "container_articles"
    const articles = getAllArticles();
    
    for (const index in articles) {
        createArticleElement(articles[index], containerId);
    }
}


loadArticles()