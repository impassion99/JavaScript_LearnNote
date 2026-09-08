
// Momo notification, maybe I will add this back in near future
/*chrome.commands.onCommand.addListener((command) => {
  if (command === "say-hello") {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "momo.png", // 你可以放一個 128x128 的圖示
      title: "Hello World",
      message: "Triggered by hotkey!"
    });
  }
});*/ 

chrome.commands.onCommand.addListener((command) => {
  if (command === "open-popup") {
    chrome.action.openPopup();
  }
});
