'use client'
import React, { useState, useEffect, Suspense } from 'react'
import Three2 from '../../component/Three/three2'
export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="absolute z-10">
          <div className="flex items-center justify-center pt-20 text-white">
            <div>{children}</div>
          </div>
        </div>
      </div>
      <Three2 style={{ position: 'absolute', width: '100%', height: '100%' }} />
    </div>
  )
}
