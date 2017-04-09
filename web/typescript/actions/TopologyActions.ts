import 'isomorphic-fetch'
import {
	TOPO_LOAD_DATA,
  TOPO_UPDATE_NODES,
  TOPO_UPDATE_EDGES,
  TOPO_DELETE_NODES,
  TOPO_DELETE_EDGES,
  TOPO_SAVE_STATUS,
  TOPO_LOAD_STATUS } from "./ActionTypes"
import { getBreadcrumbRes } from "./NavigatorActions";
import {resource} from "./UrlMapping"

export function saveTopoData() {
  return function(dispatch, getState) {
    dispatch(getSaveStatusAction(true))
    const url = resource.topology.save
    const topo = getState().topologyReducer.topology;
    let body = JSON.stringify(topo); 

    return fetch(url, { method: 'POST', 
              body:JSON.stringify({topo:body}), 
              headers:{'Accept':'application/json', 
                       'Content-Type':'application/json; charset=utf-8'}})
    .then(res=>{
      return res.json()
    }).then(json=>{
      dispatch(getSaveStatusAction(false))
    }).catch(error => { 
      dispatch(getSaveStatusAction(false))
    });
  }
}

export function loadTopoData(resId) {
  return function(dispatch, getState) {
    dispatch(getBreadcrumbRes(resId, "topology"));
    dispatch(getLoadStatusAction(true))
    const url = resource.topology.get + resId;

    return fetch(url).then(res=>{
       return  res.json();
    }).then(json=>{
      dispatch(getLoadTopoDataAction(json))
      dispatch(getLoadStatusAction(false))
    }).catch(error => { 
      dispatch(getLoadTopoDataAction({nodes:{}, edges:{}}))
      dispatch(getLoadStatusAction(false))
    });
  }
}

export function getSaveStatusAction(data) {
  return {
    type: TOPO_SAVE_STATUS,
    payload:data
  }
}

export function getLoadStatusAction(data) {
  return {
    type: TOPO_LOAD_STATUS,
    payload:data
  }
}

export function getLoadTopoDataAction(data) {
	return {
		type: TOPO_LOAD_DATA,
		payload:data
	}
}

export function getUpdateNodesAction(data) {
  return {
    type: TOPO_UPDATE_NODES,
    payload:data
  }
}

export function getUpdateEdgesAction(data) {
  return {
    type: TOPO_UPDATE_EDGES,
    payload:data
  }
}

export function getDeleteNodesAction(data) {
  return {
    type: TOPO_DELETE_NODES,
    payload:data
  }
}

export function getDeleteEdgesAction(data) {
  return {
    type: TOPO_DELETE_EDGES,
    payload:data
  }
}