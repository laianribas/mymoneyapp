import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
import { selectTab, showTabs } from '../common/tab/tabActions'

const URL = 'http://localhost:3003/api'

export function getList() {
    const request = axios.get(`${URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLE_FETCHED',
        payload: request
    }
}

export function create(values) {
    return (dispatch) => {
        axios
            .post(`${URL}/billingCycles`, values)
            .then((resp) => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso!')
                dispatch([
                    resetForm('billingCycleForm'),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ])
            })
            .catch((err) => {
                err.response.data.errors.forEach((error) => {
                    toastr.error('Error', error)
                })
            })
    }
}

export function showUpdate(billingCycle) {
    return [showTabs('tabUpdate'), selectTab('tabUpdate')]
}