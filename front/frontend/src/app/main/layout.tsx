'use client'
import React from 'react'
import Three2 from '../../component/Three/three2'
import MakeLink from '@/component/main/makeLink'

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="absolute z-20">
          <div className="flex items-center justify-center pt-20 text-white">
            <div>{children}</div>
          </div>
          <MakeLink />
        </div>
      </div>
      <Three2
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: -1, // Add this line
        }}
      />
    </div>
  )
}
