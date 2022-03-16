//bot token
var telegram_bot_id = "5202340865:AAEVXrBavgDDUbWJBB7e5vCJTAdj5Kc1F3E";
//chat id
var chat_id = -758324498;
var name, number, date;
var ready = function () {
    name = document.getElementById("name").value;
    number = document.getElementById("number").value;
    problem = document.getElementById("problem").value;
    date = document.getElementById('date').value;
    message = "Branch name---->:" + name + "\nComputer ID----->:" + number + "\nDate request----->: " + date  + "\nRemark problem->:" + problem + "\n--------------------------------";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("problem").value = "";
    document.getElementById('date').value = ;
return false;
};