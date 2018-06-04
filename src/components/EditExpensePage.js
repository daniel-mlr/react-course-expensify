/* eslint react/prop-types: 0 */

import React from 'react'

const  EditExpensePage = (props) => {
  // console.log(props)
  return (
    <div>
      <p>On édite le record dont le id est {props.match.params.id}</p>
    </div>
  )
} 
export default EditExpensePage
