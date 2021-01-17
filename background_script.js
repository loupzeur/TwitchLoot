chrome.browserAction.setBadgeText({text: "0"});
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    console.log(message,sender);
    chrome.browserAction.getBadgeText({},function(t){
        var nb = parseInt(t)+1;
        chrome.browserAction.setBadgeText({text: nb.toString()});
    });
});

chrome.browserAction.onClicked.addListener(function(activeTab)
{
    chrome.tabs.create({ url: "https://www.twitch.tv/" });
});