

document.addEventListener('mousemove', (e) => {
    const glow = document.getElementById('cursor-glow');
    if (glow) {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    }

    if (Math.random() > 0.1) {
        createSparkle(e.clientX, e.clientY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    document.body.appendChild(sparkle);

    const size = Math.random() * 4 + 2;
    sparkle.style.width = size + 'px';
    sparkle.style.height = size + 'px';

    const color = Math.random() > 0.5 ? '#00d2ff' : '#ff2d95';
    sparkle.style.backgroundColor = color;
    sparkle.style.boxShadow = `0 0 10px ${color}`;

    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';

    const destX = (Math.random() - 0.5) * 100;
    const destY = (Math.random() - 0.5) * 100;

    const animation = sparkle.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
        { transform: `translate(${destX}px, ${destY}px) scale(0)`, opacity: 0 }
    ], {
        duration: 700,
        easing: 'ease-out'
    });

    animation.onfinish = () => sparkle.remove();
}

document.addEventListener('touchstart', function (e) {
    const touch = e.touches[0];

    const ripple = document.createElement('div');
    ripple.className = 'touch-ripple';
    ripple.style.left = touch.pageX + 'px';
    ripple.style.top = touch.pageY + 'px';

    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}, false);


function changeLang(lang) {
    const elements = document.querySelectorAll('[data-en]');

    elements.forEach(el => {
        if (!el.dataset.fr) {
            el.dataset.fr = el.textContent.trim();
        }

        if (lang === 'en') {
            el.textContent = el.dataset.en;

            document.getElementById('btn-fr')?.classList.remove('active');
            document.getElementById('btn-en')?.classList.add('active');
        } else {
            el.textContent = el.dataset.fr;

            document.getElementById('btn-en')?.classList.remove('active');
            document.getElementById('btn-fr')?.classList.add('active');
        }
    });

    localStorage.setItem('preferred-lang', lang);
}


document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred-lang');
    if (savedLang) {
        setTimeout(() => changeLang(savedLang), 10);
    }

    document.getElementById("year").textContent = new Date().getFullYear();
});