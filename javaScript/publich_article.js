const photosPath = [
    'bagirov.jpg',
    'yarilo.jpg',
    'lizard.jpg',
    'stratching.jpg'
]

function initPhotos(images) {
    const galleryContainer = document.querySelector('.image-gallery');

    images.forEach(image => {
      const imgContainer = document.createElement('div');
      imgContainer.classList.add('image-container');
  
      const imgElement = document.createElement('img');
      imgElement.src = "../res/drawable/" + image;
      imgElement.classList.add('gallery-image');
      // Выделение изображения при выборе
      imgElement.addEventListener('click', function() {
        document.querySelectorAll('.gallery-image').forEach(img => img.classList.remove('selected'));   
        imgElement.classList.add('selected');
      });
  
      imgContainer.appendChild(imgElement);
      galleryContainer.appendChild(imgContainer);
    });
}

initPhotos(photosPath);