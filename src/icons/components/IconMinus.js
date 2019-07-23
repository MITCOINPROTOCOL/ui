import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconMinus = ({ size, ...props }) => {
  const sizeValue = iconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M19.354 11.354H4.646a.646.646 0 000 1.292h14.708a.646.646 0 100-1.292z"
      />
    </svg>
  )
}

IconMinus.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconMinus
