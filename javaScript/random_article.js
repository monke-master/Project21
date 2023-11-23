document.getElementById("random_article_btn").addEventListener('click', function() {
    const id = getRandomArticleId();
    window.location.href = `../html/article.html?articleId=${id}`;
});