import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconRefresh = ({ size, ...props }) => {
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
        d="M8.488 9.918H4.954V6.383a.679.679 0 00-1.358 0v4.214c0 .375.304.68.679.68h4.213a.679.679 0 100-1.359zm11.238 2.809h-4.214a.679.679 0 000 1.358h3.535v3.535a.679.679 0 101.357 0v-4.214a.679.679 0 00-.678-.679z"
      />
      <path
        fill="currentColor"
        d="M18.603 9.668a6.954 6.954 0 00-3.584-3.982 6.954 6.954 0 00-5.35-.281 7.043 7.043 0 00-2.608 1.642L3.81 10.102a.679.679 0 10.93.99L7.998 8.03a5.677 5.677 0 012.124-1.345 5.648 5.648 0 017.2 3.436.68.68 0 001.28-.453zm1.617 3.273a.679.679 0 00-.96-.03l-3.258 3.063-.016.014a5.605 5.605 0 01-3.989 1.654 5.605 5.605 0 01-3.99-1.651 5.677 5.677 0 01-1.33-2.109.679.679 0 00-1.28.453 7.043 7.043 0 001.65 2.616A6.954 6.954 0 0011.997 19h.002a6.95 6.95 0 004.941-2.044l3.251-3.055a.679.679 0 00.03-.96z"
      />
    </svg>
  )
}

IconRefresh.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconRefresh
