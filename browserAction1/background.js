chrome.browserAction.onClicked.addListener(function(){
    var text = localStorage['text'] ? localStorage['text'] : 'ラーメン';
    console.log(text);
    chrome.tabs.executeScript(null, {
        "code" : "var obj = text; obj"
    },
    function(result){
        alert(result);
    });
});


