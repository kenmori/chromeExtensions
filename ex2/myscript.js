function changeColor (color){
    //第1引数: null 現在のタブに対して、
    //第3引数: callback これが終わったら実行される関数
    chrome.tabs.executeScript(null, {
        "code" : "document.body.style.backgroundColor='"+ color +"'"
    })
}

document.getElementById('red').onclick= function(){
    changeColor('red');
}

document.getElementById('yellow').onclick= function(){
    changeColor('yellow');
}
