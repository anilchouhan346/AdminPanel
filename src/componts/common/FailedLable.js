import React from 'react'
import Index from '../Index'

export default function FailedLable() {
  return (
    <div>
      <Index.Box className="table-lable-flex">
            <Index.Box className='failed-lable-dots table-lable-dots'></Index.Box>
            <Index.Box className="failed-lable table-lable-main">Failed</Index.Box>
      </Index.Box>
    </div>
  )
}
