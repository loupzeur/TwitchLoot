function clickedstuff(){
    var t = document.getElementsByClassName('tw-button tw-button--success');
    if(t.length>0){
        t[0].click();
        chrome.runtime.sendMessage({isLooted:true})
    }
    setTimeout(clickedstuff,5000);
}
clickedstuff();