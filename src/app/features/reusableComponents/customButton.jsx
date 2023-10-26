import React from 'react'
import "../../common/styles/customButtonStyle.css"

const CustomButton = ({handleClick, buttonName, className}) => {
  return (
    <div className={`${className ? className : 'customButton' } `} onClick={handleClick}>
        {buttonName}
    </div>
  )
}

export default CustomButton