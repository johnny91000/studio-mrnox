(function () {
    const validSources = ["studio.html", "contact.html", "accueil.html", "creations.html", 'legal.html', 'apropos.html'];

    const referrer = document.referrer;

    const isAuthorized = validSources.some(source => referrer.includes(source));
    if (!referrer || !isAuthorized) {
        window.location.replace("../accueil.html");
    }
})();