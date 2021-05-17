function clickedstuff(){
    var t = document.querySelectorAll('.tw-button .tw-button--success, button[class^=ScCoreButton]');
    if(t.length>0){
        t[0].click();
        chrome.runtime.sendMessage({isLooted:true})
    }
    setTimeout(clickedstuff,5000);
}
clickedstuff();