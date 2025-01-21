
// ==UserScript==
// @name         Uncheck alliance chat
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Zorg er voor dat je niet perongeluk een bericht in de teamchat post bij een melding :)
// @author       BrianWeenk
// @match        https://www.meldkamerspel.com/missions/*
// @match        https://*.meldkamerspel.com/missions/*
// @grant        none
// ==/UserScript==

(async function () {
    'use strict';
    document.getElementById('mission_reply_alliance_chat').checked = false;
})();
