import { useSelector } from 'react-redux';
import Notification from './notification'

export default function Notifications() {
    let notifications = useSelector((state) => state.notifications);
    return notifications.map((notification) => {
        return (
            <Notification
                text={notification.text}
                id={notification.id}
            />
        ); 
    });
}
