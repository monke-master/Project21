function createCommentElement(commentData, containerId, author) {
    // Create the article element
    const comment = document.createElement('div');
    comment.classList.add('comment');

    // Create and set attributes for the image element
    const image = document.createElement('img');
    image.classList.add("profile-picture");
    image.src = "../res/drawable/bagirov.jpg";
    image.alt = 'Article Image';

    const commentDetails = document.createElement('div');
    comment.classList.add('comment-details');

    const username = document.createElement('span');
    username.classList.add("username");
    username.innerText = author.username;

    const commentText = document.createElement('span');
    commentText.classList.add("comment-text");
    commentText.innerText = commentData.text;

    const commentDate = document.createElement('span');
    commentDate.classList.add("comment-date");
    commentDate.innerText = formatDate(commentData.date);

    commentDetails.appendChild(username);
    commentDetails.appendChild(commentText);
    commentDetails.appendChild(commentDate);

    // Append the created elements to the article
    comment.appendChild(image);
    comment.appendChild(commentDetails);

    // Find the container where you want to add the article and append the created article element
    const container = document.getElementById(containerId);
    container.appendChild(comment);

}