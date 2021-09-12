import store from '../store/store'
import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../constants/constants'

function addNotification(id, text) {
  return {
    type: ADD_NOTIFICATION,
    id,
    text
  }
}

function removeNotification(id) {
  return {
    type: REMOVE_NOTIFICATION,
    id
  }
}

let nextNotificationId = 0
export function addNotificationWithTimeout(text) {
  const id = nextNotificationId++
  store.dispatch(addNotification(id, text))
  setTimeout(() => {
    store.dispatch(removeNotification(id))
  }, 5000)
}