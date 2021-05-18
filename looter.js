function clickedstuff(){
    var t = document.querySelectorAll('.tw-button .tw-button--success');
    if(t.length>0){//old one
        t[0].click();
        chrome.runtime.sendMessage({isLooted:true})
    }
    t = document.querySelectorAll('.community-points-summary button[class^=ScCoreButton]')
    if(t.length>1){//old new one
        t[1].click();
        chrome.runtime.sendMessage({isLooted:true})
    }
    setTimeout(clickedstuff,5000);
}
clickedstuff();