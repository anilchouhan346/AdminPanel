import React from 'react'
import Index from '../../container/Index'

export default function GreenButton(props) {
  return (
    <>
   <Index.Box className="green-btn-main">
            <Index.Box className={props.className} onClick={props.onClick}>{props.btnLabel}</Index.Box>
      </Index.Box>
    </>
  )
}
