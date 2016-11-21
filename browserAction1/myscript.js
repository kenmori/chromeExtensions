var subscribeText = document.getElementsByName('subscribeText');


document.getElementById('save').onclick = function(){
    if (subscribeText[0] !== ""){
        localStorage['text'] = subscribeText[0].value;
    } else {
        localStorage['text'] = 'ラーメン';
    }
}

document.body.onload = function(){
    switch (localStorage['text']){
        default:
            alert(localStorage['text']);
            break;
    }
}