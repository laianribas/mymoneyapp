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
import BillingCycleForm from './billingCycleForm'

import { init, create, update, remove } from './billingCycleActions'

export class BillingCycle extends Component {
  componentWillMount() {
    this.props.init()
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
                <BillingCycleForm
                  onSubmit={this.props.create}
                  submitLabel="Incluir"
                  submitClass="primary"
                />
              </TabContent>
              <TabContent id="tabUpdate">
                <BillingCycleForm
                  onSubmit={this.props.update}
                  submitLabel="Alterar"
                  submitClass="info"
                />
              </TabContent>
              <TabContent id="tabDelete">
                <BillingCycleForm
                  onSubmit={this.props.remove}
                  readOnly
                  submitLabel="Excluir"
                  submitClass="danger"
                />
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
  bindActionCreators({ init, create, update, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycle)
