if($(".vcard-username").text){
    chrome.runtime.sendMessage({msg: 'hello there'});
    chrome.tabs.sendMessage(1,{msg: 'hello there'});
}