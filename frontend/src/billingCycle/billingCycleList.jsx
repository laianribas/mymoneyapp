import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getList, showUpdate, showDelete } from './billingCycleActions'

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
            style={{
              color: 'white'
            }}
          >
            <i class="fas fa-pencil-alt"></i>
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.props.showDelete(row)}
          >
            <i className="fas fa-trash-alt"></i>
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
              <th className="table-action">Ações</th>
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
  bindActionCreators({ getList, showUpdate, showDelete }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)
