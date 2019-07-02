import axios from "axios"

const getData = (url) => {
    return dispatch => {
        axios.get(url).then(res => {
            dispatch({
                type: "DATA",
                data: res.data
            })
        })
    }
}
const addProject = (val, id) => {
    return dispatch => {
        dispatch({
            type: "ADDPROJECT",
            val,
            id
        })
    }
}

const delProject = (index, ind) => {
    return dispatch => {
        dispatch({
            type: "DELPROJECT",
            index,
            ind
        })
    }
}

const event = (index, ind, ele) => {
    return dispatch => {
        dispatch({
            type: "EVENT",
            index,
            ind,
            ele
        })
    }
}
const Change = (curInd) => {
    return dispatch => {
        dispatch({
            type: "CHANGE",
            curInd
        })
    }
}

export default { getData, addProject, delProject, event,Change }