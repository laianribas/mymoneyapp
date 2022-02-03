import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { selectTab, showTabs } from '../common/tab/tabActions'

const URL = 'http://localhost:3003/api'

const INITIAL_VALUES = { credits: [{}], debts: [{}] }

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}
export function getList() {
    const request = axios.get(`${URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLE_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}
export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return (dispatch) => {
        const id = values._id ? values._id : ''
        axios[method](`${URL}/billingCycles/${id}`, values)
            .then((resp) => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso!')
                dispatch(init())
            })
            .catch((err) => {
                err.response.data.errors.forEach((error) => {
                    toastr.error('Error', error)
                })
            })
    }
}

export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}
export function showDelete(billingCycle) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}