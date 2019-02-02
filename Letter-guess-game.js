'use strict'

$(document).ready(function() {
    $("#Test-button").click (function() {
        $(".Link-test").html("DOES WORK PLZ??");
        $(".Link-test").css('background', 'black');
        $(".Link-test").css('color', 'pink');
    });
});