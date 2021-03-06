import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import If from '../operator/if'
import { selectTab } from './tabActions'
class TabHeader extends Component {
  render() {
    const selected = this.props.tab.selected === this.props.target
    const visible = this.props.tab.visible[this.props.target]
    return (
      <If test={visible}>
        <li
          className="nav-item"
          role="presentation"
          style={{
            marginRight: '2px'
          }}
        >
          <button
            className={`nav-link${selected ? ' active' : ''}`}
            data-bs-toggle="tab"
            data-bs-target={this.props.target}
            type="button"
            role="tab"
            aria-controls={this.props.target}
            onClick={() => this.props.selectTab(this.props.target)}
          >
            <i className={`fas fa-${this.props.icon}`}></i> {this.props.label}
          </button>
        </li>
      </If>
    )
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ selectTab }, dispatch)

const mapStateToProps = (state) => {
  return {
    tab: state.tab
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)
