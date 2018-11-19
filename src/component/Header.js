import React, { Component } from 'react'

import { PropTypes } from 'prop-types';
import {connect} from './connect'
class Header extends Component {
  static contextTypes={
    store:PropTypes.object
  }
  // constructor (props) {
  //   super(props)
  //   this.state={
  //     themeColor:''
  //   }
  // }
  // componentWillMount() {
  //   const {store } = this.context;
  //   this._updateThemeColor()
  //   store.subscribe(()=>this._updateThemeColor())
  // }
  // _updateThemeColor(){
  //   const {store}  = this.context;
  //   console.log({store})
  //   const state = store.getState()
  //   this.setState({ themeColor: state.themeColor })
  // }
  render () {
    return (
      <div>
      <h1 style={{color:this.props.themeColor}}>React.js小书</h1>
      </div>
     
    )
  }
}
const mapStateToProps = (state)=>{
  return {
    themeColor:state.themeColor
  }
}
Header = connect (mapStateToProps)(Header)
export default Header