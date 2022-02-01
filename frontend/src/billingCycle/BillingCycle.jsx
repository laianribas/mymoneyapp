import React, { Component } from 'react'
import { connect } from 'react-redux'
import TabsHeader from '../common/tab/tabsHeader'
import Tabs from '../common/tab/tabs'
import Content from '../common/template/Content'

import ContentHeader from '../common/template/ContentHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'

export class BillingCycle extends Component {
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
                <h1>Listar</h1>
              </TabContent>
              <TabContent id="tabCreate">
                <h1>Incluir</h1>
              </TabContent>
              <TabContent id="tabUpdate">
                <h1>Alterar</h1>
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

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycle)
