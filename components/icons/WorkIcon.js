import React from 'react'

export default function WorkIcon({ color, size }) {
  return (
    <svg
      fill={color}
      height={size}
      viewBox="0 0 48 48"
      width={size}
      xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h48v48H0z" fill="none" />
      <path d="M40 12h-8V8c0-2.21-1.79-4-4-4h-8c-2.21 0-4 1.79-4 4v4H8c-2.21 0-3.98 1.79-3.98 4L4 38c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zm-12 0h-8V8h8v4z" />
    </svg>
  )
}
