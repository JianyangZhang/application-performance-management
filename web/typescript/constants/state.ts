import { IState } from '../model'

export  default function  initialState() {
	let state:IState = {
		monitor:{resId:null, resType:null, data:{}, loaders:{}},
		resource:{devices:[], services:[], groups:[], topologys:[]},
		breadcrumb:{module:[], res:[]},
		topology:{id:null, groupId:null, type:"network", nodes:[], edges:[], loaders:{saving:false, loadding:false}}
	}
	return state;
}