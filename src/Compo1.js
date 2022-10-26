import React, { useState } from 'react'

const Compo1 = ({valueFromCompo1}) => {

  const [text, setText] = useState("")

  const SubmitHandler = () => {
    let value = JSON.parse(text)
    valueFromCompo1(value)
  }

  return (
    <div  className='compo1Styles'>
        <h1>Compo1</h1>
        <textarea rows={20} cols={90} style={{resize:"none", border:"2px solid black"}} value={text}onChange={(e) => setText(e.target.value)}/>
        <button className='compo1Btn'
        onClick={SubmitHandler}
        >Submit</button>
    </div>
  )
}

export default Compo1