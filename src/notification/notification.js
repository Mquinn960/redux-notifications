export default function Notification(notification) {
    return (
        <div>
            <h3>Message {notification.id}: {notification.text}</h3>
        </div>
    )
}