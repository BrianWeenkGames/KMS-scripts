// ==UserScript==
// @name         voertuiglimitbalk
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Scheelt klikjes bij inladen van de voertuigenlijst!
// @author       brianweenk
// @match        https://www.meldkamerspel.com/missions/*
// @grant        none
// ==/UserScript==
 
(function() {

// vul hier de aantal keer in dat de balk automatisch ingedrukt moet worden.

    const numberOfTimes = 3;

// hieronder niks meer aanpassen! anders werkt het script niet meer!!

    let clickCount = 0; 
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && (mutation.attributeName === 'class' || mutation.attributeName === 'style')) {
                const button = document.querySelector('a.missing_vehicles_load');
                if (button && button.classList.contains('btn-warning') && button.style.display !== 'none') {
                    clickMissingVehiclesLoad();
                }
            }
        });
    });

    function clickMissingVehiclesLoad() {
        const button = document.querySelector('a.missing_vehicles_load');
        if (button && !button.disabled && clickCount < numberOfTimes) {
            button.click();
            clickCount++;
        }
    }

    // Begin met observeren
    const config = { attributes: true, attributeFilter: ['class', 'style'], childList: false, subtree: false };
    const targetNode = document.querySelector('a.missing_vehicles_load');
    if (targetNode) {
        observer.observe(targetNode, config);
        clickMissingVehiclesLoad(); // Voer de functie de eerste keer uit
    }
})();
