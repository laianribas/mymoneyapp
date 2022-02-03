import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './billingCycleActions'
import LabelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'
import Summary from './Summary'

export class BillingCycleForm extends Component {
  calculateSummary() {
    const sum = (t, v) => t + v
    return {
      sumOfCredit: this.props.credits.map((c) => +c.value || 0).reduce(sum),
      sumOfDebt: this.props.debts.map((d) => +d.value || 0).reduce(sum)
    }
  }
  render() {
    const { handleSubmit, readOnly, credits, debts } = this.props
    const { sumOfCredit, sumOfDebt } = this.calculateSummary()
    return (
      <form role="form" onSubmit={handleSubmit} style={{ marginTop: '10px' }}>
        <div className="box-body">
          <div className="row">
            <Field
              name="name"
              component={LabelAndInput}
              label="Nome"
              cols="12 4"
              placeholder="Informe o nome"
              readOnly={readOnly}
            />
            <Field
              name="month"
              component={LabelAndInput}
              type="number"
              label="Mês"
              cols="12 4"
              placeholder="Informe o mês"
              readOnly={readOnly}
            />
            <Field
              name="year"
              component={LabelAndInput}
              type="number"
              label="Ano"
              cols="12 4"
              placeholder="Informe o ano"
              readOnly={readOnly}
            />
          </div>
          <Summary credit={sumOfCredit} debt={sumOfDebt} />
          <div className="row">
            <ItemList
              cols="12 6"
              readOnly={readOnly}
              list={credits}
              field="credits"
              legend="Créditos"
            />
            <ItemList
              cols="12 6"
              readOnly={readOnly}
              list={debts}
              field="debts"
              legend="Débitos"
              showStatus
            />
          </div>
        </div>
        <div className="box-footer">
          <button type="submit" className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={this.props.init}
          >
            Cancelar
          </button>
        </div>
      </form>
    )
  }
}

BillingCycleForm = reduxForm({
  form: 'billingCycleForm',
  destroyOnUnmount: false
})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = (state) => ({
  credits: selector(state, 'credits'),
  debts: selector(state, 'debts')
})
const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)
