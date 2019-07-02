// import React from "react"
import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import { stat } from 'fs';

const reducer = (state = { data: [],checked: {} }, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "DATA":
            newState.data = action.data
            return newState;
        case "ADDPROJECT":
            {
                let { val, id } = action
                let ind = newState.data.findIndex(item => item.id == id)
                newState.data[ind].foods.push({ val })
            }
            return newState;
        case "DELPROJECT":
            {
                let { index, ind } = action
                newState.data[index].foods.splice(ind, 1)
            }
            return newState;
        case "EVENT":
            {
                let {index,ind,ele} = action;
                newState.checked = {index,ind,ele}
            }
            return newState;
        case "CHANGE":
            {
                let {curInd} = action
                if(newState.checked.index === curInd){
                    return newState;
                }else{
                    let {index,ind,ele} = newState.checked
                    newState.data[index].foods.splice(ind,1)
                    newState.data[curInd].foods.push(ele)
                    newState.checked.index = curInd
                    newState.checked.ind = newState.data[curInd].foods.length-1
                }
            }
            return newState
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store;