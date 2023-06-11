import React from 'react'
import PropTypes from 'prop-types'

function MyAlert(props) {
    let capitalize = (inp1) => {return inp1.slice(0,1).toUpperCase() + inp1.slice(1).toLowerCase();}
  return (
    props.alerts && <div class={`alert alert-${props.alerts.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alerts.type)}!!  </strong>{props.alerts.content}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> 
  )
}

export default MyAlert


