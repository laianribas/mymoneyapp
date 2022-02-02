import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getList, showUpdate } from './billingCycleActions'

class BillingCycleList extends Component {
  componentWillMount() {
    this.props.getList()
  }

  renderRows() {
    const list = this.props.list || []
    return list.map((row) => (
      <tr key={row._id}>
        <td>{row.name}</td>
        <td>{row.month}</td>
        <td>{row.year}</td>
        <td>
          <button
            className="btn btn-warning"
            onClick={() => this.props.showUpdate(row)}
          >
            <i className="fas fa-pen"></i>
          </button>
        </td>
      </tr>
    ))
  }
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Ano</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>{this.renderRows()}</tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ list: state.billingCycles.list })

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getList, showUpdate }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)
