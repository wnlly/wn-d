import React, { Component } from 'react'

import { PropTypes } from 'prop-types';
import ThemeSwitch from './ThemeSwithch';
import {connect} from './connect'
class Content extends Component {
  static contextTypes={
    store:PropTypes.object
  }
  
  
  
  render () {
    return (
      <div>
        <p style={{color:this.props.themeColor}}>React.js 小书内容</p>
        <ThemeSwitch/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
Content = connect(mapStateToProps)(Content)

export default Content
