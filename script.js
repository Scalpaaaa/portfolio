const toggleBtn = document.querySelector('.bouton-theme');
const body = document.body;
const icon = toggleBtn.querySelector('i');

if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-mode');
  icon.classList.remove('fa-moon');
  icon.classList.add('fa-sun');
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  const isLight = body.classList.contains('light-mode');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});

document.addEventListener('DOMContentLoaded', () => {
  const avatar = document.querySelector('.avatar');
  const quackSound = new Audio('./audio/duck.mp3');
  avatar?.addEventListener('mouseenter', () => {
    quackSound.currentTime = 0;
    quackSound.play();
  });

  const sendButton = document.querySelector('.contact-formulaire button');
  const sendSound = new Audio('./audio/nope.mp3');
  sendButton?.addEventListener('click', () => {
    sendSound.currentTime = 0;
    sendSound.play();
  });

  const chaosBtn = document.getElementById('danger-btn');
  if (chaosBtn) {
    chaosBtn.addEventListener('click', () => {
      alert("💥 MODE CHAOS ACTIVÉ 💥");
      document.body.classList.toggle('chaos');
    });
  }

  function creerPluieDeCaca() {
    const caca = document.createElement('div');
    caca.classList.add('emoji-caca');
    caca.textContent = '💩';
    caca.style.left = Math.random() * 100 + 'vw';
    caca.style.animationDuration = (Math.random() * 2 + 3) + 's';
    document.body.appendChild(caca);

    caca.addEventListener('animationend', () => {
      caca.remove();
      const cacaSound = new Audio('./audio/plop.mp3');
      cacaSound.play();
    });
  }

  setInterval(creerPluieDeCaca, 300);
});

const anniversaireMelodie = [
  'do', 'do', 're', 'do', 'fa', 'mi',
  'do', 'do', 're', 'do', 'sol', 'fa',
  'do', 'do', 'do', 'la', 'fa', 'mi', 're',
  'si', 'si', 'la', 'fa', 'sol', 'fa'
];

let anniversairejouer = false;

document.addEventListener('keydown', () => {
  if (!anniversairejouer) {
    anniversairejouer = true;
    jouerAnniversaire(0);
  }
});

function jouerAnniversaire(index) {
  if (index >= anniversaireMelodie.length) {
    anniversairejouer = false;
    return;
  }

  const note = anniversaireMelodie[index];
  const audio = new Audio(`./audio/${note}.mp3`);
  audio.play();

  setTimeout(() => {
    jouerAnniversaire(index + 1);
  }, 400);
}
