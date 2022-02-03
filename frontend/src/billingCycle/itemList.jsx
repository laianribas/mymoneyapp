import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { arrayInsert, arrayRemove } from 'redux-form'
import { Field } from 'redux-form'
import Input from '../common/form/input'

import Grid from '../common/layout/Grid'
import If from '../common/operator/if'

export class ItemList extends Component {
  add(index, item = {}) {
    if (!this.props.readOnly) {
      this.props.arrayInsert('billingCycleForm', this.props.field, index, item)
    }
  }

  remove(index) {
    if (!this.props.readOnly && this.props.list.length > 1) {
      this.props.arrayRemove('billingCycleForm', this.props.field, index)
    }
  }
  renderRows() {
    const list = this.props.list || []
    return list.map((row, i) => (
      <tr key={i}>
        <td>
          <Field
            name={`${this.props.field}[${i}].name`}
            component={Input}
            readOnly={this.props.readOnly}
            placeholder="Insira o nome do crédito"
          />
        </td>
        <td>
          <Field
            name={`${this.props.field}[${i}].value`}
            component={Input}
            readOnly={this.props.readOnly}
            placeholder="Insira o valor do crédito"
            type="number"
          />
        </td>
        <If test={this.props.showStatus}>
          <td>
            <Field
              name={`${this.props.field}[${i}].status`}
              component={Input}
              readOnly={this.props.readOnly}
              placeholder="Insira o Status"
            />
          </td>
        </If>
        <td>
          <div className="column">
            <button
              type="button"
              class="btn btn-success"
              onClick={() => this.add(i + 1)}
            >
              <i class="fas fa-plus"></i>
            </button>
            <button
              type="button"
              class="btn btn-warning"
              onClick={() => this.add(i + 1, row)}
            >
              <i class="far fa-copy"></i>
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => this.remove(i)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </td>
      </tr>
    ))
  }
  render() {
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>{this.props.legend}</legend>
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <If test={this.props.showStatus}>
                  <th>Status</th>
                </If>
                <th className="table-action">Ações</th>
              </tr>
            </thead>
            <tbody>{this.renderRows()}</tbody>
          </table>
        </fieldset>
      </Grid>
    )
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ arrayInsert, arrayRemove }, dispatch)

export default connect(null, mapDispatchToProps)(ItemList)
