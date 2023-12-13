const typewriterElement = document.getElementById("typewriter");
const words = ["UX/UI Designer", "Front-end Developer", "Digital Marketer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    const text = isDeleting ? currentWord.substring(0, charIndex - 1) : currentWord.substring(0, charIndex + 1);

    typewriterElement.textContent = text;

    if (!isDeleting) {
        charIndex++;
    } else {
        charIndex--;
    }

    if (charIndex === currentWord.length + 1) {
        isDeleting = true;
    }

    if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    const typingSpeed = isDeleting ? 100 : 150; // Velocità di scrittura e cancellazione
    setTimeout(type, typingSpeed);
}

type(); // Avvia la funzione di scrittura


function closeMenu() {
    let menu = document.querySelector('.navbar-collapse');
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
    }
  }


  var modals = document.querySelectorAll('.caroselloclose');

  modals.forEach(function(modal) {
    modal.addEventListener('hidden.bs.modal', function() {
          var videoElement = modal.querySelector('video');
          console.log(videoElement)
          if (videoElement && !videoElement.paused) {
              videoElement.pause();
          }
      });
  });


  var modals = document.querySelectorAll('.caroselloclose');

  modals.forEach(function(modal) {
      var carousel = modal.querySelector('.carousel');
      var videos = modal.querySelectorAll('video');
  
      carousel.addEventListener('slide.bs.carousel', function() {
          // Interrompi la riproduzione di tutti i video nel carousel all'interno della modale
          videos.forEach(function(video) {
              if (!video.paused) {
                  video.pause();
              }
          });
      });
  });
  