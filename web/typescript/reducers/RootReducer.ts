import { combineReducers } from 'redux';
import monitorReducer from './MonitorReducer';
import resourceReducer from './ResourceReducer';
import navigatorReducer from './NavigatorReducer';
import topologyReducer from './TopologyReducer';

const rootReducer = combineReducers({
	monitorReducer,
	resourceReducer,
	navigatorReducer,
	topologyReducer
});

export default rootReducer;