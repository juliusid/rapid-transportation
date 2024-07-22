import React from 'react';
import loading from '../assets/images/Ellipsis@1x-1.0s-200px-200px.svg'

const Loading = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <img src={loading}/>
    </div>
  )
}

export default Loading