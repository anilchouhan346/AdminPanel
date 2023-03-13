import React from 'react'
import Index from '../../container/Index'

export default function PrimaryBorderButton(props) {
  return (
    <>
         <Index.Box className="primary-border-btn-main">
            <Index.Box className={props.className} onClick={props.onClick}>{props.btnLabel}</Index.Box>
      </Index.Box>
    </>
  )
}
