'use client'
import React from 'react'
import * as r from './registpass.styled'
import LoginComponent from '@/component/Three/login'
import LoginAstronaut from '../../../component/Three/loginAstronaut'
import './registpass.styled'

export default function LoginPassword({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="flex items-center justify-center">
        <r.ContentBox>
          <div className="flex flex-col items-center justify-center">
            <div className="pb-10 text-4xl text-white">별이삼샵</div>
            <r.AstronauntDiv>
              <LoginAstronaut style={{ width: '100%', height: '100%' }} />
            </r.AstronauntDiv>
            {children}
          </div>
        </r.ContentBox>
      </div>
      <LoginComponent
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />
    </div>
  )
}
