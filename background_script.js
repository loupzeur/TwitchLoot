//chrome.browserAction.setBadgeText({text: "0"});
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    console.log(message,sender);
    if(message!==undefined && message.isLooted && sender.origin.match(/.*twitch.*/)!=null){
        var tabId = sender.tab.id
        chrome.browserAction.getBadgeText({tabId:tabId},function(t){
            var nb = parseInt(t);
            if(!nb>0){nb=0;}
            nb++;
            chrome.browserAction.setBadgeText({tabId:tabId,text: nb.toString()});
        });
    }
});

chrome.browserAction.onClicked.addListener(function(activeTab)
{
    chrome.tabs.create({ url: "https://www.twitch.tv/" });
});