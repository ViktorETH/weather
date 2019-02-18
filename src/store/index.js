import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {weatherReducer} from './reducers/weather'

const rootReducer = combineReducers({
	weather: weatherReducer
});

const configureStore = () => {
	return createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(thunk))
	)
};

export default configureStore;
