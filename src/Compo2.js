import React, { useState } from 'react'
import InputFeildCompo from './InputFeildCompo'

const Compo2 = ({inputFeilds}) => {

  const [feildValues, setFeildValues] = useState({})

  const feildValueChange = (e, label) => {
    setFeildValues({...feildValues, [label] : e.target.value})
  }


  const submitHandler = () => {
    alert(JSON.stringify(feildValues))
  }

  return (
    <div className='compo2Styles'>
        <h1>Compo2</h1>
        <div className='compo2StylesDiv'>
          {
            inputFeilds.map((item, idx) => {
              return <InputFeildCompo item={item} key={idx} index={idx} feildValueChange={feildValueChange}/>
            })
          }
          <input 
          style={{display: inputFeilds.length > 0 ? "flex" : "none"}}
          type={"button"} 
          value={"Submit"} 
          className="compo2Btn"
           onClick={submitHandler}/>
        </div>
    </div>
  )
}

export default Compo2