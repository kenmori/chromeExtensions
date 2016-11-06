chrome.contextMenus.create({
    "title" : "[%s]をInstagramで検索",
    "type": "normal",
    "contexts" : ["selection"],
    "onclick" : function(info){
        var url = 'https://www.instagram.com/explore/tags/' + encodeURIComponent(info.selectionText) + '/';
        //新しいtabを作る
        chrome.tabs.create({
            url: url
        })
    }
})