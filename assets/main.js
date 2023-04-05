const menuBtn = document.querySelector('.menu-button');
const overlay = document.querySelector('.w-nav-overlay');
const target = document.getElementById('preloader');

const loadParticles = (url) => {
  const script = document.createElement('script');
  script.src = url;
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);

  script.onload = renderParticles;
};
const renderParticles = () => {
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
        color: '#F8F8FF',
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
};
const hidePreLoader = () => {
  setTimeout(() => target.remove(), 1500);
  try {
    target.style.opacity = '0';
    target.addEventListener('transitionend', () => target.remove());
  } catch (error) {}
};
setTimeout(hidePreLoader, 10);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const element = document.querySelector(this.getAttribute('href'));
    const headerOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
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
  }).then(() => alert("Thank you for your submission! I'll get back to you soon."));
});
menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('w--open');
  overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
});
overlay.addEventListener('click', function () {
  menuBtn.classList.remove('w--open');
  overlay.style.display = 'none';
});

if (!window.matchMedia('(max-width: 767px)').matches)
  loadParticles('https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js');

(function () {
  const fonts =
    "@font-face{font-family:Italiana;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/italiana/v16/QldNNTtLsx4E__B0XQmWaXx0xKVu.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Raleway;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v28/1Ptug8zYS_SKggPNyCAIT4ttDfCmxA.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Raleway;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v28/1Ptug8zYS_SKggPNyCkIT4ttDfCmxA.woff2) format('woff2');unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Raleway;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v28/1Ptug8zYS_SKggPNyCIIT4ttDfCmxA.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Raleway;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v28/1Ptug8zYS_SKggPNyCMIT4ttDfCmxA.woff2) format('woff2');unicode-range:U+0100-02AF,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Raleway;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v28/1Ptug8zYS_SKggPNyC0IT4ttDfA.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Raleway;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v28/1Ptug8zYS_SKggPNyCAIT4ttDfCmxA.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Raleway;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v28/1Ptug8zYS_SKggPNyCkIT4ttDfCmxA.woff2) format('woff2');unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Raleway;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v28/1Ptug8zYS_SKggPNyCIIT4ttDfCmxA.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Raleway;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v28/1Ptug8zYS_SKggPNyCMIT4ttDfCmxA.woff2) format('woff2');unicode-range:U+0100-02AF,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Raleway;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v28/1Ptug8zYS_SKggPNyC0IT4ttDfA.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Raleway;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v28/1Ptug8zYS_SKggPNyCAIT4ttDfCmxA.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Raleway;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v28/1Ptug8zYS_SKggPNyCkIT4ttDfCmxA.woff2) format('woff2');unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Raleway;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v28/1Ptug8zYS_SKggPNyCIIT4ttDfCmxA.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Raleway;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v28/1Ptug8zYS_SKggPNyCMIT4ttDfCmxA.woff2) format('woff2');unicode-range:U+0100-02AF,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Raleway;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v28/1Ptug8zYS_SKggPNyC0IT4ttDfA.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}";

  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');

  head.appendChild(style);
  style.type = 'text/css';
  style.appendChild(document.createTextNode(fonts));
})();
