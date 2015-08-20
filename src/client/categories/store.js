import getRandomString from '../lib/getrandomstring';
import {Range, Record, List} from 'immutable';
import {actions} from './actions';
import immutable from 'immutable';

const initialState = new (Record({
    data: [],
    isLoaded: false
}));

export default function(state = initialState, action, payload) {
    if (!action) return state;

    switch (action) {

        case actions.loadCategories: {
            return state
                .set('data', payload)
                .set('isLoaded', true);
        }
    }
    return state;
}
