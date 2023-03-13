import React from 'react'
import Index from '../../container/Index'

export default function (props) {
  return (
    <>
       <Index.Box className="white-border-btn-main">
            <Index.Box className={props.className} onClick={props.onClick}>{props.btnLabel}</Index.Box>
      </Index.Box></>
  )
}
