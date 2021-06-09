let joinTabsButton = document.getElementById('joinTabs');

joinTabsButton.onclick = () => {
    chrome.windows.getCurrent(window => {
        chrome.tabs.query({}, (tabs) => {
            for (let tab of tabs){
            chrome.tabs.move(tab.id, {windowId: window.id, index:-1})
            }
        })
    });
}
