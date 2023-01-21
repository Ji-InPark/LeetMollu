function injectHideScript(tabId, js) {
  chrome.scripting.executeScript({
      target: {tabId: tabId},
      files: [js],
    }
  );
}

// adds a listener to tab change
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url.match('https://leetcode.com/problems/.*/submissions/')) {
    injectHideScript(tabId, 'hideSubmission.js');
  }
});