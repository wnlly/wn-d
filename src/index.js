
import React from 'react'
import  ReactDOM  from 'react-dom';
import PropTypes from 'prop-types'

import Header from './component/Header';

import Content from './component/Content';




function createStore (reducer) {
  let state = null
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }
  dispatch({}) // 初始化 state
  return { getState, dispatch, subscribe }
}

const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}

const store = createStore(themeReducer)


class Index extends React.Component{
  static childContextTypes={
    store:PropTypes.object
  }
  getChildContext(){
    return {store}
  }
  //#endregion
  
  render(){
    return (
      <div>
        <Header></Header>
        <Content></Content>
      </div>
    )
  }
}
ReactDOM.render(<Index/>,document.getElementById('root'))