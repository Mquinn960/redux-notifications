import { createStore } from 'redux';
import notificationReducer from '../reducers/reducer';

export default createStore(notificationReducer);