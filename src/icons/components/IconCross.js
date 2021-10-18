import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconCross({ size, ...props }) {
  const sizeValue = useIconSize(size)
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
        stroke="currentColor"
        d="M12.663 12l5.2-5.2a.469.469 0 10-.663-.663l-5.2 5.2-5.2-5.2a.469.469 0 10-.663.663l5.2 5.2-5.2 5.2a.469.469 0 10.663.663l5.2-5.2 5.2 5.2a.467.467 0 00.663 0 .469.469 0 000-.663l-5.2-5.2z"
      />
    </svg>
  )
}

IconCross.propTypes = IconPropTypes
export default IconCross
