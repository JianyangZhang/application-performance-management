import * as React from "react";
import * as ReactDOM from "react-dom";
import Nav from "../components/Nav";
import Breadcrumb from "../components/Breadcrumb";
import { connect } from 'react-redux';

export class Navigator extends React.Component<any, any> {
	public static defaultProps: Partial<any> = {
        breadcrumb:{module:[], res:[]}
    };

	render() {
		const menuList = [
			{id:1, text:"性能监控", url:"/monitor"},
			{id:2, text:"业务拓扑", url:"/topology"},
			{id:3, text:"网络拓扑", url:"#"},
			{id:4, text:"告警监控", url:"#"}
		]

		const {breadcrumb}  = this.props;
		const path = [...breadcrumb.module, ...breadcrumb.res]

		return (
			<div>
				<Nav menuList={menuList}/>
				<Breadcrumb path={path}/>
			</div>
		)
	}
}

const mapStateToProps = state => ({
    breadcrumb:state.navigatorReducer.breadcrumb,
});

const mapDispatchToProps = dispatch  => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);

