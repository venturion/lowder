chrome.browserAction.disable();

var execute = {
    file: "js/stop.js"
};

var abas = [];

chrome.commands.onCommand.addListener(function(command) {
    executar(command);
    console.log("comand: " + command);
});

function executar(command) {
    var tab;

    execute.file = "js/" + command + ".js";

    chrome.tabs.query({}, function(tabs) {
        for (var i = 0; i < tabs.length; i++) {
            tab = tabs[i];
            if (!tab.active) {
                chrome.tabs.executeScript(tab.id, execute, function() {});
            }
            abas[i] = tab;
        }
    });
}
