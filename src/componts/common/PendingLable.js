import React from 'react'
import Index from '../Index'

export default function PendingLable() {
  return (
    <div>
      <Index.Box className="table-lable-flex">
            <Index.Box className='pending-lable-dots table-lable-dots'></Index.Box>
            <Index.Box className="pending-lable table-lable-main">Pending</Index.Box>
      </Index.Box>
    </div>
  )
}
