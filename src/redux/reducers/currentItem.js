import items from "../../components/data/items";
import {type as findCurrentItemType } from '../actions/findCurrentItem'

const defaultState = {}

function reducer(state = defaultState, {type,payload}){
    switch(type){
        case findCurrentItemType:{
            return items.find(n =>n.id === payload)
        }

        default: 
        return state;
    }
}
export default reducer