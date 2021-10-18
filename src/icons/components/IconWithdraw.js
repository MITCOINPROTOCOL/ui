import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconWithdraw({ size, ...props }) {
  const sizeValue = useIconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="currentColor" clipPath="url(#clip0_1:53)">
        <path d="M4 17.06a2.693 2.693 0 002.69 2.69h10.62A2.693 2.693 0 0020 17.06v-1.25a.817.817 0 10-1.633 0v1.25a1.059 1.059 0 01-1.057 1.057H6.69a1.059 1.059 0 01-1.057-1.057v-1.25a.817.817 0 10-1.633 0v1.25z" />
        <path d="M12 16.882a1.306 1.306 0 001.306-1.306V9.467a.166.166 0 01.167-.166h1.794a.653.653 0 00.492-1.082l-3.266-3.752a.673.673 0 00-.986 0L8.241 8.223A.653.653 0 008.733 9.3h1.794a.166.166 0 01.167.167v6.108A1.306 1.306 0 0012 16.882z" />
      </g>
      <defs>
        <clipPath id="clip0_1:53">
          <path fill="#fff" d="M0 0h16v16H0z" transform="translate(4 4)" />
        </clipPath>
      </defs>
    </svg>
  )
}

IconWithdraw.propTypes = IconPropTypes
export default IconWithdraw
