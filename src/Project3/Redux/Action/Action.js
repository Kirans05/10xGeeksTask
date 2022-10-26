const addData = (payload) => {
    return {
        type:"addData",
        payload
    }
}

const removeData = (payload, index) => {
    return {
        type:"removeData",
        payload,
        index
    }
} 


const editData = (payload, index) => {
    return {
        type:"editData",
        payload,
        index
    }
}

const resetState = () => {
    return {
        type:"resetState",
    }
}

export {addData, removeData, editData, resetState}