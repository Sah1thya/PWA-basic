// Check if service workers are supported
if ("serviceWorker" in navigator) {
  // Register a service worker for offline support
  navigator.serviceWorker
    .register("sw.js")
    .then((registration) => {
      console.log("Service Worker registered with scope:", registration.scope);
    })
    .catch((error) => {
      console.error("Service Worker registration failed:", error);
    });
}

// Check if Push API is supported
if ("PushManager" in window) {
  // Enable push notifications
  // This is a simplified example. Real-world implementation requires server-side code.
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      // Subscribe the user for push notifications
      navigator.serviceWorker.ready.then((registration) => {
        registration.pushManager
          .subscribe({
            userVisibleOnly: true,
            applicationServerKey: "YOUR_PUBLIC_KEY",
          })
          .then((subscription) => {
            console.log("Push subscription successful:", subscription);
          })
          .catch((error) => {
            console.error("Push subscription failed:", error);
          });
      });
    }
  });
}
