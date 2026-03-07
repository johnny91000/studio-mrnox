/* --- GESTION DU CURSEUR ET DES ÉTINCELLES --- */

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // 1. Déplacer le halo diffus (Méthode ultra-fluide)
    const glow = document.getElementById('cursor-glow');
    if (glow) {
        // On utilise translate3d pour que la carte graphique gère le mouvement
        glow.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
    }

    // 2. Créer l'effet Fée Clochette (étincelles)
    // On limite légèrement la création pour garder de la performance
    if (Math.random() > 0.1) {
        createSparkle(x, y);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    document.body.appendChild(sparkle);

    // Taille aléatoire plus petite pour plus de finesse
    const size = Math.random() * 4 + 2;
    sparkle.style.width = size + 'px';
    sparkle.style.height = size + 'px';

    // Couleur aléatoire entre bleu et rose
    const color = Math.random() > 0.5 ? '#00d2ff' : '#ff2d95';
    sparkle.style.backgroundColor = color;
    sparkle.style.boxShadow = `0 0 10px ${color}`;

    // Position initiale fixe
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';

    // Direction d'éparpillement
    const destX = (Math.random() - 0.5) * 120;
    const destY = (Math.random() - 0.5) * 120;

    // Animation plus courte (700ms) pour un effet plus dynamique
    const animation = sparkle.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
        { transform: `translate(${destX}px, ${destY}px) scale(0)`, opacity: 0 }
    ], {
        duration: 700,
        easing: 'ease-out'
    });

    // Suppression propre dès que l'animation finit
    animation.onfinish = () => sparkle.remove();
}