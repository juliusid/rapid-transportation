import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const items = [
    { walletNO: '3482948x835', amount: "$200", type:'Withdrawal'},
    { walletNO: '3482948x835', amount: "$200", type:'Withdrawal'},
    { walletNO: '3482948x835', amount: "$200", type:'Withdrawal'},
    { walletNO: '3482948x835', amount: "$200", type:'Withdrawal'},
    { walletNO: '3482948x835', amount: "$200", type:'Withdrawal'},
    { walletNO: '3482948x835', amount: "$200", type:'Withdrawal'},
    { walletNO: '3482948x835', amount: "$200", type:'Withdrawal'}
]

const Table = () => {
  return (

    <>
        {items.map((item, i) => (
            <div className='flex justify-between w-[95%] px-[1rem] border-b-[1px] py-[2rem] border-gray-400'>
            <h1 className='font-poppins text-slate-400'>{item.walletNO}</h1>
            <h1 className='font-poppins text-slate-400'>{item.amount}</h1>
            <h1 className='font-poppins text-slate-400'>{item.type}</h1>
            <FontAwesomeIcon icon={faCheck} className="text-green-500" />
        </div>
        ))}
    </>
    
  )
}

export default Table