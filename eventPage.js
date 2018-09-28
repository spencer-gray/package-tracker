var contextMenuItem = {
    "id": "packageTracker",
    "title": "PackageTracker",
    "contexts": ["selection"]
};
chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    if (clickData.menuItemId == "packageTracker" && clickData.selectionText){

       window.open("https://t.17track.net/en#nums=" + clickData.selectionText);
    }
})
