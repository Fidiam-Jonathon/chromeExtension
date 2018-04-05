
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Changing fontSize of ' + tab.url);
  chrome.tabs.executeScript({
    file: "contentScript.js"
  });

   console.log('Changing fontColor of ' + tab.url);
  chrome.tabs.executeScript({
    file: "contentScript1.js"
  });

   console.log('Changing bgColor of ' + tab.url);
  chrome.tabs.executeScript({
    file: "contentScript2.js"
  });
});

var save = document.getElementById("save");

apply.addEventListener(()=>{
	let fontSize = document.getElementById("fontSize").value;
	let fontColor = document.getElementById("fontColor").value;
	let bgColor = document.getElementById("dropdown").value;

	chrome.storage.local.set("fontSize", fontSize);
	chrome.storage.local.set("fontColor", fontColor);
	chrome.storage.local.set("bgColor", bgColor);
});