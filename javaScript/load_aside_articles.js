function getBestArticles() {
    var articles = JSON.parse(localStorage.getItem('bestArticles')) || [];
    articles.sort((a, b) => b.publicationDate - a.publicationDate);
    return articles;  
}

function loadArticles() {
    const containerId = "side"
    const articles = getBestArticles();
    
    for (const index in articles) {
        createAsideAticle(articles[index], containerId);
    }
}


loadArticles()