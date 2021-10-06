
$(function () {
    $("#menu").menu();
});
function initMap() {
    var op = { lat: -36.972764, lng: 175.851511 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: op
    });
    var marker = new google.maps.Marker({
        position: op,
        map: map
    });
}
