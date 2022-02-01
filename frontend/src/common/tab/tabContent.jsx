import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
export class TabContent extends Component {
  render() {
    const selected = this.props.tab.selected === this.props.id
    return (
      <div
        id={this.props.id}
        className={`tab-pane ${selected ? 'active' : ''}`}
      >
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ tab: state.tab })

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TabContent)
