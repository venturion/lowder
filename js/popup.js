/*
var execute = {
  file : "js/stop.js"
};

var abas = [];


document.addEventListener('DOMContentLoaded', function() {

  var tab, tipo;

  execute.file = "js/stop.js";

  chrome.tabs.query({}, function(tabs){

    for(var i = 0; i < tabs.length; i++){
      //console.log(tabs[i].title);
      tab = tabs[i];

      if(!tab.active){
        //chrome.tabs.executeScript(tab.id, execute, function(){});
      }
      
      //incrementBadge(i);

      abas[i] = tab;

    }

    onMuted(abas, tipo);

  });
  
});

function incrementBadge(i){

  chrome.browserAction.setBadgeBackgroundColor({color:[0, 200, 0, 100]});

  chrome.browserAction.setBadgeText({text:String(i)});

}

function onMuted(abas, tipo){
  
  var notification = {
    "type": "basic",
    "iconUrl": "img/icon.png",
    "title": "Lowder",
    "isClickable": false,
    "eventTime" : Date.now(),
    "message": ""    
  };

  for(var i = 0; i < abas.length; i++){
    
    var tab = abas[i];

    notification.message = notification.message + "\n" + tab.title; 

  }

  $("#status").html(notification.message);  

  notification.message = "Audio " + tipo + "!";
  
  chrome.notifications.create("Lowder", notification, function(id){
    clearNotifications(id);
  });

}

function clearNotifications(id){
    var time = 10000;
    
    window.setTimeout(function(){
      chrome.notifications.clear(id, function(){} );
    }, time);

}
*/