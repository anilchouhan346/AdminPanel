import React from 'react'
import Index from '../Index'

export default function GreyButton(props) {
  return (
    <>
   <Index.Box className="grey-btn-main">
            <Index.Box className={props.className} onClick={props.onClick}>{props.btnLabel}</Index.Box>
      </Index.Box>
    </>
  )
}
