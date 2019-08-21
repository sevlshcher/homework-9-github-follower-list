import {
    fetchRequest,
    fetchSuccess,
    fetchFailure
} from './actions'
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

// Обратите внимание на тесты, они помогут вам написать код редьюсера

const isLoading = handleActions({
    [fetchRequest]: () => true,
    [fetchSuccess]: () => false,
    [fetchFailure]: () => false
}, false)

const data = handleActions({
    [fetchSuccess]: (_state, action) => action.payload
}, null)

export default combineReducers({ isLoading, data })

export const getIsLoading = state => state.user.isLoading
export const getData = state => state.user.data