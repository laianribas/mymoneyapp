import React, { Component } from 'react'
import Content from '../common/template/Content'
import ContentHeader from '../common/template/ContentHeader'
import ValueBox from '../common/widget/valueBox'

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Dashboard" subTitle="version 1.0.0" />
        <Content>
          <div className="container-fluid">
            <div className="row">
              <ValueBox
                cols="12 4"
                color="green"
                icon="piggy-bank"
                value="R$ 10,00"
                text="Totela de créditos"
              />
              <ValueBox
                cols="12 4"
                color="red"
                icon="credit-card"
                value="R$ 10,00"
                text="Totela de débitos"
              />
              <ValueBox
                cols="12 4"
                color="blue"
                icon="funnel-dollar"
                value="R$ 0,00"
                text="Valor Consolidado"
              />
            </div>
          </div>
        </Content>
      </div>
    )
  }
}

export default Dashboard
