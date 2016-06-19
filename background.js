chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        // When a page contains .vcard-username(class name) tag...
        new chrome.declarativeContent.PageStateMatcher({
          css: [".vcard-username"]
        })
      ],
      // ... show the page action.
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});