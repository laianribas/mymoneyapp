import React, { Component } from 'react'
import { connect } from 'react-redux'
import TabsHeader from '../common/tab/tabsHeader'
import Tabs from '../common/tab/tabs'
import Content from '../common/template/Content'

import ContentHeader from '../common/template/ContentHeader'
import TabsContent from '../common/tab/tabsContent'

export class BillingCycle extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Ciclo de Pagamento" subTitle="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader></TabsHeader>
            <TabsContent></TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycle)
