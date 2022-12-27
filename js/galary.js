    // Add the lightbox effect to the images
    const images = document.querySelectorAll('.grid img');
    images.forEach(image => {
      image.addEventListener('click', e => {
        const lightbox = document.querySelector('#lightbox');
        lightbox.querySelector('img').src = e.target.src;
        lightbox.querySelector('p').innerHTML = e.target.alt;
        lightbox.style.visibility = 'visible';
        lightbox.style.opacity = '1';
      });
    });
    
    // Close the lightbox when the close button is clicked
    const closeBtn = document.querySelector('#close-btn');
    closeBtn.addEventListener('click', e => {
      const lightbox = document.querySelector('#lightbox');
      lightbox.style.visibility = 'hidden';
      lightbox.style.opacity = '0';
    });
    
    // Close the lightbox when the background is clicked
    const lightbox = document.querySelector('#lightbox');
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) {
        lightbox.style.visibility = 'hidden';
        lightbox.style.opacity = '0';
      }
    });
    