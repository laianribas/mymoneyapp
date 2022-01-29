import React, { Component } from 'react'
import Content from '../common/template/Content'
import ContentHeader from '../common/template/ContentHeader'

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Dashboard" subTitle="version 1.0.0" />
        <Content>Dashboard</Content>
      </div>
    )
  }
}

export default Dashboard
