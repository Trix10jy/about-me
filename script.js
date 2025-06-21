// Przełączanie motywu
document.getElementById('toggle-theme').onclick = () => {
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
};
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
}

// Particles - ciemne i subtelne
particlesJS('particles-js', {
  particles: {
    number: { value: 60 },
    color: { value: "#202020" },
    shape: { type: "circle" },
    opacity: {
      value: 0.15,
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    move: {
      enable: true,
      speed: 0.5
    }
  },
  interactivity: {
    events: {
      onhover: { enable: false },
      onclick: { enable: false }
    }
  },
  retina_detect: true
});

// Licznik odwiedzin
let count = localStorage.getItem('visits') || 0;
count++;
localStorage.setItem('visits', count);
document.getElementById('visitorCount').innerText = count;

// Discord status (jeśli chcesz)
fetch('1349305093211684887')
  .then(res => res.json())
  .then(data => {
    const status = data.data.discord_status;
    const activities = data.data.activities?.[0]?.name || 'Offline';
    document.getElementById('discord-status').innerText =
      `Status: ${status}, gra: ${activities}`;
  })
  .catch(() => {
    document.getElementById('discord-status').innerText = "Brak danych Discorda";
  });
