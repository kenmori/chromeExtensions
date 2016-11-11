//https://developer.chrome.com/extensions/api_index

//page Action ?
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if(tab.url.indexOf('kenjimorita') != -1){
        //page Action
        //kenjimoritaの文字列があったら実行される
        chrome.pageAction.show(tabId);
        console.log(tabId)
    }
});

// clicked ?
chrome.pageAction.onClicked.addListener(function(){
    chrome.tabs.executeScript(null, {
        "code" : "document.body.style.backgroundColor='red'"
    });
});




