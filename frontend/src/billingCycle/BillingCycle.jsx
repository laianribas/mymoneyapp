import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TabsHeader from '../common/tab/tabsHeader'
import Tabs from '../common/tab/tabs'
import Content from '../common/template/Content'
import ContentHeader from '../common/template/ContentHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import BillingCycleList from './billingCycleList'

import { create, update } from './billingCycleActions'

import { selectTab, showTabs } from '../common/tab/tabActions'
import BillingCycleForm from './billingCycleForm'

export class BillingCycle extends Component {
  componentWillMount() {
    this.props.selectTab('tabList')
    this.props.showTabs('tabList', 'tabCreate')
  }
  render() {
    return (
      <>
        <ContentHeader title="Ciclo de Pagamento" subTitle="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader icon="bars" label="Listar" target="tabList" />
              <TabHeader icon="plus" label="Incluir" target="tabCreate" />
              <TabHeader icon="pencil-alt" label="Alterar" target="tabUpdate" />
              <TabHeader icon="trash-alt" label="Excluir" target="tabDelete" />
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabList">
                <BillingCycleList />
              </TabContent>
              <TabContent id="tabCreate">
                <BillingCycleForm onSubmit={this.props.create} />
              </TabContent>
              <TabContent id="tabUpdate">
                <BillingCycleForm onSubmit={this.props.update} />
              </TabContent>
              <TabContent id="tabDelete">
                <h1>Excluir</h1>
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </>
    )
  }
}

const mapStateToProps = (state) => ({ tab: state.tab })

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ selectTab, showTabs, create, update }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycle)
