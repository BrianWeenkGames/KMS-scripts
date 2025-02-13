// ==UserScript==
// @name [MKS]Voertuigen ter plaatse
// @namespace http://tampermonkey.net/
// @version 1.0
// @description Overzicht hoeveel voertuigen je aanwezig / aanrijdend hebt bij een melding!
// @author NHendriks01 - Edited by Brianweenk
// @match https://www.meldkamerspel.com/missions/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @downloadURL https://raw.githubusercontent.com/NHendriks01/LSS-MKS/main/Voertuigen_ter_plaatse.user.js
// @updateURL https://raw.githubusercontent.com/NHendriks01/LSS-MKS/main/Voertuigen_ter_plaatse.user.js
// ==/UserScript==

var onSpot = $('#mission_vehicle_at_mission a.btn-backalarm-ajax').length;
var driving = $('#mission_vehicle_driving td.hidden-xs div.btn-group a.btn').length;
if(driving==1){
$('.alert-missing-vehicles').after('<div class="alert alert-warning">Je hebt één voertuig onderweg naar deze melding</div>');
}
if(driving>1){
$('.alert-missing-vehicles').after('<div class="alert alert-success">Je hebt '+driving+' voertuigen onderweg naar deze melding</div>');
}
if(onSpot==1){
$('.alert-missing-vehicles').after('<div class="alert alert-warning">Je hebt één voertuig ter plaatse</div>');
}
if(onSpot>1){
$('.alert-missing-vehicles').after('<div class="alert alert-success">Je hebt '+onSpot+' voertuigen ter plaatse</div>');
}
if(!onSpot && !driving){
$('.alert-missing-vehicles').after('<div class="alert alert-danger">Je hebt nog geen voertuigen naar deze melding gestuurd</div>');
}
