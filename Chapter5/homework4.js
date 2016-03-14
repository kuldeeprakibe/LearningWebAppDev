var main = function() {
    "use strict";
    var count;
    var count2;
    var count3;
    var name123 = "";
    var name321 = "";
    document.getElementById("sample3").value = "";
    $.get("http://localhost:3000/actors", function(hand) {
        hand.forEach(function(hand) {
            if (count2 === true) {
                alert("Hello");
            } else {
                if (hand.starred === true) {
                    $('.demo-list-action').append('<div class="mdl-list__item"><span class="mdl-list__item-primary-content"><i class="material-icons mdl-list__item-avatar">person</i><span id=' + hand.id + '>' + hand.name + '</span></span><a class="mdl-list__item-secondary-action" ><i class="material-icons" >star</i></a><span class="mdl-list__item-secondary-action"><label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="list-switch-1"><input type="checkbox" id="list-switch-1" class="mdl-switch__input" checked="pqr();" /></label></span></div>');
                } else {
                    $('.demo-list-action').append('<div class="mdl-list__item"><span class="mdl-list__item-primary-content"><i class="material-icons mdl-list__item-avatar">person</i><span id=' + hand.id + '>' + hand.name + '</span></span><a class="mdl-list__item-secondary-action" ><i class="material-icons" >star_border</i></a><span class="mdl-list__item-secondary-action"><label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="list-switch-1"><input type="checkbox" id="list-switch-1" class="mdl-switch__input" checked="pqr(); /></label></span></div>');
                }
            }
        });
        count = hand.value[last];
    });
    function pqr() {
        $.get("http://localhost:3000/actors", function(hand) {
            count3 = hand.id[current];
            name321 = hand.id[current];
            if (hand.starred === true) {
                $.put("http://localhost:3000/actors", {
                    "id": count3,
                    "name": name123,
                    "starred": false
                });
            } else {
                $.put("http://localhost:3000/actors", {
                    "id": count3,
                    "name": name123,
                    "starred": true
                });
            }
        });
    }
    $('.mdl-button').on('click', function() {
        name123 = document.getElementById("sample3").value;
        $.post("http://localhost:3000/actors", {
            "id": count,
            "name": name123,
            "starred": false
        });
        $.get("http://localhost:3000/actors", function(hand) {
          if (hand.starred === true) {
              $('.demo-list-action').append('<div class="mdl-list__item"><span class="mdl-list__item-primary-content"><i class="material-icons mdl-list__item-avatar">person</i><span id=' + count + '>' + name123 + '</span></span><a class="mdl-list__item-secondary-action" ><i class="material-icons" checked>star</i></a></div>');
          } else {
              $('.demo-list-action').append('<div class="mdl-list__item"><span class="mdl-list__item-primary-content"><i class="material-icons mdl-list__item-avatar">person</i><span id=' + count + '>' + name123 + '</span></span><a class="mdl-list__item-secondary-action" ><i class="material-icons" >star_border</i></a></div>');
          }
        });
        count2 = true;
    });
};
$(document).ready(main);
