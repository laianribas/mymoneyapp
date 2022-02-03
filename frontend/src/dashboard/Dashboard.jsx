import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import Content from '../common/template/Content'
import ContentHeader from '../common/template/ContentHeader'
import ValueBox from '../common/widget/valueBox'

export class Dashboard extends Component {
  componentWillMount() {
    this.props.getSummary()
  }
  render() {
    const { credit, debt } = this.props.summary
    return (
      <>
        <ContentHeader title="Dashboard" subTitle="version 1.0.0" />
        <Content>
          <div className="container-fluid">
            <div className="row">
              <ValueBox
                cols="12 4"
                color="green"
                icon="piggy-bank"
                value={`R$ ${credit}`}
                text="Total de créditos"
              />
              <ValueBox
                cols="12 4"
                color="red"
                icon="credit-card"
                value={`R$ ${debt}`}
                text="Total de débitos"
              />
              <ValueBox
                cols="12 4"
                color="blue"
                icon="funnel-dollar"
                value={`R$ ${credit - debt}`}
                text="Valor Consolidado"
              />
            </div>
          </div>
        </Content>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    summary: state.dashboard.summary
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getSummary }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
