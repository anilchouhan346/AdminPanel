import React from 'react'
import Index from '../Index'

export default function TextButton(props) {
  return (
    <>
      <Index.Box className="text-btn-main">
            <Index.Box className={props.className} onClick={props.onClick}>{props.btnLabel}</Index.Box>
      </Index.Box>
    </>
  )
}
