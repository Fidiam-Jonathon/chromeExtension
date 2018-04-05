var save = document.getElementById("save");

apply.addEventListener(()=>{
	let fontSize = document.getElementById("fontSize").value;
	let fontColor = document.getElementById("fontColor").value;
	let bgColor = document.getElementById("dropdown").value;

	chrome.storage.local.set("fontSize", fontSize);
	chrome.storage.local.set("fontColor", fontColor);
	chrome.storage.local.set("bgColor", bgColor);
});