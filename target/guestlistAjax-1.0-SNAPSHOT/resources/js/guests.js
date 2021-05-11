$(function () {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var first = $("#first").val();
    var last = $("#last").val();

    $.ajax("guest.ajax", {
        "type": "post",
        "data": {
            "first": first,
            "last": last
        }
    }).done(displayGuests);
}

function displayGuests(data) {
    let dataReceived = JSON.stringify(data);
    let object = JSON.parse(dataReceived);
    $("#guestList").append(object[object.length-1].first+" "+object[object.length-1].last+"<br>");

}