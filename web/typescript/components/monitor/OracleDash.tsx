import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from 'classnames';

export class OracleChild extends React.Component<any, any> {
	componentDidUpdate() {
        console.log("oracle child update");
    }

	render() {
		//console.log("oracle child re-render")
		return <div>oracle child</div>
	}
}

export class OracleParent extends React.Component<any, any> {
	componentDidUpdate() {
        console.log("oracle parent update");
    }

    shouldComponentUpdate(nextProps, nextState) {
    	console.log(nextProps)
    	console.log(this.props)
    	if (this.props.test == nextProps.test) 
    		return false;
    	return true;
    }

	render() {
		const {test} = this.props
		//console.log("oracle parent re-render")
		return <OracleChild />
	}
}

export default class OracleDash extends React.Component<any, any> {
	componentDidUpdate() {
        console.log("oracle update");
    }

	render() {
		const {test} = this.props;
		//console.log("oracle re-render")
		// return <div>{this.props.children}</div>
		// return <OracleParent />
		return <OracleParent test={test}/>
	}
}