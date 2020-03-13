function sendMessageToContentScript(message, callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
            if (callback) callback(response);
        });
    });
}
sendMessageToContentScript({ cmd: 'test', value: 'test' }, function (videoType) {
    var boxEl = document.getElementsByTagName('ul')[0]
    var videoStr = ''
    videoType.forEach(item => {
        videoStr += "<li>" + "<label>Chất lượng pỏn：" + "<span>" + item.key + "</span>" + "</label>" + "<a href=" + item.val + " target='_blank'>Tải xuống :))</a>" + "</li>"
    });
    boxEl.innerHTML = videoStr
});

function clickCounter() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "Bạn đã nhấn vào nút trên " + localStorage.clickcount + " lần.";
    } else {
        document.getElementById("result").innerHTML = "Rất tiếc, trình duyệt của bạn không hỗ trợ Local Storage...";
    }
}