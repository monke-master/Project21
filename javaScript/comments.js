function addComment(text) {
    const articleId = getArticleId();
    const article = getArticleById(articleId);
    const comment = {
        authorEmail: article.authorEmail,
        text: text,
        date: (new Date).getTime() 
    };

    article.comments.push(comment);
    const articles = JSON.parse(localStorage.getItem('articles')) || [];
    const articleIndex = articles.findIndex(a => a.id === articleId);
    articles[articleIndex] = article;
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
      window.location.reload();
    } 
})



function loadComments() {
    const articleId = getArticleId();
    const article = getArticleById(articleId);

    const comments = article.comments;
    comments.sort((a, b) => b.date - a.date);
    for (const index in comments) {
        createCommentElement(comments[index], "container_comments", getUserByEmail(comments[index].authorEmail));
    }
}


loadComments();