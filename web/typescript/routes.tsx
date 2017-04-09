import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from "./views/App";
import Monitor from "./views/Monitor";
import Topology from "./views/Topology";

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Topology}/>
	    <Route path="/monitor" component={Monitor}/>
	    <Route path="/topology" component={Topology}/>
	</Route>
)

export const AppRouter = <Router routes={routes} history={browserHistory}/>

