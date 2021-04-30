var r = document.getElementById('ext-gen101').contentWindow.document.getElementById('ext-gen39')
r.addEventListener("click", function() {
	console.log("Online Click");
	chrome.runtime.sendMessage({message: "R"});
});