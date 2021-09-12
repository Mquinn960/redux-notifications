import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from "../constants/constants";

const initialState = {
	notifications: [],
};

export default function notificationReducer (state = initialState, notification) {
	switch (notification.type) {
		case ADD_NOTIFICATION:
      return Object.assign({}, state, {notifications: addNotification(state.notifications, notification)});
		case REMOVE_NOTIFICATION:
      return Object.assign({}, state, {notifications: removeNotification(state.notifications, notification)});
    default:
      return state
	}
}

function addNotification(notificationStack, notification) {
  return [...notificationStack, notification];
}

function removeNotification(notificationStack, notification) {
  return notificationStack.filter(function(item) { return [notification.id].indexOf(item.id) === -1; });
}