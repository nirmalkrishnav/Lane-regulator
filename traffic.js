/**************
 * Title: Traffic Sim
 * Author: Nirmal
 * Date: 10-26-2016
 * Version: 1.0
 */


var i = 1, lane1Speed = 2000, lane2Speed = 1500, lane3Speed = 1000;

function simBegin(spd) {
    $('#start-button').prop('disabled', true);
       $('#stop-button').prop('disabled', false);
    setInterval(function () {
        carStart();
    }, spd);
}

function simEnd() {
    clearInterval();
}


function carStart() {
    var car_id = i;
    i = i + 1;
    randomchords(car_id);
}
function randomchords(car_id) {
    var arr = [lane1, lane2, lane3, lane4, lane5, lane6],
        rand = Math.floor(Math.random() * 10),
        func = arr[rand];
    (func)(car_id);
}

//rewrite needed to pass lane id and car id along to a single function

function lane1(c_id) {
    $('#a1').append('<div class="car" id=' + c_id + '></div>');
    $('#' + c_id).animate({ top: '500px' }, lane1Speed, "linear");
    $('#' + c_id).remove;//not working
}
function lane2(c_id) {
    $('#a2').append('<div class="car" id=' + c_id + '></div>');
    $('#' + c_id).animate({ top: '500px' }, lane2Speed, "linear");
    $('#' + c_id).remove;//not working
}
function lane3(c_id) {
    $('#a3').append('<div class="car" id=' + c_id + '></div>');
    $('#' + c_id).animate({ top: '500px' }, lane3Speed, "linear");
    $('#' + c_id).remove;//not working
}
function lane4(c_id) {
    $('#b1').append('<div class="car2" id=' + c_id + '></div>');
    $('#' + c_id).animate({ top: '-500px' }, lane1Speed, "linear");
    $('#' + c_id).remove;//not working
}
function lane5(c_id) {
    $('#b2').append('<div class="car2" id=' + c_id + '></div>');
    $('#' + c_id).animate({ top: '-500px' }, lane2Speed, "linear");
    $('#' + c_id).remove;//not working
}
function lane6(c_id) {
    $('#b3').append('<div class="car2" id=' + c_id + '></div>');
    $('#' + c_id).animate({ top: '-500px' }, lane3Speed, "linear");
    $('#' + c_id).remove;//not working
}

