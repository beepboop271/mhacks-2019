console.log("ASDASDASD");

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.msg === "note") {
            let name = window.location.hostname.replaceAll(`./g`, "-");
            let projectName = "first-project";
             postNoteData({
                path: projectName + "***" + name,
                phrase: request.data.selection,
                index: 0,
                comment: "no comment",
                url: window.location.href
            });
        }
});

function postNoteData(data) {
    fetch("http://127.0.0.1/new/note", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}