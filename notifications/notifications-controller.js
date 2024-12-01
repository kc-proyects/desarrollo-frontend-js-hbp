import { buildNotification } from "./notifications-view.js"

export function notificationController(notificationContainer) {

  const showNotification = (message, type = "info") => {
    notificationContainer.innerHTML = buildNotification(message, type);

    setTimeout(() => {
      notificationContainer.innerHTML = "";
    }, 4000)
  }

  return { showNotification }
}
