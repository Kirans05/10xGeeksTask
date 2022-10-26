import React from 'react'

const InputFeildCompo = ({item, index, feildValueChange}) => {
  return (
    <div>
        <div>
        <label>{item.label}</label>
        <input type={item.type} onChange={(e) => feildValueChange(e, item.label) }/>
        </div>
        <br />
    </div>
  )
}

export default InputFeildCompo