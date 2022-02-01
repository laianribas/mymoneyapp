import React, { Component } from 'react'
import { connect } from 'react-redux'
import TabsHeader from '../common/tab/tabsHeader'
import Tabs from '../common/tab/tabs'
import Content from '../common/template/Content'

import ContentHeader from '../common/template/ContentHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'

export class BillingCycle extends Component {
  render() {
    return (
      <>
        <ContentHeader title="Ciclo de Pagamento" subTitle="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader icon="bars" label="Listar" target="tabList" />
              <TabHeader icon="plus" label="incluir" target="tabCreate" />
              <TabHeader icon="pencil-alt" label="Alterar" target="tabEdit" />
              <TabHeader icon="trash-alt" label="Excluir" target="tabDelete" />
            </TabsHeader>
            <TabsContent></TabsContent>
          </Tabs>
        </Content>
      </>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycle)
