import { useState } from "react";
import { addNotificationWithTimeout } from "./actions/actions";
import Notifications from "./notification/notifications"

export default function Container() {
  const [message, setMessage] = useState('');
  const handleUserInput = (event) => {
    event.preventDefault();
    addNotificationWithTimeout(message)
  }
  return (
    <div>
        <h2>Message Queue Example</h2>
        <form className="form-horizontal" onSubmit={handleUserInput}>
          <input type="text" className="form-control" name="message" onChange={e => setMessage(e.target.value)} />
          <button type="submit" value="submit">Submit</button>
        </form>
        <Notifications/>
    </div>
  )
}