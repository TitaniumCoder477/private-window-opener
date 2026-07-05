chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "open-private",
    title: "Open as Private...",
    contexts: ["page", "action"]  // "action" replaces invalid "tab"
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "open-private") {
    chrome.windows.create({
      url: tab.url,
      incognito: true,
      type: "normal"
    });
  }
});
