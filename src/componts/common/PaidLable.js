import React from 'react'
import Index from '../Index'

export default function PaidLable() {
  return (
    <div>
      <Index.Box className="table-lable-flex">
            <Index.Box className='paid-lable-dots table-lable-dots'></Index.Box>
            <Index.Box className="paid-lable table-lable-main">Paid</Index.Box>
      </Index.Box>
    </div>
  )
}
