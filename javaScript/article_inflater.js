function createArticleElement(articleData, containerId) {
    // Create the article element
    const article = document.createElement('article');
    article.classList.add('article');

    // Create and set attributes for the image element
    const image = document.createElement('img');
    image.src = articleData.photoPath;
    image.alt = 'Article Image';
    image.classList.add('article-image');

    // Create and set content for the heading element
    const title = document.createElement('h1');
    title.classList.add('article-title');
    title.textContent = articleData.title;

    // Create and set content for the description paragraph
    const description = document.createElement('p');
    description.classList.add('article-description');
    description.textContent = articleData.description;

    // Create and set content for the date paragraph
    const date = document.createElement('p');
    date.classList.add('article-date');
    date.textContent = 'Опубликовано ' + formatDate(articleData.publicationDate);

    // Append the created elements to the article
    article.appendChild(image);
    article.appendChild(title);
    article.appendChild(description);
    article.appendChild(date);

    // Find the container where you want to add the article and append the created article element
    const container = document.getElementById(containerId);
    container.appendChild(article);

    article.addEventListener('click', function() {
        window.location.href = `../html/article.html?articleId=${articleData.id}`;
    });
}