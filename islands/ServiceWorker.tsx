export function setServiceWorker() {
  console.log("start setServiceWorker")
  console.log(navigator)
  console.log('serviceWorker' in navigator)
  if ('serviceWorker' in navigator) {
    console.log("this application has service worker, so please install!!")
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  }
}
