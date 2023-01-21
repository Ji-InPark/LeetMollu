let observer = new MutationObserver(() => {
  const submissionContainer = document.querySelector('[class^="result-container"]')
  const testCases = submissionContainer.querySelectorAll('[class*="RowContainer"]')
  const detailLink = submissionContainer.querySelector('[class^="detail-link"]')

  testCases.forEach((it) => it.remove())
  detailLink.remove()
});

observer.observe(document, {childList: true, subtree: true});