import React from 'react'

export default function StaggerImage({src}) {
  return (
    <div className="w-[300px] h-[100px] rounded-md">
      <img src={src} alt="" />
    </div>
  )
}
