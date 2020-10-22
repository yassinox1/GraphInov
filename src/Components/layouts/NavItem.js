import React from 'react'
import {NavLink} from 'react-dom'
const NavItem = ({text,N,active}) => {
    return (
        <div class="steps-step">
        <a
          href="#step-11"
          type="button"
          class="btn btn-white btn-circle"

         
        >
          {N}
        </a>
        <p>{text}</p>
      </div>
    )
}

export default NavItem
