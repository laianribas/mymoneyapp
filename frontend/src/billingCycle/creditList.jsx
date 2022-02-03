import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field } from 'redux-form'
import Input from '../common/form/input'

import Grid from '../common/layout/Grid'

export class CreditList extends Component {
  renderRows() {
    return (
      <tr>
        <td>
          <Field
            name="credits[0].name"
            component={Input}
            readOnly={this.props.readOnly}
            placeholder="Insira o nome do crédito"
          />
        </td>
        <td>
          <Field
            name="credits[0].value"
            component={Input}
            readOnly={this.props.readOnly}
            placeholder="Insira o valor do crédito"
            type="number"
          />
        </td>
        <td></td>
      </tr>
    )
  }
  render() {
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>Créditos</legend>
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>{this.renderRows()}</tbody>
          </table>
        </fieldset>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CreditList)
