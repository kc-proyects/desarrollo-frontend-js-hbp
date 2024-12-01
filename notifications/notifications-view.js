export function buildNotification(message, type) {
    return `
        <div class="toast-container p-3" id="toastPlacement">
            <div class="toast show ${type} align-items-center">
                <div class="toast-header">
                <span id="icon-status" class="rounded me-2"></span>
                <strong class="me-auto">${type}</strong>
                <small>ahora</small>
            </div>
            <div class="toast-body">${message}</div>
        </div>`;
}
