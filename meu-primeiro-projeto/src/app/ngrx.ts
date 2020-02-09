import { Action, createAction, props, createReducer, on } from '@ngrx/store';

enum ActionType {
    Descrment = 'Descrment',
    Increment = 'Increment',
}


export const decrement = createAction(
    ActionType.Descrment
);


export const increment = createAction(
    ActionType.Increment,
    props<{ payload: any }>()
);


const INITIAL_STATE = {
    counter: 0
};


export const reducer = createReducer(
    INITIAL_STATE,
    
    on(increment, state => ({
        ...state,
        counter: state.counter + 1
    })),

    on(decrement, state => ({
        ...state,
        counter: state.counter - 1
    }))
)