chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .then(() => console.log('Panel behaviour configured'))
  .catch(error => console.error(error))
