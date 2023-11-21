function addComment(text) {
    const articleId = getArticleId();
    const article = getArticleById(articleId);
    const comment = {
        authorEmail: article.authorEmail,
        text: text,
        date: (new Date).getTime() 
    }

    article.comments.push(comment);
    const articles = JSON.parse(localStorage.getItem('articles')) || [];
    const articleIndex = articles.find(a => a.id === articleId);
    article[articleIndex] = article;
    localStorage.setItem('articles', JSON.stringify(articles));
}


function checkCommentText() {
    let text = document.getElementById('edit_text_comment').value;
    if (text === "") {
        alert("Введите текст комментария!");
        return false;
    } else
        return text;       
  }

document.getElementById("comment_btn").addEventListener('click', function() {
    let text = checkCommentText();
    if (text) {
      addComment(text);
    } 
})



function loadComments() {
    const articleId = getArticleId();
    const article = getArticleById(articleId);

    for (const index in article.comments) {
        createCommentElement(article.comments[index], "container_comments", getUserByEmail(article.comments[index].authorEmail));
    }
}


loadComments();



