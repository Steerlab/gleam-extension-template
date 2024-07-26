export async function handleOAuthFlow(url) {
  const response = await chrome.identity.launchWebAuthFlow({ url, interactive: true })
  return response
}

export function getAuthEndpoint(endpoint) {
  return chrome.identity.getRedirectURL(endpoint)
}

export function getURL(path) {
  return chrome.runtime.getURL(path)
}

export function subscribe(callback) {
  return chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    callback(request)
    sendResponse('OK')
  })
}

export function isDev() {
  return import.meta.env.DEV
}
