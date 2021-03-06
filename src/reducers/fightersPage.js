import R from 'ramda'
import {
  FETCH_FIGHTERS_SUCCESS
} from '../actionTypes'

const initialState = {
  ids: []
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_FIGHTERS_SUCCESS:
      return R.merge(state, {
        ids: R.pluck('_id', payload)
      })
    default:
      return state
  }
}