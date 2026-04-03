/**
 * @param {*}
 * @description la redirection selon un target sans avoir besoin d'avoir 100 variable pour redirection
 * @returns Button Destination URL 
 */


document.addEventListener("click", (e) => {
    const target = e.target.closest("[data-redirection]");

    if (!target) return;

    let destination = target.getAttribute("data-redirection");
    if (!destination) return;

    let isInPagesFolder = window.location.pathname.includes('/pages/');

    if (destination === "accueil") {
        window.location.href = isInPagesFolder ? "../accueil.html" : "accueil.html";
    } else {
        window.location.href = isInPagesFolder ? "./" + destination + ".html" : "./pages/" + destination + ".html";
    }
});