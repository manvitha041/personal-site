window.addEventListener('DOMContentLoaded', (event) => {
  const menuBtn = document.querySelector('.menu-button');
  const overlay = document.querySelector('.w-nav-overlay');

  setTimeout(() => {
    const target = document.getElementById('preloader');
    target.style.opacity = '0';
    target.addEventListener('transitionend', () => target.remove());
  }, 10);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      var element = document.querySelector(this.getAttribute('href'));
      var headerOffset = 100;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  });

  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Thank you for your submission! I'll get back to you soon."))
      .catch((error) => console.log(error));
  });

  menuBtn.addEventListener('click', function () {
    menuBtn.classList.add('w--open');
    // menu.style.display = 'block';
    overlay.style.display = 'block';
  });

  overlay.addEventListener('click', function () {
    menuBtn.classList.remove('w--open');
    // menu.style.display = 'none';
    overlay.style.display = 'none';
  });

  particlesJS('particles', {
    particles: {
      number: {
        value: 100,
        density: {
          enable: false,
          value_area: 4498.141557303954,
        },
      },
      color: {
        value: '#03cdac',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#03cdac',
        },
        polygon: {
          nb_sides: 6,
        },
      },
      opacity: {
        value: 0.7,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#eef2f5',
        opacity: 0.05,
        width: 1,
      },
      move: {
        enable: true,
        speed: 4,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
});
