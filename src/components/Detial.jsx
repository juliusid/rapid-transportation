import React from 'react'

const Detial = ({detail, value}) => {
  return (
    <div>
        <h1 className='font-poppins font-bold text-2xl text-slate-700'>{detail}</h1>
        <p className='font-poppins font-semibold text-lg text-slate-700'>{value}</p>
    </div>
  )
}

export default Detial